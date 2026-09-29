import React from 'react';
import { Phone, MapPin, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { SCHOOL_INFO, NAV_LINKS } from '../data/schoolData';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      paddingTop: '70px',
      paddingBottom: '36px',
      borderTop: '4px solid #ea580c'
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          marginBottom: '50px'
        }} className="footer-grid">

          {/* Column 1: Brand & Tagline & Programs */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #fef08a 0%, #fed7aa 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px'
              }}>
                <img src="/logo-icon.svg" alt="Deeksha Logo" style={{ width: '85%', height: '85%' }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}>
                  DEEKSHA <span style={{ color: '#fb923c' }}>PRESCHOOL</span>
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#38bdf8',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {SCHOOL_INFO.tagline}
                </div>
              </div>
            </div>

            <p style={{
              fontSize: '0.925rem',
              color: '#94a3b8',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}>
              A joyful and nurturing early learning sanctuary in Bhavani, Tamil Nadu. Building strong foundations through curiosity, play, and phonics education.
            </p>

            <div style={{
              background: '#1e293b',
              padding: '12px 16px',
              borderRadius: '14px',
              border: '1px solid #334155',
              fontSize: '0.85rem',
              color: '#cbd5e1',
              fontWeight: 600
            }}>
              <span style={{ color: '#fb923c' }}>Programs Offered:</span><br />
              Playgroup • Pre-KG • Jr KG • Sr KG • Phonics
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
              <span>Quick Links</span>
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.filter(l => ['Home', 'About', 'Programs', 'Learning', 'Gallery', 'Contact'].includes(l.name)).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.925rem',
                      color: '#94a3b8',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fb923c')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    <span style={{ color: '#475569' }}>›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Campus Info */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
              <span>Campus Contact</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="#fb923c" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ fontSize: '0.925rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  1/187 A, Natarajapuram,<br />
                  Bhavani, Tamil Nadu
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={20} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a
                  href={SCHOOL_INFO.phoneLink}
                  style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em' }}
                >
                  {SCHOOL_INFO.phone}
                </a>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button
                onClick={onOpenEnquiry}
                className="btn btn-primary"
                style={{ width: '100%', padding: '11px', fontSize: '0.9rem' }}
              >
                <Sparkles size={16} />
                <span>Admissions Enquiry</span>
              </button>
            </div>
          </div>

          {/* Column 4: Social Channels & Follow */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ec4899' }} />
              <span>Connect With Us</span>
            </h4>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '18px' }}>
              Follow our official media channels to see our vibrant school culture, event celebrations, and phonics activities.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={SCHOOL_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#1e293b',
                  color: '#f472b6',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  border: '1px solid #334155',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#293548')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1e293b')}
              >
                <InstagramIcon size={20} />
                <span>@{SCHOOL_INFO.instagramHandle}</span>
              </a>

              <a
                href={SCHOOL_INFO.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#1e293b',
                  color: '#f87171',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  border: '1px solid #334155',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#293548')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1e293b')}
              >
                <YoutubeIcon size={20} />
                <span>{SCHOOL_INFO.youtubeName}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div style={{
          paddingTop: '28px',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 Deeksha Preschool. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Bhavani, Tamil Nadu</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#38bdf8',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.4fr 0.8fr 1.2fr 1.2fr !important;
          }
        }
        @media (min-width: 600px) and (max-width: 899px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
