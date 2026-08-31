import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) { setIsTouchDevice(true); return; }
    const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => setHovered(!!e.target.closest('a, button, input, textarea, .glass-card'));
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => { window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('mouseover', handleMouseOver); };
  }, []);

  if (isTouchDevice) return null;
  return (
    <div className={`custom-cursor ${hovered ? 'hovered' : ''}`} style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}>
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
      <style>{`
        .custom-cursor { position:fixed;top:0;left:0;pointer-events:none;z-index:99990;transition:transform 0.08s ease-out; }
        .cursor-dot { width:4px;height:4px;background:var(--accent);border-radius:50%;position:absolute;top:-2px;left:-2px; }
        .cursor-ring { width:24px;height:24px;border:1px solid rgba(0,240,255,0.4);border-radius:50%;position:absolute;top:-12px;left:-12px;transition:transform 0.2s ease,border-color 0.2s ease; }
        .custom-cursor.hovered .cursor-ring { transform:scale(1.6);border-color:var(--accent);background-color:rgba(0,240,255,0.08); }
        @media (pointer:coarse) { .custom-cursor { display:none!important; } }
      `}</style>
    </div>
  );
};
