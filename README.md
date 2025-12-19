# Resume AI - Advanced ATS Optimizer

A powerful, AI-driven application designed to analyze resumes against ATS (Applicant Tracking System) standards and rewrite them for maximum impact.

## 🚀 Features

*   **Advanced ATS Analysis**: Breakdown of ATS Score, Match Score (Role Relevance), Format Score, and Content Impact.
*   **Targeted Optimization**: Analyze and reqrite resumes against specific **Job Descriptions** and **Target Roles**.
*   **AI-Powered Rewriting**: Uses state-of-the-art LLMs (`gpt-oss-120b` via OpenRouter) to completely rewrite resumes with professional formatting and keywords.
*   **Safety First**: "Two-Pass" workflow ensures PII (Personal Identifiable Information) is preserved exactly and forbids hallucinated metrics.
*   **Real-time Status Updates**: Visual feedback during analysis and generation stages.
*   **Robust Architecture**: 
    *   Frontend: React + Vite + Tailwind CSS + Framer Motion
    *   Backend: Node.js + Express + Multer
    *   AI Provider: OpenRouter (swappable with OpenAI/Groq)
*   **Resilience**: Robust error handling with fallback reports ensures user experience never breaks even if AI models fail.

## 🛠️ Tech Stack

*   **Frontend**: React (TypeScript), Lucide Icons, Shadcn/UI components.
*   **Backend**: Express.js server for handling file uploads (`multer`) and PDF text extraction (`pdf-parse`).
*   **AI Integration**: `@openrouter/sdk` connecting to free high-performance models.
*   **Styling**: Modern, clean UI with Tailwind CSS.

## 📦 Setup & Installation

### Prerequisites
*   Node.js (v18+)
*   An [OpenRouter API Key](https://openrouter.ai/keys) (Free)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd linkedingrow
    ```

2.  **Install Dependencies**:
    ```bash
    # Install root dependencies
    npm install

    # Install server dependencies
    cd server
    npm install
    cd ..
    ```

3.  **Environment Configuration**:
    Create a `.env` file in the root directory:
    ```env
    # Client-side keys
    VITE_LINKEDIN_CLIENT_ID=your_id
    VITE_LINKEDIN_REDIRECT_URI=http://localhost:5173/auth/callback
    VITE_OPENAI_API_KEY=sk-or-v1-your-openrouter-key
    ```
    
    Create a `server/.env` file:
    ```env
    PORT=3000
    SESSION_SECRET=your_secret_key
    # The server reads VITE_OPENAI_API_KEY from root .env or you can set:
    OPENROUTER_API_KEY=sk-or-v1-your-openrouter-key
    ```

### Running the Application

4.  **Start Development Servers**:
    This project runs both a frontend (Vite) and backend (Express) server.
    
    ```bash
    # From the root directory, this command starts both concurrently
    npm run dev:full
    ```

5.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔍 How to Use

1.  Navigate to the **Resume AI** tab in the dashboard.
2.  **Drag & Drop** your PDF resume.
3.  Wait for the **Analysis Report** (Score, Suggestions, Strengths).
4.  Click **"Generate ATS Resume"** to get a polished, markdown-formatted version.
5.  Copy the markdown or view the preview side-by-side.

## ⚠️ Troubleshooting

*   **404 Analysis Error**: Ensure the backend server is running on port 3000.
*   **429 Rate Limit**: The free AI models have rate limits. The app handles this gracefully, but if you see repeated errors, wait a minute before retrying.
*   **OpenRouter 404 Error**: If using free models, ensure you have enabled "Allow model providers to train on my data" in your [OpenRouter Privacy Settings](https://openrouter.ai/settings/privacy).
