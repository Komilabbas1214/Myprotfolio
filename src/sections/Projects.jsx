import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiCheck, FiShoppingCart, FiPlus, FiTrash2, FiCalendar, FiUser } from 'react-icons/fi';

import imgEcommerce from '../assets/project_ecommerce.png';
import imgHotel from '../assets/project_hotel.png';
import imgTodo from '../assets/project_todo.png';
import imgContact from '../assets/project_contact.png';

const projectsData = [
  {
    id: 1,
    title: "React E-Commerce Website",
    desc: "A full-featured digital shop showing products, shopping cart system, user login gates, and product listing controls.",
    image: imgEcommerce,
    technologies: ["React.js", "Redux Toolkit", "Firebase", "Bootstrap 5"],
    github: "https://github.com/komailabbasdosani/react-ecommerce",
    features: [
      "Shopping Cart with dynamic totals calculation",
      "Firebase user signup and authentication",
      "Admin Panel dashboard to add/delete products",
      "Redux Toolkit global state store"
    ]
  },
  {
    id: 2,
    title: "Hotel Management System",
    desc: "Reservations tracking workspace that registers guest lists, records dates, and manages check-ins/check-outs.",
    image: imgHotel,
    technologies: ["React.js", "Bootstrap 5", "Local Storage", "CRUD"],
    github: "https://github.com/komailabbasdosani/hotel-management",
    features: [
      "Create, Read, Update, and Delete guest bookings",
      "Room availability calendar matrix",
      "Persistent record keeping using Local Storage",
      "Filter bookings by checked-in status"
    ]
  },
  {
    id: 3,
    title: "Todo App",
    desc: "A neat daily planner for logging goals, sorting urgent priorities, and recording checklists.",
    image: imgTodo,
    technologies: ["React.js", "Bootstrap 5", "Session Storage", "CRUD"],
    github: "https://github.com/komailabbasdosani/react-todo-app",
    features: [
      "Add, toggle, and delete daily tasks",
      "Priority badges (High, Medium, Low)",
      "Filter by Active / Completed status",
      "Clears on browser session end"
    ]
  },
  {
    id: 4,
    title: "Contact Management System",
    desc: "CRM index directory synced with JSON servers to load user directories, add contacts, and update records.",
    image: imgContact,
    technologies: ["React.js", "Redux Toolkit", "JSON Server", "Axios"],
    github: "https://github.com/komailabbasdosani/contact-manager",
    features: [
      "Load records from Mock REST API using Axios",
      "Redux Toolkit slice for centralized contact data",
      "Form validation for phone and email details",
      "Search directory filtering bar"
    ]
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [demoState, setDemoState] = useState(null);

  // Micro-Simulators state controllers
  const initDemo = (projectId) => {
    if (projectId === 1) { // E-Commerce
      setDemoState({
        cart: [],
        products: [
          { id: 1, name: "Neon Mechanical Keyboard", price: 89 },
          { id: 2, name: "Wireless RGB Gaming Mouse", price: 45 },
          { id: 3, name: "UltraWide Curved Monitor", price: 299 }
        ]
      });
    } else if (projectId === 2) { // Hotel
      setDemoState({
        bookings: [
          { id: 1, name: "John Doe", room: "302", checkIn: "2026-08-10" },
          { id: 2, name: "Alice Smith", room: "105", checkIn: "2026-08-12" }
        ],
        newGuest: '',
        newRoom: '',
        newDate: ''
      });
    } else if (projectId === 3) { // Todo
      setDemoState({
        todos: [
          { id: 1, text: "Finish portfolio site structural design", done: true },
          { id: 2, text: "Connect EmailJS contact module", done: false }
        ],
        newText: ''
      });
    } else if (projectId === 4) { // Contact
      setDemoState({
        contacts: [
          { id: 1, name: "Komail Abbas", email: "komail@gmail.com", phone: "+92 300 1234567" },
          { id: 2, name: "Sarah Connor", email: "sarah@sky.net", phone: "+1 555 98765" }
        ],
        name: '', email: '', phone: ''
      });
    }
  };

  // E-Commerce Demo Actions
  const addToCart = (product) => {
    setDemoState(prev => {
      const existing = prev.cart.find(item => item.id === product.id);
      if (existing) {
        return {
          ...prev,
          cart: prev.cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
        };
      }
      return { ...prev, cart: [...prev.cart, { ...product, qty: 1 }] };
    });
  };

  const removeFromCart = (id) => {
    setDemoState(prev => ({
      ...prev,
      cart: prev.cart.filter(item => item.id !== id)
    }));
  };

  // Hotel Demo Actions
  const addBooking = (e) => {
    e.preventDefault();
    if (!demoState.newGuest || !demoState.newRoom) return;
    const newB = {
      id: Date.now(),
      name: demoState.newGuest,
      room: demoState.newRoom,
      checkIn: demoState.newDate || new Date().toISOString().split('T')[0]
    };
    setDemoState(prev => ({
      ...prev,
      bookings: [...prev.bookings, newB],
      newGuest: '',
      newRoom: '',
      newDate: ''
    }));
  };

  const deleteBooking = (id) => {
    setDemoState(prev => ({
      ...prev,
      bookings: prev.bookings.filter(b => b.id !== id)
    }));
  };

  // Todo Demo Actions
  const addTodo = (e) => {
    e.preventDefault();
    if (!demoState.newText.trim()) return;
    const newT = { id: Date.now(), text: demoState.newText, done: false };
    setDemoState(prev => ({
      ...prev,
      todos: [...prev.todos, newT],
      newText: ''
    }));
  };

  const toggleTodo = (id) => {
    setDemoState(prev => ({
      ...prev,
      todos: prev.todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    }));
  };

  const removeTodo = (id) => {
    setDemoState(prev => ({
      ...prev,
      todos: prev.todos.filter(t => t.id !== id)
    }));
  };

  // Contact Demo Actions
  const createContact = (e) => {
    e.preventDefault();
    if (!demoState.name || !demoState.email) return;
    const newC = {
      id: Date.now(),
      name: demoState.name,
      email: demoState.email,
      phone: demoState.phone || "N/A"
    };
    setDemoState(prev => ({
      ...prev,
      contacts: [...prev.contacts, newC],
      name: '', email: '', phone: ''
    }));
  };

  const deleteContact = (id) => {
    setDemoState(prev => ({
      ...prev,
      contacts: prev.contacts.filter(c => c.id !== id)
    }));
  };

  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', fontWeight: 600 }}>
              My Showcase
            </h5>
            <h2 className="display-5 fw-bold mb-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-secondary">
              A selection of web systems I designed and implemented. Hover over card and click "Live Simulator" to test their functionality right on this screen!
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4">
          {projectsData.map((project, index) => (
            <div key={project.id} className="col-md-6">
              <motion.div
                className="glass-card h-100 p-0 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Project Image Panel */}
                <div className="position-relative overflow-hidden group" style={{ height: '240px' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-100 h-100 object-cover transition"
                    style={{ transition: 'transform 0.5s ease' }}
                  />
                  {/* Overlay on hover */}
                  <div 
                    className="position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center gap-3 transition"
                    style={{
                      background: 'rgba(15, 23, 42, 0.85)',
                      opacity: 0,
                      backdropFilter: 'blur(4px)',
                      transition: 'opacity 0.3s ease',
                      zIndex: 2
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <button
                      onClick={() => {
                        setActiveProject(project);
                        initDemo(project.id);
                      }}
                      className="btn btn-primary px-4 py-2 rounded-pill fw-semibold interactive"
                      style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', border: 'none' }}
                    >
                      <FiExternalLink /> Live Simulator
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold interactive"
                    >
                      <FiGithub /> GitHub Code
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="h4 fw-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-secondary small mb-4" style={{ height: '48px', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.6' }}>
                    {project.desc}
                  </p>
                  
                  {/* Badges */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="badge text-white px-3 py-2 rounded-pill"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '0.75rem'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons visible in mobile view */}
                  <div className="d-flex gap-2 d-md-none">
                    <button
                      onClick={() => {
                        setActiveProject(project);
                        initDemo(project.id);
                      }}
                      className="btn btn-primary w-50 py-2 rounded-3 text-white interactive"
                      style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', border: 'none' }}
                    >
                      Live Demo
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary w-50 py-2 rounded-3 text-white interactive"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Simulator Modal Box */}
      <AnimatePresence>
        {activeProject && (
          <div 
            className="modal-overlay d-flex align-items-center justify-content-center"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(12px)',
              zIndex: 9999,
              padding: '20px'
            }}
          >
            <motion.div
              className="glass-card p-0 w-100 overflow-hidden"
              style={{ maxWidth: '800px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Modal Header */}
              <div className="p-4 d-flex justify-content-between align-items-center border-bottom border-secondary" style={{ borderColor: 'var(--card-border) !important' }}>
                <h3 className="h4 fw-bold m-0 text-white">{activeProject.title} Simulator</h3>
                <button 
                  onClick={() => {
                    setActiveProject(null);
                    setDemoState(null);
                  }}
                  className="btn btn-link text-white p-2 border-0"
                  style={{ fontSize: '1.5rem' }}
                >
                  <FiX />
                </button>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="p-4 overflow-y-auto" style={{ flex: 1 }}>
                <div className="row g-4">
                  {/* Features Left Column */}
                  <div className="col-md-5">
                    <h4 className="h6 text-uppercase text-primary fw-bold mb-3">Key Features Built</h4>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                      {activeProject.features.map((feat, idx) => (
                        <li key={idx} className="small text-secondary d-flex align-items-start gap-2">
                          <FiCheck className="text-accent mt-1 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary w-100 py-2 rounded-3 text-white d-flex align-items-center justify-content-center gap-2 interactive"
                    >
                      <FiGithub /> Source Code
                    </a>
                  </div>

                  {/* Interactive Micro Simulator Right Column */}
                  <div className="col-md-7 border-start border-secondary" style={{ borderColor: 'var(--card-border) !important' }}>
                    <h4 className="h6 text-uppercase text-secondary fw-bold mb-3 d-flex align-items-center gap-2">
                      <span className="spinner-grow spinner-grow-sm text-accent" role="status" /> Live App Simulation
                    </h4>
                    
                    <div 
                      className="p-3 rounded-4" 
                      style={{ 
                        background: 'rgba(0, 0, 0, 0.25)', 
                        border: '1px solid var(--card-border)', 
                        minHeight: '260px',
                        fontSize: '0.85rem'
                      }}
                    >
                      {/* SIMULATOR 1: E-COMMERCE */}
                      {activeProject.id === 1 && demoState && (
                        <div>
                          <h5 className="small fw-bold text-accent mb-3">MOCK E-STOREFRONT</h5>
                          <div className="row g-2 mb-3">
                            {demoState.products.map(prod => (
                              <div key={prod.id} className="col-12 d-flex justify-content-between align-items-center p-2 rounded" style={{ background: 'var(--card-bg)' }}>
                                <span>{prod.name} - <strong>${prod.price}</strong></span>
                                <button 
                                  onClick={() => addToCart(prod)}
                                  className="btn btn-sm btn-primary py-1 px-2 d-flex align-items-center gap-1"
                                  style={{ fontSize: '0.75rem' }}
                                >
                                  <FiShoppingCart /> Add
                                </button>
                              </div>
                            ))}
                          </div>
                          
                          <h6 className="small fw-bold text-white border-top border-secondary pt-2 mt-2">Shopping Cart ({demoState.cart.reduce((a, b) => a + b.qty, 0)})</h6>
                          {demoState.cart.length === 0 ? (
                            <p className="text-secondary small mt-1">Your cart is empty.</p>
                          ) : (
                            <div className="mt-2">
                              {demoState.cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between align-items-center py-1">
                                  <span>{item.name} (x{item.qty})</span>
                                  <div className="d-flex align-items-center gap-3">
                                    <strong>${item.price * item.qty}</strong>
                                    <button onClick={() => removeFromCart(item.id)} className="btn btn-link text-danger p-0 border-0"><FiTrash2 /></button>
                                  </div>
                                </div>
                              ))}
                              <div className="d-flex justify-content-between border-top border-secondary pt-2 mt-2 fw-bold text-accent">
                                <span>TOTAL:</span>
                                <span>${demoState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0)}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* SIMULATOR 2: HOTEL RESERVATION */}
                      {activeProject.id === 2 && demoState && (
                        <div>
                          <h5 className="small fw-bold text-accent mb-3">BOOKING TERMINAL</h5>
                          <form onSubmit={addBooking} className="row g-2 mb-3 align-items-end">
                            <div className="col-7">
                              <input 
                                type="text" 
                                placeholder="Guest Name"
                                value={demoState.newGuest} 
                                onChange={e => setDemoState({...demoState, newGuest: e.target.value})}
                                className="form-control form-control-sm bg-transparent text-white"
                                style={{ borderColor: 'var(--card-border)' }}
                                required
                              />
                            </div>
                            <div className="col-3">
                              <input 
                                type="text" 
                                placeholder="Room"
                                value={demoState.newRoom} 
                                onChange={e => setDemoState({...demoState, newRoom: e.target.value})}
                                className="form-control form-control-sm bg-transparent text-white"
                                style={{ borderColor: 'var(--card-border)' }}
                                required
                              />
                            </div>
                            <div className="col-2">
                              <button type="submit" className="btn btn-sm btn-secondary w-100 py-1"><FiPlus /></button>
                            </div>
                          </form>

                          <h6 className="small fw-bold text-white mb-2">Bookings Registry (Saved to LocalStorage)</h6>
                          <div style={{ maxHeight: '120px', overflowY: 'auto' }}>
                            {demoState.bookings.map(b => (
                              <div key={b.id} className="d-flex justify-content-between align-items-center p-2 rounded mb-1" style={{ background: 'var(--card-bg)' }}>
                                <span><FiUser className="me-1 text-primary" /> {b.name} - Room {b.room}</span>
                                <div className="d-flex align-items-center gap-2">
                                  <span className="small text-secondary" style={{ fontSize: '0.75rem' }}><FiCalendar /> {b.checkIn}</span>
                                  <button onClick={() => deleteBooking(b.id)} className="btn btn-link text-danger p-0 border-0"><FiTrash2 /></button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SIMULATOR 3: TODO PLANNER */}
                      {activeProject.id === 3 && demoState && (
                        <div>
                          <h5 className="small fw-bold text-accent mb-3">PLANNER WIDGET</h5>
                          <form onSubmit={addTodo} className="d-flex gap-2 mb-3">
                            <input 
                              type="text" 
                              placeholder="Add a new checklist goal..." 
                              value={demoState.newText}
                              onChange={e => setDemoState({...demoState, newText: e.target.value})}
                              className="form-control form-control-sm bg-transparent text-white"
                              style={{ borderColor: 'var(--card-border)' }}
                              required
                            />
                            <button type="submit" className="btn btn-sm btn-secondary px-3">Add</button>
                          </form>

                          <h6 className="small fw-bold text-white mb-2">My Tasks</h6>
                          <div style={{ maxHeight: '140px', overflowY: 'auto' }}>
                            {demoState.todos.map(t => (
                              <div key={t.id} className="d-flex justify-content-between align-items-center p-2 rounded mb-1" style={{ background: 'var(--card-bg)' }}>
                                <div className="d-flex align-items-center gap-2">
                                  <input 
                                    type="checkbox" 
                                    checked={t.done}
                                    onChange={() => toggleTodo(t.id)}
                                  />
                                  <span style={{ textDecoration: t.done ? 'line-through' : 'none', color: t.done ? '#64748B' : '#F8FAFC' }}>
                                    {t.text}
                                  </span>
                                </div>
                                <button onClick={() => removeTodo(t.id)} className="btn btn-link text-danger p-0 border-0"><FiTrash2 /></button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SIMULATOR 4: CONTACT MANAGER */}
                      {activeProject.id === 4 && demoState && (
                        <div>
                          <h5 className="small fw-bold text-accent mb-2">CRM DIRECTORY</h5>
                          <form onSubmit={createContact} className="row g-2 mb-3">
                            <div className="col-4">
                              <input 
                                type="text" 
                                placeholder="Name" 
                                value={demoState.name}
                                onChange={e => setDemoState({...demoState, name: e.target.value})}
                                className="form-control form-control-sm bg-transparent text-white"
                                style={{ borderColor: 'var(--card-border)' }}
                                required
                              />
                            </div>
                            <div className="col-5">
                              <input 
                                type="email" 
                                placeholder="Email" 
                                value={demoState.email}
                                onChange={e => setDemoState({...demoState, email: e.target.value})}
                                className="form-control form-control-sm bg-transparent text-white"
                                style={{ borderColor: 'var(--card-border)' }}
                                required
                              />
                            </div>
                            <div className="col-3">
                              <button type="submit" className="btn btn-sm btn-primary w-100">Save</button>
                            </div>
                          </form>

                          <h6 className="small fw-bold text-white mb-2">Sync Registry (Axios Live-Store Simulation)</h6>
                          <div style={{ maxHeight: '110px', overflowY: 'auto' }}>
                            {demoState.contacts.map(c => (
                              <div key={c.id} className="p-2 rounded mb-1 text-white" style={{ background: 'var(--card-bg)' }}>
                                <div className="d-flex justify-content-between align-items-center">
                                  <strong>{c.name}</strong>
                                  <button onClick={() => deleteContact(c.id)} className="btn btn-link text-danger p-0 border-0"><FiTrash2 /></button>
                                </div>
                                <div className="d-flex justify-content-between text-secondary" style={{ fontSize: '0.75rem' }}>
                                  <span>{c.email}</span>
                                  <span>{c.phone}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
