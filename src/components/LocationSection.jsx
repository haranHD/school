import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, Calendar, CheckCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function LocationSection() {
  return (
    <section id="contact" className="section-padding" style={{
      backgroundColor: '#f8fafc',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '640px', marginBottom: '50px' }}>
          <div className="section-badge badge-green">
            <MapPin size={14} />
            <span>Campus Location</span>
          </div>
          <h2 className="section-title">
            Visit Deeksha Preschool
          </h2>
          <p className="section-subtitle mx-auto">
            We welcome parents to visit our campus in Bhavani, meet our friendly staff, and explore the learning environment firsthand.
          </p>
        </div>

        {/* Location Showcase Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          alignItems: 'stretch'
        }} className="location-grid">

          {/* Left Column: Campus Details & Direct Contact */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '28px',
            padding: '40px 32px',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Institution Identity */}
              <div style={{
                display: 'inline-block',
                background: '#ffedd5',
                color: '#c2410c',
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '12px'
              }}>
                Early Learning Center
              </div>

              <h3 style={{
                fontSize: '1.8rem',
                color: '#0f172a',
                marginBottom: '4px'
              }}>
                {SCHOOL_INFO.name}
              </h3>

              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#0284c7',
                marginBottom: '24px'
              }}>
                {SCHOOL_INFO.tagline}
              </div>

              {/* Address Block */}
              <div style={{
                display: 'flex',
                gap: '14px',
                marginBottom: '24px',
                padding: '18px 20px',
                borderRadius: '18px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0'
              }}>
                <MapPin size={24} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    Campus Address
                  </div>
                  <div style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#1e293b',
                    lineHeight: 1.5,
                    marginTop: '2px'
                  }}>
                    {SCHOOL_INFO.address}
                  </div>
                </div>
              </div>

              {/* Phone Block */}
              <div style={{
                display: 'flex',
                gap: '14px',
                marginBottom: '32px',
                padding: '18px 20px',
                borderRadius: '18px',
                backgroundColor: '#f0f9ff',
                border: '1px solid #bae6fd'
              }}>
                <Phone size={24} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase' }}>
                    Admissions Helpline
                  </div>
                  <a
                    href={SCHOOL_INFO.phoneLink}
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#0284c7',
                      lineHeight: 1.4,
                      display: 'block',
                      marginTop: '2px'
                    }}
                  >
                    {SCHOOL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <a
                href={SCHOOL_INFO.phoneLink}
                className="btn btn-call"
                style={{ flex: 1, minWidth: '150px' }}
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>

              <a
                href={SCHOOL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ flex: 1, minWidth: '160px' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={SCHOOL_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', borderColor: '#cbd5e1' }}
              >
                <Navigation size={18} color="#ea580c" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map-Style Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.06)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Map Visual Header */}
            <div style={{
              position: 'relative',
              height: '340px',
              backgroundColor: '#e2e8f0',
              backgroundImage: `radial-gradient(#cbd5e1 1.5px, transparent 1.5px), radial-gradient(#cbd5e1 1.5px, #f8fafc 1.5px)`,
              backgroundSize: '30px 30px',
              backgroundPosition: '0 0, 15px 15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}>
              {/* Map Illustration / Visual Pin */}
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                {/* Floating Ping Ring */}
                <div style={{
                  position: 'absolute',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(234, 88, 12, 0.18)',
                  animation: 'pulseSoft 2s infinite',
                  top: '-15px'
                }} />

                {/* Map Pin Bubble */}
                <div style={{
                  background: '#ffffff',
                  padding: '16px 22px',
                  borderRadius: '20px',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.18)',
                  border: '2px solid #ea580c',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2,
                  maxWidth: '260px'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '12px',
                    backgroundColor: '#ffedd5',
                    color: '#ea580c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 8px'
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#0f172a'
                  }}>
                    Deeksha Preschool
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                    1/187 A, Natarajapuram, Bhavani
                  </div>
                </div>

                {/* Pointer Arrow */}
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#ffffff',
                  borderRight: '2px solid #ea580c',
                  borderBottom: '2px solid #ea580c',
                  transform: 'rotate(45deg)',
                  marginTop: '-8px',
                  zIndex: 1
                }} />
              </div>

              {/* Overlay Get Directions floating button */}
              <a
                href={SCHOOL_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  background: '#ffffff',
                  color: '#0f172a',
                  padding: '10px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid #e2e8f0',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Navigation size={15} color="#ea580c" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Map Card Footer Information */}
            <div style={{ padding: '24px 28px', backgroundColor: '#ffffff', flexGrow: 1 }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px'
              }}>
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #f1f5f9'
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    Town & Region
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>
                    Bhavani, Tamil Nadu
                  </div>
                </div>

                <div style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #f1f5f9'
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    Admissions Support
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#16a34a', marginTop: '2px' }}>
                    Open for Enquiries
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .location-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
