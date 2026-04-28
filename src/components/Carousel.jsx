import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import styles from './Carousel.module.css';

const Carousel = ({ children }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  // Continuous smooth transform value
  const x = useMotionValue(0);
  const [speed, setSpeed] = useState(1.5);
  
  const childrenArray = React.Children.toArray(children);
  // Duplicate for seamless infinite illusion
  const renderArray = [...childrenArray, ...childrenArray, ...childrenArray, ...childrenArray, ...childrenArray];
  
  // Calculate center scaling
  const [activeIndices, setActiveIndices] = useState([]);

  useAnimationFrame((t, delta) => {
    if (!trackRef.current || !containerRef.current) return;
    
    // Continuous smooth translation
    let moveBy = speed * (delta / 16);
    let newX = x.get() - moveBy;
    
    // Seamless jump back when the first full set has scrolled past
    const singleSetWidth = trackRef.current.scrollWidth / 5;
    if (Math.abs(newX) >= singleSetWidth) {
      newX += singleSetWidth; 
    }
    
    x.set(newX);

    // Collision detection for Center Popping
    const screenCenter = window.innerWidth / 2;
    const cards = Array.from(trackRef.current.children);
    
    const newActives = [];
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + (rect.width / 2);
      
      // If the card is within 250px of the exact screen center
      if (Math.abs(screenCenter - cardCenter) < 250) {
        newActives.push(i);
      }
    });

    // Only update state if the active set genuinely changes to avoid render thrashing
    if (JSON.stringify(newActives) !== JSON.stringify(activeIndices)) {
      setActiveIndices(newActives);
    }
  });

  return (
    <div 
      className={styles.carouselContainer}
      ref={containerRef}
      onMouseEnter={() => setSpeed(0)}
      onMouseLeave={() => setSpeed(1.5)}
      onTouchStart={() => setSpeed(0)}
      onTouchEnd={() => setSpeed(1.5)}
    >
      <motion.div 
        ref={trackRef}
        className={styles.marqueeTrack}
        style={{ x }}
      >
        {renderArray.map((child, index) => {
          const isCenter = activeIndices.includes(index);
          
          return (
            <motion.div 
              key={index}
              className={styles.animatedCardWrapper}
              animate={{ 
                scale: isCenter ? 1.15 : 0.85,
                opacity: isCenter ? 1 : 0.5,
                filter: isCenter ? 'blur(0px) grayscale(0%)' : 'blur(4px) grayscale(80%)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{
                zIndex: isCenter ? 10 : 1,
                boxShadow: isCenter ? '20px 20px 0px var(--color-primary)' : 'none'
              }}
            >
              {child}
            </motion.div>
          );
        })}
      </motion.div>
      <div className={styles.scrollHint} style={{ textAlign: 'center', marginTop: '40px', fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: 800 }}>
        HOVER TO PAUSE INTERACTION
      </div>
    </div>
  );
};

export default Carousel;
