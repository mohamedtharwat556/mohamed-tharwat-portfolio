import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Philosophy = () => {
  const { t } = useLanguage();
  return (
  <section id="philosophy" className="section section-alt" aria-labelledby="philosophy-title">
    <div className="container">
      <SectionTitle tag={t('coreValues')} title={t('engineeringPhilosophy')} subtitle={t('philosophySubtitle')} id="philosophy-title" />
      <div className="philosophy-content reveal glass-card">
         <div className="glass-card-corner tl font-mono">+</div>
         <div className="glass-card-corner tr font-mono">+</div>
         <div className="glass-card-inner text-center">
            <p className="philosophy-quote">{t('philosophyQuote')}</p>
            <div className="philosophy-author font-mono">{t('philosophyAuthor')}</div>
         </div>
         <div className="glass-card-corner bl font-mono">+</div>
         <div className="glass-card-corner br font-mono">+</div>
      </div>
    </div>
  </section>
  );
};
