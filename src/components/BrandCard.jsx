import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Carousel.module.css';

const BrandCard = ({ brand }) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ scale: 0.8, opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.1 }}
    >
      <div className={styles.imageWrapper} style={{ backgroundColor: 'var(--color-primary)' }}>
        <img src={brand.logo} alt={brand.name} className={styles.image} loading="lazy" />
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{brand.name}</h3>
        <p className={styles.niche}>{brand.industry}</p>
        
        <div className={styles.brandDetails}>
          <p style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
            PAST COLLABS: {brand.pastCollabs}
          </p>
        </div>
        
        <Link to={`/brands/${brand.id}`} className="btn-primary" style={{ marginTop: 'auto', width: '100%', fontSize: '1.5rem', padding: '16px' }}>
          VIEW BRAND
        </Link>
      </div>
    </motion.div>
  );
};

export default BrandCard;
