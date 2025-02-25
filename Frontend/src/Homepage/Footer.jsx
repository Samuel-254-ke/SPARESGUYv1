import React from 'react';
import { Row, Col, Container, Button, Form, InputGroup } from 'react-bootstrap';
import {
  BsTelephone,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsArrowUp
} from "react-icons/bs";
import { FiMail, FiMapPin } from "react-icons/fi";
import { BiAccessibility } from "react-icons/bi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: BsFacebook, url: 'https://www.facebook.com/APBCAfrica/' },
    { icon: BsTwitter, url: 'https://twitter.com/yourprofile' },
    { icon: BsInstagram, url: 'https://www.instagram.com/yourprofile' },
    { icon: BsLinkedin, url: 'https://www.linkedin.com/in/apbc-africa-it-103814307/' },
  ];

  return (
    <Container fluid style={{ backgroundColor: '#000000', color: '#FFFFFF', paddingTop: '1rem' }}>
      <Container>
        <Row className="gy-4">
          {/* Company Info */}
          <Col lg={3} md={6}>
            <div style={{ marginBottom: '0' }}>
              <h3 style={{ color: '#DAA520', marginBottom: '0' }}>MY SPARES GUY</h3>
              <div className="d-flex align-items-center mb-1">
                <FiMapPin className="me-2" style={{ color: '#DAA520' }} />
                <a
                  href="https://www.google.com/maps/place/Ngara,+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFFFFF', textDecoration: 'none' }}
                  className="hover-gold"
                >
                  11122-Ngara, Nairobi
                </a>
              </div>
            </div>
            <div className="social-icons d-flex gap-3 mb-3">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
                  <Icon
                    style={{
                      cursor: 'pointer',
                      fontSize: '1.5rem',
                      color: '#DAA520',
                      transition: 'transform 0.3s ease'
                    }}
                    className="social-icon"
                  />
                </a>
              ))}
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6}>
            <h3 style={{ color: '#DAA520', marginBottom: '1.5rem' }}>Quick Links</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              {['Home', 'Products', 'About', 'Contact Us'].map((link, index) => (
                <div key={index} className="mb-2" style={{ flex: '1 1 45%', textAlign: 'center' }}>
                  <a
                    href={`/${link.toLowerCase().replace(' ', '')}`}
                    style={{
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    className="hover-gold"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h3 style={{ color: '#DAA520', marginBottom: '1.5rem' }}>Contact Us</h3>
            <div className="mb-3">
              <a
                href="tel:+2547123456"
                style={{ color: '#FFFFFF', textDecoration: 'none' }}
                className="d-flex align-items-center hover-gold"
              >
                <BsTelephone className="me-2" style={{ color: '#DAA520' }} />
                +2547123456
              </a>
            </div>
            <div className="mb-3">
              <a
                href="mailto:apbcafricait@gmail.com"
                style={{ color: '#FFFFFF', textDecoration: 'none' }}
                className="d-flex align-items-center hover-gold"
              >
                <FiMail className="me-2" style={{ color: '#DAA520' }} />
                apbcafricait@gmail.com
              </a>
            </div>
          </Col>

          {/* Newsletter */}
          <Col lg={3} md={6}>
            <h3 style={{ color: '#DAA520', marginBottom: '1.5rem' }}>Newsletter</h3>
            <p>Get $10 off your first order</p>
            <Form className="mt-3">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter your email"
                  aria-label="Email address"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #DAA520',
                    color: '#FFFFFF'
                  }}
                />
                <Button
                  variant="outline-warning"
                  style={{
                    backgroundColor: '#DAA520',
                    border: 'none',
                    color: '#000000'
                  }}
                >
                  Subscribe
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        {/* <hr style={{ borderColor: '#DAA520', margin: '1rem 0' }} /> */}

        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#DAA520',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: '0.8',
            transition: 'opacity 0.3s ease',
          }}
          className="scroll-top-button"
        >
          <BsArrowUp />
        </Button>

        {/* Styles */}
        <style>
          {`
            .hover-gold:hover {
              color: #DAA520 !important;
            }
            
            .social-icon:hover {
              transform: translateY(-3px);
            }
            
            .scroll-top-button:hover {
              opacity: 1 !important;
            }
            
            @media (max-width: 768px) {
              .social-icons {
                justify-content: center;
              }
            }
          `}
        </style>
      </Container>
      {/* Footer Bottom */}
      <Row className="align-items-center" style={{ }}>
        <Col md={12} className="text-center mb-2">
          <small>&copy; {currentYear} My Spares Guy.All rights reserved.</small>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
