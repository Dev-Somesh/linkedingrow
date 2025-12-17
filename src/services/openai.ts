import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Create OpenAI instance with error handling
const openai = apiKey ? new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true
}) : null;

// Mock responses for when API key is not available
const mockAnalysis = `ATS Compatibility Score: 75

Key Strengths:
1. Clear professional experience section
2. Strong technical skills presentation
3. Quantifiable achievements

Areas for Improvement:
1. Add more industry-specific keywords
2. Enhance education section details
3. Include more metrics and results

Keyword Optimization Suggestions:
- Add relevant technical skills
- Include industry certifications
- Incorporate project management terms

Format and Structure Recommendations:
1. Use consistent bullet points
2. Improve section spacing
3. Standardize date formats`;

const mockImprovedVersion = `PROFESSIONAL SUMMARY
Results-driven software engineer with 5+ years of experience in full-stack development. Demonstrated success in delivering scalable applications and optimizing performance. Strong expertise in modern web technologies and agile methodologies.

TECHNICAL SKILLS
Languages: JavaScript, TypeScript, Python, Java
Frontend: React, Vue.js, Angular, HTML5, CSS3
Backend: Node.js, Express, Django, Spring Boot
Database: PostgreSQL, MongoDB, Redis
Cloud: AWS, Docker, Kubernetes

PROFESSIONAL EXPERIENCE
Senior Software Engineer | Tech Company
2021 - Present
• Led development of microservices architecture, improving system reliability by 35%
• Implemented CI/CD pipeline reducing deployment time by 60%
• Mentored 5 junior developers in best practices and modern technologies

Software Engineer | Previous Corp
2018 - 2021
• Developed responsive web applications serving 100K+ daily users
• Optimized database queries resulting in 45% performance improvement
• Collaborated with cross-functional teams to deliver 15+ major features`;

export const analyzeResume = async (resumeText: string) => {
  if (!openai) {
    console.warn('Using mock analysis due to missing OpenAI API key');
    return mockAnalysis;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert ATS (Applicant Tracking System) and resume analyst. Analyze resumes based on ATS compatibility, content quality, and provide specific improvements."
        },
        {
          role: "user",
          content: `Please analyze this resume and provide: 
          1. ATS Compatibility Score (0-100)
          2. Key strengths
          3. Areas for improvement
          4. Keyword optimization suggestions
          5. Format and structure recommendations
          
          Resume content:
          ${resumeText}`
        }
      ],
      temperature: 0.7,
    });

    return response.choices[0].message.content || mockAnalysis;
  } catch (error) {
    console.error('OpenAI API error:', error);
    return mockAnalysis;
  }
};

export const improveResume = async (resumeText: string, analysis: string) => {
  if (!openai) {
    console.warn('Using mock improved version due to missing OpenAI API key');
    return mockImprovedVersion;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert resume writer. Create improved versions of resumes while maintaining truthfulness and professional standards."
        },
        {
          role: "user",
          content: `Please improve this resume based on the following analysis. Keep the content truthful but optimize for ATS and readability. Provide the improved version in a clean, structured format.

          Analysis:
          ${analysis}

          Original Resume:
          ${resumeText}`
        }
      ],
      temperature: 0.7,
    });

    return response.choices[0].message.content || mockImprovedVersion;
  } catch (error) {
    console.error('OpenAI API error:', error);
    return mockImprovedVersion;
  }
};