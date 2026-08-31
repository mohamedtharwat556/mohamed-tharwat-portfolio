import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { ArchitectureGraphic } from '../ui/ArchitectureGraphic';

export const About = () => {
  const { t, language } = useLanguage();
  
  const bioText1 = language === 'ar' 
    ? 'أنا <strong>مطور Full Stack</strong> حاصل على بكالوريوس تكنولوجيا المعلومات من جامعة سيناء. خبرتي تمتد لبناء تطبيقات ويب كاملة — من واجهات React متجاوبة إلى خوادم Node.js قابلة للتوسع مع Express و MongoDB.'
    : 'I am a <strong>Full Stack Developer</strong> with a Bachelor of Information Technology from Sinai University. My experience spans building complete web applications — from responsive React interfaces to scalable Node.js backends with Express and MongoDB.';
  
  const bioText2 = language === 'ar'
    ? 'إلى جانب البرمجة، لدي خبرة عملية في دعم تكنولوجيا المعلومات وإدارة البيانات والعمليات — مما يمنحني منظوراً نادراً يربط بين التنفيذ التقني والاحتياجات التشغيلية في العالم الحقيقي.'
    : 'Beyond code, I have hands-on experience in IT support, data management, and operations — giving me a rare perspective that bridges technical execution with real-world operational needs.';
  
  const bioText3 = language === 'ar'
    ? 'أتعامل مع كل مشروع مثل البناء المعماري: لكل مكون غرض، ولكل قرار سبب، ويجب أن يكون الكل أكبر من مجموع أجزائه.'
    : 'I approach every project like architecture: every component has a purpose, every decision has a reason, and the whole must be greater than the sum of its parts.';
  
  const quickFacts = language === 'ar'
    ? [
        ['الموقع', 'دمياط، مصر'],
        ['الدرجة', 'بكالوريوس تكنولوجيا المعلومات'],
        ['الخبرة', 'عمل حر 2020–2025'],
        ['اللغات', 'العربية (الأم) | الإنجليزية (جيد)'],
        ['التواصل', 'mhmdthrwt744@gmail.com'],
      ]
    : [
        ['Location', 'Damietta, Egypt'],
        ['Degree', 'B.Sc. Information Technology'],
        ['Experience', 'Freelance 2020–2025'],
        ['Languages', 'Arabic (Native) | English (Good)'],
        ['Contact', 'mhmdthrwt744@gmail.com'],
      ];

  return (
  <section id="about" className="section" aria-labelledby="about-title">
    <div className="container">
      <SectionTitle
        tag={t('aboutTag')}
        title={t('aboutTitle')}
        subtitle={t('aboutSubtitle')}
        id="about-title"
      />
      <div className="about-layout">
        <div className="about-text reveal">
          <div className="glass-card">
            <div className="glass-card-corner tl font-mono">+</div>
            <div className="glass-card-corner tr font-mono">+</div>
            <div className="glass-card-inner">
              <div className="about-badge font-mono">{t('developerBio')}</div>
              <p className="about-paragraph" dangerouslySetInnerHTML={{ __html: bioText1 }} />
              <p className="about-paragraph" dangerouslySetInnerHTML={{ __html: bioText2 }} />
              <p className="about-paragraph" dangerouslySetInnerHTML={{ __html: bioText3 }} />
              <div className="about-quick-facts">
                {quickFacts.map(([k, v]) => (
                  <div key={k} className="about-fact-row">
                    <span className="fact-key font-mono">{k}</span>
                    <span className="fact-val">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card-corner bl font-mono">+</div>
            <div className="glass-card-corner br font-mono">+</div>
          </div>
        </div>
        <div className="about-visual reveal">
          <div className="about-arch-label font-mono">// TECH ECOSYSTEM</div>
          <ArchitectureGraphic />
        </div>
      </div>
    </div>
  </section>
  );
};
