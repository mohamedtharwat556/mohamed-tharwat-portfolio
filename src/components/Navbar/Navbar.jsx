import React, { useState, useEffect } from 'react';
import { MTMark } from '../ui/MTMark';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  const navLinks = [
    { href: '#about', label: t('about'), num: '01' },
    { href: '#education', label: t('education'), num: '02' },
    { href: '#skills', label: t('skills'), num: '03' },
    { href: '#projects', label: t('projects'), num: '04' },
    { href: '#experience', label: t('experience'), num: '05' },
    { href: '#contact', label: t('contact'), num: '06' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) setActive(`#${s.id}`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} role="banner">
      <nav className="navbar-inner" aria-label="Main Navigation">
        <a href="#" className="navbar-brand" aria-label="Mohamed Tharwat - Home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <MTMark size={32} />
          <div className="navbar-brand-text">
            <span className="brand-name">Mohamed Tharwat</span>
            <span className="brand-role font-mono">Full Stack Developer</span>
          </div>
        </a>
        <ul className="navbar-links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`nav-link ${active === link.href ? 'nav-link-active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                aria-current={active === link.href ? 'page' : undefined}>
                <span className="nav-num font-mono">{link.num}</span>
                <span className="nav-label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/201013791517" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm navbar-cta" aria-label="Hire Mohamed Tharwat on WhatsApp">
          <span>{t('hireMe')}</span><span className="font-mono">→</span>
        </a>
        <button 
          className="lang-toggle" 
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          <span className="lang-text">{language === 'en' ? 'AR' : 'EN'}</span>
        </button>
        <button className={`navbar-toggle ${menuOpen ? 'open' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
      </nav>
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`mobile-nav-link ${active === link.href ? 'nav-link-active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
                <span className="font-mono nav-num">{link.num}</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/201013791517" target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-menu-cta">Hire Me →</a>
      </div>
    </header>
  );
};
