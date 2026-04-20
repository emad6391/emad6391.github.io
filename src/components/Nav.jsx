import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">Ed Al<span>.</span></div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#certs">Certifications</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="nav-cta">Contact</a>
      </div>
    </nav>
  );
}
