import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        // There isn't a direct "listModels" on the instance in the node SDK easily accessable without checking docs, 
        // but we can try a generateContent on a few likely candidates to see which one works.

        console.log("Checking gemini-1.5-flash...");
        try {
            const m1 = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            await m1.generateContent("Hello");
            console.log("SUCCESS: gemini-1.5-flash");
        } catch (e) { console.log("FAILED: gemini-1.5-flash", e.message.split('\n')[0]); }

        console.log("Checking gemini-2.0-flash-exp...");
        try {
            const m2 = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
            await m2.generateContent("Hello");
            console.log("SUCCESS: gemini-2.0-flash-exp");
        } catch (e) { console.log("FAILED: gemini-2.0-flash-exp", e.message.split('\n')[0]); }

        console.log("Checking gemini-pro...");
        try {
            const m3 = genAI.getGenerativeModel({ model: "gemini-pro" });
            await m3.generateContent("Hello");
            console.log("SUCCESS: gemini-pro");
        } catch (e) { console.log("FAILED: gemini-pro", e.message.split('\n')[0]); }

        console.log("Checking gemini-1.5-pro...");
        try {
            const m4 = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
            await m4.generateContent("Hello");
            console.log("SUCCESS: gemini-1.5-pro");
        } catch (e) { console.log("FAILED: gemini-1.5-pro", e.message.split('\n')[0]); }

    } catch (error) {
        console.error("Error:", error);
    }
}

listModels();
