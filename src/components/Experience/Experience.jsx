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
      role: 'مطور Full Stack حر',
      company: 'عمل حر',
      period: '2022 — الآن',
      description: 'تصميم وتطوير تطبيقات ويب مخصصة لعملاء مختلفين، إدارة دورة حياة التطوير الكاملة من جمع المتطلبات إلى النشر.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: 3,
      role: 'مصمم جرافيك حر',
      company: 'عمل حر',
      period: '2020 — الآن',
      description: 'تصميم هويات بصرية، شعارات، ومواد تسويقية للعملاء، استخدام أدوات التصميم الاحترافية.',
      technologies: ['Photoshop', 'Illustrator', 'Figma', 'After Effects'],
    },
    {
      id: 4,
      role: 'شهادة MongoDB Developer',
      company: 'وزارة الاتصالات',
      period: 'يوليو 2025 — أكتوبر 2025',
      description: 'شهادة مهنية في تطوير قواعد بيانات MongoDB، إتمام التدريب المعتمد من وزارة الاتصالات.',
      technologies: ['MongoDB', 'NoSQL', 'Database Design'],
    },
    {
      id: 5,
      role: 'أخصائي دعم تكنولوجيا المعلومات',
      company: 'منظمات مختلفة',
      period: '2019 — 2020',
      description: 'تقديم الدعم التقني، إدارة تثبيتات الأجهزة والبرمجيات، واستكشاف مشاكل الشبكات لضمان العمليات التجارية السلسة.',
      technologies: ['Windows Server', 'الشبكات', 'استكشاف أخطاء الأجهزة'],
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
      role: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      period: '2022 — Present',
      description: 'Designed and developed custom web applications for various clients, managing the full development lifecycle from requirements gathering to deployment.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: 3,
      role: 'Freelance Graphic Designer',
      company: 'Self-Employed',
      period: '2020 — Present',
      description: 'Designing visual identities, logos, and marketing materials for clients, using professional design tools.',
      technologies: ['Photoshop', 'Illustrator', 'Figma', 'After Effects'],
    },
    {
      id: 4,
      role: 'MongoDB Developer Certification',
      company: 'Ministry of Communications',
      period: 'July 2025 — October 2025',
      description: 'Professional certification in MongoDB database development, completed accredited training from the Ministry of Communications.',
      technologies: ['MongoDB', 'NoSQL', 'Database Design'],
    },
    {
      id: 5,
      role: 'IT Support Specialist',
      company: 'Various Organizations',
      period: '2019 — 2020',
      description: 'Provided technical support, managed hardware and software installations, and troubleshot network issues to ensure smooth business operations.',
      technologies: ['Windows Server', 'Networking', 'Hardware Troubleshooting'],
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
