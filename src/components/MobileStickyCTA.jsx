import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function MobileStickyCTA({ onOpenEnquiry }) {
  return (
    <div className="mobile-sticky-bar" role="region" aria-label="Quick mobile admissions actions">
      {/* Quick Call Button */}
      <a
        href={SCHOOL_INFO.phoneLink}
        style={{
          flex: '0 0 auto',
          width: '46px',
          height: '46px',
          borderRadius: '14px',
          backgroundColor: '#0284c7',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(2, 132, 199, 0.35)',
          textDecoration: 'none'
        }}
        aria-label="Call Deeksha Preschool"
      >
        <Phone size={20} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={SCHOOL_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: '0 0 auto',
          width: '46px',
          height: '46px',
          borderRadius: '14px',
          backgroundColor: '#25d366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(37, 211, 102, 0.35)',
          textDecoration: 'none'
        }}
        aria-label="WhatsApp Deeksha Preschool"
      >
        <MessageCircle size={22} />
      </a>

      {/* Primary Enquire Now Button */}
      <button
        onClick={onOpenEnquiry}
        style={{
          flex: '1 1 auto',
          height: '46px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.95rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)',
          border: 'none',
          padding: '0 16px'
        }}
      >
        <Sparkles size={16} />
        <span>Enquire Now</span>
      </button>
    </div>
  );
}
