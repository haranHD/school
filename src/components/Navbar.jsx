import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, NAV_LINKS } from '../data/schoolData';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: isScrolled
          ? '0 4px 20px -2px rgba(15, 23, 42, 0.08)'
          : '0 2px 10px rgba(0, 0, 0, 0.03)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: isScrolled ? '10px' : '16px',
        paddingBottom: isScrolled ? '10px' : '16px',
        transition: 'padding 0.3s ease'
      }}>
        {/* Playful Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: isScrolled ? '42px' : '48px',
            height: isScrolled ? '42px' : '48px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #fef08a 0%, #fed7aa 50%, #bae6fd 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.15)',
            border: '2px solid #ffffff',
            transition: 'all 0.3s ease',
            flexShrink: 0
          }}>
            <img
              src="/logo-icon.svg"
              alt="Deeksha Preschool Sun Emblem"
              style={{ width: '80%', height: '80%' }}
            />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: isScrolled ? '1.25rem' : '1.4rem',
              fontWeight: 700,
              color: '#1e293b',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              transition: 'font-size 0.3s ease'
            }}>
              DEEKSHA <span style={{ color: '#ea580c' }}>PRESCHOOL</span>
            </div>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#0284c7',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '1px'
            }}>
              <span>{SCHOOL_INFO.tagline}</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: '#334155',
                    transition: 'color 0.2s ease',
                    padding: '6px 2px',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ea580c')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div style={{ display: 'none', alignItems: 'center', gap: '14px' }} className="desktop-actions">
          <a
            href={SCHOOL_INFO.phoneLink}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#0f172a',
              fontSize: '0.875rem',
              fontWeight: 700,
              padding: '8px 12px',
              borderRadius: '9999px',
              backgroundColor: '#f1f5f9',
              transition: 'background 0.2s ease'
            }}
            title="Call Deeksha Preschool"
          >
            <Phone size={14} color="#0284c7" />
            <span>{SCHOOL_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenEnquiry}
            className="btn btn-primary"
            style={{
              padding: isScrolled ? '9px 20px' : '11px 24px',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            <Sparkles size={16} />
            <span>{SCHOOL_INFO.admissionsBadge}</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-toggle">
          <button
            onClick={onOpenEnquiry}
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              color: '#ffffff',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Sparkles size={13} />
            <span>Enquire</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1e293b'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: isScrolled ? '63px' : '77px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            zIndex: 9999,
            overflowY: 'auto',
            padding: '24px 20px 80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
        >
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
              padding: '16px',
              borderRadius: '16px',
              marginBottom: '20px',
              border: '1px solid #ffedd5'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ea580c', textTransform: 'uppercase' }}>
                🌟 Admissions Open 2025-26
              </div>
              <div style={{ fontSize: '0.9rem', color: '#475569', marginTop: '4px' }}>
                Playgroup • Pre-KG • Jr KG • Sr KG & Phonics
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1e293b',
                      borderRadius: '14px',
                      background: '#f8fafc',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <Sparkles size={18} />
              <span>Admissions Open - Enquire</span>
            </button>

            <a
              href={SCHOOL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', padding: '13px', fontSize: '0.95rem' }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Admission Query</span>
            </a>

            <a
              href={SCHOOL_INFO.phoneLink}
              className="btn btn-secondary"
              style={{ width: '100%', padding: '13px', fontSize: '0.95rem' }}
            >
              <Phone size={18} />
              <span>Call: {SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive media query helper via inline style */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: block !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
