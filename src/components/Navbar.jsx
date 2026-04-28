import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        YOUR<span>SOCIO</span>
      </Link>
      <div className={styles.navLinks}>
        <Link to="/#about" className={styles.navItem}>About</Link>
        <Link to="/creators" className={styles.navItem}>Creators</Link>
        <Link to="/brands" className={styles.navItem}>Brands</Link>
        <Link to="/support" className={styles.navItem}>
          Support
        </Link>
      </div>
      <div className={styles.navAction}>
        <Link to="/login" className={styles.loginBtn}>Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
