import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjects }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          
          {/* Avatar Profile Photo */}
          <div className="shrink-0">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-xl flex items-center justify-center">
              {!imgError && personalInfo.avatarUrl ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl tracking-wider">
                  PP
                </div>
              )}
            </div>
          </div>

          {/* Intro Headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
              <MapPin className="w-3 h-3 text-zinc-400" />
              <span>{personalInfo.location}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {personalInfo.name}
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-300 font-medium leading-relaxed">
              {personalInfo.title}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              {personalInfo.statement}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium text-sm rounded hover:bg-zinc-200 transition-colors"
              >
                <span>Explore Background</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.socials.find(s => s.platform === 'LinkedIn')?.url || "https://www.linkedin.com/in/pratyush-poudel-83b18937a/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 text-white font-medium text-sm rounded border border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 text-white font-medium text-sm rounded border border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
