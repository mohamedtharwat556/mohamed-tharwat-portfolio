import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { ProjectArchitecture } from '../ui/ProjectArchitecture';
import { projectsData, projectFilterCategories } from '../../data/projects';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Projects = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('All');

  const filteredProjects = projectsData.filter(proj => {
    if (filter === 'All') return true;
    return proj.categories.includes(filter);
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionTitle
          tag={t('engineeringPortfolio')}
          title={t('featuredProjects')}
          subtitle={t('projectsSubtitle')}
          id="projects-heading"
        />

        {/* Project Filter Controls (Rule 21) */}
        <div className="project-filter-bar font-mono reveal">
          <span className="filter-label">{t('filterByTech')}</span>
          <div className="filter-buttons">
            {projectFilterCategories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {language === 'ar' && cat === 'All' ? 'الكل' : language === 'ar' && cat === 'React' ? 'React' : language === 'ar' && cat === 'JavaScript' ? 'JavaScript' : language === 'ar' && cat === 'Full Stack' ? 'Full Stack' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Editorial Alternating Layout (Rule 19) */}
        <div className="projects-list">
          {filteredProjects.map((project, idx) => {
            const isVisualFirst = idx % 2 === 0;

            return (
              <GlassCard
                key={project.id}
                className={`project-editorial-card ${isVisualFirst ? 'visual-left' : 'visual-right'}`}
              >
                {/* Visual Architecture Diagram Side */}
                <div className="project-visual-side">
                  <ProjectArchitecture
                    steps={project.architecture}
                    projectTitle={project.title}
                  />
                </div>

                {/* Project Content Side */}
                <div className="project-content-side">
                  <div className="proj-num font-mono">PROJ_{project.number}</div>
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-desc">{project.description}</p>

                  <div className="proj-functionality">
                    <div className="func-title font-mono">{t('coreFunctionality')}</div>
                    <ul className="func-list">
                      {project.functionality.map((func, fIdx) => (
                        <li key={fIdx}>{func}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="proj-tech font-mono">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="proj-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="proj-actions">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary font-mono"
                      >
                        <span className="btn-text">{t('viewLiveApp')}</span>
                        <span className="btn-arrow font-mono">→</span>
                      </a>
                    ) : (
                      <button className="btn-coming-soon font-mono" disabled>
                        <span>{t('demoComingSoon')}</span>
                      </button>
                    )}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      <style>{`
        .project-filter-bar {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-top: var(--space-xl);
          margin-bottom: var(--space-2xl);
          flex-wrap: wrap;
        }

        .filter-label {
          font-size: 0.8rem;
          color: var(--accent);
        }

        .filter-buttons {
          display: flex;
          gap: var(--space-xs);
          flex-wrap: wrap;
        }

        .filter-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .filter-btn:hover, .filter-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-bg);
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3xl);
        }

        .project-editorial-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-2xl);
          align-items: center;
        }

        .visual-right .project-visual-side {
          order: 2;
        }

        .visual-right .project-content-side {
          order: 1;
        }

        .proj-num {
          font-size: 0.8rem;
          color: var(--accent);
          letter-spacing: 0.1em;
          margin-bottom: var(--space-xs);
        }

        .proj-title {
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-xs);
        }

        .proj-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: var(--space-md);
        }

        .proj-functionality {
          margin-bottom: var(--space-md);
          background: var(--bg-secondary);
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .func-title {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .func-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .func-list li {
          font-size: 0.85rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1rem;
        }

        .func-list li::before {
          content: "+";
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .proj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-bottom: var(--space-lg);
        }

        .proj-tech-tag {
          font-size: 0.75rem;
          background: var(--bg-card);
          border: 1px solid var(--accent-border);
          color: var(--accent);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
        }

        .btn-coming-soon {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          cursor: not-allowed;
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
        }

        @media (max-width: 900px) {
          .project-editorial-card {
            grid-template-columns: 1fr;
          }

          .visual-right .project-visual-side { order: unset; }
          .visual-right .project-content-side { order: unset; }
        }
      `}</style>
    </section>
  );
};
