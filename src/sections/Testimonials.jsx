import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager at TechCorp",
    comment: "Working with Komail was an absolute pleasure. He developed our React storefront from scratch and integrated Firebase seamlessly. His attention to responsiveness and clean structures is highly commendable.",
    rating: 5,
    initials: "SJ",
    color: "#3B82F6"
  },
  {
    id: 2,
    name: "David Miller",
    role: "Founder at AppLaunch",
    comment: "Komail is a MERN Stack wizard. He took over our Node.js backend rewrite and optimized our database search indexings, reducing response latency by 40%. Highly recommend his technical problem-solving capabilities!",
    rating: 5,
    initials: "DM",
    color: "#8B5CF6"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Lead UI/UX at CreativeSpace",
    comment: "The UI design coding accuracy is incredible. Komail turned our complex Figma wireframes into responsive, pixel-perfect React code. The micro-animations and page transitions feel completely premium and organic.",
    rating: 5,
    initials: "ER",
    color: "#06B6D4"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Slider animation variations
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0
    })
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-5 bg-opacity-25" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--accent)', letterSpacing: '2px', fontWeight: 600 }}>
              Client Reviews
            </h5>
            <h2 className="display-5 fw-bold mb-3">
              Client &amp; Peer <span className="gradient-text">Feedback</span>
            </h2>
            <p className="text-secondary">
              Read testimonials from designers, product leads, and business founders on my collaborative work efforts.
            </p>
          </div>
        </div>

        {/* Carousel Slider Card */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 position-relative">
            <div className="glass-card p-5 text-center overflow-hidden" style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="w-100"
                >
                  {/* Avatar Icon */}
                  <div 
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center fw-bold text-white mb-4 shadow"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: `linear-gradient(135deg, ${current.color}, var(--bg-color))`,
                      fontSize: '1.5rem',
                      border: '2px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {current.initials}
                  </div>

                  {/* Stars Rating */}
                  <div className="d-flex justify-content-center gap-1 mb-3 text-warning">
                    {[...Array(current.rating)].map((_, i) => (
                      <FiStar key={i} fill="currentColor" />
                    ))}
                  </div>

                  {/* Comment Quote */}
                  <p className="text-secondary fs-5 italic mb-4" style={{ fontStyle: 'italic', lineHeight: '1.7' }}>
                    "{current.comment}"
                  </p>

                  {/* Reviewer Meta */}
                  <h3 className="h6 fw-bold text-white mb-1">{current.name}</h3>
                  <span className="text-secondary small">{current.role}</span>
                </motion.div>
              </AnimatePresence>

              {/* Slider Progress Dots */}
              <div className="d-flex justify-content-center gap-2 mt-4 pt-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    className="border-0 rounded-circle transition"
                    style={{
                      width: activeIndex === idx ? '24px' : '8px',
                      height: '8px',
                      background: activeIndex === idx 
                        ? 'linear-gradient(90deg, var(--primary), var(--secondary))' 
                        : 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '4px'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="btn position-absolute start-0 top-50 translate-middle-y rounded-circle glass-card p-3 d-none d-md-flex align-items-center justify-content-center interactive"
              style={{ left: '-50px !important', zIndex: 10, width: '50px', height: '50px' }}
              aria-label="Previous Slide"
            >
              <FiChevronLeft className="fs-4 text-white" />
            </button>
            
            <button
              onClick={handleNext}
              className="btn position-absolute end-0 top-50 translate-middle-y rounded-circle glass-card p-3 d-none d-md-flex align-items-center justify-content-center interactive"
              style={{ right: '-50px !important', zIndex: 10, width: '50px', height: '50px' }}
              aria-label="Next Slide"
            >
              <FiChevronRight className="fs-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
