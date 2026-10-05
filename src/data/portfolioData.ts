import {
  PersonalInfo,
  SkillCategory,
  AchievementItem
} from '../types/portfolio';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONAL INFORMATION — Pratyush Poudel
// ─────────────────────────────────────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: "Pratyush Poudel",
  handle: "pratyush-poudel",
  title: "COO & AI Researcher at BlackRoot Technologies | BCS Student at Taylor's University",
  statement: "Bachelor of Computer Science student at Taylor’s University (IIMS College), Chief Operating Officer & AI Researcher at BlackRoot Technologies. Champion of CyberFlag Quest 2026 (1st Place Winner).",
  substatement: "Focused on Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, and technological leadership.",
  location: "Lalitpur, Nepal",
  email: "pratyushpoudel10@gmail.com",
  systemStatus: "ACTIVE",
  availability: "Open to AI Research & Strategic Collaborations",
  resumeUrl: "https://www.linkedin.com/in/pratyush-poudel-83b18937a/",
  avatarUrl: "./avatar.jpg",
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/pratyush-poudel-83b18937a/", username: "pratyush-poudel", icon: "Linkedin" }
  ],
  aboutNarrative: {
    origin: "I am a Bachelor of Computer Science student at Taylor's University (IIMS College) in Lalitpur, Nepal. Serving as Chief Operating Officer and AI Researcher at BlackRoot Technologies, I combine executive strategy with deep technical exploration.",
    whatIBuild: "My expertise covers Artificial Intelligence, Machine Learning foundations, Data Science, and Cybersecurity. Having achieved 1st Position in CyberFlag Quest 2026, I actively bridge AI fundamentals with secure systems architecture.",
    activeLearning: "",
    fascinations: "",
    vision: ""
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE & EDUCATION
// ─────────────────────────────────────────────────────────────────────────────
export const experienceData = [
  {
    company: "BlackRoot Technologies",
    roles: [
      { title: "COO (Chief Operating Officer)", timeline: "Present" },
      { title: "AI Researcher", timeline: "Present" }
    ]
  }
];

export const educationData = [
  {
    institution: "IIMS College (Taylor's University)",
    degree: "Bachelor of Computer Science (Honors)"
  },
  {
    institution: "Bishwamitra Ganesh Sec. School",
    degree: "High School"
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ACHIEVEMENTS & AWARDS
// ─────────────────────────────────────────────────────────────────────────────
export const achievementsData: AchievementItem[] = [
  {
    id: "cyberflag-2026",
    title: "1st Position Winner — CyberFlag Quest 2026",
    category: "Competition",
    issuer: "CyberFlag Quest",
    date: "2026",
    description: "Secured 1st Place overall in CyberFlag Quest 2026, outperforming elite participants in competitive cybersecurity CTF challenges and systems exploitation.",
    impact: "Top Rank overall in competitive cybersecurity CTF challenge.",
    badge: "🏆 1st Place",
    verificationUrl: "https://www.linkedin.com/in/pratyush-poudel-83b18937a/"
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// REFINED SKILLS & FOUNDATIONS
// ─────────────────────────────────────────────────────────────────────────────
export const skillsCategories: SkillCategory[] = [
  {
    id: "ai-foundations",
    name: "AI & Data Science Foundations",
    description: "Core mathematical, statistical, and algorithmic foundations essential for AI research.",
    skills: [
      { name: "Python", category: "ai", proficiency: 92, tier: "Core Mastery", tags: ["AI", "Scripting"] },
      { name: "Linear Algebra & Calculus", category: "math", proficiency: 88, tier: "Advanced", tags: ["AI Math"] },
      { name: "Probability & Statistics", category: "math", proficiency: 86, tier: "Advanced", tags: ["Foundations"] },
      { name: "Data Structures & Algorithms (DSA)", category: "cs", proficiency: 90, tier: "Core Mastery", tags: ["Algorithms"] },
      { name: "Artificial Intelligence Principles", category: "ai", proficiency: 88, tier: "Advanced", tags: ["AI Core"] },
      { name: "Pandas & NumPy", category: "data", proficiency: 90, tier: "Core Mastery", tags: ["Data Science"] },
      { name: "Hugging Face & LLM Integration", category: "ai", proficiency: 84, tier: "Advanced", tags: ["LLM"] }
    ]
  },
  {
    id: "programming-core",
    name: "Programming Languages & Core CS",
    description: "Fundamental programming languages, object-oriented paradigms, and database systems.",
    skills: [
      { name: "Python", category: "programming", proficiency: 92, tier: "Core Mastery", tags: [] },
      { name: "Java", category: "programming", proficiency: 84, tier: "Advanced", tags: ["OOP"] },
      { name: "C++", category: "programming", proficiency: 82, tier: "Advanced", tags: ["Systems"] },
      { name: "JavaScript / TypeScript", category: "programming", proficiency: 86, tier: "Advanced", tags: ["Web"] },
      { name: "SQL & Relational Databases", category: "databases", proficiency: 88, tier: "Advanced", tags: ["Database"] }
    ]
  },
  {
    id: "cybersecurity-systems",
    name: "Cybersecurity & Systems",
    description: "Competitive CTF problem solving, system security, and Linux administration.",
    skills: [
      { name: "CTF Problem Solving & Exploitation", category: "security", proficiency: 95, tier: "Core Mastery", tags: ["CyberFlag 1st Place"] },
      { name: "Linux Administration & Bash Scripting", category: "systems", proficiency: 88, tier: "Advanced", tags: ["Linux"] },
      { name: "Information Security Fundamentals", category: "security", proficiency: 86, tier: "Advanced", tags: ["SecOps"] }
    ]
  },
  {
    id: "web-tools",
    name: "Web Development & Tools",
    description: "Modern web tools, interface design, and version control.",
    skills: [
      { name: "React & Vite", category: "web", proficiency: 86, tier: "Advanced", tags: ["Frontend"] },
      { name: "HTML5 / CSS3 / Tailwind CSS", category: "web", proficiency: 90, tier: "Core Mastery", tags: ["UI/UX"] },
      { name: "REST APIs & Integration", category: "backend", proficiency: 85, tier: "Advanced", tags: ["APIs"] },
      { name: "Git & GitHub", category: "tools", proficiency: 92, tier: "Core Mastery", tags: ["DevOps"] },
      { name: "Figma & Design", category: "design", proficiency: 80, tier: "Advanced", tags: ["Design"] }
    ]
  }
];

export const metricsData: any[] = [];
export const projectsData: any[] = [];
export const journeyMilestones: any[] = [];
export const hackathonsData: any[] = [];
export const aiDataScienceDomains: any[] = [];
export const cybersecurityInterests: any[] = [];
export const currentlyBuilding: any[] = [];
export const futureDirections: any[] = [];
