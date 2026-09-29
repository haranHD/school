import React from 'react';
import { Sparkles, Heart, Compass, Star } from 'lucide-react';
import { TRUST_CARDS } from '../data/schoolData';

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Compass: Compass
};

export default function TrustIntro() {
  return (
    <section style={{
      paddingTop: '60px',
      paddingBottom: '70px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #f1f5f9'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '680px', marginBottom: '50px' }}>
          <div className="section-badge badge-yellow">
            <Star size={14} fill="#eab308" color="#eab308" />
            <span>Nurturing Philosophy</span>
          </div>
          <h2 className="section-title">
            Every Little Step Matters
          </h2>
          <p className="section-subtitle mx-auto">
            Early childhood is a special stage of discovery. Our preschool experience is designed to make learning joyful, engaging and meaningful for little learners.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid-3">
          {TRUST_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon] || Sparkles;
            return (
              <div
                key={card.id}
                className="card-hover"
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '36px 28px',
                  border: '1.5px solid #f1f5f9',
                  boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                {/* Decorative colored top accent strip */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: card.color
                }} />

                {/* Card Icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '18px',
                  backgroundColor: card.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: card.color,
                  marginBottom: '6px'
                }}>
                  <IconComponent size={28} />
                </div>

                {/* Card Title */}
                <h3 style={{
                  fontSize: '1.35rem',
                  letterSpacing: '0.01em',
                  color: '#0f172a'
                }}>
                  {card.title}
                </h3>

                {/* Card Description */}
                <p style={{
                  fontSize: '0.975rem',
                  color: '#64748b',
                  lineHeight: 1.6
                }}>
                  {card.desc}
                </p>

                {/* Subtle bottom note */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '14px',
                  borderTop: '1px dashed #e2e8f0',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>Pillar 0{index + 1}</span>
                  <span>•</span>
                  <span>Early Development</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
