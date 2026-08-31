import React from 'react';

export const SectionTitle = ({ tag = '', title = '', subtitle = '', id = '' }) => (
  <div className="section-title-wrapper reveal">
    {tag && <div className="section-tag font-mono"><span className="tag-bracket">&lt;</span><span>{tag}</span><span className="tag-bracket"> /&gt;</span></div>}
    {title && <h2 className="section-title" id={id}>{title}</h2>}
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
);
