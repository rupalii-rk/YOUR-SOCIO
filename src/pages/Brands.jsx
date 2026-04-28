import React from 'react';
import Carousel from '../components/Carousel';
import BrandCard from '../components/BrandCard';

const MOCK_BRANDS = [
  { id: 'b1', name: 'Aura Athletics', industry: 'Fitness & Apparel', pastCollabs: 24, recentCampaign: 'Summer Flex 2026', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=60' },
  { id: 'b2', name: 'Lumiere Skincare', industry: 'Beauty', pastCollabs: 156, recentCampaign: 'Glow Authentically', logo: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=300&auto=format&fit=crop&q=60' },
  { id: 'b3', name: 'TechNova', industry: 'Consumer Tech', pastCollabs: 8, recentCampaign: 'NovaBuds Launch', logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&auto=format&fit=crop&q=60' },
  { id: 'b4', name: 'FreshEats', industry: 'Food & Beverage', pastCollabs: 42, recentCampaign: 'Veganuary 2026', logo: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&auto=format&fit=crop&q=60' },
  { id: 'b5', name: 'Urbane', industry: 'Fashion', pastCollabs: 89, recentCampaign: 'Street Style FW26', logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&auto=format&fit=crop&q=60' },
];

const Brands = () => {
  return (
    <div className="container section" style={{ position: 'relative' }}>
      <div className="glow-bg" style={{ top: '-10%' }} />

      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 1 }}>
        <h1 className="title-massive" style={{ marginBottom: '16px' }}>
          Explore <span className="text-gradient">Brands</span>
        </h1>
        <p className="subtitle" style={{ margin: '0 auto' }}>
          Discover top brands seeking raw, authentic collaborations.
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Carousel>
          {MOCK_BRANDS.map(brand => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Brands;
