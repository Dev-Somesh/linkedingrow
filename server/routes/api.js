import express from 'express';
import axios from 'axios';
import multer from 'multer';
import { OpenRouter } from "@openrouter/sdk";
import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

import { ATSAgent } from '../services/atsAgent.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Middleware to check for auth header
const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }
    // Simplified check - just ensure there is a bearer token
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Invalid token' });

    req.accessToken = token;
    next();
};

// Get Mock User Profile
router.get('/me', requireAuth, async (req, res) => {
    // Return mock profile data since we aren't using LinkedIn API anymore
    res.json({
        localizedFirstName: 'Admin',
        localizedLastName: 'User',
        id: 'admin-123',
        profilePicture: {
            "displayImage": "urn:li:digitalmediaAsset:C5603AQFoR1..." // Mock ID
        }
    });
});

// Helper to get ATS Agent
const getAgent = () => {
    const keys = [
        process.env.OPENROUTER_API_KEY_1,
        process.env.OPENROUTER_API_KEY_2,
        process.env.VITE_OPENAI_API_KEY,      // Legacy fallback
        process.env.OPENROUTER_API_KEY        // Global fallback
    ].filter(Boolean);

    // Remove duplicates
    const uniqueKeys = [...new Set(keys)];

    if (uniqueKeys.length === 0) {
        console.error("FATAL: No API Keys found in environment!");
    }

    return new ATSAgent(uniqueKeys); // Pass array
};

// Analyze PDF
router.post('/analyze-pdf', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const agent = getAgent();
        const dataBuffer = fs.readFileSync(req.file.path);
        const { targetRole, jobDescription } = req.body;

        let extractedText = "";
        try {
            const pdfData = await pdf(dataBuffer);
            extractedText = pdfData.text;
        } catch (parseError) {
            console.error("PDF Parse Error:", parseError);
            return res.status(500).json({ error: "Failed to read text from PDF", details: parseError.message });
        }

        if (!extractedText || extractedText.trim().length < 50) {
            return res.status(400).json({ error: "Could not extract enough text. Is it an image scan?" });
        }

        const analysisResult = await agent.analyze(extractedText, targetRole, jobDescription);
        res.json({ ...analysisResult, originalText: extractedText });

    } catch (error) {
        console.error('Analysis Error:', error);
        res.status(500).json({ error: error.message || 'Analysis failed' });
    } finally {
        if (req.file) {
            fs.unlink(req.file.path, (err) => { if (err) console.error(err); });
        }
    }
});

// Generate/Rewrite Resume
router.post('/generate-resume', requireAuth, async (req, res) => {
    const { originalText, analysisResult, targetRole, jobDescription, userDirectives } = req.body;

    if (!originalText) {
        return res.status(400).json({ error: 'Original text is required' });
    }

    try {
        const agent = getAgent();

        // Use the Agentic Two-Pass Loop
        const result = await agent.generateOptimizedResume(originalText, analysisResult, targetRole, jobDescription, userDirectives);

        res.json(result);

    } catch (error) {
        console.error('Generation Error:', error);
        res.status(500).json({ error: error.message || 'Failed to generate resume' });
    }
});

export default router;
