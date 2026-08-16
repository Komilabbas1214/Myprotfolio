import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiSend, FiMail } from 'react-icons/fi';
import avatarImg from '../assets/profile_avatar.png';

const words = ['React Developer', 'MERN Stack Developer', 'Frontend Developer'];

function TypewriterEffect() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  // Cursor blinking
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <span style={{ minHeight: '3rem', display: 'inline-block' }}>
      {words[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, color: 'var(--accent)', fontWeight: 'bold' }}>|</span>
    </span>
  );
}

export default function Hero() {
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

  return (
    <section id="hero" className="d-flex align-items-center min-vh-100 glow-effect overflow-hidden py-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Text Content */}
          <div className="col-lg-7 text-center text-lg-start order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-uppercase tracking-wider mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', fontWeight: 600 }}>
                Welcome to my Universe
              </h5>
              
              <h1 className="display-3 fw-bold mb-3" style={{ lineHeight: 1.15 }}>
                Hi, I'm <br className="d-block d-sm-none" />
                <span className="gradient-text">Komil Abbas Dosani</span>
              </h1>
              
              <h2 className="h2 fw-semibold mb-4 d-flex align-items-center justify-content-center justify-content-lg-start gap-2" style={{ color: 'var(--text-primary)' }}>
                I am a <TypewriterEffect />
              </h2>

              <p className="lead mb-5 text-secondary" style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.7' }}>
                I build premium, end-to-end full stack web applications using MongoDB, Express, React, and Node.js. Focused on crafting responsive interfaces, scalable backend architectures, and exceptional user experiences.
              </p>

              {/* Call to Actions */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <a 
                  href="#contact" 
                  onClick={(e) => handleScrollTo(e, 'contact')} 
                  className="btn btn-primary px-4 py-3 rounded-pill fw-semibold shadow d-flex align-items-center gap-2 interactive"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    border: 'none',
                    transition: 'var(--transition)'
                  }}
                >
                  <FiSend /> Hire Me
                </a>

                <a 
                  href="#contact" 
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="btn btn-outline-secondary px-4 py-3 rounded-pill fw-semibold d-flex align-items-center gap-2 interactive"
                  style={{
                    color: 'var(--text-primary)',
                    borderColor: 'var(--card-border)',
                    background: 'var(--card-bg)',
                    transition: 'var(--transition)'
                  }}
                >
                  <FiMail /> Contact Me
                </a>

                <a 
                  href="#resume" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Resume download triggered: Komil_Abbas_Dosani_Resume.pdf');
                  }}
                  className="btn btn-link px-4 py-3 rounded-pill fw-semibold text-decoration-none d-flex align-items-center gap-2 interactive"
                  style={{
                    color: 'var(--accent)',
                    border: '1px solid var(--accent)',
                    background: 'rgba(6, 182, 212, 0.05)',
                    transition: 'var(--transition)'
                  }}
                >
                  <FiDownload /> Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Avatar Illustration */}
          <div className="col-lg-5 text-center order-1 order-lg-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
              className="position-relative d-inline-block"
            >
              {/* Outer Glow Ring */}
              <div 
                className="position-absolute start-50 top-50 translate-middle rounded-circle pulse-bg" 
                style={{
                  width: '380px',
                  height: '380px',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  filter: 'blur(35px)',
                  opacity: 0.2,
                  zIndex: -1
                }}
              />

              {/* Glowing decorative shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="position-absolute start-50 top-50 translate-middle border border-dashed rounded-circle"
                style={{
                  width: '350px',
                  height: '350px',
                  borderColor: 'rgba(6, 182, 212, 0.3)',
                  borderWidth: '2px',
                  zIndex: -1
                }}
              />

              {/* Avatar Frame with glass border */}
              <div 
                className="floating"
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  padding: '8px',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={avatarImg} 
                  alt="Komil Abbas Dosani Avatar" 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid var(--bg-color)',
                    backgroundColor: '#1E1B4B'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
