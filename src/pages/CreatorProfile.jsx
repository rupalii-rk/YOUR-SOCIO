import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const CreatorProfile = () => {
  const { id } = useParams();
  
  const creator = {
    id: id,
    name: 'Alex Rivera',
    niche: 'UGC Content Creator',
    bio: 'CREATING AUTHENTIC UGC THAT CONVERTS. SPECIALIZED IN RAW, EDGY PRODUCT SHOWCASES.',
    followers: '124K',
    engagement: '5.2%',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60',
    pastClients: ['Aura Athletics', 'TechNova', 'Lumiere Skincare']
  };

  return (
    <div style={{ backgroundColor: 'var(--color-primary)', minHeight: '100vh', padding: '120px 0' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '40px', alignItems: 'stretch' }}>
          
          {/* Pop up animation for the left stats column */}
          <motion.div 
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="brutalist-card" 
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ borderBottom: 'var(--border-thick)', height: '400px', backgroundColor: 'var(--color-black)', overflow: 'hidden', perspective: '1000px' }}>
              <motion.img 
                src={creator.image} 
                alt={creator.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(120%)' }} 
                animate={{ rotateY: [-5, 5, -5], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
            </div>
            
            <div style={{ padding: '40px' }}>
              <h1 style={{ fontSize: '4rem', lineHeight: 1, marginBottom: '20px' }}>{creator.name}</h1>
              <p style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-accent)', marginBottom: '40px' }}>{creator.niche}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'var(--border-thick)', paddingBottom: '10px' }}>
                  <span style={{ fontWeight: 800 }}>FOLLOWERS</span>
                  <strong style={{ fontSize: '1.5rem' }}>{creator.followers}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'var(--border-thick)', paddingBottom: '10px' }}>
                  <span style={{ fontWeight: 800 }}>ENGAGEMENT</span>
                  <strong style={{ fontSize: '1.5rem' }}>{creator.engagement}</strong>
                </div>
              </div>
              
              <a href="mailto:alex@example.com" className="btn-primary" style={{ width: '100%', marginTop: '40px' }}>
                HIRE ME NOW
              </a>
            </div>
          </motion.div>
          
          {/* Slide in animation for the right content column */}
          <motion.div 
            initial={{ opacity: 0, x: 200, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
          >
            <div className="brutalist-card" style={{ padding: '60px', backgroundColor: 'var(--color-black)', color: 'var(--color-light)' }}>
              <h2 style={{ fontSize: '5rem', color: 'var(--color-primary)', marginBottom: '24px' }}>ABOUT</h2>
              <p style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.2 }}>
                {creator.bio}
              </p>
            </div>
            
            <div className="brutalist-card" style={{ padding: '60px' }}>
              <h2 style={{ fontSize: '5rem', marginBottom: '24px' }}>PAST COLLABS</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {creator.pastClients.map(client => (
                  <span key={client} style={{ padding: '16px 24px', backgroundColor: 'var(--color-black)', color: 'var(--color-light)', fontFamily: 'var(--font-display)', fontSize: '2rem', border: 'var(--border-thick)' }}>
                    {client.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
