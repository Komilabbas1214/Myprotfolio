import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Timeline' },
  { id: 'testimonials', label: 'Feedback' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll progress and header scroll background
  useEffect(() => {
    const handleScroll = () => {
      // Progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Navbar scroll effect
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme setup and toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  // Section Observer for setting active states
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the middle of screen
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Main Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top transition ${
          isScrolled 
            ? 'py-2 shadow-sm' 
            : 'py-3'
        }`}
        style={{
          background: isScrolled 
            ? 'var(--card-bg)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--card-border)' : '1px solid transparent',
          zIndex: 1000,
        }}
      >
        <div className="container">
          {/* Logo */}
          <a 
            className="navbar-brand fw-bold fs-4 gradient-text" 
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            &lt;Komil.D /&gt;
          </a>

          {/* Controls Mobile View */}
          <div className="d-flex align-items-center gap-2 d-lg-none">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-link text-decoration-none p-2 border-0"
              style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-link text-decoration-none p-2 border-0"
              style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end align-items-center">
            <ul className="navbar-nav me-3 gap-2">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`nav-link px-3 fw-500 rounded transition ${
                      activeSection === link.id 
                        ? 'text-primary fw-semibold' 
                        : 'text-secondary'
                    }`}
                    style={{
                      color: activeSection === link.id ? 'var(--primary)' : 'var(--text-secondary)',
                      position: 'relative'
                    }}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span 
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '15%',
                          width: '70%',
                          height: '2px',
                          background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                          borderRadius: '2px'
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn border-0 p-2 ms-2 rounded-circle"
              style={{ 
                color: 'var(--text-primary)', 
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun style={{color: 'var(--accent)'}} /> : <FiMoon style={{color: 'var(--primary)'}} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div
            className="w-100 d-lg-none"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              background: 'var(--bg-color)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--card-border)',
              padding: '20px 0',
              zIndex: 999,
            }}
          >
            <div className="container">
              <ul className="list-unstyled d-flex flex-column gap-3 text-center m-0">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`fs-5 py-2 d-block transition ${
                        activeSection === link.id ? 'text-primary fw-bold' : 'text-secondary'
                      }`}
                      style={{
                        color: activeSection === link.id ? 'var(--primary)' : 'var(--text-secondary)'
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
