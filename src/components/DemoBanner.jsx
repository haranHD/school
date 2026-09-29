import React, { useState } from 'react';
import { Sparkles, X, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function DemoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #0284c7 0%, #7c3aed 50%, #ea580c 100%)',
      color: '#ffffff',
      fontSize: '0.82rem',
      fontWeight: '600',
      padding: '8px 16px',
      position: 'relative',
      zIndex: 1001,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            background: 'rgba(255,255,255,0.25)',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            Website Demo Preview
          </span>
          <span>
            Crafted for <strong>{SCHOOL_INFO.name}</strong> • Bhavani, Tamil Nadu
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ opacity: 0.9 }}>
            Live WhatsApp & Call Ready
          </span>
          <button
            onClick={() => setVisible(false)}
            aria-label="Close demo banner"
            style={{
              color: '#ffffff',
              opacity: 0.8,
              padding: '2px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
