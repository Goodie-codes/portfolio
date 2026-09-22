import React, { useState } from 'react';
import { projects, projectCategories } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { FolderGit2 } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <FolderGit2 size={16} />
          <span>Proven Proof of Work</span>
        </div>
        <h2 className="section-title">
          Flagship <span className="text-gradient">Architectures & Systems</span>
        </h2>
        <p className="section-description">
          A selection of production-grade systems, distributed backends, and high-performance interfaces engineered with measurable business impact.
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="projects-filter-bar">
        <div className="filter-pills-container liquid-glass">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-pill-btn ${isActive ? 'active' : ''}`}
              >
                {category.label}
                {isActive && <span className="filter-pill-glow" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
}
