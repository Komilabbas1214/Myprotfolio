import React from 'react';
import { motion } from 'framer-motion';

// Core circular skills data
const coreSkills = [
  { name: 'React.js', percent: 95, color: '#3B82F6' },
  { name: 'Node.js', percent: 90, color: '#8B5CF6' },
  { name: 'MongoDB', percent: 88, color: '#10B981' },
  { name: 'JavaScript', percent: 92, color: '#F59E0B' },
];

// Linear skills grouped by category
const linearSkillCategories = [
  {
    category: "Frontend & Styling",
    skills: [
      { name: "HTML5 & CSS3", percent: 95 },
      { name: "Bootstrap 5", percent: 90 },
      { name: "Redux Toolkit", percent: 85 },
    ]
  },
  {
    category: "Backend & DB Tools",
    skills: [
      { name: "Express.js", percent: 88 },
      { name: "Firebase Suite", percent: 80 },
    ]
  },
  {
    category: "Development Utilities",
    skills: [
      { name: "Git & GitHub", percent: 88 },
      { name: "VS Code & Postman", percent: 90 },
      { name: "Figma (UI Design)", percent: 75 },
    ]
  }
];

function SkillCircle({ name, percent, color }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius; // 251.2
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="text-center">
      <div className="skill-circle-container mb-3 interactive">
        <svg className="skill-circle-svg">
          <defs>
            <linearGradient id={`grad-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--secondary)" />
            </linearGradient>
          </defs>
          <circle 
            className="skill-circle-bg" 
            cx="60" 
            cy="60" 
            r={radius} 
          />
          <motion.circle 
            className="skill-circle-progress" 
            cx="60" 
            cy="60" 
            r={radius} 
            stroke={`url(#grad-${name})`}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="skill-circle-text text-white">{percent}%</div>
      </div>
      <h4 className="h6 fw-semibold m-0">{name}</h4>
    </div>
  );
}

function SkillBar({ name, percent }) {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-2">
        <span className="fw-semibold text-secondary small">{name}</span>
        <span className="fw-bold text-primary small">{percent}%</span>
      </div>
      <div 
        className="progress" 
        style={{ 
          height: '6px', 
          background: 'rgba(255, 255, 255, 0.05)', 
          borderRadius: '3px',
          overflow: 'hidden'
        }}
      >
        <motion.div 
          className="progress-bar"
          role="progressbar"
          style={{ 
            height: '100%', 
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
            borderRadius: '3px'
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-5 glow-effect">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', fontWeight: 600 }}>
              My Expertise
            </h5>
            <h2 className="display-5 fw-bold mb-3">
              Skills &amp; <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-secondary">
              A comprehensive view of my engineering toolbox. Divided into core MERN technologies and other design/dev systems.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="row g-5">
          {/* Core Circular Skills */}
          <div className="col-lg-5">
            <motion.div 
              className="glass-card h-100 d-flex flex-column justify-content-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="h5 fw-bold mb-4 pb-2 text-center text-lg-start" style={{ borderBottom: '1px solid var(--card-border)' }}>
                Core Specialization
              </h3>
              
              <div className="row row-cols-2 g-4 py-3 justify-content-center">
                {coreSkills.map((skill, index) => (
                  <div key={index} className="col d-flex justify-content-center">
                    <SkillCircle 
                      name={skill.name} 
                      percent={skill.percent} 
                      color={skill.color} 
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Linear Progress Bars grouped by category */}
          <div className="col-lg-7">
            <div className="d-flex flex-column gap-4">
              {linearSkillCategories.map((cat, catIdx) => (
                <motion.div 
                  key={catIdx}
                  className="glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                >
                  <h3 className="h6 text-primary text-uppercase tracking-wider fw-bold mb-4">{cat.category}</h3>
                  <div className="row row-cols-1 row-cols-md-2 g-x-4">
                    {cat.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="col">
                        <SkillBar name={skill.name} percent={skill.percent} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
