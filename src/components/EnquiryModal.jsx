import React, { useState, useEffect } from 'react';
import { X, Sparkles, MessageCircle, Phone, Check } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function EnquiryModal({ isOpen, onClose, defaultProgram = "Playgroup" }) {
  const [selectedProgram, setSelectedProgram] = useState(defaultProgram);
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");

  const programs = ["Playgroup", "Pre-KG", "Jr KG", "Sr KG", "Phonics Classes"];

  useEffect(() => {
    if (defaultProgram) {
      setSelectedProgram(defaultProgram);
    }
  }, [defaultProgram]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    let message = `Hi, I would like to enquire about admission at Deeksha Preschool for ${selectedProgram}.`;
    if (childName.trim()) {
      message += ` Child's Name: ${childName.trim()}.`;
    }
    if (parentName.trim()) {
      message += ` Parent: ${parentName.trim()}.`;
    }
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/919994474316?text=${encoded}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          maxWidth: '520px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.3)',
          border: '1px solid #e2e8f0',
          position: 'relative',
          animation: 'pulseSoft 0.3s ease-out'
        }}
      >
        {/* Header Ribbon */}
        <div style={{
          background: 'linear-gradient(135deg, #0284c7 0%, #ea580c 100%)',
          color: '#ffffff',
          padding: '24px 24px 20px',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '8px'
          }}>
            <Sparkles size={13} />
            <span>Admissions 2025–2026</span>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.45rem',
            fontWeight: 700,
            lineHeight: 1.2
          }}>
            Admission & Program Enquiry
          </h3>
          <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>
            Deeksha Preschool • The Little Foundation • Bhavani
          </p>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleWhatsAppSubmit} style={{ padding: '24px' }}>
          {/* Select Program */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#1e293b',
              marginBottom: '10px'
            }}>
              Select Program of Interest:
            </label>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {programs.map((prog) => {
                const isSelected = selectedProgram === prog;
                return (
                  <button
                    key={prog}
                    type="button"
                    onClick={() => setSelectedProgram(prog)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: isSelected ? '2px solid #ea580c' : '1.5px solid #cbd5e1',
                      backgroundColor: isSelected ? '#ffedd5' : '#ffffff',
                      color: isSelected ? '#ea580c' : '#475569',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    {isSelected && <Check size={14} />}
                    <span>{prog}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Child Name */}
          <div style={{ marginBottom: '14px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#334155',
              marginBottom: '6px'
            }}>
              Child's Name (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Aarav"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '12px',
                border: '1.5px solid #cbd5e1',
                fontSize: '0.95rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Parent Name */}
          <div style={{ marginBottom: '22px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#334155',
              marginBottom: '6px'
            }}>
              Parent's Name (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Priya"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '12px',
                border: '1.5px solid #cbd5e1',
                fontSize: '0.95rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* WhatsApp Direct Submit Button */}
          <button
            type="submit"
            className="btn btn-whatsapp"
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '1rem',
              marginBottom: '12px'
            }}
          >
            <MessageCircle size={20} />
            <span>Send Enquiry on WhatsApp</span>
          </button>

          {/* Direct Call Button */}
          <a
            href={SCHOOL_INFO.phoneLink}
            className="btn btn-secondary"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '0.925rem'
            }}
          >
            <Phone size={18} color="#0284c7" />
            <span>Call Directly: {SCHOOL_INFO.phone}</span>
          </a>

          <p style={{
            fontSize: '0.75rem',
            color: '#94a3b8',
            textAlign: 'center',
            marginTop: '14px',
            lineHeight: 1.4
          }}>
            Your enquiry opens directly with Deeksha Preschool's official admission desk in Bhavani.
          </p>
        </form>
      </div>
    </div>
  );
}
