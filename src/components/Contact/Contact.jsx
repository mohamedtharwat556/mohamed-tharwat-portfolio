import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { CustomButton } from '../ui/CustomButton';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Contact = () => {
  const { t } = useLanguage();
  return (
  <section id="contact" className="section section-alt" aria-labelledby="contact-title">
    <div className="container">
      <SectionTitle
        tag={t('contactMe')}
        title={t('initializeConnection')}
        subtitle={t('contactSubtitle')}
        id="contact-title"
      />
      <div className="contact-layout reveal">
        <div className="contact-info glass-card">
           <div className="glass-card-corner tl font-mono">+</div>
           <div className="glass-card-corner tr font-mono">+</div>
           <div className="glass-card-inner text-center">
              <h3 className="contact-heading">{t('letsBuild')}</h3>
              <p className="contact-text">{t('contactText')}</p>
              <div className="contact-action">
                <CustomButton href="https://wa.me/201013791517" variant="primary">{t('sayHello')}</CustomButton>
              </div>
              <div className="contact-details mt-4">
                 <p className="font-mono">{t('emailLabel')} mhmdthrwt744@gmail.com</p>
                 <p className="font-mono">{t('phoneLabel')} 01013791517</p>
              </div>
           </div>
           <div className="glass-card-corner bl font-mono">+</div>
           <div className="glass-card-corner br font-mono">+</div>
        </div>
      </div>
    </div>
  </section>
  );
};
