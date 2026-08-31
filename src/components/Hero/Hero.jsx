import React, { useEffect, useRef, useState } from 'react';
import { MTMark } from '../ui/MTMark';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Hero = () => {
  const { t, language } = useLanguage();
  const roles = t('roles');
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        intervalRef.current = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 70);
      } else {
        intervalRef.current = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        intervalRef.current = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(intervalRef.current);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-noise" aria-hidden="true"/>
      <div className="hero-grid-bg" aria-hidden="true"/>
      <div className="hero-glow-orbs" aria-hidden="true">
        <div className="orb orb-1"/><div className="orb orb-2"/>
      </div>
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-eyebrow reveal">
              <MTMark size={20} />
              <span className="font-mono">{t('mtCodeSystem')}</span>
              <span className="hero-status-dot" aria-label="Available for work"/>
              <span className="font-mono hero-status-text">{t('available')}</span>
            </div>
            <h1 id="hero-heading" className="hero-name reveal">
              <span className="hero-name-first">{language === 'ar' ? 'محمد' : 'Mohamed'}</span>
              <span className="hero-name-last">{language === 'ar' ? 'ثروت' : 'Tharwat'}</span>
            </h1>
            <div className="hero-role-line reveal">
              <span className="font-mono hero-role-bracket">// </span>
              <span className="hero-role-text" aria-live="polite" aria-atomic="true">{displayText}</span>
              <span className="hero-cursor font-mono" aria-hidden="true">▋</span>
            </div>
            <p className="hero-summary reveal">
              {t('heroSummary')}
            </p>
            <div className="hero-actions reveal">
              <a href="https://wa.me/201013791517" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" id="hero-cta-primary">
                <span>{t('getInTouch')}</span><span className="font-mono">→</span>
              </a>
              <a href="#projects" className="btn btn-ghost btn-lg" id="hero-cta-secondary"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <span>{t('viewProjects')}</span>
              </a>
            </div>
            <div className="hero-meta reveal">
              <div className="hero-meta-item">
                <span className="font-mono hero-meta-key">{t('location')}</span>
                <span className="hero-meta-val">{t('locationVal')}</span>
              </div>
              <div className="hero-meta-sep font-mono">//</div>
              <div className="hero-meta-item">
                <span className="font-mono hero-meta-key">{t('focus')}</span>
                <span className="hero-meta-val">{t('focusVal')}</span>
              </div>
              <div className="hero-meta-sep font-mono">//</div>
              <div className="hero-meta-item">
                <span className="font-mono hero-meta-key">{t('status')}</span>
                <span className="hero-meta-val" style={{ color: '#4ade80' }}>{t('openToWork')}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="hero-card">
              <div className="hero-card-badge font-mono">{t('systemProfile')}</div>
              <div className="hero-card-mark"><MTMark size={56} animated/></div>
              <div className="hero-card-info">
                <div className="hero-card-row"><span className="font-mono hero-card-key">name</span><span className="hero-card-val">{t('name')}</span></div>
                <div className="hero-card-row"><span className="font-mono hero-card-key">role</span><span className="hero-card-val">{t('role')}</span></div>
                <div className="hero-card-row"><span className="font-mono hero-card-key">stack</span><span className="hero-card-val">{t('stack')}</span></div>
                <div className="hero-card-row"><span className="font-mono hero-card-key">phone</span><span className="hero-card-val">{t('phone')}</span></div>
              </div>
              <div className="hero-card-contacts">
                <a href="mailto:mhmdthrwt744@gmail.com" className="hero-contact-chip font-mono">{t('gmail')}</a>
                <a href="https://linkedin.com/in/mmohamed-tharwat" target="_blank" rel="noopener noreferrer" className="hero-contact-chip font-mono">{t('linkedin')}</a>
                <a href="https://github.com/Mohamedtharwat8" target="_blank" rel="noopener noreferrer" className="hero-contact-chip font-mono">{t('github')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="hero-scroll-indicator" onClick={handleScrollToAbout} aria-label="Scroll to about section">
        <span className="font-mono">{t('scroll')}</span>
        <div className="hero-scroll-line" aria-hidden="true"/>
      </button>
    </section>
  );
};
