import React from "react";
import { meta } from "../data/portfolio";
import "./Hero.css";

const stats = [
  { val: "4",    lbl: "Certifications" },
  { val: "4+",   lbl: "Cloud Projects" },
  { val: "AWS",  lbl: "Primary Cloud" },
  { val: "CKA",  lbl: "Kubernetes Certified" },
];

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-eyebrow">
        <div className="hero-dot" />
        {meta.status}
      </div>
      <h1>
        DevOps Engineer<br />
        <span className="role">Cloud · Infrastructure · Automation</span>
      </h1>
      <p className="hero-desc">
        I build reliable, scalable infrastructure using Terraform, Kubernetes, and AWS —
        turning complex systems into clean, automated pipelines that teams can depend on.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn-primary">View Projects →</a>
        <a href="#about" className="btn-outline">About Me</a>
      </div>
      <div className="hero-stats">
        {stats.map((s) => (
          <div key={s.lbl}>
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
