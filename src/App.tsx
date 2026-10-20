import './App.css';

export default function App() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Mohammed Aamer Elias</h1>
        <p className="subtitle">Computer Science Graduate & Full-Stack Developer</p>
        <p className="location">📍 Hyderabad, India</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Get in Touch</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Science Engineering graduate from Muffakham Jah College with a strong passion for full-stack development, AI integrations, and building scalable web applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>Tech Stack & Skills</h2>
        <div className="skills-grid">
          <span>Python</span>
          <span>JavaScript / TypeScript</span>
          <span>React & Vite</span>
          <span>Node.js & Express</span>
          <span>Django & FastAPI</span>
          <span>SQL & Firebase</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>EduPulse LMS</h3>
            <p>An AI-enabled learning management system featuring automated MCQ quiz generation via Gemini API and dynamic text-to-speech audio notes.</p>
          </div>
          <div className="project-card">
            <h3>Food Expiry Tracker</h3>
            <p>A full-stack web application built with React, Firebase, and Python featuring dynamic expiry notifications and live Vercel deployment.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Let's Connect</h2>
        <p>Feel free to reach out for collaborations or opportunities.</p>
        <div className="social-links">
          <a href="https://github.com/Aamer10121425" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>
      </section>
    </div>
  );
}
