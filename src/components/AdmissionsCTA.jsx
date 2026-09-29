import React from 'react';
import { Sparkles, MessageCircle, Phone, ArrowRight, Star } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function AdmissionsCTA() {
  const programs = [
    { name: "Playgroup", color: "#f97316" },
    { name: "Pre-KG", color: "#0284c7" },
    { name: "Jr KG", color: "#8b5cf6" },
    { name: "Sr KG", color: "#16a34a" },
    { name: "Phonics Classes", color: "#d97706" }
  ];

  return (
    <section id="admissions" style={{
      position: 'relative',
      padding: '90px 0',
      background: 'linear-gradient(135deg, #0284c7 0%, #7c3aed 50%, #ea580c 100%)',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      {/* Decorative background shapes */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        left: '-60px',
        width: '260px',
        height: '260px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        right: '-80px',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Top Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            padding: '6px 18px',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '20px',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <Star size={14} fill="#facc15" color="#facc15" />
            <span>Academic Year 2025 – 2026</span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 700,
            marginBottom: '14px',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 10px rgba(0,0,0,0.15)'
          }}>
            Admissions Are Open!
          </h2>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
            opacity: 0.95,
            marginBottom: '32px',
            fontWeight: 500,
            maxWidth: '620px',
            margin: '0 auto 32px'
          }}>
            Give your little one a joyful beginning.
          </p>

          {/* Program Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px'
          }}>
            {programs.map((p) => (
              <span
                key={p.name}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#0f172a',
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: p.color
                }} />
                {p.name}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            alignItems: 'center'
          }}>
            {/* Primary CTA: WhatsApp */}
            <a
              href={SCHOOL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                fontSize: '1.05rem',
                padding: '16px 36px',
                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)'
              }}
            >
              <MessageCircle size={20} />
              <span>Enquire for Admission</span>
            </a>

            {/* Secondary CTA: Call Us */}
            <a
              href={SCHOOL_INFO.phoneLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 32px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                fontWeight: 700,
                fontSize: '1.05rem',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#0284c7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <Phone size={20} />
              <span>Call Us: {SCHOOL_INFO.phone}</span>
            </a>
          </div>

          {/* Location note */}
          <div style={{
            marginTop: '28px',
            fontSize: '0.875rem',
            opacity: 0.9,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <span>📍 Campus: {SCHOOL_INFO.address}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
