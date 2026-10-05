import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../../types/portfolio';
import { X, Github, Cpu, CheckCircle2, Layers, AlertCircle, ArrowUpRight, Activity } from 'lucide-react';
import { Badge } from './Badge';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click handler */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Window */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-black border border-zinc-800 shadow-2xl overflow-y-auto flex flex-col z-10 reticle-corner">
        
        {/* Modal Top Header Bar */}
        <div className="sticky top-0 bg-black/95 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-crimson-accent rounded-full animate-pulse shadow-crimson-sm" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              SYS_SPEC // {project.slug}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-dark-900 transition-colors border border-transparent hover:border-zinc-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Main Title & Status */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="crimson">{project.category}</Badge>
              <Badge variant="dark">{project.status}</Badge>
              <Badge variant="outline">{project.badge}</Badge>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display uppercase">
              {project.title}
              <span className="text-crimson-accent">.</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg mt-2 leading-relaxed font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Metric Highlights Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-dark-900 border border-zinc-800">
              {project.metrics.map((metric, i) => (
                <div key={i} className="border-l-2 border-crimson-accent pl-3">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase flex items-center gap-1">
                    <Activity className="w-3 h-3 text-crimson-accent" />
                    <span>{metric.label}</span>
                  </div>
                  <div className="text-xl md:text-2xl font-mono font-bold text-white mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem vs Solution Split */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* The Problem */}
            <div className="p-5 bg-dark-900 border border-zinc-800 border-l-2 border-l-crimson-accent">
              <div className="flex items-center gap-2 font-mono text-xs text-crimson-400 uppercase tracking-wider mb-2.5 font-bold">
                <AlertCircle className="w-4 h-4 text-crimson-accent" />
                SYSTEM BOTTLENECK / CHALLENGE
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-5 bg-dark-900 border border-zinc-800 border-l-2 border-l-white">
              <div className="flex items-center gap-2 font-mono text-xs text-white uppercase tracking-wider mb-2.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-white" />
                ENGINEERED ARCHITECTURE
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="p-5 bg-dark-900 border border-zinc-800">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4 text-crimson-accent" />
              SYSTEM PIPELINE FLOW
            </div>
            <div className="p-3.5 bg-black border border-zinc-800/80 font-mono text-xs md:text-sm text-zinc-200 leading-relaxed overflow-x-auto">
              {project.architecture}
            </div>
          </div>

          {/* Core Contribution */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4 text-crimson-accent" />
              CORE ENGINEERING CONTRIBUTION
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed bg-dark-900 p-4 border border-zinc-800">
              {project.myContribution}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 font-bold">
              KEY SYSTEM CAPABILITIES
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-300 p-3 bg-dark-900 border border-zinc-800/80">
                  <span className="text-crimson-accent font-mono font-bold mt-0.5">›</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 font-bold">
              HARDWARE & SOFTWARE STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-dark-900 text-zinc-200 border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-black/95 backdrop-blur-md border-t border-zinc-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-500">
            PRATYUSH // SYSTEM_CASE_VIEWER
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-zinc-300 bg-dark-900 hover:bg-zinc-800 border border-zinc-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-white bg-crimson-accent hover:bg-crimson-bright shadow-crimson-sm transition-all"
              >
                <span>Live System Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
