import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { FAQ_DATA, SCHOOL_INFO } from '../data/schoolData';

export default function FAQ() {
  const [openId, setOpenId] = useState(1); // First item open by default

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding" style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f1f5f9',
      borderBottom: '1px solid #f1f5f9'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '640px', marginBottom: '50px' }}>
          <div className="section-badge badge-yellow">
            <HelpCircle size={14} color="#854d0e" />
            <span>Parent Inquiries</span>
          </div>
          <h2 className="section-title">
            Everything Parents Need to Know
          </h2>
          <p className="section-subtitle mx-auto">
            Answers to common questions from parents considering Deeksha Preschool for their little learner.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                  borderRadius: '20px',
                  border: isOpen ? '2px solid #bae6fd' : '1.5px solid #e2e8f0',
                  boxShadow: isOpen ? '0 8px 24px -4px rgba(2, 132, 199, 0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
                  transition: 'all 0.25s ease',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none'
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: isOpen ? '#0284c7' : '#1e293b'
                  }}>
                    {faq.question}
                  </span>

                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    backgroundColor: isOpen ? '#e0f2fe' : '#f1f5f9',
                    color: isOpen ? '#0284c7' : '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px 24px',
                    fontSize: '0.975rem',
                    color: '#475569',
                    lineHeight: 1.65,
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '16px'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div style={{
          marginTop: '44px',
          textAlign: 'center',
          background: '#fff7ed',
          borderRadius: '20px',
          padding: '24px',
          maxWidth: '680px',
          margin: '44px auto 0',
          border: '1.5px solid #fed7aa'
        }}>
          <h4 style={{ fontSize: '1.15rem', color: '#c2410c', marginBottom: '6px' }}>
            Have a question not listed here?
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#9a3412', marginBottom: '16px' }}>
            Feel free to reach out to us directly via WhatsApp or phone call. We're happy to guide you!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={SCHOOL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '9px 20px', fontSize: '0.875rem' }}
            >
              <MessageCircle size={16} />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={SCHOOL_INFO.phoneLink}
              className="btn btn-secondary"
              style={{ padding: '9px 20px', fontSize: '0.875rem' }}
            >
              <Phone size={16} />
              <span>Call: {SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
