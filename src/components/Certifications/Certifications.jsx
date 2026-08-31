import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { certificationsData } from '../../data/certifications';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const Certifications = () => {
  const { t } = useLanguage();
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <SectionTitle
          tag={t('verifiedCertificates')}
          title={t('certificationsTitle')}
          subtitle={t('certificationsSubtitle')}
          id="certifications-heading"
        />

        <div className="certifications-grid reveal">
          {certificationsData.map((cert) => (
            <GlassCard key={cert.id} className="cert-card">
              <div className="cert-top font-mono">
                <span className="cert-code">// {cert.code}</span>
                <span className="cert-badge">{cert.category}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>

              <div className="cert-issuer font-mono">
                <span className="issuer-label">{t('issuer')}</span> {cert.issuer}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <style>{`
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-lg);
          margin-top: var(--space-xl);
        }

        .cert-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .cert-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: var(--space-md);
        }

        .cert-code {
          color: var(--accent);
        }

        .cert-badge {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          padding: 2px 8px;
          border-radius: 4px;
          color: var(--text-muted);
        }

        .cert-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: var(--space-md);
        }

        .cert-issuer {
          font-size: 0.8rem;
          color: var(--text-secondary);
          border-top: 1px dashed var(--border-subtle);
          padding-top: var(--space-sm);
        }

        .issuer-label {
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .certifications-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .certifications-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
