import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black">
      <div className="w-full">
        <h3 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">
          About
        </h3>

        <div className="max-w-3xl space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
          <p>{personalInfo.aboutNarrative.origin}</p>
          <p>{personalInfo.aboutNarrative.whatIBuild}</p>
        </div>
      </div>
    </section>
  );
};
