import React from 'react';
import { experienceData, educationData } from '../../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-black">
      <div className="w-full">
        <h3 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-12">
          Experience & Education
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
          {/* Experience Column */}
          <div>
            <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-8">Experience</h4>
            <div className="space-y-10">
              {experienceData.map((exp, idx) => (
                <div key={idx}>
                  <h5 className="text-xl font-semibold text-white mb-4">{exp.company}</h5>
                  <div className="space-y-3">
                    {exp.roles.map((role, roleIdx) => (
                      <div key={roleIdx} className="flex items-center justify-between">
                        <span className="text-zinc-300">{role.title}</span>
                        <span className="text-sm text-zinc-500">{role.timeline}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-8">Education</h4>
            <div className="space-y-8">
              {educationData.map((edu, idx) => (
                <div key={idx}>
                  <h5 className="text-lg font-semibold text-white">{edu.institution}</h5>
                  <p className="mt-1 text-zinc-400">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
