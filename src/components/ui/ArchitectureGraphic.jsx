import React, { useState } from 'react';

export const ArchitectureGraphic = () => {
  const [activeNode, setActiveNode] = useState(null);
  const nodes = [
    { id: 'ui', label: 'UI', sub: 'Interface', x: 250, y: 70, type: 'Frontend' },
    { id: 'react', label: 'React', sub: 'Components', x: 420, y: 150, type: 'Framework' },
    { id: 'api', label: 'API', sub: 'Express / REST', x: 420, y: 350, type: 'Interface' },
    { id: 'server', label: 'Server', sub: 'Node.js', x: 250, y: 430, type: 'Runtime' },
    { id: 'db', label: 'Database', sub: 'MongoDB', x: 80, y: 350, type: 'Persistence' },
    { id: 'git', label: 'Git', sub: 'VCS', x: 80, y: 150, type: 'Tooling' },
  ];

  return (
    <div className="architecture-graphic-wrapper">
      <svg viewBox="0 0 500 500" className="architecture-svg desktop-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="140" fill="url(#centerGlow)"/>
        <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 6"/>
        <circle cx="250" cy="250" r="210" fill="none" stroke="rgba(0,240,255,0.12)" strokeWidth="1"/>
        {nodes.map((node) => (
          <g key={`line-${node.id}`}>
            <line x1="250" y1="250" x2={node.x} y2={node.y} stroke={activeNode === node.id ? 'var(--accent)' : 'rgba(0,240,255,0.4)'} strokeWidth={activeNode === node.id ? 2.5 : 1.5} strokeDasharray="6 4"/>
          </g>
        ))}
        <g transform="translate(205, 205)">
          <rect width="90" height="90" rx="18" fill="#0d1017" stroke="var(--accent)" strokeWidth="2" filter="drop-shadow(0 0 12px rgba(0,240,255,0.3))"/>
          <text x="45" y="42" fill="var(--accent)" fontSize="22" fontWeight="bold" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" dominantBaseline="middle">MT</text>
          <text x="45" y="65" fill="var(--text-secondary)" fontSize="9" fontFamily="Fira Code, monospace" textAnchor="middle">SYSTEM CORE</text>
        </g>
        {nodes.map((node) => (
          <g key={`node-${node.id}`} transform={`translate(${node.x}, ${node.y})`} onMouseEnter={() => setActiveNode(node.id)} onMouseLeave={() => setActiveNode(null)} style={{ cursor: 'pointer' }}>
            <circle r="30" fill="#121622" stroke={activeNode === node.id ? 'var(--accent)' : 'rgba(255,255,255,0.15)'} strokeWidth={activeNode === node.id ? 2 : 1}/>
            <circle r="4" cx="0" cy="-18" fill={activeNode === node.id ? 'var(--accent)' : 'var(--text-muted)'}/>
            <text y="-2" fill={activeNode === node.id ? 'var(--accent)' : 'var(--text-primary)'} fontSize="12" fontWeight="600" fontFamily="Space Grotesk, sans-serif" textAnchor="middle">{node.label}</text>
            <text y="12" fill="var(--text-muted)" fontSize="8" fontFamily="Fira Code, monospace" textAnchor="middle">{node.sub}</text>
          </g>
        ))}
      </svg>

      <div className="architecture-mobile-view">
        <div className="mobile-arch-core">
          <span className="mobile-core-badge">MT CODE SYSTEM</span>
          <div className="mobile-core-title">Tech Ecosystem</div>
        </div>
        <div className="mobile-arch-grid">
          {nodes.map((node) => (
            <div key={`m-${node.id}`} className="mobile-arch-card">
              <span className="mobile-card-tag">{node.type}</span>
              <div className="mobile-card-title">{node.label}</div>
              <div className="mobile-card-sub">{node.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .architecture-graphic-wrapper { width:100%;display:flex;justify-content:center;align-items:center; }
        .desktop-svg { width:100%;max-width:500px;height:auto; }
        .architecture-mobile-view { display:none;width:100%; }
        @media (max-width:768px) {
          .desktop-svg { display:none; }
          .architecture-mobile-view { display:block;background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);padding:var(--space-md); }
          .mobile-arch-core { text-align:center;margin-bottom:var(--space-md);padding-bottom:var(--space-sm);border-bottom:1px dashed var(--border-subtle); }
          .mobile-core-badge { font-family:var(--font-mono);font-size:0.75rem;color:var(--accent); }
          .mobile-core-title { font-size:1.1rem;font-weight:700;color:var(--text-primary); }
          .mobile-arch-grid { display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-sm); }
          .mobile-arch-card { background:var(--bg-secondary);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:var(--space-sm); }
          .mobile-card-tag { font-family:var(--font-mono);font-size:0.65rem;color:var(--text-muted); }
          .mobile-card-title { font-size:0.95rem;font-weight:600;color:var(--accent); }
          .mobile-card-sub { font-size:0.75rem;color:var(--text-secondary); }
        }
      `}</style>
    </div>
  );
};
