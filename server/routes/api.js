import express from 'express';
import axios from 'axios';
import multer from 'multer';
import { OpenRouter } from "@openrouter/sdk";
import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Helper to get OpenRouter client
const getClient = () => new OpenRouter({
    apiKey: process.env.VITE_OPENAI_API_KEY || process.env.OPENROUTER_API_KEY // Supporting both for ease
});

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

// Helper to analyze resume text
async function analyzeResumeText(text, client, targetRole, jobDescription) {
    const prompt = `
        Role: ATS Resume Auditor + Information Extractor
        
        Analyze the following resume text against the providing Target Role and Job Description (if available).
        
        Target Role: ${targetRole || "General Professional"}
        Job Description:
        """
        ${(jobDescription || "No job description provided.").substring(0, 5000)}
        """
        
        Resume Text:
        """
        ${text.substring(0, 15000)}
        """
        
        Your Goal: Output a strict JSON analysis based on the following rules.
        
        1. SKILL TAXONOMY RESTRICTIONS
           Map extracted skills into these buckets. Use specific canonical names (e.g., "React.js" -> "React", "Google Tag Manager" -> "GTM").
           - Core Technical: Programming (JS, Python, etc.), Web (HTML5, CSS3), Backend (Node, SQL), Cloud (AWS, Docker).
           - Tools & Platforms: Jira, Salesforce, Hubspot, etc.
           - AI / Agent Skills: LLMs, RAG, Prompt Engineering (only if explicitly present).
           - Domain / Business: Stakeholder management, Project management, etc.
           - Soft Skills: Evidence-based only (Communication, Leadership).
           
        2. EXPLAINABLE SCORING (Do not inflate!)
           - ats_score (0-100): Weighted average of content, format, and match.
           - match_score (0-100): How well it fits the Job Description (0 if no JD).
           - format_score (0-100): Penalize for tables, columns, missing sections, bad headers.
           - content_score (0-100): Quantifiable metrics? Strong verbs?
           - impact_score (0-100): Did they achieve results or just list tasks?
           
        3. OUTPUT SCHEMA
        Return ONLY valid JSON. No markdown fences.
        {
          "ats_score": number,
          "match_score": number,
          "format_score": number,
          "content_score": number,
          "impact_score": number,
          "keyword_coverage": {
            "present": ["string"],
            "missing": ["string"],
            "coverage_percent": number
          },
          "sections_detected": {
            "contact": boolean,
            "summary": boolean,
            "experience": boolean,
            "skills": boolean,
            "education": boolean,
            "projects": boolean,
            "certifications": boolean
          },
          "ats_red_flags": ["string"],
          "rewrite_plan": {
            "top_changes": ["string"],
            "role_keywords_to_inject": ["string"],
            "bullets_to_strengthen": ["string"],
            "format_fixes": ["string"]
          },
          "extracted": {
            "name": "string",
            "email": "string",
            "phone": "string",
            "links": ["string"],
            "skills_normalized": {
              "technical": ["string"],
              "tools": ["string"],
              "ai": ["string"],
              "domain": ["string"],
              "soft": ["string"]
            }
          },
          "confidence": number (0-1)
        }
    `;

    const completion = await client.chat.send({
        model: "openai/gpt-oss-120b:free",
        messages: [{ role: "user", content: prompt }]
    });

    const responseText = completion.choices[0].message.content;
    // Improved JSON extraction: find the first '{' and the last '}'
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    const jsonStr = jsonMatch ? jsonMatch[0] : responseText.replace(/```json\n?|\n?```/g, '').trim();

    try {
        const result = JSON.parse(jsonStr);
        // Log success for debugging
        fs.writeFileSync('server_debug_success.log', `Timestamp: ${new Date().toISOString()}\nResult: ${JSON.stringify(result, null, 2)}\n-------------------\n`, { flag: 'a' });
        return result;
    } catch (e) {
        console.error("JSON Parse Error:", e);
        // Write raw response to file for debugging
        fs.writeFileSync('server_debug_error.log', `Timestamp: ${new Date().toISOString()}\nError: ${e.message}\nResponse:\n${responseText}\n-------------------\n`, { flag: 'a' });

        return {
            ats_score: 45,
            match_score: 50,
            format_score: 40,
            content_score: 50,
            impact_score: 40,
            keyword_coverage: {
                present: ["Project Management", "Communication"],
                missing: ["React", "Node.js", "AWS"],
                coverage_percent: 30
            },
            sections_detected: {
                contact: true,
                summary: true,
                experience: true,
                education: true,
                skills: false
            },
            ats_red_flags: ["Could not parse exact analysis", "Review formatting"],
            rewrite_plan: {
                top_changes: ["Fix formatting errors", "Add core skills section"],
                role_keywords_to_inject: ["Target Role Keywords"],
                bullets_to_strengthen: ["Add metrics to experience"],
                format_fixes: ["Use standard headers"]
            },
            extracted: {
                name: "Unknown Candidate",
                email: "",
                phone: "",
                links: [],
                skills_normalized: {
                    technical: [],
                    tools: [],
                    ai: [],
                    domain: [],
                    soft: []
                }
            },
            confidence: 0,
            error: "JSON Parsing Failed"
        };
    }
}

// Analyze PDF
router.post('/analyze-pdf', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const client = getClient();
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

        const analysisResult = await analyzeResumeText(extractedText, client, targetRole, jobDescription);
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
    const { originalText, analysisResult, targetRole, jobDescription } = req.body;

    if (!originalText) {
        return res.status(400).json({ error: 'Original text is required' });
    }

    try {
        const client = getClient();

        // 1. IMPROVED REWRITE PROMPT
        const prompt = `
            Role: Expert Resume Writer & Career Strategist
            
            Context:
            Target Role: ${targetRole || "General Professional"}
            Job Description:
            """
            ${(jobDescription || "Not provided").substring(0, 3000)}
            """
            
            Rewrite Plan from Analysis:
            ${JSON.stringify(analysisResult?.rewrite_plan || {})}
            
            Extracted Data (PRESERVE EXACTLY):
            ${JSON.stringify(analysisResult?.extracted || {})}
            
            Original Text:
            """
            ${originalText.substring(0, 15000)}
            """
            
            TASK: 
            Write a high-impact, ATS-optimized resume. 
            
            CRITICAL GUARDRAILS:
            1. PRESERVE PII: Name, Email, Phone, Links must be copied EXACTLY from Extracted Data.
            2. NO HALLUCINATION: Do not invent metrics or companies. If a specific metric is missing, use scope (e.g., "managed high-traffic web apps").
            3. KEYWROD INJECTION: Naturally integrate keywords from the Job Description and Rewrite Plan.
            4. FORMATTING: Use clean Markdown. 
               - Sections: PROFESSIONAL SUMMARY, SKILLS, PROFESSIONAL EXPERIENCE, PROJECTS (if applicable), EDUCATION.
               - No tables, no columns.
               - Use bullet points.
            
            Output ONLY the resume markdown.
        `;

        const completion = await client.chat.send({
            model: "openai/gpt-oss-120b:free",
            messages: [{ role: "user", content: prompt }]
        });

        const generatedText = completion.choices[0].message.content;

        // 2. RE-ANALYZE for Verification
        const newAnalysis = await analyzeResumeText(generatedText, client, targetRole, jobDescription);

        res.json({
            generatedResume: generatedText,
            newAnalysis: newAnalysis
        });

    } catch (error) {
        console.error('Generation Error:', error);
        res.status(500).json({ error: error.message || 'Failed to generate resume' });
    }
});

export default router;
