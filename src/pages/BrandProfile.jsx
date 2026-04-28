import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const BrandProfile = () => {
  const { id } = useParams();
  
  const brand = {
    id,
    name: 'AURA ATHLETICS',
    industry: 'FITNESS & APPAREL',
    description: 'AURA ATHLETICS IS REDEFINING THE ACTIVEWEAR SEGMENT WITH PERFORMANCE FABRICS. WE PARTNER WITH CREATORS WHO EMBODY ORGANIC PASSION.',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=60',
    cover: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&auto=format&fit=crop&q=80',
    pastCollabs: 24,
    preferredNiche: ['FITNESS', 'LIFESTYLE', 'WELLNESS']
  };

  return (
    <div style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-light)', minHeight: '100vh', padding: '120px 0' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'stretch' }}>
          
          {/* Slide animation for the Brand details */}
          <motion.div 
            initial={{ x: -200, opacity: 0, filter: 'blur(20px)' }}
            whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
          >
            <div className="brutalist-card" style={{ padding: '60px', backgroundColor: 'var(--color-primary)', color: 'var(--color-black)' }}>
              <h1 style={{ fontSize: '6rem', lineHeight: 0.9, marginBottom: '24px' }}>{brand.name}</h1>
              <p style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '40px' }}>
                INDUSTRY: {brand.industry}
              </p>
              <h2 style={{ fontSize: '4rem', marginBottom: '24px' }}>ABOUT THE BRAND</h2>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.2 }}>
                {brand.description}
              </p>
              
              <div style={{ marginTop: '40px', display: 'flex', gap: '24px' }}>
                <a href="mailto:contact@auraathletics.example.com" className="btn-primary" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-light)' }}>
                  CONTACT BRAND
                </a>
              </div>
            </div>
            
            <div className="brutalist-card" style={{ padding: '60px', backgroundColor: 'var(--color-light)', color: 'var(--color-black)' }}>
              <h2 style={{ fontSize: '5rem', marginBottom: '40px' }}>SEEKING NICHES</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {brand.preferredNiche.map(niche => (
                  <span key={niche} style={{ padding: '16px 24px', backgroundColor: 'var(--color-primary)', color: 'var(--color-black)', fontFamily: 'var(--font-display)', fontSize: '2rem', border: 'var(--border-thick)' }}>
                    {niche}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Pop up animation for the Stats column */}
          <motion.div 
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
            className="brutalist-card" 
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ borderBottom: 'var(--border-thick)', height: '300px', backgroundColor: 'var(--color-light)', overflow: 'hidden', perspective: '1000px' }}>
              <motion.img 
                src={brand.logo} 
                alt={brand.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} 
                animate={{ rotateY: [5, -5, 5], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
            </div>
            
            <div style={{ padding: '40px', backgroundColor: 'var(--color-light)', color: 'var(--color-black)', flex: 1 }}>
              <h3 style={{ fontSize: '3rem', marginBottom: '32px' }}>BRAND STATS</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'var(--border-thick)', paddingBottom: '10px' }}>
                  <span style={{ fontWeight: 800 }}>TOTAL CAMPAIGNS</span>
                  <strong style={{ fontSize: '1.5rem' }}>14</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'var(--border-thick)', paddingBottom: '10px' }}>
                  <span style={{ fontWeight: 800 }}>PAST COLLABS</span>
                  <strong style={{ fontSize: '1.5rem' }}>{brand.pastCollabs}</strong>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default BrandProfile;
