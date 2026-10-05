export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  context: string;
}

export interface PersonalInfo {
  name: string;
  handle: string;
  title: string;
  statement: string;
  substatement: string;
  location: string;
  email: string;
  systemStatus: string;
  availability: string;
  resumeUrl: string;
  avatarUrl: string;
  socials: SocialLink[];
  aboutNarrative: {
    origin: string;
    whatIBuild: string;
    activeLearning: string;
    fascinations: string;
    vision: string;
  };
}

export interface SkillItem {
  name: string;
  category: string;
  proficiency: number; // 0-100
  tier: 'Core Mastery' | 'Advanced' | 'Competent';
  tags: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  slug: string;
  category: 'AI / Deep Learning' | 'Data Science & MLOps' | 'Autonomous Systems' | 'Full-Stack & Systems';
  status: 'Production' | 'Live Benchmark' | 'Research Prototype' | 'Active Development';
  badge: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string;
  myContribution: string;
  technologies: string[];
  keyFeatures: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  demoVideo?: string;
  architectureDiagram?: string;
  featured: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Competition' | 'Hackathon' | 'Certification' | 'Research' | 'Leadership';
  issuer: string;
  date: string;
  description: string;
  impact: string;
  badge: string;
  verificationUrl?: string;
}

export interface JourneyMilestone {
  id: string;
  stageNumber: string;
  title: string;
  era: string;
  focus: string;
  description: string;
  technologies: string[];
  status: 'mastered' | 'active' | 'frontier';
}

export interface HackathonEntry {
  id: string;
  name: string;
  organizer: string;
  date: string;
  award: string;
  projectName: string;
  summary: string;
  stack: string[];
  repoUrl?: string;
}

export interface AiDataScienceDomain {
  id: string;
  title: string;
  badge: string;
  description: string;
  corePipelines: string[];
  stack: string[];
  benchmarkOrFocus: string;
}

export interface CybersecurityInterest {
  id: string;
  title: string;
  vector: string;
  description: string;
  focusAreas: string[];
  appliedTechniques: string[];
}

export interface CurrentlyBuildingProject {
  id: string;
  name: string;
  phase: string;
  percentComplete: number;
  objective: string;
  currentMilestone: string;
  stack: string[];
  githubUrl?: string;
}

export interface FutureDirectionGoal {
  id: string;
  timeline: string;
  domain: string;
  target: string;
  roadmap: string[];
}
