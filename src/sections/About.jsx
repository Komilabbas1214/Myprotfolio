import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiAward, FiBookOpen, FiCpu } from 'react-icons/fi';

export default function About() {
  const cards = [
    {
      icon: <FiBookOpen className="text-primary fs-3 mb-3" />,
      title: "Learning & Growth",
      value: "3+ Years",
      desc: "Dedicated to mastering modern web development frameworks and architectures."
    },
    {
      icon: <FiCode className="text-secondary fs-3 mb-3" />,
      title: "Projects Completed",
      value: "20+ Apps",
      desc: "Ranging from responsive frontend designs to complex MERN backend architectures."
    },
    {
      icon: <FiCpu className="text-accent fs-3 mb-3" />,
      title: "Core Stack",
      value: "MERN Stack",
      desc: "Highly specialized in MongoDB, Express, React, and Node.js solutions."
    }
  ];

  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Left Column: Grid of Info Cards */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="row g-4">
              {cards.map((card, idx) => (
                <div key={idx} className={idx === 2 ? "col-12" : "col-md-6"}>
                  <motion.div
                    className="glass-card h-100"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    {card.icon}
                    <h3 className="h4 mb-2 fw-bold">{card.value}</h3>
                    <h4 className="h6 text-uppercase tracking-wider text-secondary mb-3">{card.title}</h4>
                    <p className="text-secondary m-0 small" style={{ lineHeight: 1.6 }}>{card.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="col-lg-6 order-1 order-lg-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-uppercase mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', fontWeight: 600 }}>
                About Me
              </h5>
              
              <h2 className="display-5 fw-bold mb-4">
                Crafting Scalable <span className="gradient-text">Web Systems</span>
              </h2>

              <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                Hello! I am <strong>Komil Abbas Dosani</strong>, a dedicated MERN Stack Developer. My journey in software development is fueled by an intense passion for building modern web applications that are as visually stunning as they are technically robust.
              </p>

              <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                I specialize in both frontend design (using tools like <strong>React</strong> and <strong>Bootstrap</strong>) and robust backend servers (powered by <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>). I strongly believe in creating responsive interfaces, structured codebases, and writing clean APIs that provide developers and end-users alike with top-tier experiences.
              </p>

              <div className="p-4 rounded-4" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <h4 className="h6 fw-bold text-uppercase text-primary mb-3 d-flex align-items-center gap-2">
                  <FiAward style={{ color: 'var(--accent)' }} /> Engineering Philosophy
                </h4>
                <p className="text-secondary m-0 small" style={{ lineHeight: 1.6 }}>
                  "Code is like humor. When you have to explain it, it’s bad." I strive to build systems that are intuitive, easy to maintain, and performant. Leveraging cutting-edge technologies and modern practices is at the core of my daily development lifecycle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
