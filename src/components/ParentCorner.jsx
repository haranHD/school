import React from 'react';
import { MessageSquare, TrendingUp, PhoneCall, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { PARENT_CARDS } from '../data/schoolData';

const iconMap = {
  MessageSquare: MessageSquare,
  TrendingUp: TrendingUp,
  PhoneCall: PhoneCall
};

export default function ParentCorner({ onOpenEnquiry }) {
  return (
    <section className="section-padding" style={{
      backgroundColor: '#f8fafc',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '680px', marginBottom: '56px' }}>
          <div className="section-badge badge-sky">
            <HeartHandshake size={14} />
            <span>Parent Partnership</span>
          </div>
          <h2 className="section-title">
            A Place Where Parents Feel Connected
          </h2>
          <p className="section-subtitle mx-auto">
            We understand that choosing the right preschool is a heartfelt family decision. We prioritize transparency, responsiveness, and peace of mind at every step.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid-3" style={{ marginBottom: '40px' }}>
          {PARENT_CARDS.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || ShieldCheck;
            return (
              <div
                key={card.id}
                className="card-hover"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '36px 28px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '18px',
                  backgroundColor: card.bg,
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}>
                  <IconComponent size={28} />
                </div>

                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: card.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '6px'
                }}>
                  {card.subtitle}
                </div>

                <h3 style={{
                  fontSize: '1.35rem',
                  color: '#0f172a',
                  marginBottom: '12px'
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontSize: '0.975rem',
                  color: '#64748b',
                  lineHeight: 1.65,
                  flexGrow: 1
                }}>
                  "{card.desc}"
                </p>

                <div style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px dashed #e2e8f0',
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>Feature 0{idx + 1}</span>
                  <span>•</span>
                  <span>Parent Portal Capability</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Parent Assurance Quote Box */}
        <div style={{
          background: 'linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%)',
          borderRadius: '24px',
          padding: '24px 32px',
          border: '1px solid #bae6fd',
          maxWidth: '820px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
          boxShadow: '0 4px 20px -2px rgba(2, 132, 199, 0.08)'
        }}>
          <ShieldCheck size={36} color="#0284c7" style={{ flexShrink: 0 }} />
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#0369a1',
              marginBottom: '4px'
            }}>
              Direct & Accessible Leadership
            </div>
            <div style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5 }}>
              Parents are encouraged to speak directly with our educators and management regarding their child's individual adaptation and progress.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
