import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12 text-zinc-500 text-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <span className="font-medium text-zinc-300">
              {personalInfo.name}
            </span>
            <p className="mt-1">
              Building intelligent systems and exploring the frontier of AI.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {personalInfo.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {social.platform}
              </a>
            ))}
          </div>

        </div>

        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
