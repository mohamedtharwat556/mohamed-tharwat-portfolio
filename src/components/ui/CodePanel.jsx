import React from 'react';

export const CodePanel = ({ title = 'code.jsx', code = '', language = 'js', lineNumbers = true }) => {
  const lines = code.trim().split('\n');
  return (
    <div className="code-panel">
      <div className="code-panel-header">
        <div className="code-panel-dots"><span className="dot red"/><span className="dot yellow"/><span className="dot green"/></div>
        <div className="code-panel-title font-mono">{title}</div>
        <div className="code-panel-lang font-mono">{language}</div>
      </div>
      <div className="code-panel-body">
        <pre className="code-panel-pre font-mono">
          {lines.map((line, i) => (
            <div key={i} className="code-line">
              {lineNumbers && <span className="code-line-num">{i + 1}</span>}
              <span className="code-line-content" dangerouslySetInnerHTML={{ __html: highlightLine(line) }} />
            </div>
          ))}
        </pre>
      </div>
      <style>{`
        .code-panel { border:1px solid var(--border-subtle);border-radius:var(--radius-lg);overflow:hidden;background:#0a0d14; }
        .code-panel-header { display:flex;align-items:center;gap:0.75rem;padding:0.7rem 1rem;background:#0d1017;border-bottom:1px solid var(--border-subtle); }
        .code-panel-dots { display:flex;gap:5px; }
        .dot { width:10px;height:10px;border-radius:50%; }
        .dot.red{background:#ff5f57} .dot.yellow{background:#febc2e} .dot.green{background:#28c840}
        .code-panel-title { flex:1;font-size:0.8rem;color:var(--text-secondary); }
        .code-panel-lang { font-size:0.75rem;color:var(--text-muted); }
        .code-panel-body { overflow-x:auto; }
        .code-panel-pre { padding:1rem 0.5rem;margin:0;font-size:0.8rem;line-height:1.75; }
        .code-line { display:flex;gap:1rem; }
        .code-line-num { min-width:24px;color:var(--text-muted);text-align:right;user-select:none;font-size:0.75rem;padding-top:0; }
        .code-line-content { color:#a9b1c5; }
        .syn-keyword { color:#c792ea; } .syn-string { color:#c3e88d; } .syn-comment { color:#546e7a;font-style:italic; }
        .syn-attr { color:#ffcb6b; } .syn-value { color:#f78c6c; } .syn-fn { color:#82aaff; } .syn-tag { color:#f07178; }
      `}</style>
    </div>
  );
};

function highlightLine(line) {
  return line
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/(\/\/.*)/g, '<span class="syn-comment">$1</span>')
    .replace(/\b(import|export|const|let|var|function|return|async|await|from|default|class|extends|new|if|else|for|of|in|true|false|null|undefined)\b/g, '<span class="syn-keyword">$1</span>')
    .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="syn-string">$1</span>');
}
