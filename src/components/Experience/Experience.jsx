import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Experience = () => {
  const { t, language } = useLanguage();
  
  const experienceData = language === 'ar' ? [
    {
      id: 1,
      role: 'مطور Full Stack',
      company: 'شركة yas',
      period: 'أبريل 2026 — الآن',
      description: 'تطوير وصيانة تطبيقات ويب كاملة، العمل مع فريق التطوير لإنشاء حلول برمجية متقدمة.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    },
    {
      id: 2,
      role: 'مصمم جرافيك حر',
      company: 'عمل حر',
      period: '2020 — الآن',
      description: 'تصميم هويات بصرية، شعارات، ومواد تسويقية للعملاء، استخدام أدوات التصميم الاحترافية.',
      technologies: ['Photoshop', 'Illustrator', 'Figma', 'After Effects'],
    },
    {
      id: 3,
      role: 'مدخل بيانات',
      company: 'مهارات تبع وزارة الاتصالات المصرية',
      period: 'يوليو 2025 — أكتوبر 2025',
      description: 'إدخال ومعالجة البيانات بدقة، إدارة الملفات الإلكترونية، والتأكد من جودة البيانات.',
      technologies: ['Excel', 'Data Entry', 'Microsoft Office'],
    }
  ] : [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'yas Company',
      period: 'April 2026 — Present',
      description: 'Developing and maintaining full-stack web applications, working with the development team to create advanced software solutions.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    },
    {
      id: 2,
      role: 'Freelance Graphic Designer',
      company: 'Self-Employed',
      period: '2020 — Present',
      description: 'Designing visual identities, logos, and marketing materials for clients, using professional design tools.',
      technologies: ['Photoshop', 'Illustrator', 'Figma', 'After Effects'],
    },
    {
      id: 3,
      role: 'Data Entry',
      company: 'Maharat - Ministry of Communications & Information Technology',
      period: 'July 2025 — October 2025',
      description: 'Accurate data entry and processing, managing electronic files, and ensuring data quality.',
      technologies: ['Excel', 'Data Entry', 'Microsoft Office'],
    }
  ];

  return (
  <section id="experience" className="section" aria-labelledby="experience-title">
    <div className="container">
      <SectionTitle
        tag={t('workHistory')}
        title={t('professionalExperience')}
        subtitle={t('experienceSubtitle')}
        id="experience-title"
      />
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div key={exp.id} className="experience-item reveal">
            <div className="experience-marker">
              <div className="marker-dot"></div>
              {index < experienceData.length - 1 && <div className="marker-line"></div>}
            </div>
            <div className="experience-content glass-card">
              <div className="glass-card-corner tl font-mono">+</div>
              <div className="glass-card-corner tr font-mono">+</div>
              <div className="glass-card-inner">
                 <div className="exp-header">
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-period font-mono">{exp.period}</div>
                 </div>
                 <p className="exp-desc">{exp.description}</p>
                 <div className="exp-tech">
                    {exp.technologies.map(tech => <span key={tech} className="exp-tech-tag font-mono">{tech}</span>)}
                 </div>
              </div>
              <div className="glass-card-corner bl font-mono">+</div>
              <div className="glass-card-corner br font-mono">+</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
