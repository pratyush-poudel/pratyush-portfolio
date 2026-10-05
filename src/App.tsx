import React, { useState, useEffect } from 'react';

// Layout & Signature Visual Elements
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CommandMenu } from './components/layout/CommandMenu';
import { CyberAxis } from './components/layout/CyberAxis';
import { NeuralBackground } from './components/canvas/NeuralBackground';

// Sections
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Achievements } from './components/sections/Achievements';
import { ExperienceEducation } from './components/sections/ExperienceEducation';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-zinc-800 selection:text-white">
      {/* Dynamic Background Canvas */}
      <NeuralBackground />

      {/* Cyber Axis Navigation Telemetry Rail */}
      <CyberAxis />
      
      {/* Navbar */}
      <Navbar onOpenCommandMenu={() => setIsCommandMenuOpen(true)} />

      {/* Command Palette (Ctrl+K) */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
      />

      {/* Main Sections */}
      <main className="relative z-10 max-w-5xl mx-auto">
        <Hero onOpenProjects={() => {
          const el = document.getElementById('experience');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
        <About />
        <Achievements />
        <ExperienceEducation />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
