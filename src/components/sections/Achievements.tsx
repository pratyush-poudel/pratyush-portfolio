import React from 'react';
import { achievementsData } from '../../data/portfolioData';
import { Trophy, ExternalLink, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  if (!achievementsData || achievementsData.length === 0) return null;

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black">
      <div className="w-full max-w-4xl">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>Honors & Achievements</span>
        </h3>

        <div className="space-y-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-8 rounded-lg bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        {item.badge}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        {item.issuer} • {item.date}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {item.verificationUrl && (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium rounded border border-zinc-800 hover:border-zinc-700 transition-colors shrink-0 self-start sm:self-center"
                  >
                    <span>View LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
