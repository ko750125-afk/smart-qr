import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import QRGenerator from './components/QRGenerator';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AboutUs from './components/AboutUs';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Sticky Header with Navigation Bar */}
        <header>
          <NavLink to="/" className="site-name">
            <span style={{ display: 'inline-block', padding: '6px 12px', background: '#2563eb', color: '#ffffff', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 900 }}>QR</span>
            smart QR
          </NavLink>
          <nav className="nav-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end
            >
              Generator
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Insights & Guide
            </NavLink>
          </nav>
        </header>

        {/* Dynamic Route Content */}
        <main>
          <Routes>
            <Route path="/" element={<QRGenerator />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer with Required Policy Links */}
        <footer>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <NavLink 
              to="/privacy" 
              style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#2563eb' : '#64748b', fontSize: '0.85rem', fontWeight: 600, transition: 'color 0.2s ease' })}
              className="footer-link"
            >
              Privacy Policy
            </NavLink>
            <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>•</span>
            <NavLink 
              to="/terms" 
              style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#2563eb' : '#64748b', fontSize: '0.85rem', fontWeight: 600, transition: 'color 0.2s ease' })}
              className="footer-link"
            >
              Terms of Service
            </NavLink>
            <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>•</span>
            <NavLink 
              to="/about" 
              style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#2563eb' : '#64748b', fontSize: '0.85rem', fontWeight: 600, transition: 'color 0.2s ease' })}
              className="footer-link"
            >
              About & Contact
            </NavLink>
          </div>
          <p>© 2026 smart QR. All rights reserved. Designed by Black ✨</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
