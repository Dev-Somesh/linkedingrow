# Implementation Plan - Advanced ATS Logic Upgrade

## Objective
Upgrade the core logic of **Linkedingrow** to achieve a consistent >90 ATS Score. We will transition from a simple "Two-Pass" workflow to an **"Agentic Optimization Pipeline"** inspired by best-in-class repositories (`resume-lm` and `Agentic-CV-Builder`).

## Core Strategy
1.  **Structured Prompting**: Adopt the strict `Action Verb + Task + Tool + Impact` formula.
2.  **Self-Correction Loop**: Implement a backend cycle that critiques its own output before sending it to the user.
3.  **Heuristic Validation**: Fail fast if the output doesn't meet basic criteria (word count, bullet points).

## Step-by-Step Implementation

### Phase 1: Infrastructure Setup
- [ ] **Create `server/services/atsAgent.js`**
    - This will act as the new "Brain" for resume generation.
    - It will house the `generateImprovedResume` function and the `selfCorrectionLoop`.
- [ ] **Define Prompts**
    - Port the "Expert Formatter" and "Content Enhancer" system prompts.
    - Ensure prompts enforce the "No Hallucination" rule while demanding strictly formatted bullets.

### Phase 2: Logic Integration
- [ ] **Update `server/routes/api.js`**
    - Replace the existing `analyzeResumeText` or `generateResume` calls with the new `atsAgent` methods.
    - Ensure the API response structure remains compatible with the Frontend (or update strictly if needed).
- [ ] **Implement `ContentSelector`**
    - Add a step to select the Top 3 most relevant projects/experiences relative to the Job Description (JD) to avoid token overflow and keep relevance high.

### Phase 3: The "Loop" (The Secret Sauce)
- [ ] **Implement `evaluateAndRefine()`**
    - After generation, the AI acts as a "Ruthless Recruiter".
    - It scores the generated draft.
    - *Condition*: If Score < 90, it sends feedback: "You missed keywords [X, Y]. Rewrite section [Z]."
    - *Limit*: Max 2 retries to prevent infinite loops.

### Phase 4: Frontend Polish (Optional but Recommended)
- [ ] **Update Dashboard UI**
    - Show a "Refining..." loading state so the user knows extra care is being taken. (The loop might take 10-20 seconds longer).

### Phase 5: User Customization & Polish
  - [ ] **Frontend**: Add "Context Input" text area in Analysis Report view.
  - [ ] **Store**: Update Zustand store to hold `userDirectives`.
  - [ ] **API**: Pass `userDirectives` to `/generate-resume`.
  - [ ] **Agent**: Update `ATSAgent` to inject user instructions into the rewrite prompt.
  - [ ] **UI**: Enhance resume preview typography (completed).

## Success Metrics
- **ATS Score**: Consistently > 90/100.
- **Hallucination**: 0 invents of companies or degrees.
- **Formatting**: 100% clean Markdown output.
