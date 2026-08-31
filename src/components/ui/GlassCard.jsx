import React from 'react';

export const GlassCard = ({ children, className = '', hoverable = true, style = {} }) => (
  <div className={`glass-card ${hoverable ? 'glass-card-hover' : ''} ${className}`} style={style}>
    <div className="glass-card-corner tl font-mono">+</div>
    <div className="glass-card-corner tr font-mono">+</div>
    <div className="glass-card-inner">{children}</div>
    <div className="glass-card-corner bl font-mono">+</div>
    <div className="glass-card-corner br font-mono">+</div>
    <style>{`
      .glass-card { background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);position:relative;transition:var(--transition-normal);backdrop-filter:blur(12px); }
      .glass-card-hover:hover { border-color:var(--accent-border);background:var(--bg-card-hover);box-shadow:0 10px 30px rgba(0,0,0,0.4);transform:translateY(-3px); }
      .glass-card-inner { padding:var(--space-lg);position:relative;z-index:1; }
      .glass-card-corner { position:absolute;font-size:0.65rem;color:var(--border-strong);opacity:0.5;pointer-events:none; }
      .glass-card-corner.tl{top:4px;left:6px} .glass-card-corner.tr{top:4px;right:6px} .glass-card-corner.bl{bottom:4px;left:6px} .glass-card-corner.br{bottom:4px;right:6px}
    `}</style>
  </div>
);
