import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sectionLinks = [
    { label: "Hero / System Status", href: "#hero" },
    { label: "About Dossier", href: "#about" },
    { label: "Honors & Achievements", href: "#achievements" },
    { label: "Experience & Education", href: "#experience" },
    { label: "Technical Expertise & Skills", href: "#skills" },
    { label: "Contact / Direct Uplink", href: "#contact" },
  ].filter((s) => s.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 shadow-2xl rounded-xl overflow-hidden flex flex-col z-10">
        
        <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-800">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-base text-white placeholder-zinc-500 focus:outline-none"
          />
          <button onClick={onClose} className="text-zinc-500 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {sectionLinks.length > 0 && (
            <div className="space-y-1">
              {sectionLinks.map((sec) => (
                <a
                  key={sec.href}
                  href={sec.href}
                  onClick={onClose}
                  className="px-4 py-3 hover:bg-zinc-900 rounded-lg text-zinc-300 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span className="text-sm font-medium">{sec.label}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
