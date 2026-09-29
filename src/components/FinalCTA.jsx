import React from 'react';
import { Sparkles, MessageCircle, Phone, Heart, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function FinalCTA({ onOpenEnquiry }) {
  return (
    <section style={{
      position: 'relative',
      padding: '90px 0',
      backgroundColor: '#ffffff',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          position: 'relative',
          borderRadius: '36px',
          background: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 40%, #e0f2fe 100%)',
          padding: '64px 32px',
          border: '2px solid #fed7aa',
          boxShadow: '0 20px 45px -10px rgba(249, 115, 22, 0.12)',
          textAlign: 'center',
          overflow: 'hidden'
        }}>
          {/* Subtle playful floating background badges */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '30px',
            fontSize: '2.5rem',
            opacity: 0.8
          }} className="animate-float">
            🎈
          </div>

          <div style={{
            position: 'absolute',
            bottom: '25px',
            left: '45px',
            fontSize: '2.2rem',
            opacity: 0.8
          }} className="animate-float-slow">
            🌟
          </div>

          <div style={{
            position: 'absolute',
            top: '30px',
            right: '40px',
            fontSize: '2.4rem',
            opacity: 0.8
          }} className="animate-float">
            🎨
          </div>

          <div style={{
            position: 'absolute',
            bottom: '30px',
            right: '40px',
            fontSize: '2.2rem',
            opacity: 0.8
          }} className="animate-float-slow">
            🌱
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {/* Small Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#ffffff',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#ea580c',
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
              marginBottom: '20px'
            }}>
              <Heart size={14} fill="#ea580c" color="#ea580c" />
              <span>The Little Foundation</span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '16px',
              lineHeight: 1.2
            }}>
              Let Their Learning Journey Begin
            </h2>

            {/* Supporting Text */}
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '36px',
              maxWidth: '560px',
              margin: '0 auto 36px'
            }}>
              "Every child has a world of curiosity waiting to be discovered."
            </p>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <button
                onClick={onOpenEnquiry}
                className="btn btn-primary"
                style={{
                  padding: '16px 36px',
                  fontSize: '1.05rem',
                  boxShadow: '0 10px 25px -4px rgba(234, 88, 12, 0.45)'
                }}
              >
                <Sparkles size={18} />
                <span>Enquire for Admission</span>
              </button>

              <a
                href={SCHOOL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: '15px 32px',
                  fontSize: '1.02rem',
                  backgroundColor: '#ffffff',
                  borderColor: '#cbd5e1'
                }}
              >
                <MessageCircle size={18} color="#25d366" />
                <span>Contact Preschool</span>
              </a>
            </div>

            <div style={{
              marginTop: '32px',
              fontSize: '0.85rem',
              color: '#64748b'
            }}>
              📍 1/187 A, Natarajapuram, Bhavani, Tamil Nadu • 📞 {SCHOOL_INFO.phone}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
