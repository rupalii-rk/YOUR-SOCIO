import React from 'react';
import { motion } from 'framer-motion';

const ROCKPEPPER_SERVICES = [
  { 
    id: 1, 
    title: 'Brand-Creator Collaboration', 
    desc: 'We connect brands with high-relevance micro and UGC creators based on niche, composition, and audience metrics to drive measurable impact.', 
    icon: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80' 
  },
  { 
    id: 2, 
    title: 'UGC Content Creation', 
    desc: 'Authenticity over polish. We deliver raw user-generated content sourced from real creators designed specifically to scale ads and social channels.', 
    icon: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' 
  },
  { 
    id: 3, 
    title: 'Authenticity Analysis', 
    desc: 'No assumptions, pure data. We identify genuine creators securely by analyzing audience authenticity, bot clusters, and real engagement patterns.', 
    icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80' 
  },
  { 
    id: 4, 
    title: 'Campaign Management', 
    desc: 'Full-spectrum service with zero handoffs. We manage end-to-end execution, communication, selection, and live performance tracking.', 
    icon: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&q=80' 
  },
  { 
    id: 5, 
    title: 'Discovery Platform', 
    desc: 'A data-informed search engine. Providing you with an organized, vetted database categorized precisely by niche, size, and content archetype.', 
    icon: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80' 
  },
  { 
    id: 6, 
    title: 'Growth Strategy', 
    desc: 'We design surgical creator-led marketing campaigns tailored exclusively to penetrate your exact target demographic.', 
    icon: 'https://images.unsplash.com/photo-1504639725590-db07bd19b52c?w=600&q=80' 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Services = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '120px 0', position: 'relative' }}>
      <div className="glow-bg" style={{ top: '-10%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div className="badge" style={{ background: 'transparent', border: '1px solid var(--color-border)' }}>Platform Services</div>
          <h1 className="title-massive" style={{ marginBottom: '24px' }}>
            What <span className="text-gradient">We Do.</span>
          </h1>
          <p className="subtitle" style={{ margin: '0 auto', maxWidth: '800px' }}>
            Transforming your brand into measurable success—through smart strategy, unpolished storytelling, and seamless digital execution.
          </p>
        </motion.div>

        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ROCKPEPPER_SERVICES.map(srv => (
            <motion.div 
              key={srv.id} 
              className="modern-card" 
              style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}
              variants={itemVariants}
            >
              <div style={{ width: '100%', height: '200px', borderRadius: 'var(--radius-sm)', marginBottom: '24px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-surface), transparent)', zIndex: 1 }} />
                <motion.img 
                  src={srv.icon} 
                  alt={srv.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, mixBlendMode: 'luminosity' }}
                  whileHover={{ scale: 1.05, opacity: 0.8 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{srv.title}</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
