import React, { useState, useEffect } from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

const quickLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer 
      style={{ 
        background: 'rgba(10, 15, 30, 0.95)', 
        borderTop: '1px solid var(--card-border)',
        position: 'relative',
        zIndex: 100
      }} 
      className="py-5"
    >
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between text-center text-md-start">
          {/* Brand Logo & Tag */}
          <div className="col-md-4">
            <a 
              href="#hero" 
              onClick={(e) => handleScrollTo(e, 'hero')} 
              className="fs-4 fw-bold gradient-text text-decoration-none"
            >
              &lt;Komil.D /&gt;
            </a>
            <p className="text-secondary small mt-2 mb-0" style={{ maxWidth: '280px' }}>
              Building high-fidelity full stack MERN applications with attention to detail and responsiveness.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="col-md-5">
            <ul className="list-inline m-0 d-flex flex-wrap justify-content-center gap-3">
              {quickLinks.map((link) => (
                <li key={link.id} className="list-inline-item m-0">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="text-secondary small text-decoration-none hover-white transition"
                    style={{ transition: 'var(--transition)' }}
                    onMouseEnter={(e) => e.target.style.color = '#FFF'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Shortcut */}
          <div className="col-md-3 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://github.com/komilabbasdosani" target="_blank" rel="noreferrer" className="text-secondary hover-white fs-5 transition"><FiGithub /></a>
              <a href="https://linkedin.com/in/komilabbasdosani" target="_blank" rel="noreferrer" className="text-secondary hover-white fs-5 transition"><FiLinkedin /></a>
              <a href="https://instagram.com/komilabbasdosani" target="_blank" rel="noreferrer" className="text-secondary hover-white fs-5 transition"><FiInstagram /></a>
              <a href="mailto:komilabbasdosani@gmail.com" className="text-secondary hover-white fs-5 transition"><FiMail /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-secondary opacity-10" />

        {/* Copyright block */}
        <div className="row">
          <div className="col text-center">
            <p className="text-secondary small m-0">
              &copy; {new Date().getFullYear()} Komil Abbas Dosani. All Rights Reserved. Crafted with React &amp; Bootstrap.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn position-fixed bottom-0 end-0 m-4 rounded-circle glass-card p-0 d-flex align-items-center justify-content-center interactive"
          style={{
            width: '50px',
            height: '50px',
            zIndex: 9999,
            boxShadow: '0 5px 25px rgba(59, 130, 246, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'var(--card-bg)',
            color: 'var(--text-primary)',
            transition: 'var(--transition)'
          }}
          aria-label="Back to top"
        >
          <FiArrowUp className="fs-5" />
        </button>
      )}
    </footer>
  );
}
