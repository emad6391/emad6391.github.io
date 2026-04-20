import React from "react";
import "./index.css";
import "./components/Section.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <hr className="full-divider" />
      <About />
      <hr className="full-divider" />
      <Certifications />
      <hr className="full-divider" />
      <Projects />
      <hr className="full-divider" />
      <Contact />
      <Footer />
    </>
  );
}
