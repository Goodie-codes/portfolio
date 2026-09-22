import React, { useState, useEffect, useRef } from 'react';
import { projects, personalInfo } from '../data/portfolioData';
import { Search, Hash, FolderGit2, Terminal, User, ExternalLink, ArrowRight, X } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onSelectProject, onOpenTerminal }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'sec-hero',
      title: 'Home / Hero',
      category: 'Navigation',
      icon: User,
      action: () => {
        window.location.hash = 'hero';
        onClose();
      }
    },
    {
      id: 'sec-projects',
      title: 'Projects Showcase',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        window.location.hash = 'projects';
        onClose();
      }
    },
    {
      id: 'sec-skills',
      title: 'Tech Stack & Competencies',
      category: 'Navigation',
      icon: Hash,
      action: () => {
        window.location.hash = 'skills';
        onClose();
      }
    },
    {
      id: 'sec-terminal',
      title: 'Interactive Developer Terminal',
      category: 'Interactive',
      icon: Terminal,
      action: () => {
        window.location.hash = 'terminal';
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: 'sec-contact',
      title: 'Contact & Hire',
      category: 'Navigation',
      icon: ExternalLink,
      action: () => {
        window.location.hash = 'contact';
        onClose();
      }
    },
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      title: `Project: ${p.title}`,
      category: 'Projects',
      icon: FolderGit2,
      action: () => {
        onClose();
        onSelectProject(p);
      }
    })),
    {
      id: 'ext-github',
      title: 'View GitHub Profile (Goodie-codes)',
      category: 'External',
      icon: ExternalLink,
      action: () => {
        window.open(personalInfo.githubUrl, '_blank');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
      setSelectedIndex(0);
      setQuery('');
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false); // Toggle
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop command-backdrop" onClick={onClose}>
      <div 
        className="command-modal-content liquid-glass" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Command Search Input Bar */}
        <div className="command-input-bar">
          <Search size={18} className="command-search-icon" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search sections..."
            className="command-input"
          />
          <kbd className="cmd-esc-badge" onClick={onClose}>ESC</kbd>
        </div>

        {/* Filtered Action Items List */}
        <div className="command-list-wrapper">
          {filteredActions.length === 0 ? (
            <div className="command-empty-state">
              No matching commands or projects found.
            </div>
          ) : (
            filteredActions.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`command-item ${isSelected ? 'selected' : ''}`}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => item.action()}
                >
                  <div className="command-item-left">
                    <Icon size={16} className="command-item-icon" />
                    <span className="command-item-title">{item.title}</span>
                  </div>
                  <div className="command-item-right">
                    <span className="command-category-tag">{item.category}</span>
                    <ArrowRight size={14} className="command-arrow" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="command-footer-hints">
          <span className="hint-item"><kbd className="hint-kbd">↑</kbd> <kbd className="hint-kbd">↓</kbd> to navigate</span>
          <span className="hint-item"><kbd className="hint-kbd">↵</kbd> to select</span>
          <span className="hint-item"><kbd className="hint-kbd">esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
