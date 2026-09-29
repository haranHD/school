import React, { useState } from 'react';
import { Camera, ExternalLink, Sparkles, Image as ImageIcon } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { GALLERY_ITEMS, SCHOOL_INFO } from '../data/schoolData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Learning', 'Creativity', 'Social Skills', 'Phonics & Stories', 'Events'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding" style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f1f5f9',
      borderBottom: '1px solid #f1f5f9'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '660px', marginBottom: '40px' }}>
          <div className="section-badge badge-pink">
            <Camera size={14} />
            <span>Visual Glimpse</span>
          </div>
          <h2 className="section-title">
            Moments From Our Little World
          </h2>
          <p className="section-subtitle mx-auto">
            A joyful collection of classroom discoveries, creative exploration, group smiles, and early milestones.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '36px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: activeCategory === cat ? '2px solid #db2777' : '1.5px solid #e2e8f0',
                backgroundColor: activeCategory === cat ? '#fdf2f8' : '#ffffff',
                color: activeCategory === cat ? '#db2777' : '#64748b',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid-3" style={{ marginBottom: '44px' }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-hover"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid #f1f5f9',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Image Container with Hover zoom */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '240px', backgroundColor: '#f1f5f9' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  {item.badge}
                </div>
              </div>

              {/* Caption Content */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '1.15rem',
                  color: '#0f172a',
                  marginBottom: '6px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: 1.5
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Integration Card & CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #fdf2f8 0%, #faf5ff 100%)',
          borderRadius: '24px',
          padding: '28px 32px',
          border: '1.5px solid #fce7f3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 8px 24px -4px rgba(219, 39, 119, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d946ef 50%, #4f46e5 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(217, 70, 239, 0.3)',
              flexShrink: 0
            }}>
              <InstagramIcon size={28} />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#831843'
              }}>
                Follow Our Everyday Smiles on Instagram
              </div>
              <div style={{ fontSize: '0.875rem', color: '#9d174d' }}>
                @{SCHOOL_INFO.instagramHandle} • Regular celebration & phonics updates
              </div>
            </div>
          </div>

          <a
            href={SCHOOL_INFO.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
              color: '#ffffff',
              padding: '12px 24px',
              fontSize: '0.925rem',
              boxShadow: '0 8px 20px -4px rgba(219, 39, 119, 0.4)'
            }}
          >
            <span>View More Moments</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Demo Replacement Note */}
        <div style={{
          marginTop: '16px',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#94a3b8'
        }}>
          💡 <em>Demo Note: These representative preschool photos are placeholders. Real classroom and event pictures from your Instagram handle will seamlessly replace them.</em>
        </div>

      </div>
    </section>
  );
}
