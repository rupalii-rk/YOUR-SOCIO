import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Target, Zap, Activity, CheckCircle2, BarChart3, PieChart, TrendingUp } from 'lucide-react';

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow & Horizon */}
      <div className="glow-bg" />
      <div className="horizon-arc" />

      {/* HERO SECTION */}
      <section style={{ minHeight: '90vh', paddingTop: '150px', position: 'relative', zIndex: 1, textAlign: 'center' }} className="container">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.div variants={fadeUp}>
            <div className="badge">
              🔥 <span style={{ color: 'var(--color-text)' }}>New</span> Creator Match Engine
            </div>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="title-massive" style={{ marginBottom: '24px' }}>
            Transform Your Brand Into<br />
            <span className="text-gradient">Actionable Growth</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="subtitle" style={{ margin: '0 auto 40px auto' }}>
            Connect with verified creators instantly. Leverage our data-driven matchmaking to scale your social reach with pure, unfiltered engagement.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex-center" style={{ gap: '16px' }}>
            <Link to="/creators" className="btn btn-primary">Start for Free</Link>
            <Link to="/services" className="btn btn-secondary">Book a Demo</Link>
          </motion.div>
        </motion.div>

        {/* LOGOS */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '30px' }}>PARTNERED WITH INDUSTRY EXPERTS</p>
          <div style={{ display: 'flex', gap: '60px', opacity: 0.5, flexWrap: 'wrap', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Spotify</h3>
            <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Slack</h3>
            <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Dropbox</h3>
            <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Webflow</h3>
          </div>
        </motion.div>
      </section>

      {/* SUB-FEATURES */}
      <section className="section container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge" style={{ background: 'transparent', border: '1px solid var(--color-border)' }}>Platform Capabilities</div>
          <h2 className="title">Business <span className="text-gradient">Application</span></h2>
          <p className="subtitle" style={{ margin: '0 auto' }}>Leverage our data-driven infrastructure to accelerate your marketing operations.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div className="modern-card">
            <Target color="var(--color-primary)" size={28} style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '10px' }}>Discover Insights</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Uncover hidden audience overlaps to maximize your conversion rates seamlessly.</p>
          </div>
          <div className="modern-card">
            <Activity color="var(--color-primary)" size={28} style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '10px' }}>Real-Time Analytics</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Monitor campaign pacing and engagement velocity live on your dashboard.</p>
          </div>
          <div className="modern-card">
            <Zap color="var(--color-primary)" size={28} style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '10px' }}>Campaign Optimization</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Increase ROI through AI-guided suggestions tailored to your demographic.</p>
          </div>
        </div>
      </section>

      {/* ZIG ZAG 1 */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>Actionable</div>
            <h2 className="title" style={{ marginBottom: '24px', fontSize: '2.5rem' }}>Improved <span className="text-gradient">decision-making</span></h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
              We furnish your business with immediate demographic analysis, helping you to pinpoint your exact audience and eliminate wasted ad-spend effortlessly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <CheckCircle2 color="var(--color-primary)" size={24} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ marginBottom: '4px' }}>Comprehensive Data Evaluation</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Gain access to unparalleled creator statistics securely.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <CheckCircle2 color="var(--color-primary)" size={24} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ marginBottom: '4px' }}>Predictive Modeling</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Forecast campaign outcomes before you deploy a single dollar.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="modern-card" style={{ padding: 0, height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, rgba(255,77,0,0.1), transparent)' }}>
            {/* Mock Chart UI */}
            <div style={{ width: '80%', height: '70%', background: 'var(--color-surface-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '24px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div><div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Engagement Rate</div><div style={{ fontSize: '1.5rem', fontWeight: 700 }}>8.5% <span style={{ color: '#00ff88', fontSize: '0.8rem' }}>↑ 2.1%</span></div></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '120px' }}>
                <div style={{ flex: 1, background: 'var(--color-primary)', height: '40%', borderRadius: '4px 4px 0 0' }}></div>
                <div style={{ flex: 1, background: 'var(--color-border)', height: '70%', borderRadius: '4px 4px 0 0' }}></div>
                <div style={{ flex: 1, background: 'var(--color-border)', height: '50%', borderRadius: '4px 4px 0 0' }}></div>
                <div style={{ flex: 1, background: 'var(--color-border)', height: '90%', borderRadius: '4px 4px 0 0' }}></div>
                <div style={{ flex: 1, background: 'var(--color-primary)', height: '100%', borderRadius: '4px 4px 0 0', boxShadow: '0 0 20px var(--color-primary-glow)' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ZIG ZAG 2 */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="modern-card" style={{ padding: 0, height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, rgba(255,77,0,0.1), transparent)' }}>
            {/* Mock Pie Chart UI */}
            <div style={{ width: '80%', height: '70%', background: 'var(--color-surface-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '20px solid var(--color-primary)', borderLeftColor: 'var(--color-border)', borderBottomColor: 'var(--color-border)', transform: 'rotate(45deg)', boxShadow: '0 0 30px var(--color-primary-glow)' }}></div>
              <div>
                <div style={{ marginBottom: '16px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block', marginRight: '8px' }}></div>UGC Content (65%)</div>
                <div><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-border)', display: 'inline-block', marginRight: '8px' }}></div>Studio Shots (35%)</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>Automated</div>
            <h2 className="title" style={{ marginBottom: '24px', fontSize: '2.5rem' }}>Increased Operational <span className="text-gradient">Efficiency</span></h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
              With automated discovery systems, you can secure quality creator partnerships in minutes, not weeks.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <CheckCircle2 color="var(--color-primary)" size={24} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ marginBottom: '4px' }}>Automated Workflows</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Eliminate repetitive tasks from initial outreach to final deliverable approvals.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge" style={{ background: 'transparent', border: '1px solid var(--color-border)' }}>Ready-to-use Templates</div>
          <h2 className="title" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Templates for <span className="text-gradient">Streamlined Sales</span></h2>
          <p className="subtitle" style={{ margin: '0 auto' }}>Deploy high-converting campaigns instantly with our curated selection of creator briefs.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[1,2,3].map((item) => (
            <motion.div key={item} whileHover={{ y: -5 }} className="modern-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ height: '160px', background: 'var(--color-surface-light)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(255,77,0,0.2), transparent)' }}></div>
                 <svg viewBox="0 0 100 40" style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0 }}>
                   <path d="M0 40 L20 30 L40 35 L60 15 L80 20 L100 5 L100 40 Z" fill="rgba(255,77,0,0.1)" stroke="var(--color-primary)" strokeWidth="1" />
                 </svg>
              </div>
              <div>
                <h4 style={{ marginBottom: '8px' }}>Template Model {item}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Accelerate your time-to-market with proven structural architectures.</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex-center" style={{ marginTop: '40px' }}>
          <Link to="/services" className="btn btn-primary">View All Templates</Link>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="container" style={{ paddingBottom: '120px' }}>
        <div style={{ 
          background: 'var(--color-surface)', 
          border: '1px solid var(--color-border)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '80px 40px', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Internal Glow for CTA */}
          <div style={{
            position: 'absolute',
            bottom: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse, rgba(255,77,0,0.3) 0%, transparent 60%)',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
            boxShadow: '0 -10px 40px rgba(255,77,0,0.6)'
          }} />

          <h2 className="title" style={{ fontSize: '3rem', position: 'relative', zIndex: 1 }}>Start Your Free <span className="text-gradient">Trial Today</span></h2>
          <p className="subtitle" style={{ margin: '16px auto 32px auto', position: 'relative', zIndex: 1 }}>
            Join thousands of brands scaling their authentic voice. No credit card required.
          </p>
          <div className="flex-center" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
            <Link to="/login" className="btn btn-primary">Start Free Trial</Link>
            <Link to="/contact" className="btn btn-secondary">Talk to Sales</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
