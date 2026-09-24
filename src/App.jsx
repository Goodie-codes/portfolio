import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LiquidGlassBackground from './components/LiquidGlassBackground';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BentoGrid from './components/BentoGrid';
import ArchitectureInspector from './components/ArchitectureInspector';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { selectedProjects } from './data/portfolioData';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const handleSelectProject = (projectRef) => {
    const fullProject = selectedProjects.find((p) => p.id === projectRef.id) || projectRef;
    setActiveModalProject(fullProject);
  };

  return (
    <div className="app-wrapper">
      <LiquidGlassBackground />
      <Navbar />

      <main className="main-content">
        <Hero />
        <div className="section-divider-beam" />
        <AboutSection />
        <div className="section-divider-beam" />
        <BentoGrid onSelectProject={handleSelectProject} />
        <div className="section-divider-beam" />
        <ArchitectureInspector />
        <div className="section-divider-beam" />
        <ExperienceSection />
        <div className="section-divider-beam" />
        <ContactSection />
      </main>

      <Footer />

      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </div>
  );
}
