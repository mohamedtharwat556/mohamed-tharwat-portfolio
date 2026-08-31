import React from 'react';

export const MTMark = ({ size = 36, animated = false, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={`mt-mark ${animated ? 'mt-mark-animated' : ''} ${className}`} aria-label="MT Code System Logo">
    <rect x="5" y="5" width="90" height="90" rx="16" fill="#0d1017" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
    <circle cx="20" cy="20" r="2" fill="var(--accent)" opacity="0.4"/>
    <circle cx="80" cy="20" r="2" fill="var(--accent)" opacity="0.4"/>
    <circle cx="20" cy="80" r="2" fill="var(--accent)" opacity="0.4"/>
    <circle cx="80" cy="80" r="2" fill="var(--accent)" opacity="0.4"/>
    <path d="M 18 42 L 10 50 L 18 58" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 82 42 L 90 50 L 82 58" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 25 75 V 28 L 50 62 L 75 28 V 75" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="22" y1="22" x2="78" y2="22" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round"/>
    <circle cx="50" cy="62" r="4" fill="var(--accent)"/>
  </svg>
);
