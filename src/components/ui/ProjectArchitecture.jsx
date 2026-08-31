import React from 'react';

export const ProjectArchitecture = ({ steps = [], projectTitle = '' }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="project-arch-container">
      <div className="arch-header font-mono">
        <span className="arch-title">// ARCHITECTURE_FLOW</span>
        <span className="arch-project">{projectTitle}</span>
      </div>
      <div className="arch-steps">
        {steps.map((step, index) => (
          <div key={step.step || index} className="arch-step">
            <div className="arch-step-num font-mono">{step.step || String(index + 1).padStart(2, '0')}</div>
            <div className="arch-step-content">
              <div className="arch-step-name">{step.name}</div>
              <div className="arch-step-type font-mono">{step.type}</div>
            </div>
            {index < steps.length - 1 && <div className="arch-connector"></div>}
          </div>
        ))}
      </div>
      <style>{`
        .project-arch-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          padding: var(--space-md);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
        }
        .arch-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: var(--space-sm);
          border-bottom: 1px solid var(--border-subtle);
          font-size: var(--text-xs);
          color: var(--text-muted);
        }
        .arch-title {
          color: var(--accent);
        }
        .arch-project {
          color: var(--text-secondary);
        }
        .arch-steps {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
        .arch-step {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          position: relative;
        }
        .arch-step-num {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-dim);
          border: 1px solid var(--accent);
          border-radius: var(--radius-sm);
          color: var(--accent);
          font-size: var(--text-xs);
          font-weight: 600;
          flex-shrink: 0;
        }
        .arch-step-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }
        .arch-step-name {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-primary);
        }
        .arch-step-type {
          font-size: var(--text-xs);
          color: var(--text-muted);
        }
        .arch-connector {
          position: absolute;
          left: 15px;
          top: 32px;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, var(--border-subtle), transparent);
        }
      `}</style>
    </div>
  );
};
