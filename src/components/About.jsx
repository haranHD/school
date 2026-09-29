import React from 'react';
import { CheckCircle2, Heart, Sparkles, MapPin, Phone } from 'lucide-react';
import { SCHOOL_INFO, ABOUT_BULLETS } from '../data/schoolData';

export default function About({ onOpenEnquiry }) {
  return (
    <section id="about" className="section-padding" style={{
      backgroundColor: '#fffdfa',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="about-grid">

          {/* Left Column: Visual Showcase */}
          <div style={{ position: 'relative' }}>
            {/* Background shape */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              right: '20px',
              bottom: '20px',
              borderRadius: '36px',
              background: 'linear-gradient(135deg, #e0f2fe 0%, #fef3c7 100%)',
              zIndex: 0
            }} />

            {/* Main Visual Image */}
            <div style={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.15)',
              border: '6px solid #ffffff',
              zIndex: 1,
              background: '#f8fafc'
            }}>
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80"
                alt="Children engaging in collaborative early learning at preschool"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Floating Overlay Badge on the Image */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '16px 20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: '#ffedd5',
                  color: '#ea580c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Heart size={24} fill="#ea580c" />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#0f172a'
                  }}>
                    A Joyful Second Home
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Safe, engaging & inspiring for every child in Bhavani
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-10px',
                background: '#ffffff',
                padding: '12px 18px',
                borderRadius: '20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '2px solid #fed7aa',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={18} color="#ea580c" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
                Play • Learn • Grow
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Bullets */}
          <div>
            <div className="section-badge badge-sky">
              <Sparkles size={14} />
              <span>About Our Preschool</span>
            </div>

            <h2 className="section-title">
              Welcome to Deeksha Preschool
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '28px'
            }}>
              At <strong>Deeksha Preschool – The Little Foundation</strong>, we believe the early years are the foundation for a child's journey ahead. Our goal is to create a welcoming learning environment where children can explore, interact and develop confidence.
            </p>

            {/* "Designed for Little Learners" Feature Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '28px',
              border: '2px solid #e0f2fe',
              boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.06)',
              marginBottom: '28px'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                color: '#0284c7',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>Designed for Little Learners</span>
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '12px'
              }}>
                {ABOUT_BULLETS.map((bullet, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.975rem',
                      fontWeight: 600,
                      color: '#334155'
                    }}
                  >
                    <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <button
                onClick={onOpenEnquiry}
                className="btn btn-primary"
              >
                <span>Enquire for Admission</span>
              </button>

              <a
                href="#location"
                className="btn btn-secondary"
              >
                <MapPin size={16} color="#0284c7" />
                <span>Visit Our Campus</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
}
