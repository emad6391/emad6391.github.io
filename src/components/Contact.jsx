import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="section-wrap" id="contact">
      <div className="section-header">
        <div className="eyebrow">Contact</div>
        <h2>Get in Touch</h2>
        <div className="section-sub">Open to DevOps, Platform Engineering, and Cloud roles</div>
      </div>
      <div className="contact-layout">
        <div>
          <p className="contact-intro">
            If you're looking for a DevOps engineer who takes infrastructure seriously —
            from IaC to observability — I'd love to hear from you. Reach out via any channel below.
          </p>
          <div className="contact-list">
            <a href="mailto:ed@example.com" className="contact-row">
              <div className="contact-icon-wrap">✉</div>
              <div>
                <div className="contact-lbl">Email</div>
                <div className="contact-val">ed@example.com</div>
              </div>
            </a>
            <a href="https://github.com/edal" target="_blank" rel="noopener noreferrer" className="contact-row">
              <div className="contact-icon-wrap">⌥</div>
              <div>
                <div className="contact-lbl">GitHub</div>
                <div className="contact-val">github.com/edal</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/edal" target="_blank" rel="noopener noreferrer" className="contact-row">
              <div className="contact-icon-wrap">◈</div>
              <div>
                <div className="contact-lbl">LinkedIn</div>
                <div className="contact-val">linkedin.com/in/edal</div>
              </div>
            </a>
          </div>
        </div>
        <div className="status-card">
          <div>
            <div className="status-block-label">Current status</div>
            <div className="status-badge"><div className="s-dot" />Available for opportunities</div>
          </div>
          <div>
            <div className="status-block-label">Based in</div>
            <div className="location-val">London, United Kingdom</div>
          </div>
          <div>
            <div className="status-block-label">Open to</div>
            <div className="chips-row">
              <span className="chip">Remote</span>
              <span className="chip">Hybrid</span>
              <span className="chip">Contract</span>
              <span className="chip">Full-time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
