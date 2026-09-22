import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../data/portfolioData';
import { Terminal as TermIcon, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';

export default function TerminalWidget() {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Goodness Developer Console v1.0.0 (x86_64-apple-darwin)\nType "help" to view available commands, or click the quick pills below.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    // Add to history list
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'sudo') {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: `> ${cmdStr}` },
        { type: 'error', text: 'Permission denied: User is already operating with full developer privileges 🚀' }
      ]);
      setInputVal('');
      return;
    }

    if (trimmed === 'date') {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: `> ${cmdStr}` },
        { type: 'output', text: new Date().toString() }
      ]);
      setInputVal('');
      return;
    }

    const response = terminalCommands[trimmed];
    if (response) {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: `> ${cmdStr}` },
        { type: 'output', text: response }
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: `> ${cmdStr}` },
        { type: 'error', text: `command not found: "${trimmed}". Type "help" for a list of commands.` }
      ]);
    }

    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    }
  };

  return (
    <section id="terminal" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <TermIcon size={16} />
          <span>Interactive CLI</span>
        </div>
        <h2 className="section-title">
          Developer <span className="text-gradient">Console</span>
        </h2>
        <p className="section-description">
          An interactive shell directly within your browser. Execute commands to query system background, inspect architectural summaries, or clear output.
        </p>
      </div>

      {/* Terminal Window Box */}
      <div className="terminal-window liquid-glass" onClick={() => inputRef.current?.focus()}>
        {/* Title Bar */}
        <div className="terminal-titlebar">
          <div className="mac-controls">
            <span className="mac-dot mac-dot-red" />
            <span className="mac-dot mac-dot-yellow" />
            <span className="mac-dot mac-dot-green" />
          </div>
          <div className="terminal-title">guest@goodness-core: ~</div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setHistory([]);
            }} 
            className="terminal-clear-icon-btn"
            title="Clear output"
            aria-label="Clear terminal output"
          >
            <RefreshCw size={14} />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="terminal-body font-mono">
          {history.map((entry, idx) => (
            <div key={idx} className={`terminal-log-entry ${entry.type}`}>
              <pre className="terminal-pre">{entry.text}</pre>
            </div>
          ))}

          {/* Prompt Form Input */}
          <form onSubmit={handleSubmit} className="terminal-input-row">
            <span className="terminal-prompt-symbol">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-text-input font-mono"
              placeholder="type command (e.g. help, skills, projects)..."
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="terminal-submit-btn" aria-label="Run command">
              <CornerDownLeft size={14} />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="terminal-quick-pills">
          <span className="quick-pill-label">Suggested:</span>
          {['help', 'skills', 'projects', 'experience', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleCommand(cmd);
              }}
              className="terminal-quick-btn"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
