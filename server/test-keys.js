import dotenv from 'dotenv';
import { OpenRouter } from "@openrouter/sdk";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env
dotenv.config({ path: path.join(__dirname, '.env') });

const key1 = process.env.OPENROUTER_API_KEY_1;
const key2 = process.env.OPENROUTER_API_KEY_2;

console.log("-----------------------------------------");
console.log("Testing API Key Connectivity...");
console.log("Key 1:", key1 ? `${key1.substring(0, 10)}...` : "MISSING");
console.log("Key 2:", key2 ? `${key2.substring(0, 10)}...` : "MISSING");
console.log("-----------------------------------------");

async function testKey(name, apiKey) {
    if (!apiKey) {
        console.log(`❌ ${name}: Skipped (No Key)`);
        return;
    }

    const client = new OpenRouter({ apiKey });
    // const model = "openai/gpt-oss-120b:free"; 
    const model = "google/gemini-2.0-flash-exp:free";

    try {
        console.log(`Testing ${name}...`);
        const start = Date.now();
        const completion = await client.chat.send({
            model: model,
            messages: [{ role: "user", content: "Say 'Hello' if you can hear me." }]
        });
        const duration = Date.now() - start;
        console.log(`✅ ${name}: SUCCESS (${duration}ms)`);
        console.log(`   Response: "${completion.choices[0].message.content}"`);
    } catch (e) {
        console.log(`❌ ${name}: FAILED`);
        console.log(`   Error: ${e.message}`);
        if (e.message.includes("401") || e.message.includes("User not found")) console.log("   -> Invalid Key");
        if (e.message.includes("429") || e.message.includes("credits")) console.log("   -> Rate Limited / No Credits");
    }
    console.log("-----------------------------------------");
}

async function run() {
    await testKey("Key 1 (Old)", key1);
    await testKey("Key 2 (New)", key2);
}

run();
