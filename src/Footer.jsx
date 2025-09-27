import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-logo">GALERIE</h3>
          <p>The new era of art investing.</p>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Navigate</h4>
          <a href="/" className="footer-link">Home</a>
          <a href="#how-it-works" className="footer-link">How It Works</a>
          <a href="#marketperformance" className="footer-link">Smarter Way</a>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Ecosystem</h4>
          <a href="https://sui.io/" target="_blank" className="footer-link">Sui</a>
          <a href="https://enoki.mystenlabs.com/" target="_blank" className="footer-link">Enoki</a>
          <a href="https://hackathon.bsaepfl.ch/" target="_blank" className="footer-link">BSA Hackathon</a>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <a href="#" className="footer-link" style={{cursor: 'not-allowed'}}>Privacy</a>
          <a href="#" className="footer-link" style={{cursor: 'not-allowed'}}>Terms</a>
          <a href="mailto:edenbaud1@gmail.com" className="footer-link">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GALERIE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 