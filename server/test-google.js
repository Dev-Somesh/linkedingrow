import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env
dotenv.config({ path: path.join(__dirname, '.env') });

const key = process.env.GOOGLE_GENAI_API_KEY;

console.log("-----------------------------------------");
console.log("Testing Google Gemini Native API...");
console.log("Key:", key ? `${key.substring(0, 10)}...` : "MISSING");
console.log("-----------------------------------------");

async function run() {
    if (!key) {
        console.log("❌ No Google Key found.");
        return;
    }

    try {
        const genAI = new GoogleGenerativeAI(key);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

        const start = Date.now();
        console.log("Sending request to Gemini 1.5 Flash...");
        const result = await model.generateContent("Say 'Hello from Google' if this works.");
        const response = await result.response;
        const text = response.text();

        const duration = Date.now() - start;
        console.log(`✅ SUCCESS (${duration}ms)`);
        console.log(`   Response: "${text.trim()}"`);
    } catch (e) {
        console.log(`❌ FAILED`);
        console.log(`   Error: ${e.message}`);
    }
    console.log("-----------------------------------------");
}

run();
