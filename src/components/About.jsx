import React from "react";
import { about, skills } from "../data/portfolio";
import "./About.css";

const coreSkills = skills.filter((s) => s.hot).map((s) => s.label);
const tooling = ["Docker", "Helm", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana"];
const languages = ["Python", "Bash", "Linux", "Networking"];

export default function About() {
  return (
    <div className="section-wrap" id="about">
      <div className="section-header">
        <div className="eyebrow">About</div>
        <h2>My Story</h2>
        <div className="section-sub">How I got here and where I'm going</div>
      </div>
      <div className="about-layout">
        <div className="about-prose">
          {about.map((item) => (
            <p key={item.label}>{item.text}</p>
          ))}
        </div>
        <div className="about-sidebar">
          <div className="focus-card">
            <div className="focus-card-label">Core expertise</div>
            <div className="focus-tags">
              {coreSkills.map((s) => <span key={s} className="ftag">{s}</span>)}
            </div>
          </div>
          <div className="focus-card">
            <div className="focus-card-label">Tooling</div>
            <div className="focus-tags">
              {tooling.map((s) => <span key={s} className="ftag neutral">{s}</span>)}
            </div>
          </div>
          <div className="focus-card">
            <div className="focus-card-label">Languages & platforms</div>
            <div className="focus-tags">
              {languages.map((s) => <span key={s} className="ftag neutral">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
