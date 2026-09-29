import React from 'react';
import { Sparkles, Palette, Info } from 'lucide-react';
import { ACTIVITIES_DATA } from '../data/schoolData';

export default function Activities({ onOpenEnquiry }) {
  return (
    <section id="activities" className="section-padding" style={{
      backgroundColor: '#f8fafc',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '640px', marginBottom: '50px' }}>
          <div className="section-badge badge-purple">
            <Sparkles size={14} />
            <span>Engaging Experiences</span>
          </div>
          <h2 className="section-title">
            Little Learners, Big Adventures
          </h2>
          <p className="section-subtitle mx-auto">
            From creative expression to rhythmic movements and hands-on discovery, every day offers a new avenue for joyful engagement.
          </p>
        </div>

        {/* 6 Activity Cards Grid */}
        <div className="grid-3" style={{ marginBottom: '36px' }}>
          {ACTIVITIES_DATA.map((act) => (
            <div
              key={act.id}
              className="card-hover"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '28px 24px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 4px 18px -2px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start'
              }}
            >
              {/* Activity Emoji Icon */}
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '18px',
                backgroundColor: act.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                flexShrink: 0,
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
              }}>
                {act.icon}
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#0f172a',
                  marginBottom: '8px'
                }}>
                  {act.name}
                </h3>
                <p style={{
                  fontSize: '0.925rem',
                  color: '#64748b',
                  lineHeight: 1.55
                }}>
                  {act.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Demo Customization Transparency Note */}
        <div style={{
          maxWidth: '750px',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '14px 20px',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          <Info size={18} color="#0284c7" style={{ flexShrink: 0 }} />
          <span>
            <strong>Demo Note for Preschool Team:</strong> These sample activity categories represent common preschool enrichment modules. Once finalized, your specific daily curriculum, events, and timings will be updated directly.
          </span>
        </div>

      </div>
    </section>
  );
}
