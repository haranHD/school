import React from 'react';
import { Volume2, BookOpen, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { PHONICS_CARDS, SCHOOL_INFO } from '../data/schoolData';

export default function Phonics({ onOpenEnquiry }) {
  const handlePhonicsEnquiry = () => {
    const phonicsWhatsapp = `https://wa.me/919994474316?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Phonics%20Classes%20at%20Deeksha%20Preschool.`;
    window.open(phonicsWhatsapp, '_blank');
  };

  return (
    <section id="phonics" className="section-padding" style={{
      background: 'linear-gradient(180deg, #fefce8 0%, #fffdfa 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative floating letters in background */}
      <div style={{
        position: 'absolute',
        top: '30px',
        right: '40px',
        fontSize: '4.5rem',
        fontWeight: 'bold',
        color: '#fef08a',
        opacity: 0.5,
        userSelect: 'none',
        pointerEvents: 'none'
      }}>
        Aa Bb Cc
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '640px', marginBottom: '50px' }}>
          <div className="section-badge badge-yellow">
            <Volume2 size={14} color="#854d0e" />
            <span>Signature Enrichment</span>
          </div>
          <h2 className="section-title">
            Discover the Joy of Phonics
          </h2>
          <p className="section-subtitle mx-auto">
            Make early reading and sound learning engaging through fun, interactive phonics activities.
          </p>
        </div>

        {/* 4 Phonics Visual Cards */}
        <div className="grid-4" style={{ marginBottom: '40px' }}>
          {PHONICS_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className="card-hover"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '32px 24px',
                border: '2px solid #fef08a',
                boxShadow: '0 8px 24px -4px rgba(234, 179, 8, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Large Animated Emoji Icon */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '22px',
                backgroundColor: '#fef9c3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                marginBottom: '18px',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.04)'
              }} className="animate-float">
                {card.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.35rem',
                color: '#1e293b',
                marginBottom: '10px'
              }}>
                {card.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.925rem',
                color: '#64748b',
                lineHeight: 1.6
              }}>
                {card.desc}
              </p>

              {/* Step indicator */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '16px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#ca8a04',
                letterSpacing: '0.05em'
              }}>
                Skill Module 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner with CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #fef3c7 0%, #ffedd5 100%)',
          borderRadius: '28px',
          padding: '36px 32px',
          border: '2px solid #fde047',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
          boxShadow: '0 12px 30px -6px rgba(245, 158, 11, 0.15)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#ffffff',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#b45309',
            marginBottom: '14px'
          }}>
            <Sparkles size={14} color="#f59e0b" />
            <span>Confidence in Speech & Reading</span>
          </div>

          <h3 style={{
            fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
            color: '#78350f',
            marginBottom: '12px'
          }}>
            Empowering Little Learners to Read with Joy
          </h3>

          <p style={{
            fontSize: '1rem',
            color: '#92400e',
            maxWidth: '600px',
            lineHeight: 1.6,
            marginBottom: '24px'
          }}>
            Children who build sound awareness early develop natural reading fluency, clear speech, and an lifelong love for stories and communication.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <button
              onClick={handlePhonicsEnquiry}
              className="btn btn-whatsapp"
              style={{ padding: '13px 28px', fontSize: '0.98rem' }}
            >
              <MessageCircle size={18} />
              <span>Know More via WhatsApp</span>
            </button>

            <button
              onClick={() => onOpenEnquiry("Phonics Classes")}
              className="btn btn-secondary"
              style={{
                backgroundColor: '#ffffff',
                borderColor: '#fbbf24',
                color: '#78350f',
                padding: '13px 26px'
              }}
            >
              <span>Enquire for Phonics Batch</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
