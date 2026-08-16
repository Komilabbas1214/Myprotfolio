import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ setLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // Total duration in ms
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoadingComplete(true);
          }, 400); // Small pause at 100%
          return 100;
        }
        return Math.min(100, Math.ceil(prev + step));
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [setLoadingComplete]);

  return (
    <motion.div
      className="loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -100,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
      }}
    >
      <div className="position-relative text-center d-flex flex-column align-items-center">
        {/* Glow behind loader */}
        <div 
          className="pulse-bg" 
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0) 70%)',
            filter: 'blur(10px)',
            zIndex: -1
          }} 
        />
        
        {/* Logo Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            fontSize: '3rem',
            fontWeight: '800',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '2px',
            marginBottom: '15px'
          }}
          className="gradient-text"
        >
          &lt;KA /&gt;
        </motion.div>

        {/* Loading progress numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#F8FAFC',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '1px',
            marginBottom: '10px'
          }}
        >
          {progress}%
        </motion.div>

        {/* Progress Bar Container */}
        <div 
          style={{
            width: '200px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}
        >
          <motion.div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)',
              width: `${progress}%`
            }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Caption */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '0.85rem',
            color: '#94A3B8',
            marginTop: '15px',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          Building Experience
        </motion.span>
      </div>
    </motion.div>
  );
}
