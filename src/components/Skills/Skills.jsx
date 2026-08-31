import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Skills = () => {
  const { t, language } = useLanguage();
  const [active, setActive] = useState('frontend');
  
  const skillGroups = language === 'ar' ? [
    {
      id: 'frontend',
      label: 'الواجهة الأمامية',
      icon: '◈',
      color: '#00f0ff',
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 75 },
      ],
    },
    {
      id: 'backend',
      label: 'الواجهة الخلفية',
      icon: '◈',
      color: '#a78bfa',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      id: 'tools',
      label: 'الأدوات والأخرى',
      icon: '◈',
      color: '#fbbf24',
      skills: [
        { name: 'Git & GitHub', level: 82 },
        { name: 'Microsoft Office Suite', level: 90 },
        { name: 'دعم تكنولوجيا المعلومات وحل المشكلات', level: 85 },
        { name: 'Photoshop', level: 60 },
      ],
    },
  ] : [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: '◈',
      color: '#00f0ff',
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 75 },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: '◈',
      color: '#a78bfa',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      id: 'tools',
      label: 'Tools & Others',
      icon: '◈',
      color: '#fbbf24',
      skills: [
        { name: 'Git & GitHub', level: 82 },
        { name: 'Microsoft Office Suite', level: 90 },
        { name: 'IT Support & Troubleshooting', level: 85 },
        { name: 'Photoshop', level: 60 },
      ],
    },
  ];

  const activeGroup = skillGroups.find((g) => g.id === active);

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle
          tag={t('techSkills')}
          title={t('technicalArsenal')}
          subtitle={t('skillsSubtitle')}
          id="skills-title"
        />
        <div className="skills-layout">
          <div className="skills-tabs reveal">
            {skillGroups.map((g) => (
              <button key={g.id} className={`skill-tab ${active === g.id ? 'skill-tab-active' : ''}`}
                style={{ '--tab-color': g.color }} onClick={() => setActive(g.id)} aria-pressed={active === g.id}
                id={`skill-tab-${g.id}`}>
                <span className="skill-tab-icon">{g.icon}</span>
                <span className="skill-tab-label">{g.label}</span>
              </button>
            ))}
          </div>
          <div className="skills-panel glass-card reveal" aria-label={`${activeGroup.label} skills`}>
            <div className="glass-card-corner tl font-mono">+</div>
            <div className="glass-card-corner tr font-mono">+</div>
            <div className="glass-card-inner">
              <div className="skills-panel-header">
                <span style={{ color: activeGroup.color, fontSize: '1.4rem' }}>{activeGroup.icon}</span>
                <span className="skills-panel-title">{activeGroup.label} Skills</span>
                <span className="font-mono skills-panel-count">{activeGroup.skills.length} skills</span>
              </div>
              <div className="skills-bars">
                {activeGroup.skills.map((skill) => (
                  <div key={skill.name} className="skill-bar-row">
                    <div className="skill-bar-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level font-mono" style={{ color: activeGroup.color }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${activeGroup.color}aa, ${activeGroup.color})` }}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card-corner bl font-mono">+</div>
            <div className="glass-card-corner br font-mono">+</div>
          </div>
        </div>
        <div className="skills-tags-section reveal">
          <div className="skills-tags-label font-mono">// All Technologies</div>
          <div className="skills-tags-list">
            {skillGroups.flatMap((g) => g.skills.map((s) => (
              <span key={s.name} className="skill-tag font-mono" style={{ '--tag-color': g.color }}>{s.name}</span>
            )))}
          </div>
        </div>
      </div>
    </section>
  );
};
