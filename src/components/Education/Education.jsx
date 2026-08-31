import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Education = () => {
  const { t, language } = useLanguage();
  
  const education = language === 'ar' ? [
    {
      id: 1,
      degree: 'بكالوريوس تكنولوجيا المعلومات',
      tag: 'BSc_IT',
      institution: 'جامعة سيناء',
      location: 'العريش، مصر',
      period: 'يناير 2020 — فبراير 2025',
      status: 'graduated',
      highlights: [
        'المواد الأساسية: هياكل البيانات، الخوارزميات، الشبكات، قواعد البيانات',
        'مبادئ هندسة البرمجيات وتصميم الأنظمة',
        'خبرة عملية في تطوير الويب وبنية تكنولوجيا المعلومات',
      ],
    },
    {
      id: 2,
      degree: 'دبلوم — تكنولوجيا المعلومات',
      tag: 'DEG_IT_2021',
      institution: 'جامعة سيناء',
      location: 'العريش، مصر',
      period: 'يناير 2019 — فبراير 2021',
      status: 'completed',
      highlights: [
        'أساسيات علوم الحاسوب ونظم المعلومات',
        'إدارة قواعد البيانات وأساسيات الشبكات',
      ],
    },
  ] : [
    {
      id: 1,
      degree: 'Bachelor of Information Technology',
      tag: 'BSc_IT',
      institution: 'Sinai University',
      location: 'Arish, Egypt',
      period: 'Jan 2020 — Feb 2025',
      status: 'graduated',
      highlights: [
        'Core modules: Data Structures, Algorithms, Networks, Databases',
        'Software Engineering principles and system design',
        'Practical experience with web development and IT infrastructure',
      ],
    },
    {
      id: 2,
      degree: 'Diploma — Information Technology',
      tag: 'DEG_IT_2021',
      institution: 'Sinai University',
      location: 'Arish, Egypt',
      period: 'Jan 2019 — Feb 2021',
      status: 'completed',
      highlights: [
        'Foundations of computer science and information systems',
        'Database management and networking fundamentals',
      ],
    },
  ];

  return (
  <section id="education" className="section section-alt" aria-labelledby="education-title">
    <div className="container">
      <SectionTitle
        tag={t('educationHistory')}
        title={t('academicBackground')}
        subtitle={t('educationSubtitle')}
        id="education-title"
      />
      <div className="education-list">
        {education.map((edu, i) => (
          <div key={edu.id} className="education-item glass-card reveal">
            <div className="glass-card-corner tl font-mono">+</div>
            <div className="glass-card-corner tr font-mono">+</div>
            <div className="glass-card-inner">
              <div className="edu-header">
                <div>
                  <div className="edu-tag font-mono">{edu.tag}</div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-institution">{edu.institution} <span className="edu-location">— {edu.location}</span></div>
                </div>
                <div className="edu-period-badge">
                  <div className={`edu-status-dot ${edu.status === 'graduated' ? 'status-green' : 'status-blue'}`}/>
                  <span className="font-mono edu-period">{edu.period}</span>
                </div>
              </div>
              <ul className="edu-highlights">
                {edu.highlights.map((h, j) => <li key={j} className="edu-highlight-item"><span className="highlight-arrow font-mono">→</span> {h}</li>)}
              </ul>
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
