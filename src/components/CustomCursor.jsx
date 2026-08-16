import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    let endX = 0;
    let endY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const onMouseMove = (e) => {
      endX = e.clientX;
      endY = e.clientY;
      setIsHidden(false);
      
      if (cursorDot) {
        cursorDot.style.left = `${endX}px`;
        cursorDot.style.top = `${endY}px`;
      }
    };

    const animateOutline = () => {
      // Lerp (Linear Interpolation) for smooth tracking
      outlineX += (endX - outlineX) * 0.15;
      outlineY += (endY - outlineY) * 0.15;

      if (cursorOutline) {
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
      }

      requestAnimationFrame(animateOutline);
    };

    const outlineAnimation = requestAnimationFrame(animateOutline);

    const onMouseOver = (e) => {
      // Check if mouse is hovering over interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(outlineAnimation);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      <div 
        ref={cursorDotRef} 
        className={`custom-cursor ${isHovered ? 'hovered' : ''}`} 
      />
      <div 
        ref={cursorOutlineRef} 
        className={`custom-cursor-outline ${isHovered ? 'hovered' : ''}`} 
      />
    </>
  );
}
