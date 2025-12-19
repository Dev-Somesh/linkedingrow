import { OpenRouter } from "@openrouter/sdk";
import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";


/**
 * Service for handling Advanced ATS Agentic Logic
 * Implements "Self-Correction" and "Structured Prompting"
 */
export class ATSAgent {
    constructor(apiKeys) {
        this.apiKeys = Array.isArray(apiKeys) ? apiKeys : [apiKeys];
        this.currentKeyIndex = 0;
        this._initClient();
        this.model = "openai/gpt-oss-120b:free"; // Default model
    }

    _initClient() {
        this.client = new OpenRouter({
            apiKey: this.apiKeys[this.currentKeyIndex],
            defaultHeaders: {
                "HTTP-Referer": "http://localhost:5173", // Site URL for rankings
                "X-Title": "Linkedingrow AI", // Site title for rankings
            }
        });
        console.log(`ATS Agent initialized with API Key Index: ${this.currentKeyIndex}`);
    }

    /**
     * Core Analysis Function - The "Brain"
     */
    async analyze(text, targetRole, jobDescription) {
        // ... (existing code)
        const prompt = `
            You are Linkedingrow's Chief ATS Auditor.
            Your job is to analyze resumes with ruthless precision against ATS standards.

            Target Role: ${targetRole || "General Professional"}
            Job Description (JD):
            """
            ${(jobDescription || "No JD provided.").substring(0, 5000)}
            """

            Resume Text:
            """
            ${text.substring(0, 20000)}
            """

            TASK:
            Conduct a Deep Audit. Return specific, strictly formatted JSON.

            1. SCORING RULES
               - ats_score (0-100): < 60 = Fail, 60-80 = Good, > 90 = Excellent.
               - match_score: Based strictly on JD keywords present vs missing.
               - impact_score: Ratio of "Archieved X" vs "Did Y".

            2. KEYWORD EXTRACTION
               - "Hard" Skills (React, Python, AWS)
               - "Soft" Skills (ONLY if proven by context)

            3. OUTPUT JSON SCHEMA (Strict):
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
                 "summary": boolean,
                 "experience": boolean,
                 "education": boolean,
                 "skills": boolean,
                 "projects": boolean
              },
              "rewrite_plan": {
                "top_changes": ["string"],
                "role_keywords_to_inject": ["string"],
                "bullets_to_improve": ["string"]
              },
              "extracted": {
                "name": "string",
                "email": "string",
                "links": ["string"],
                "skills_normalized": {
                    "technical": ["string"],
                    "tools": ["string"]
                }
              }
            }
        `;

        const response = await this._callLLM(prompt);
        return this._parseJSON(response);
    }

    // ... (rest of methods until _callLLM)

    async generateOptimizedResume(originalText, analysisResult, targetRole, jobDescription, userDirectives = "") {
        return super.generateOptimizedResume ? super.generateOptimizedResume(originalText, analysisResult, targetRole, jobDescription, userDirectives) : this._legacyGenerate(originalText, analysisResult, targetRole, jobDescription, userDirectives);
    }

    // Implementing the methods directly since I replaced the whole class structure in my thought process but tools only allow chunk replacement.
    // I need to be careful not to delete methods.
    // I will only replace Constructor and _callLLM.

    // This tool call is REPLACING a chunk. I should target the constructor first.


    /**
     * Core Analysis Function - The "Brain"
     */
    async analyze(text, targetRole, jobDescription) {
        const prompt = `
            You are Linkedingrow's Chief ATS Auditor.
            Your job is to analyze resumes with ruthless precision against ATS standards.

            Target Role: ${targetRole || "General Professional"}
            Job Description (JD):
            """
            ${(jobDescription || "No JD provided.").substring(0, 5000)}
            """

            Resume Text:
            """
            ${text.substring(0, 20000)}
            """

            TASK:
            Conduct a Deep Audit. Return specific, strictly formatted JSON.

            1. SCORING RULES
               - ats_score (0-100): < 60 = Fail, 60-80 = Good, > 90 = Excellent.
               - match_score: Based strictly on JD keywords present vs missing.
               - impact_score: Ratio of "Archieved X" vs "Did Y".

            2. KEYWORD EXTRACTION
               - "Hard" Skills (React, Python, AWS)
               - "Soft" Skills (ONLY if proven by context)

            3. OUTPUT JSON SCHEMA (Strict):
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
                 "summary": boolean,
                 "experience": boolean,
                 "education": boolean,
                 "skills": boolean,
                 "projects": boolean
              },
              "rewrite_plan": {
                "top_changes": ["string"],
                "role_keywords_to_inject": ["string"],
                "bullets_to_improve": ["string"]
              },
              "extracted": {
                "name": "string",
                "email": "string",
                "links": ["string"],
                "skills_normalized": {
                    "technical": ["string"],
                    "tools": ["string"]
                }
              }
            }
        `;

        const response = await this._callLLM(prompt);
        return this._parseJSON(response);
    }

    /**
     * The Agentic Generator
     * Implements the "Self-Correction Loop"
     */
    async generateOptimizedResume(originalText, analysisResult, targetRole, jobDescription, userDirectives = "") {
        // Step 1: Initial Draft
        console.log("Generating Draft 1...");
        let draft = await this._generateDraft(originalText, analysisResult, targetRole, jobDescription, userDirectives);

        // ... (rest of loop remains same) ...

        // Step 2: The Self-Correction Loop (Max 1 Pass for Speed)
        const MAX_RETRIES = 1;
        let finalResume = draft;
        let lastAnalysis = null;
        let iteration = 0;

        while (iteration < MAX_RETRIES) {
            console.log(`Self-Correction Loop: Iteration ${iteration + 1}`);

            // Internal Audit of the *New* Draft
            const audit = await this.analyze(finalResume, targetRole, jobDescription);
            lastAnalysis = audit;

            // If Score is Great, Break
            if (audit.ats_score >= 90) {
                console.log("Score is > 90. Success.");
                break;
            }

            // If Score is Low, Refine
            const gaps = audit.keyword_coverage.missing.slice(0, 5).join(", ");
            const feedback = `The ATS score is ${audit.ats_score}. You missed these critical keywords: [${gaps}]. Improve the Professional Experience bullets to include these naturally. Increase impact metrics.`;

            console.log(`Refining based on feedback: ${feedback}`);
            finalResume = await this._refineDraft(finalResume, feedback, targetRole);
            iteration++;

            // If we refined, we invalidate the last analysis because the content changed
            lastAnalysis = null;
        }

        // Final Verify (Only if we don't have a valid analysis for the current text)
        const finalAnalysis = lastAnalysis || await this.analyze(finalResume, targetRole, jobDescription);

        return {
            generatedResume: finalResume,
            newAnalysis: finalAnalysis
        };
    }

    async _generateDraft(originalText, analysis, targetRole, jobDescription, userDirectives) {
        const prompt = `
            Role: Expert Resume Rewrite Consultant.
            
            Strategy: "The Action Formula"
            Every bullet point MUST follow: [Strong Verb] + [Specific Task] + [Using Tool/Method] + [Resulting in Metric/Impact].

            Context:
            Target Role: ${targetRole}
            Job Description: ${jobDescription?.substring(0, 2000)}

            Analysis Profile:
            - Missing Keywords: ${JSON.stringify(analysis.rewrite_plan.role_keywords_to_inject)}
            - PII to Preserve: ${JSON.stringify(analysis.extracted)}

            USER OVERRIDES (CRITICAL):
            ${userDirectives ? `The user has explicitly requested: "${userDirectives}". YOU MUST PRIORITIZE THIS INSTRUCTION.` : "None."}

            Original Content:
            """
            ${originalText.substring(0, 15000)}
            """

            Directives:
            1. FACTUAL INTEGRITY (ZERO TOLERANCE): 
               - You MUST NOT change any Dates, Company Names, or Job Titles.
               - COPY them exactly as they appear in the original text.
               - If a date is "2019 - Present", KEEP IT "2019 - Present". Do not invent "March 2024".
            2. REWRITE the "Professional Experience" and "Projects" *bullet points* using the Action Formula.
            3. INJECT the Missing Keywords naturally into these bullets.
            4. PRESERVE exact PII (Name, Email, Links).
            5. FORMAT: Clean standard Markdown. No tables.
            
            Output ONLY the Markdown.
        `;
        return this._callLLM(prompt);
    }

    async _refineDraft(currentDraft, feedback, targetRole) {
        const prompt = `
            Role: Senior Resume Editor.
            Task: Polish this draft based on critical feedback.

            Current Draft:
            """
            ${currentDraft.substring(0, 15000)}
            """

            Feedback to Address:
            "${feedback}"

            Constraint:
            - FACTUAL INTEGRITY: Do not modify any Dates, Company Names, or Job Titles under any circumstances.
            - Keep the same structure.
            - Only modify sections that need improvement.
            - Ensure PII remains intact.
            - Target Role: ${targetRole}

            Output the improved Markdown ONLY.
        `;
        return this._callLLM(prompt);
    }

    async _callLLM(prompt) {
        try {
            const completion = await this.client.chat.send({
                model: this.model,
                messages: [{ role: "user", content: prompt }]
            });
            return completion.choices[0].message.content;
        } catch (e) {
            const msg = `LLM Call Failed (KeyIdx: ${this.currentKeyIndex}): ${e.message}`;
            console.error(msg);
            fs.appendFileSync('server_agent_error.log', `[${new Date().toISOString()}] ${msg}\n`);

            // Rate Limit / Quota Handling
            if (e.message.includes("Rate limit") || e.message.includes("credits") || e.message.includes("429")) {
                console.log("Rate Limit Hit.");

                // Strategy 1: Rotate Key
                if (this.currentKeyIndex < this.apiKeys.length - 1) {
                    this.currentKeyIndex++;
                    console.log(`Rotating to Next API Key (Index ${this.currentKeyIndex})...`);
                    this._initClient();
                    return this._callLLM(prompt); // Recursive Retry
                }

                // Strategy 2: Switch to Native Google Gemini (If Key Exists)
                if (process.env.GOOGLE_GENAI_API_KEY) {
                    console.log("All OpenRouter Keys Exhausted. Switching to Native Google Gemini (gemini-2.0-flash-exp)...");
                    try {
                        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);
                        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
                        const result = await model.generateContent(prompt);
                        const response = await result.response;
                        return response.text();
                    } catch (googleError) {
                        console.error("Google Native Fallback Failed:", googleError.message);
                        // Fall through to OpenRouter backup if this fails (unlikely but safe)
                    }
                }

                // Strategy 3: Switch OpenRouter Model (Last Resort)
                console.log("Switching to OpenRouter Backup Model...");
                try {
                    const backupModel = "google/gemini-2.0-flash-exp:free";
                    const completion = await this.client.chat.send({
                        model: backupModel,
                        messages: [{ role: "user", content: prompt }]
                    });
                    return completion.choices[0].message.content;
                } catch (backupError) {
                    console.error("Backup model also failed.");
                    throw new Error(`Service Overloaded (All Keys/Models Failed): ${backupError.message}`);
                }
            }

            if (e.message.includes("User not found") || e.message.includes("401")) {
                throw new Error("Invalid OpenRouter API Key. Please check your .env file.");
            }
            throw new Error(`AI Service Unavailable: ${e.message}`);
        }
    }

    _parseJSON(text) {
        try {
            const match = text.match(/\{[\s\S]*\}/);
            const jsonStr = match ? match[0] : text;
            return JSON.parse(jsonStr);
        } catch (e) {
            const msg = `JSON Parse Error: ${e.message}\nText: ${text.substring(0, 100)}\n`;
            console.error(msg);
            fs.appendFileSync('server_agent_error.log', `[${new Date().toISOString()}] ${msg}\n`);

            // Return a safe fallback to prevent crashes
            return {
                ats_score: 50,
                match_score: 50,
                keyword_coverage: { present: [], missing: [], coverage_percent: 0 },
                rewrite_plan: { role_keywords_to_inject: [] },
                extracted: {},
                error: "Failed to parse analysis"
            };
        }
    }
}
