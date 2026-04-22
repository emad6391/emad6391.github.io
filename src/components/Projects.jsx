import React from "react";
import { projects } from "../data/portfolio";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="section-wrap" id="projects">
      <div className="section-header">
        <div className="eyebrow">Projects</div>
        <h2>Featured Work</h2>
        <div className="section-sub">Infrastructure and tooling built in production environments</div>
      </div>
      <div className="projects-stack">
        {projects.map((project, i) => (
          <div key={project.title} className="proj-row">
            <div className="proj-num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="proj-title">{project.title}</div>
              <div className="proj-desc">{project.description}</div>
              <div className="proj-chips">
                {project.tech.map((t) => (
                  <span key={t} className="proj-chip">{t}</span>
                ))}
              </div>
            </div>
            {project.link && (
              <a href={project.link} className="proj-link" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
