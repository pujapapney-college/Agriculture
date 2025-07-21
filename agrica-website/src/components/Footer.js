import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>🌱 Agrica</h5>
            <p className="mb-3">
              Empowering agriculture with innovative solutions for sustainable farming. 
              Growing the future, one harvest at a time.
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="social-link">📘</a>
              <a href="https://twitter.com" className="social-link">🐦</a>
              <a href="https://instagram.com" className="social-link">📷</a>
              <a href="https://linkedin.com" className="social-link">🔗</a>
            </div>
          </Col>
          
          <Col md={2} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/">Home</Link></li>
              <li className="mb-2"><Link to="/about">About</Link></li>
              <li className="mb-2"><Link to="/services">Services</Link></li>
              <li className="mb-2"><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/services">Crop Management</a></li>
              <li className="mb-2"><a href="/services">Soil Analysis</a></li>
              <li className="mb-2"><a href="/services">Smart Irrigation</a></li>
              <li className="mb-2"><a href="/services">Agricultural Consulting</a></li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h5>Contact Info</h5>
            <div className="mb-2">
              <strong>📍 Address:</strong><br />
              123 Agriculture Lane<br />
              Farm City, FC 12345
            </div>
            <div className="mb-2">
              <strong>📞 Phone:</strong><br />
              +1 (555) 123-4567
            </div>
            <div className="mb-2">
              <strong>✉️ Email:</strong><br />
              info@agrica.com
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Agrica. All rights reserved. | Designed for sustainable agriculture.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;