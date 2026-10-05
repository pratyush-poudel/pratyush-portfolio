import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';

interface NavbarProps {
  onOpenCommandMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-zinc-800 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="font-bold tracking-wider text-base text-white group-hover:text-zinc-300 transition-colors">
            {personalInfo.name}
          </div>
        </a>

        {/* Desktop Nav Links & Command Trigger */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={onOpenCommandMenu}
            className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-mono rounded border border-zinc-800 transition-colors"
            title="Search / Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-black text-zinc-400 border border-zinc-700 rounded">
              Ctrl+K
            </kbd>
          </button>

          <a
            href={personalInfo.socials.find((s) => s.platform === 'LinkedIn')?.url || "https://www.linkedin.com/in/pratyush-poudel-83b18937a/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-zinc-300 transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger & Search Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenCommandMenu}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Search command menu"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-black border-b border-zinc-800 px-4 pt-4 pb-6 mt-3 space-y-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.socials.find((s) => s.platform === 'LinkedIn')?.url || "https://www.linkedin.com/in/pratyush-poudel-83b18937a/"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 text-base font-medium text-white"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
