import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-wrapper">
      <div className="toast-container liquid-glass">
        <div className="toast-icon">
          <Sparkles size={16} />
        </div>
        <span className="toast-message">{message}</span>
      </div>
    </div>
  );
}
