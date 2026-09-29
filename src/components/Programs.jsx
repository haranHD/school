import React from 'react';
import { Baby, Smile, Palette, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/schoolData';

const iconMap = {
  Baby: Baby,
  Smile: Smile,
  Palette: Palette,
  GraduationCap: GraduationCap
};

export default function Programs({ onOpenEnquiry }) {
  return (
    <section id="programs" className="section-padding" style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f1f5f9',
      borderBottom: '1px solid #f1f5f9'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '640px', marginBottom: '56px' }}>
          <div className="section-badge badge-orange">
            <Sparkles size={14} />
            <span>Age-Appropriate Stages</span>
          </div>
          <h2 className="section-title">
            Our Programs
          </h2>
          <p className="section-subtitle mx-auto">
            Thoughtfully structured early education pathways that support each child's natural pace of discovery, expression, and developmental confidence.
          </p>
        </div>

        {/* 4 Program Cards */}
        <div className="grid-4">
          {PROGRAMS_DATA.map((prog, index) => {
            const IconComponent = iconMap[prog.icon] || Smile;
            return (
              <div
                key={prog.id}
                className="card-hover"
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '32px 24px',
                  border: `2px solid ${prog.accentBorder}`,
                  boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative background glow circle */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  backgroundColor: prog.badgeBg,
                  zIndex: 0,
                  opacity: 0.7
                }} />

                {/* Top Badge: Stage Index */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    backgroundColor: prog.badgeBg,
                    color: prog.themeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                  }}>
                    <IconComponent size={28} />
                  </div>

                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: prog.themeColor,
                    background: prog.badgeBg,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    Stage 0{index + 1}
                  </span>
                </div>

                {/* Program Title */}
                <h3 style={{
                  fontSize: '1.45rem',
                  letterSpacing: '0.02em',
                  color: '#0f172a',
                  marginBottom: '6px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {prog.title}
                </h3>

                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: prog.themeColor,
                  marginBottom: '14px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {prog.subtitle}
                </div>

                {/* Exact Program Description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: 1.65,
                  marginBottom: '28px',
                  flexGrow: 1,
                  position: 'relative',
                  zIndex: 1
                }}>
                  "{prog.desc}"
                </p>

                {/* Enquire Now Button */}
                <button
                  onClick={() => onOpenEnquiry(prog.title)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 18px',
                    borderRadius: '16px',
                    backgroundColor: prog.badgeBg,
                    color: prog.themeColor,
                    fontWeight: 700,
                    fontSize: '0.925rem',
                    border: `1.5px solid ${prog.accentBorder}`,
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    zIndex: 1
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = prog.themeColor;
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = prog.badgeBg;
                    e.currentTarget.style.color = prog.themeColor;
                  }}
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={16} />
                </button>

              </div>
            );
          })}
        </div>

        {/* Note on Phonics integration */}
        <div style={{
          marginTop: '40px',
          background: 'linear-gradient(135deg, #fefce8 0%, #fff7ed 100%)',
          borderRadius: '20px',
          padding: '20px 28px',
          border: '1.5px solid #fde047',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '1.8rem' }}>🔤</span>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, color: '#854d0e' }}>
                Looking for Phonics Education?
              </div>
              <div style={{ fontSize: '0.875rem', color: '#713f12' }}>
                We also offer specialized Phonics Classes for early reading, speech and pronunciation.
              </div>
            </div>
          </div>
          <a
            href="#phonics"
            className="btn btn-secondary"
            style={{
              padding: '9px 20px',
              fontSize: '0.875rem',
              backgroundColor: '#ffffff',
              borderColor: '#facc15',
              color: '#854d0e'
            }}
          >
            <span>Explore Phonics</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
