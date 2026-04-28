import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brandBox}>
          <h2 className={styles.logo}>YOUR<br/>SOCIO</h2>
        </div>
        
        <div className={styles.linkBox}>
          <h3>CONTACT</h3>
          {/* Changed mailto target to ensure it forces browser evaluation */}
          <a href="mailto:yourssocio@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>OFFICIAL EMAIL</a>
          <a href="mailto:yoursocioteam@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>CAREERS</a>
          <Link to="/support" className={styles.link}>SUPPORT</Link>
        </div>
        
        <div className={styles.linkBox}>
          <h3>SOCIALS</h3>
          <a href="#social" className={styles.link}>INSTAGRAM</a>
          <a href="#social" className={styles.link}>LINKEDIN</a>
          <a href="#social" className={styles.link}>TWITTER [X]</a>
        </div>
        
        <div className={styles.actionBox}>
          <h3 style={{ color: 'var(--color-black)' }}>READY?</h3>
          <Link to="/login" className="btn-primary" style={{ display: 'flex', width: '100%', fontSize: '2rem', padding: '24px', backgroundColor: 'var(--color-black)', color: 'var(--color-light)', textAlign: 'center', justifyContent: 'center' }}>
            START NOW
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} YOUR SOCIO. BUILT DIFFERENT.
      </div>
    </footer>
  );
};

export default Footer;
