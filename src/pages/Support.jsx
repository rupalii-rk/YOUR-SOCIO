import React from 'react';
import { motion } from 'framer-motion';

const Support = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-primary)', minHeight: '100vh', padding: '120px 0' }}>
      <div className="container">
        <motion.div
           initial={{ x: -100, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="title-massive" style={{ marginBottom: '24px' }}>
            GET<br/><span style={{ color: 'var(--color-light)' }}>SUPPORT</span>
          </h1>
          <p className="subtitle" style={{ color: 'var(--color-black)', marginBottom: '80px' }}>
            WE'RE READY TO HEAR FROM YOU. CHOOSE THE RIGHT CHANNEL.
          </p>
        </motion.div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="brutalist-card" 
            style={{ padding: '60px', backgroundColor: 'var(--color-black)', color: 'var(--color-light)' }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--color-primary)' }}>OFFICIAL MAIL</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '24px' }}>For general inquiries and brand alignments.</p>
            <a href="mailto:yourssocio@gmail.com" className="btn-primary" style={{ backgroundColor: 'var(--color-light)', color: 'var(--color-black)' }}>yourssocio@gmail.com</a>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="brutalist-card" 
            style={{ padding: '60px', backgroundColor: 'var(--color-light)' }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>WORK WITH US</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '24px' }}>For those who want to join our team or collaborate.</p>
            <a href="mailto:yoursocioteam@gmail.com" className="btn-primary">yoursocioteam@gmail.com</a>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="brutalist-card" 
            style={{ padding: '60px', backgroundColor: 'var(--color-black)', color: 'var(--color-light)' }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--color-primary)' }}>HELP & SUPPORT</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Experiencing issues? We've got your back.</p>
            <a href="mailto:yoursociosupport@gmail.com" className="btn-primary" style={{ backgroundColor: 'var(--color-light)', color: 'var(--color-black)' }}>yoursociosupport@gmail.com</a>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Support;
