import React from "react";
import { certifications } from "../data/portfolio";
import "./Certifications.css";

export default function Certifications() {
  return (
    <div className="section-wrap" id="certs">
      <div className="section-header">
        <div className="eyebrow">Certifications</div>
        <h2>Credentials</h2>
        <div className="section-sub">Industry-recognised qualifications</div>
      </div>
      <div className="certs-grid">
        {certifications.map((cert) => (
          <div key={cert.name} className="cert-card">
            <div className="cert-provider">{cert.provider}</div>
            <div className="cert-name">{cert.name}</div>
            <span className="cert-pill">✓ Certified</span>
          </div>
        ))}
      </div>
    </div>
  );
}
