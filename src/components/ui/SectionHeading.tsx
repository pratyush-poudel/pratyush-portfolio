import React from 'react';

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  description,
  centered = false,
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center mx-auto' : ''}`}>
      {/* Telemetry Tag */}
      <div
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-crimson-400 mb-4 ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span className="inline-block w-2 h-2 bg-crimson-accent animate-pulse shadow-crimson-sm" />
        <span className="text-zinc-500 font-semibold">[SYS.SEC_{number}]</span>
        <span className="text-zinc-700">//</span>
        <span className="text-white font-bold tracking-wider">{category}</span>
      </div>

      {/* Main Title - Large, Editorial, Bold */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display uppercase leading-tight mb-4">
        {title}
        <span className="text-crimson-accent text-glow-red">.</span>
      </h2>

      {/* Precision Laser Rule */}
      <div className={`flex items-center gap-2 mb-6 ${centered ? 'justify-center' : ''}`}>
        <div className="h-[2px] w-16 bg-crimson-accent shadow-crimson-sm" />
        <div className="h-[1px] w-8 bg-zinc-800" />
        <div className="h-[1px] w-2 bg-zinc-800" />
      </div>

      {/* Subtitle / Narrative Context */}
      {description && (
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
};
