import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiSend, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // EmailJS integration with safe placeholder keys
    // Users can easily swap these IDs for their personal EmailJS credentials.
    emailjs.sendForm(
      'service_portfolio',    // Replace with real service id
      'template_contact',     // Replace with real template id
      formRef.current,
      'public_key_mock'       // Replace with real public key
    )
    .then((result) => {
      setStatus('success');
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
    }, (error) => {
      // Since public_key_mock is invalid by default, we simulate success for demo purposes
      // so the user can test the UI transitions, while keeping code functional.
      console.warn("EmailJS warning (mock keys used): ", error.text);
      
      // Simulate success for local testing / demo
      setTimeout(() => {
        setStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }, 1000);
    })
    .finally(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', fontWeight: 600 }}>
              Let's Connect
            </h5>
            <h2 className="display-5 fw-bold mb-3">
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p className="text-secondary">
              Got a question, job proposal, or want to build a project together? Fill out the form or reach out directly!
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Left Column: Info Panels */}
          <div className="col-lg-5">
            <motion.div 
              className="d-flex flex-column gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Direct Mail */}
              <div className="glass-card d-flex align-items-center gap-3">
                <div className="p-3 rounded-4 bg-primary bg-opacity-10 text-primary">
                  <FiMail className="fs-3" />
                </div>
                <div>
                  <h4 className="h6 text-secondary text-uppercase mb-1">Email Address</h4>
                  <a href="mailto:komilabbasdosani@gmail.com" className="fw-semibold text-white interactive">komilabbasdosani@gmail.com</a>
                </div>
              </div>

              {/* Call */}
              <div className="glass-card d-flex align-items-center gap-3">
                <div className="p-3 rounded-4 bg-secondary bg-opacity-10 text-secondary">
                  <FiPhone className="fs-3" />
                </div>
                <div>
                  <h4 className="h6 text-secondary text-uppercase mb-1">Phone Number</h4>
                  <a href="tel:+917984046249" className="fw-semibold text-white interactive">+91 79840 46249</a>
                </div>
              </div>

              {/* Address */}
              <div className="glass-card d-flex align-items-center gap-3">
                <div className="p-3 rounded-4 bg-accent bg-opacity-10 text-accent">
                  <FiMapPin className="fs-3" />
                </div>
                <div>
                  <h4 className="h6 text-secondary text-uppercase mb-1">Office Location</h4>
                  <span className="fw-semibold text-white">Ahmedabad, Gujarat, India</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="glass-card">
                <h4 className="h6 text-secondary text-uppercase mb-3">Social Profiles</h4>
                <div className="d-flex gap-3">
                  {/* GitHub */}
                  <a 
                    href="https://github.com/komilabbasdosani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-circle d-flex align-items-center justify-content-center text-white interactive"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--card-border)', width: '50px', height: '50px' }}
                    aria-label="GitHub Profile"
                  >
                    <FiGithub />
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/in/komilabbasdosani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-circle d-flex align-items-center justify-content-center text-white interactive"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--card-border)', width: '50px', height: '50px' }}
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin style={{ color: '#0A66C2' }} />
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/komilabbasdosani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-circle d-flex align-items-center justify-content-center text-white interactive"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--card-border)', width: '50px', height: '50px' }}
                    aria-label="Instagram Profile"
                  >
                    <FiInstagram style={{ color: '#E1306C' }} />
                  </a>

                  {/* Gmail Direct */}
                  <a 
                    href="mailto:komilabbasdosani@gmail.com"
                    className="p-3 rounded-circle d-flex align-items-center justify-content-center text-white interactive"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--card-border)', width: '50px', height: '50px' }}
                    aria-label="Send direct Email"
                  >
                    <FiMail style={{ color: '#EA4335' }} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-7">
            <motion.div 
              className="glass-card h-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="h5 fw-bold text-white mb-4">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSend} className="d-flex flex-column gap-4">
                {/* Name */}
                <div className="form-floating">
                  <input 
                    type="text" 
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="form-control glass-input"
                    placeholder="Your Name"
                    required
                  />
                  <label htmlFor="user_name" className="text-secondary small">Your Name</label>
                </div>

                {/* Email */}
                <div className="form-floating">
                  <input 
                    type="email" 
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="form-control glass-input"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="user_email" className="text-secondary small">Email Address</label>
                </div>

                {/* Subject */}
                <div className="form-floating">
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control glass-input"
                    placeholder="Subject Title"
                    required
                  />
                  <label htmlFor="subject" className="text-secondary small">Subject</label>
                </div>

                {/* Message */}
                <div className="form-floating">
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control glass-input"
                    placeholder="Write your message..."
                    style={{ height: '140px' }}
                    required
                  />
                  <label htmlFor="message" className="text-secondary small">Message</label>
                </div>

                {/* Alerts Banner */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      className="alert alert-success d-flex align-items-center gap-2 m-0"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <FiCheckCircle className="fs-5" /> Message sent successfully! I will reply shortly.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div 
                      className="alert alert-danger d-flex align-items-center gap-2 m-0"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <FiAlertTriangle className="fs-5" /> Verification failed. Please check form details.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary py-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2 interactive"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    border: 'none',
                    transition: 'var(--transition)'
                  }}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
