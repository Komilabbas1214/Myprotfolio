import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Freelance / Self-Initiated Projects",
    duration: "2024 - Present",
    desc: "Designed and engineered secure end-to-end full stack platforms. Implemented JWT authentications, optimized database search indexings in MongoDB, structured Express routers, and integrated third-party payment gates."
  },
  {
    role: "React Projects Developer",
    company: "Open Source Contributor & Creator",
    duration: "2023 - 2024",
    desc: "Focused on reactive web client builds. Developed complex global state stores using Redux Toolkit, integrated Axios for backend API communication, and created responsive layouts using Bootstrap grids."
  },
  {
    role: "Frontend Development Explorer",
    company: "Engineering Education & Academy Projects",
    duration: "2022 - 2023",
    desc: "Mastered fundamental web disciplines. Handcoded responsive pages in HTML5/CSS3, optimized layouts using Bootstrap 5 classes, and authored vanilla JavaScript scripts for dynamic user interactions."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', fontWeight: 600 }}>
              Career Milestones
            </h5>
            <h2 className="display-5 fw-bold mb-3">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-secondary">
              A timeline detailing my experience building web interfaces and core backend systems.
            </p>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="timeline-container">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                      <div>
                        <h3 className="h5 fw-bold mb-1 text-white d-flex align-items-center gap-2">
                          <FiBriefcase className="text-primary" /> {exp.role}
                        </h3>
                        <h4 className="h6 text-secondary m-0">{exp.company}</h4>
                      </div>
                      <span 
                        className="badge text-white px-3 py-2 rounded-pill mt-2 mt-sm-0"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                          fontSize: '0.8rem'
                        }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-secondary m-0 small" style={{ lineHeight: '1.7' }}>
                      {exp.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
