import './App.css';
import { useState } from 'react';
import SwarmCursor from './components/SwarmCursor/SwarmCursor.jsx';
import SayHi from './assets/SayHi.mp4';
import about from './assets/about.png';

import skill1 from './assets/skill1.png';
import skill2 from './assets/skill2.png';
import skill3 from './assets/skill3.png';
import skill4 from './assets/skill4.png';
import skill5 from './assets/skill5.png';
import skill6 from './assets/skill6.png';
import skill7 from './assets/skill7.png';
import skill8 from './assets/skill8.png';
import priviwe from './assets/projectpriviwe.png';
import LinkedIn from './assets/LinkedIn.png';
import Instagam from './assets/Instagram.png';
import Twitter from './assets/Twitter.png'

import ContactForm from './components/ContactForm/ContactForm.jsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* Cursor effect */}
      <SwarmCursor
        color="#ffffff"
        accentColor="#ffffff"
        count={8}
        size={5}
        speed={2.5}
        spread={100}
        wander={0.25}
        trail={0.75}
        scatterOnClick
      />

      {/* Actual portfolio */}
      <div className="portfolio-content">
        <header>
          <div className="logo">
            <h1>VGK</h1>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            <a
              href="/public/resume.pdf"
              className="resume-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </nav>

        </header>

        <main>

          <section id="hero">
            <div className='hero-left-section'>
              <p className='name'><sup className='small-text'>I'm</sup>Venu gopala krishna</p>
              <p className='tag-line'>A B.Tech CAI student exploring technology and discovering what comes next.</p>
              <div className='btn-container'>
                <a href='#contact' className='btn'>Let's Connect</a>
                <a href='#projects' className='btn'>Explore My Work</a>
              </div>
            </div>
            <div className='heroright-section'>
              <video loop muted autoPlay className='say-hi-media'>
                <source src={SayHi} type="video/mp4"></source>
              </video>
            </div>
          </section>

          <section id="about">
            <h2 className='about heading'>About</h2>
            <div className='about-container'>
              <div className='about-left-section'>
                <img src={about} alt="about-expresion" />
              </div>
              <div className='about-right-section glass-card '>
                <p className='about-para'>I'm currently pursuing my B.Tech in computer science and engineering [artificial intelligence] (CAI). As I continue my B.Tech journey, I'm exploring different areas of technology, learning through new experiences, and discovering what truly interests me.</p>
                <p className='about-para'>I’m still figuring out what I want my future to look like — and I see that as part of the journey. For now, I’m focused on learning, experimenting, building, and growing along the way.</p>
              </div>
            </div>
          </section>

          <section id="skills">

            <h2 className="skills-heading">Skill's</h2>
            

            <div className="skills-container">
              {/* Technical Skills */}
              <div className="skills-category">

                <h3>Technical Skills</h3>

                <div className="skills-grid">

                  <div className="skill-card">
                    <img src={skill4} alt="Java" />
                    <span>Java</span>
                  </div>

                  <div className="skill-card">
                    <img src={skill6} alt="Python" />
                    <span>Python</span>
                  </div>

                  <div className="skill-card">
                    <img src={skill3} alt="HTML" />
                    <span>HTML</span>
                  </div>

                  <div className="skill-card">
                    <img src={skill2} alt="CSS" />
                    <span>CSS</span>
                  </div>

                </div>

              </div>


              {/* Strengths */}
              <div className="skills-category">

                <h3>Strengths</h3>

                <div className="skills-grid">

                  <div className="skill-card">
                    <img src={skill5} alt="Problem Solving" />
                    <span>Problem Solving</span>
                  </div>

                  <div className="skill-card">
                    <img src={skill7} alt="Teamwork" />
                    <span>Teamwork</span>
                  </div>

                  <div className="skill-card">
                    <img src={skill1} alt="Adaptability" />
                    <span>Adaptability</span>
                  </div>

                  <div className="skill-card">
                    <img src={skill8} alt="Time Management" />
                    <span>Time Management</span>
                  </div>

                </div>

              </div>

            </div>

          </section>


          <section id="projects">
            <h2>Projects</h2>
            <div className='Project'>
              <div className="project-section">

                <div className="project-description">
                  <h2 className="project-title">Project Title</h2>
                  <p className="project-text">
                    A modern and responsive portfolio website built with React.js,
                    showcasing projects, skills, and experience through a clean and
                    interactive interface.
                  </p>
                </div>

                {/* Right side: Project Preview */}
                <div className="project-preview">
                  <img
                    src={priviwe}
                    alt="Portfolio project preview"
                    className="preview-image"
                  />
                </div>
              </div>

            </div>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <ContactForm />
          </section>
        </main>

        <footer>
          <div>
            <p>© 2026 Venu Kuraganti. All rights reserved.</p>
          </div>
          <div className='social-media'>
            <a href="https://www.linkedin.com/in/venu-gopala-krishna-kuraganti-407049306/" target='_blank'> <img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="https://www.instagram.com/chini_krishna048?igsi=bjhibzMzcTJmN2ow" target='_blank'><img src={Instagam} alt="Instagram" /></a>
            <a href="https://x.com/Krishna_14326" target='_blank'><img src={Twitter} alt="Twitter" style={{ border: '1px solid white', borderRadius: '10px' }} /></a>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
