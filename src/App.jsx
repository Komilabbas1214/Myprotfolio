import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import Global Layout Core Components
import Loader from './components/Loader';
import ParticlesBg from './components/ParticlesBg';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Portfolio Page Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* Custom Mouse Cursor Component */}
      <CustomCursor />

      {/* Floating Canvas Particles Interactive Background */}
      <ParticlesBg />

      {/* Pre-Loading Screen Gate */}
      <AnimatePresence mode="wait">
        {!loadingComplete && (
          <Loader setLoadingComplete={setLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Main Page Layout Wrapper */}
      {loadingComplete && (
        <div className="app-content-wrapper">
          {/* Glassmorphic Header Navigation */}
          <Navbar />

          {/* Section Container Elements */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Experience />
            <Education />
            <Testimonials />
            <Contact />
          </main>

          {/* Dynamic footer links & social connectors */}
          <Footer />
        </div>
      )}
    </>
  );
}
