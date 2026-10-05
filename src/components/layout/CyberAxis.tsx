import React, { useState, useEffect } from 'react';

interface SectionTrack {
  id: string;
  code: string;
  label: string;
}

const SECTIONS: SectionTrack[] = [
  { id: 'hero', code: '01', label: 'SYS_HERO' },
  { id: 'about', code: '02', label: 'DOSSIER' },
  { id: 'achievements', code: '03', label: 'DISTINCTIONS' },
  { id: 'experience', code: '04', label: 'EXPERIENCE' },
  { id: 'skills', code: '05', label: 'CAPABILITIES' },
  { id: 'contact', code: '06', label: 'DIRECT_UPLINK' },
];

export const CyberAxis: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(currentProgress);

      // Find current section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="System Telemetry Axis"
      className="hidden 2xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center select-none font-mono text-[10px]"
    >
      {/* Top Header Stamp */}
      <div className="flex flex-col items-center gap-1 mb-3 text-zinc-500">
        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-black border border-zinc-800 text-[9px] text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-crimson-accent animate-pulse shadow-crimson-sm" />
          <span>SYS.AXIS</span>
        </div>
        <span className="text-[9px] text-zinc-600 tracking-tighter">0xPRATYUSH</span>
      </div>

      {/* Central Laser Rail */}
      <div className="relative flex flex-col items-center py-2">

        {/* Background Vertical Hairline */}
        <div className="w-[1px] h-[360px] bg-zinc-800/80 relative">

          {/* Active Red Laser Fill that tracks scroll */}
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-crimson-accent via-crimson-glow to-crimson-accent shadow-crimson-sm transition-all duration-150"
            style={{ height: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
          />

          {/* Active Laser Pulse Bead */}
          <div
            className="absolute -left-[3px] w-[7px] h-[7px] bg-white border border-crimson-accent rounded-none shadow-crimson-laser transition-all duration-150 pointer-events-none"
            style={{ top: `${Math.min(99, Math.max(0, scrollProgress))}%` }}
          />
        </div>

        {/* Section Trigger Ticks positioned alongside rail */}
        <div className="absolute top-0 bottom-0 flex flex-col justify-between -left-2 w-28">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group flex items-center gap-2 text-left transition-all pl-6 relative -left-4 hover:translate-x-1"
                title={`Jump to ${sec.label}`}
              >
                {/* Horizontal tick mark connecting to rail */}
                <div
                  className={`w-2.5 h-[1px] transition-colors ${isActive ? 'bg-crimson-accent shadow-crimson-sm' : 'bg-zinc-800 group-hover:bg-zinc-600'
                    }`}
                />

                {/* Section Code & Tag */}
                <span
                  className={`transition-colors font-bold ${isActive
                    ? 'text-white text-glow-white'
                    : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}
                >
                  {sec.code}
                </span>

                <span
                  className={`text-[9px] uppercase tracking-wider transition-all hidden group-hover:inline-block ${isActive ? 'text-crimson-400 font-bold' : 'text-zinc-500'
                    }`}
                >
                  {sec.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Bottom Telemetry Coordinate */}
      <div className="flex flex-col items-center gap-0.5 mt-3 text-zinc-600 text-[8px] tracking-tight">
        <span>27.71°N</span>
        <span className="text-crimson-500/80 font-bold">{Math.round(scrollProgress)}% SYNC</span>
      </div>
    </aside>
  );
};