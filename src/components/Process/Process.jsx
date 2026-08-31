import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Process = () => {
  const { t, language } = useLanguage();
  
  const processSteps = language === 'ar' ? [
    { id: '01', title: 'الاكتشاف', desc: 'فهم المتطلبات وتخطيط البنية.' },
    { id: '02', title: 'التطوير', desc: 'كتابة كود نظيف وقابل للتوسع للواجهة الأمامية والخلفية.' },
    { id: '03', title: 'الاختبار', desc: 'ضمان الجودة والأمان والأداء.' },
    { id: '04', title: 'النشر', desc: 'إطلاق التطبيق وتقديم الدعم.' }
  ] : [
    { id: '01', title: 'Discovery', desc: 'Understanding requirements and planning architecture.' },
    { id: '02', title: 'Development', desc: 'Writing clean, scalable code for frontend and backend.' },
    { id: '03', title: 'Testing', desc: 'Ensuring quality, security, and performance.' },
    { id: '04', title: 'Deployment', desc: 'Launching the application and providing support.' }
  ];

  return (
  <section id="process" className="section" aria-labelledby="process-title">
    <div className="container">
      <SectionTitle tag={t('workflowSteps')} title={t('developmentProcess')} subtitle={t('processSubtitle')} id="process-title" />
      <div className="process-grid reveal">
        {processSteps.map(step => (
          <div key={step.id} className="process-card glass-card">
             <div className="glass-card-corner tl font-mono">+</div>
             <div className="glass-card-corner tr font-mono">+</div>
             <div className="glass-card-inner">
                <div className="process-step font-mono">{step.id}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
             </div>
             <div className="glass-card-corner bl font-mono">+</div>
             <div className="glass-card-corner br font-mono">+</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
