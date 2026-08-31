import React, { useEffect, useState } from 'react';
import { MTMark } from './MTMark';

export const LoadingScreen = ({ onComplete }) => {
  const [statusText, setStatusText] = useState('initializing portfolio...');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) { onComplete(); return; }
    const t1 = setTimeout(() => setStatusText('system ready'), 600);
    const t2 = setTimeout(() => setFadeOut(true), 1100);
    const t3 = setTimeout(() => onComplete(), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-mark-wrapper"><MTMark size={72} animated={true} /></div>
        <div className="loading-status font-mono"><span className="loading-prompt">&gt;</span> {statusText}</div>
        <div className="loading-bar-container"><div className="loading-bar-fill"></div></div>
      </div>
      <style>{`
        .loading-screen { position:fixed;top:0;left:0;width:100vw;height:100vh;background:#07090e;z-index:99999;display:flex;align-items:center;justify-content:center;transition:opacity 0.4s ease,visibility 0.4s ease; }
        .loading-screen.fade-out { opacity:0;visibility:hidden; }
        .loading-content { display:flex;flex-direction:column;align-items:center;gap:1rem;text-align:center; }
        .loading-mark-wrapper { filter:drop-shadow(0 0 16px rgba(0,240,255,0.4));animation:pulseNode 1.5s infinite; }
        .loading-status { font-size:0.9rem;color:var(--accent);letter-spacing:0.1em; }
        .loading-prompt { color:var(--text-primary);animation:terminalBlink 0.8s infinite; }
        .loading-bar-container { width:180px;height:2px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden; }
        .loading-bar-fill { height:100%;width:100%;background:var(--accent);transform-origin:left;animation:loadProgress 1.2s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes loadProgress { 0%{transform:scaleX(0)} 50%{transform:scaleX(0.7)} 100%{transform:scaleX(1)} }
      `}</style>
    </div>
  );
};
