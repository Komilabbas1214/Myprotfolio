import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const educations = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Gujarat University, Ahmedabad",
    duration: "2022 - 2025",
    desc: "Completed collegiate courses in commerce, corporate accounting, management practices, and business communications, alongside self-guided full stack programming."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-5 bg-opacity-25" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', fontWeight: 600 }}>
              Academic History
            </h5>
            <h2 className="display-5 fw-bold mb-3">
              Education &amp; <span className="gradient-text">Qualifications</span>
            </h2>
            <p className="text-secondary">
              My academic qualifications that support my analytical and business foundations.
            </p>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="timeline-container">
              {educations.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                      <div>
                        <h3 className="h5 fw-bold mb-1 text-white d-flex align-items-center gap-2">
                          <FiBookOpen className="text-secondary" /> {edu.degree}
                        </h3>
                        <h4 className="h6 text-secondary m-0">{edu.institution}</h4>
                      </div>
                      <span 
                        className="badge text-white px-3 py-2 rounded-pill mt-2 mt-sm-0"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--secondary), var(--accent))',
                          fontSize: '0.8rem'
                        }}
                      >
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-secondary m-0 small" style={{ lineHeight: '1.7' }}>
                      {edu.desc}
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
