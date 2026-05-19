import { useState } from 'react';
import './ProjectModal.css';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        <div className="modal-body">
          {project.description && (
            <section className="modal-section">
              <h3>项目概述</h3>
              <p>{project.description}</p>
            </section>
          )}

          {project.findings && (
            <section className="modal-section">
              <h3>核心发现</h3>
              <div className="findings-list">
                {Object.entries(project.findings).map(([key, value]) => (
                  <div key={key} className="finding-item">
                    <span className="finding-number">{key.replace('finding', '')}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.highlights && (
            <section className="modal-section">
              <h3>核心成果</h3>
              <ul className="highlights-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </section>
          )}

          {project.metrics && (
            <section className="modal-section">
              <h3>关键指标</h3>
              <div className="metrics-grid">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-item">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.image && (
            <section className="modal-section">
              <h3>项目展示</h3>
              <img src={project.image} alt={project.title} className="modal-image" />
            </section>
          )}

          {project.link && (
            <section className="modal-section">
              <h3>交互演示</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="demo-link">
                查看交互看板 →
              </a>
            </section>
          )}

          {project.links && (
            <section className="modal-section">
              <h3>项目链接</h3>
              <div className="links-container">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </section>
          )}

          {project.technologies && (
            <section className="modal-section">
              <h3>技术栈</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
