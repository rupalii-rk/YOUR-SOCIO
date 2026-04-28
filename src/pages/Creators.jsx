import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import CreatorCard from '../components/CreatorCard';

const CATEGORIES = ['All', 'UGC', 'Lifestyle', 'Tech', 'Fashion', 'Education', 'Fitness'];

const MOCK_CREATORS = [
  { id: '1', name: 'Alex Rivera', niche: 'UGC', followers: '124K', engagement: '5.2%', rating: 5, image: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=500&auto=format&fit=crop&q=80' },
  { id: '2', name: 'Samira Jones', niche: 'Lifestyle', followers: '89K', engagement: '4.8%', rating: 4, image: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=80' },
  { id: '3', name: 'David Chen', niche: 'Tech', followers: '45K', engagement: '8.1%', rating: 3, image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80' },
  { id: '4', name: 'Mia Wong', niche: 'Fashion', followers: '210K', engagement: '3.4%', rating: 5, image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=500&auto=format&fit=crop&q=80' },
  { id: '5', name: 'Marcus Cole', niche: 'Fitness', followers: '12K', engagement: '12.5%', rating: 2, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80' },
  { id: '6', name: 'Elena Rostova', niche: 'Education', followers: '5K', engagement: '15.2%', rating: 1, image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&auto=format&fit=crop&q=80' },
];

const Creators = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCreators = activeCategory === 'All'
    ? MOCK_CREATORS
    : MOCK_CREATORS.filter(c => c.niche === activeCategory);

  return (
    <div className="container section" style={{ position: 'relative' }}>
      <div className="glow-bg" style={{ top: '-10%' }} />
      
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 1 }}>
        <h1 className="title-massive" style={{ marginBottom: '16px' }}>
          Explore <span className="text-gradient">Creators</span>
        </h1>
        <p className="subtitle" style={{ margin: '0 auto' }}>
          Find the perfect raw voice for your next mission.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '60px', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? 'btn btn-primary' : 'btn btn-secondary'}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {filteredCreators.length > 0 ? (
          <Carousel>
            {filteredCreators.map(creator => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </Carousel>
        ) : (
          <div className="modern-card" style={{ padding: '80px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-text-muted)' }}>No creators found in this category.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Creators;
