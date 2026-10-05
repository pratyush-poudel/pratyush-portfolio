import React from 'react';
import { skillsCategories } from '../../data/portfolioData';
import { Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black mb-12">
      <div className="w-full max-w-4xl">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-10 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-zinc-400" />
          <span>Technical Expertise & Skills</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-lg bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200"
            >
              <h4 className="text-lg font-bold text-white mb-2">{category.name}</h4>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 text-zinc-200 text-xs font-medium rounded border border-zinc-800/90 hover:border-zinc-700 transition-colors"
                  >
                    <span>{skill.name}</span>
                    {skill.tags.includes("CyberFlag 1st Place") && (
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono font-bold">
                        🏆 1st
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
