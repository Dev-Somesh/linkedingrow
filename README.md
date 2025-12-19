# Linkedingrow AI - Advanced ATS Optimizer 🚀

A professional, agentic AI platform designed to audit resumes against strict ATS (Applicant Tracking System) standards and rewrite them for 100% compliance and impact.

## ✨ Key Features

### 🧠 Intelligent Agentic Core
*   **Self-Correction Loop**: The AI doesn't just write; it *audits* its own work. If the generated resume scores <90 ATS, it automatically rewrites specific sections to fix gaps.
*   **"Action Formula" Enforcement**: Strictly enforces bullet points to follow the `Strong Verb + Specific Task + Tool/Method + Impact Metric` structure.
*   **Identity Preservation**: Uses a dual-pass separate extraction step to guarantee that dates, company names, and job titles remain 100% factually accurate.

### 🛡️ Enterprise-Grade Resilience
*   **Multi-Key Failover**: Automatically rotates between multiple OpenRouter API keys if rate limits are hit.
*   **Hybrid Cloud Fallback**: If OpenRouter fails, the system instantly switches to **Google's Native Gemini 2.0 Flash API** to ensure zero downtime.
*   **Safe Mode**: Graceful degradation to static analysis reports if all AI services are unreachable.

### 🎨 Modern UI/UX
*   **Single-Page Workflow**: Unified split-view dashboard for analyzing, rewriting, and comparing resumes without page reloads.
*   **Interactive Visuals**: Dynamic "How It Works" infographic and animated ATS Score rings.
*   **Smart Feedback**: Real-time toast notifications (`sonner`) keep you informed of the AI's thinking process.

---

## 🛠️ Tech Stack

*   **Frontend**: React (Vite), TypeScript, Tailwind CSS, Framer Motion, Zustand (State), Sonner (Toasts).
*   **Backend**: Node.js, Express.js, Multer.
*   **AI Engine**: 
    *   **Orchestrator**: `@openrouter/sdk` (GPT-120b, Llama 3).
    *   **Fallback**: `@google/generative-ai` (Gemini 1.5/2.0 Flash).
*   **Utilities**: `pdf-parse` (Extraction), `axios`.

---

## 📦 Setup & Installation

### Prerequisites
*   Node.js (v18+)
*   API Keys: [OpenRouter](https://openrouter.ai/) (Free) and/or [Google AI Studio](https://aistudio.google.com/) (Free).

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Dev-Somesh/linkedingrow.git
    cd linkedingrow
    ```

2.  **Install Dependencies**:
    ```bash
    npm install         # Root (concurrently)
    cd server && npm install  # Backend
    cd ..
    ```

3.  **Environment Configuration**:
    Create a `.env` file in the **root** directory (for frontend):
    ```env
    VITE_LINKEDIN_CLIENT_ID=your_id
    VITE_LINKEDIN_REDIRECT_URI=http://localhost:5173/auth/callback
    VITE_OPENAI_API_KEY=sk-or-v1-primary-key
    ```
    
    Create a `.env` file in the **server** directory (for backend logic):
    ```env
    PORT=3000
    SESSION_SECRET=dev-secret-key
    
    # Primary & Secondary Keys for Rotation
    OPENROUTER_API_KEY_1=sk-or-v1-primary-key
    OPENROUTER_API_KEY_2=sk-or-v1-secondary-key
    
    # Native Google Backup (Highly Recommended)
    GOOGLE_GENAI_API_KEY=AIzaSy...
    ```

### Running the Application

4.  **Start Development Servers**:
    ```bash
    npm run dev:full
    ```

5.  Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔍 How to Use

1.  **Upload**: Drag & drop your PDF resume on the Dashboard.
2.  **Audit**: The AI performs a "Gap Analysis" against your target role.
3.  **Generate**: Click **"Generate Optimized Resume"**. The Agent will loop until it achieves a >90 ATS score.
4.  **Refine**: Use the "User Directives" box to give custom instructions (e.g., "Emphasize my leadership in Project X").
5.  **Export**: Copy the Markdown or print to PDF using the polished preview.

---

## ⚠️ Troubleshooting

*   **Rate Limits (429)**: The system handles this automatically! It will switch keys or providers. If you still see errors, all free tiers might be exhausted for the day.
*   **Server Connection**: Ensure the backend is running on `http://localhost:3000`. The frontend proxies requests to this port.
*   **PDF Parsing Issues**: Some image-based PDFs cannot be read. Ensure your PDF is text-selectable.
