import React from 'react';

export const GitBranch = ({ commits = [] }) => {
  const defaultCommits = [
    { hash: 'a3f9c2', message: 'feat: Add React portfolio architecture', branch: 'main', time: '2h ago' },
    { hash: 'e7b12d', message: 'feat: Full-stack projects with Node.js', branch: 'main', time: '5h ago' },
    { hash: 'c58a41', message: 'chore: MongoDB schema design', branch: 'dev', time: '1d ago' },
    { hash: 'f01b78', message: 'fix: Express middleware pipeline', branch: 'dev', time: '2d ago' },
    { hash: '2d9e33', message: 'init: Project foundation setup', branch: 'main', time: '3d ago' },
  ];
  const data = commits.length ? commits : defaultCommits;

  return (
    <div className="git-branch-container font-mono">
      {data.map((commit, i) => (
        <div key={commit.hash} className="git-commit-row">
          <div className="git-track">
            <div className={`git-dot ${i === 0 ? 'git-dot-active' : ''}`}/>
            {i < data.length - 1 && <div className="git-line"/>}
          </div>
          <div className="git-commit-info">
            <span className={`git-branch-tag ${commit.branch === 'main' ? 'tag-main' : 'tag-dev'}`}>{commit.branch}</span>
            <span className="git-hash">{commit.hash}</span>
            <span className="git-message">{commit.message}</span>
            <span className="git-time">{commit.time}</span>
          </div>
        </div>
      ))}
      <style>{`
        .git-branch-container { background:#070a10;border:1px solid var(--border-subtle);border-radius:var(--radius-lg);padding:1rem 1.25rem;overflow:hidden; }
        .git-commit-row { display:flex;gap:0.75rem;align-items:flex-start; }
        .git-track { display:flex;flex-direction:column;align-items:center;flex-shrink:0;padding-top:3px; }
        .git-dot { width:10px;height:10px;border-radius:50%;border:2px solid var(--border-strong);background:#0d1017;flex-shrink:0; }
        .git-dot-active { border-color:var(--accent);background:var(--accent);box-shadow:0 0 8px rgba(0,240,255,0.5); }
        .git-line { width:2px;flex:1;background:var(--border-subtle);min-height:24px;margin:2px 0; }
        .git-commit-info { display:flex;flex-wrap:wrap;align-items:center;gap:0.4rem;padding-bottom:0.5rem;font-size:0.78rem; }
        .git-branch-tag { padding:1px 7px;border-radius:3px;font-size:0.7rem;font-weight:600; }
        .tag-main { background:rgba(0,240,255,0.15);color:var(--accent);border:1px solid var(--accent-border); }
        .tag-dev { background:rgba(138,90,250,0.15);color:#a78bfa;border:1px solid rgba(138,90,250,0.3); }
        .git-hash { color:var(--accent);font-size:0.72rem; }
        .git-message { color:var(--text-secondary);flex:1; }
        .git-time { color:var(--text-muted);font-size:0.7rem; }
      `}</style>
    </div>
  );
};
