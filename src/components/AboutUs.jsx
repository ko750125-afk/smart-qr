import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Send, CheckCircle } from 'lucide-react';

function AboutUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    // Simulate API Submission
    setIsSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem 0 3rem', width: '100%' }}>
      <Link to="/" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#64748b',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: 600,
        marginBottom: '2rem',
        transition: 'color 0.2s ease',
      }}
      className="back-link"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {/* About Card */}
        <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>About smart QR</h1>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              **smart QR** is a premium, secure, and fast utility designed to bridge the physical and digital worlds. Built on modern web technologies, it allows individuals and businesses to generate high-resolution QR codes in seconds.
            </p>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              We prioritize user privacy above all: our generator operates entirely client-side, meaning your target URLs are never stored, logged, or distributed. The project was designed and polished with ultimate detail by <strong>Black</strong>.
            </p>
          </div>

          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b' }}>
            <Mail size={18} />
            <span style={{ fontSize: '0.9rem' }}>support@smart-qr-alpha.vercel.app</span>
          </div>
        </div>

        {/* Contact Form Card */}
        <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', position: 'relative', minHeight: '380px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>Get in Touch</h2>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject (Optional)"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', fontFamily: 'inherit' }}
                  />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <textarea
                    placeholder="Your Message *"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', fontFamily: 'inherit', resize: 'vertical', minHeight: '100px' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', fontSize: '0.95rem' }}
                >
                  <Send size={16} /> Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexGrow: 1, padding: '2rem 0' }}
              >
                <CheckCircle size={48} color="#22c55e" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '300px', margin: '0 auto 1.5rem' }}>
                  Thank you for contacting us. Our team will review your inquiry and get back to you within 24 to 48 hours.
                </p>
                <button 
                  onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  style={{ padding: '8px 16px', border: '1px solid #cbd5e1', background: '#f8fafc', color: '#475569', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
