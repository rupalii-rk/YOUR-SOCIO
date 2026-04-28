import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Creators from './pages/Creators';
import CreatorProfile from './pages/CreatorProfile';
import Brands from './pages/Brands';
import BrandProfile from './pages/BrandProfile';
import Login from './pages/Login';
import Services from './pages/Services';
import Support from './pages/Support';
import './App.css';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      exit={{ opacity: 0, filter: 'blur(20px)', y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/support" element={<PageTransition><Support /></PageTransition>} />
        <Route path="/creators" element={<PageTransition><Creators /></PageTransition>} />
        <Route path="/creators/:id" element={<PageTransition><CreatorProfile /></PageTransition>} />
        <Route path="/brands" element={<PageTransition><Brands /></PageTransition>} />
        <Route path="/brands/:id" element={<PageTransition><BrandProfile /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
