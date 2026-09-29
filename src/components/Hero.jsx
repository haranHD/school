import React from 'react';
import { Sparkles, ArrowRight, Heart, Star, BookOpen, Smile, CheckCircle, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section id="home" style={{
      position: 'relative',
      paddingTop: '40px',
      paddingBottom: '80px',
      background: 'linear-gradient(180deg, #f0f9ff 0%, #fffdf9 100%)',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Playful Blobs */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        left: '-80px',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(254, 240, 138, 0.45) 0%, rgba(254, 240, 138, 0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '120px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(186, 230, 253, 0.5) 0%, rgba(186, 230, 253, 0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column: Headlines & CTAs */}
          <div>
            {/* Admissions Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '9999px',
              background: '#ffffff',
              border: '2px solid #fed7aa',
              boxShadow: '0 4px 15px rgba(249, 115, 22, 0.12)',
              marginBottom: '20px'
            }}>
              <span style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.25)'
              }} />
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#ea580c',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                {SCHOOL_INFO.admissionsBadge} 2025–2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.6rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#0f172a',
              marginBottom: '18px',
              letterSpacing: '-0.02em'
            }}>
              Where Little Minds <br />
              <span style={{
                background: 'linear-gradient(135deg, #0284c7 0%, #ea580c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Begin Big Journeys
              </span>
            </h1>

            {/* Supporting Text */}
            <p style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '28px',
              maxWidth: '560px'
            }}>
              A joyful and nurturing environment where children learn, explore, create and grow with confidence.
            </p>

            {/* Program Labels */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>Foundational Programs & Phonics</span>
              </div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {[
                  { name: "Playgroup", bg: "#ffedd5", color: "#c2410c", border: "#fed7aa" },
                  { name: "Pre-KG", bg: "#e0f2fe", color: "#0369a1", border: "#bae6fd" },
                  { name: "Jr KG", bg: "#f3e8ff", color: "#7e22ce", border: "#e9d5ff" },
                  { name: "Sr KG", bg: "#dcfce7", color: "#15803d", border: "#bbf7d0" },
                  { name: "+ Phonics Classes", bg: "#fef9c3", color: "#a16207", border: "#fde047" }
                ].map((prog) => (
                  <span
                    key={prog.name}
                    style={{
                      background: prog.bg,
                      color: prog.color,
                      border: `1px solid ${prog.border}`,
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    {prog.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              alignItems: 'center'
            }}>
              <button
                onClick={onOpenEnquiry}
                className="btn btn-primary"
                style={{ fontSize: '1.05rem', padding: '15px 32px' }}
              >
                <Sparkles size={18} />
                <span>Enquire for Admission</span>
              </button>

              <a
                href="#programs"
                className="btn btn-secondary"
                style={{ fontSize: '1.02rem', padding: '14px 28px' }}
              >
                <span>Explore Our Programs</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick Parent Assurance Metrics / Note */}
            <div style={{
              marginTop: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
              paddingTop: '20px',
              borderTop: '1px solid #e2e8f0',
              fontSize: '0.875rem',
              color: '#64748b'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={16} color="#16a34a" />
                <span>Child-Centric Learning</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={16} color="#0284c7" />
                <span>Dedicated Phonics Focus</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={16} color="#ea580c" />
                <span>Bhavani, Tamil Nadu</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase with Floating Decorative Elements */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>

            {/* Main Visual Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              borderRadius: '36px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.22)',
              border: '6px solid #ffffff',
              background: '#f8fafc'
            }}>
              {/* Educational Child-Friendly Learning Photo */}
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
                alt="Joyful preschool child engaged in early learning"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Gradient overlay for contrast */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '110px',
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75), transparent)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px 24px'
              }}>
                <div style={{ color: '#ffffff' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600 }}>
                    Deeksha Preschool Bhavani
                  </div>
                  <div style={{ fontSize: '0.82rem', opacity: 0.9 }}>
                    A warm second home for playful beginnings
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Floating Decorative Badges (⭐, ☁️, 🌈, ✏️, 📚) */}

            {/* Badge 1: Rainbow / Joy */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                background: '#ffffff',
                padding: '10px 16px',
                borderRadius: '20px',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '2px solid #fed7aa',
                zIndex: 3
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>🌈</span>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#ea580c', textTransform: 'uppercase' }}>
                  Creative Joy
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155' }}>
                  Play & Discovery
                </div>
              </div>
            </div>

            {/* Badge 2: Star / Phonics */}
            <div
              className="animate-float-slow"
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '-25px',
                background: '#ffffff',
                padding: '10px 16px',
                borderRadius: '20px',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '2px solid #bae6fd',
                zIndex: 3
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>⭐</span>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase' }}>
                  Special Classes
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155' }}>
                  Phonics & Reading
                </div>
              </div>
            </div>

            {/* Badge 3: Book / Foundation */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '28px',
                right: '-20px',
                background: '#ffffff',
                padding: '10px 16px',
                borderRadius: '20px',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '2px solid #bbf7d0',
                zIndex: 3
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>📚</span>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase' }}>
                  Foundation
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155' }}>
                  Little Explorers
                </div>
              </div>
            </div>

            {/* Subtle floating emojis in the background */}
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              right: '25px',
              fontSize: '2rem',
              filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.15))',
              zIndex: 3
            }} className="animate-float-slow">
              ✏️
            </div>

            <div style={{
              position: 'absolute',
              top: '55%',
              right: '-30px',
              fontSize: '1.8rem',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
              zIndex: 2
            }} className="animate-float">
              ☁️
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}
