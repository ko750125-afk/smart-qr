import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
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
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Last updated: May 30, 2026</p>
        </header>

        <div style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.75' }}>
          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>1. Introduction</h2>
            <p>
              Welcome to **smart QR**. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit and use our QR code generator service.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>2. Data Collection and Usage</h2>
            <p>
              Our QR code generation tool operates client-side and on-the-fly.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              <li><strong>Entered URLs:</strong> The text or URLs you input to generate QR codes are processed locally to render the code. We do not store or inspect the contents of your generated QR codes on our servers.</li>
              <li><strong>Log Data:</strong> Like most websites, we may collect technical information that your browser sends whenever you visit our website (e.g., your device type, browser version, and pages visited).</li>
            </ul>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>3. Cookies and Advertising (Google AdSense)</h2>
            <p>
              This site utilizes cookies to enhance user experience and serve advertisements.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Google AdSense Requirements:</strong>
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>Google Ad Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>www.aboutads.info</a>.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>4. Analytics and Tracking (Clarity & Google Analytics)</h2>
            <p>
              We use third-party tracking tools such as **Google Analytics** and **Microsoft Clarity** to analyze traffic and user interactions. These tools collect anonymous log data and cookies to help us improve the interface and optimize system performance. By using this website, you consent to the processing of data about your visit by these analytics providers.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>5. Security</h2>
            <p>
              We implement industry-standard administrative and technical measures to protect any data we process. However, please remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us via our About & Contact page.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

export default PrivacyPolicy;
