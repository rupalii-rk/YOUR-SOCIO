import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Carousel.module.css';

const CreatorCard = ({ creator }) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ scale: 0.8, opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <div className={styles.imageWrapper}>
        <img src={creator.image} alt={creator.name} className={styles.image} loading="lazy" />
        <div className={styles.ratingBadge}>
          {creator.rating} STAR
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{creator.name}</h3>
        <p className={styles.niche}>{creator.niche}</p>
        
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{creator.followers}</span>
            <span className={styles.statLabel}>FOLLOWERS</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{creator.engagement}</span>
            <span className={styles.statLabel}>ENGAGEMENT</span>
          </div>
        </div>
        
        <Link to={`/creators/${creator.id}`} className="btn-primary" style={{ marginTop: 'auto', width: '100%', fontSize: '1.5rem', padding: '16px' }}>
          VIEW PROFILE
        </Link>
      </div>
    </motion.div>
  );
};

export default CreatorCard;
