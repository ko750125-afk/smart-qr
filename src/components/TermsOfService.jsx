import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function TermsOfService() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem 0 3rem' }}>
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

      <article style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
        <header style={{ marginBottom: '2rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Terms of Service</h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Last updated: May 30, 2026</p>
        </header>

        <div style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.75' }}>
          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using **smart QR**, you agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions outlined here, you may not access the website or use any of our services.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>2. Description of Service</h2>
            <p>
              **smart QR** provides a free web-based QR code generation utility. We offer tools to convert URLs, text, and metadata into high-quality scannable QR codes. This service is provided for personal and business use on an "as-is" and "as-available" basis.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>3. User Conduct and Responsibilities</h2>
            <p>
              You agree to use our service only for lawful purposes. You are strictly prohibited from generating QR codes that redirect to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              <li>Phishing sites, fraudulent pages, or cloned interfaces designed to steal credentials.</li>
              <li>Malicious download pages containing viruses, trojans, or spyware.</li>
              <li>Hate speech, harassment, copyright-infringing media, or illegal substances.</li>
            </ul>
            <p>
              We reserve the right to report malicious scanning patterns or inputs to relevant internet registry and security agencies.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>4. Intellectual Property</h2>
            <p>
              The code, graphics, design system, and overall interface of **smart QR** are the intellectual property of our developers and are protected by international copyright laws. You may not clone, scrape, or commercially redistribute our application files without prior written authorization.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>5. Disclaimer of Warranties</h2>
            <p>
              **smart QR** makes no guarantees regarding the reliability, uptime, accuracy, or scanning compatibility of the generated QR codes. We are not liable for any losses, database corruptions, or marketing failures resulting from the use of our codes, or due to Vercel hosting service downtimes.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>6. Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our service or update these terms at any time without prior notice. Continued use of the website after modifications indicates acceptance of the updated terms.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

export default TermsOfService;
