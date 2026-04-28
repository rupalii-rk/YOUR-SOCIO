import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const [activeForm, setActiveForm] = useState(null); // 'brand' | 'creator' | null

  return (
    <div className="container" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '80px', alignItems: 'center' }}>
        <motion.div
           initial={{ x: -200, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.6, ease: 'easeOut' }}
           style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h1 className="title-massive" style={{ marginBottom: '24px' }}>ENTER<br/>THE<br/>ARENA</h1>
          <p className="subtitle" style={{ color: 'var(--color-black)' }}>
            CHOOSE YOUR PATH. AUTHENTICITY MANDATORY.
          </p>
        </motion.div>
        
        <motion.div
           initial={{ y: 200, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
           className="brutalist-card" 
           style={{ padding: '60px', backgroundColor: 'var(--color-light)' }}
        >
          <AnimatePresence mode="wait">
            {!activeForm ? (
              <motion.div 
                key="selection"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h2 style={{ fontSize: '3rem', marginBottom: '40px', borderBottom: 'var(--border-thick)', paddingBottom: '20px' }}>LOG IN TO YOUR SOCIO</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <button onClick={() => setActiveForm('brand')} className="btn-primary" style={{ width: '100%', padding: '24px' }}>LOG IN AS BRAND</button>
                  <button onClick={() => setActiveForm('creator')} className="btn-secondary" style={{ width: '100%', padding: '24px', backgroundColor: 'var(--color-primary)' }}>LOG IN AS CREATOR</button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <button 
                  onClick={() => setActiveForm(null)}
                  style={{ alignSelf: 'flex-start', marginBottom: '20px', fontSize: '1.25rem', fontWeight: 900, borderBottom: 'var(--border-thick)' }}
                >
                  &larr; BACK
                </button>
                
                <h2 style={{ fontSize: '2.5rem', marginBottom: '32px', color: activeForm === 'brand' ? 'var(--color-black)' : 'var(--color-primary)' }}>
                  {activeForm === 'brand' ? 'BRAND PORTAL' : 'CREATOR DASHBOARD'}
                </h2>
                
                <form 
                  style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                  onSubmit={(e) => { e.preventDefault(); alert('Login initiated'); }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>EMAIL</label>
                    <input 
                      type="email" 
                      required 
                      defaultValue={activeForm === 'brand' ? "contact@brand.com" : "hello@creator.com"}
                      style={{ padding: '16px', fontSize: '1.5rem', fontFamily: 'var(--font-inter)', border: 'var(--border-thick)', backgroundColor: 'var(--color-light)', outline: 'none' }} 
                    />
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>PASSWORD</label>
                    <input 
                      type="password" 
                      required 
                      defaultValue="password123"
                      style={{ padding: '16px', fontSize: '1.5rem', fontFamily: 'var(--font-inter)', border: 'var(--border-thick)', backgroundColor: 'var(--color-light)', outline: 'none' }} 
                    />
                  </div>
                  
                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                    SECURE LOGIN
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

    </div>
  );
};

export default Login;
