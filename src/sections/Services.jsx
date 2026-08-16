import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiCpu, FiLayers, FiServer, FiSliders, FiLink } from 'react-icons/fi';

const services = [
  {
    icon: <FiLayout className="fs-1 text-primary mb-3" />,
    title: "Responsive Website Development",
    desc: "Crafting mobile-first, pixel-perfect websites. Optimizing load times and implementing SEO best practices for high engagement and conversion rates."
  },
  {
    icon: <FiCpu className="fs-1 text-secondary mb-3" />,
    title: "React Application Development",
    desc: "Building highly interactive Single Page Applications (SPAs). Integrating Redux Toolkit for complex global state management and modular reusable components."
  },
  {
    icon: <FiLayers className="fs-1 text-accent mb-3" />,
    title: "MERN Stack Development",
    desc: "Delivering end-to-end full-stack systems. Integrating MongoDB databases with Express/Node server setups and reactive frontend interfaces."
  },
  {
    icon: <FiServer className="fs-1 text-primary mb-3" />,
    title: "Firebase Integration",
    desc: "Implementing serverless designs, OAuth authentication gates, cloud storage databases, hosting structures, and real-time synchronization pipelines."
  },
  {
    icon: <FiSliders className="fs-1 text-secondary mb-3" />,
    title: "Admin Dashboard Development",
    desc: "Developing data-dense control panels and monitoring systems. Fully equipped with customizable data grids, user access controls, and chart summaries."
  },
  {
    icon: <FiLink className="fs-1 text-accent mb-3" />,
    title: "API Integration & Design",
    desc: "Architecting clean RESTful endpoints. Connecting payment gateways, third-party microservices, and social integrations securely."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', fontWeight: 600 }}>
              What I Offer
            </h5>
            <h2 className="display-5 fw-bold mb-3">
              Professional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-secondary">
              Providing customized, high-quality development solutions tailored to meet unique client and business goals.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <motion.div
                className="glass-card h-100 d-flex flex-column text-center text-md-start"
                whileHover={{ 
                  scale: 1.04,
                  borderColor: 'rgba(139, 92, 246, 0.3)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="d-flex justify-content-center justify-content-md-start">
                  {service.icon}
                </div>
                <h3 className="h5 fw-bold mb-3" style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>
                  {service.title}
                </h3>
                <p className="text-secondary mb-0 small" style={{ lineHeight: 1.65 }}>
                  {service.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
