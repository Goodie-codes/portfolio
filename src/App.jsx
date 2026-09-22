import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import TerminalWidget from './components/TerminalWidget';
import ContactSection from './components/ContactSection';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Dynamic Liquid Mesh Ambient Background */}
      <div className="ambient-background-wrapper" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="liquid-orb liquid-orb-1" />
        <div className="liquid-orb liquid-orb-2" />
        <div className="liquid-orb liquid-orb-3" />
        <div className="liquid-orb liquid-orb-4" />
      </div>

      {/* Global Navigation */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="main-content">
        <Hero onOpenTerminal={handleOpenTerminal} />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <ExperienceSection />
        <TerminalWidget />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Project Case Study Drawer Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={setSelectedProject}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Global Floating Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
