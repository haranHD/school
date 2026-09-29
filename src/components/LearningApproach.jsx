import React from 'react';
import { Compass, Palette, Puzzle, Sprout, ArrowRight, Sparkles } from 'lucide-react';
import { LEARNING_STEPS } from '../data/schoolData';

const iconMap = {
  Compass: Compass,
  Palette: Palette,
  Puzzle: Puzzle,
  Sprout: Sprout
};

export default function LearningApproach() {
  return (
    <section id="learning" className="section-padding" style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f1f5f9',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '640px', marginBottom: '60px' }}>
          <div className="section-badge badge-green">
            <Sparkles size={14} />
            <span>Child-Centric Pedagogy</span>
          </div>
          <h2 className="section-title">
            Learning Should Feel Like Fun
          </h2>
          <p className="section-subtitle mx-auto">
            Our progressive approach balances child-led curiosity with supportive guidance, ensuring young minds embrace learning as an adventure.
          </p>
        </div>

        {/* Timeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          position: 'relative'
        }} className="timeline-grid">

          {LEARNING_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || Compass;
            return (
              <div
                key={step.step}
                className="card-hover"
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '32px 24px',
                  border: '1.5px solid #f1f5f9',
                  boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* Step Number Badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.04)'
                  }}>
                    <IconComponent size={26} />
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: `${step.color}40`,
                    letterSpacing: '-0.02em'
                  }}>
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 style={{
                  fontSize: '1.35rem',
                  letterSpacing: '0.02em',
                  color: '#0f172a',
                  marginBottom: '10px'
                }}>
                  {step.title}
                </h3>

                {/* Step Description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: 1.65
                }}>
                  {step.desc}
                </p>

                {/* Bottom Step Indicator */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '20px',
                  borderTop: '1px dashed #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: step.color
                }}>
                  <span>Phase {step.step}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
