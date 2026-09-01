import React from 'react';
import { MTMark } from '../ui/MTMark';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Footer = () => {
  const { t, language } = useLanguage();
  return (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-brand">
          <MTMark size={24} />
          <span className="footer-name font-mono">{language === 'ar' ? 'محمد ثروت' : 'Mohamed Tharwat'}</span>
        </div>
        <div className="footer-social">
           <a href="https://linkedin.com/in/mmohamed-tharwat" target="_blank" rel="noopener noreferrer" className="font-mono">LinkedIn</a>
           <a href="https://github.com/mohamedtharwat556" target="_blank" rel="noopener noreferrer" className="font-mono">GitHub</a>
           <a href="https://www.behance.net/e862a80e" target="_blank" rel="noopener noreferrer" className="font-mono">Behance</a>
        </div>
        <div className="footer-copyright font-mono">
          &copy; {new Date().getFullYear()} MT Code System. {t('allRightsReserved')}
        </div>
      </div>
    </div>
  </footer>
  );
};
