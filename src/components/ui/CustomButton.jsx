import React from 'react';

export const CustomButton = ({ children, href, onClick, variant = 'primary', type = 'button', className = '', disabled = false, ...props }) => {
  const baseClass = `btn btn-${variant} ${className}`;
  if (href) return <a href={href} className={baseClass} {...props}><span className="btn-text">{children}</span><span className="btn-arrow font-mono">→</span></a>;
  return <button type={type} onClick={onClick} className={baseClass} disabled={disabled} {...props}><span className="btn-text">{children}</span><span className="btn-arrow font-mono">→</span></button>;
};
