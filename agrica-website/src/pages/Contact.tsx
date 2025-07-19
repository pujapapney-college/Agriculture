import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="section-title">Contact Us</h1>
              <p className="section-subtitle">
                Ready to transform your farming operations? Get in touch with our 
                agricultural experts today for personalized consultation and support.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={8}>
              <Card className="feature-card">
                <Card.Body>
                  <h3 className="mb-4">Send us a Message</h3>
                  
                  {showAlert && (
                    <Alert variant="success" className="mb-4">
                      <strong>Thank you!</strong> Your message has been sent successfully. 
                      We'll get back to you within 24 hours.
                    </Alert>
                  )}
                  
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email address"
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Subject *</Form.Label>
                          <Form.Select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select a subject</option>
                            <option value="consultation">General Consultation</option>
                            <option value="crop-management">Crop Management</option>
                            <option value="soil-analysis">Soil Analysis</option>
                            <option value="irrigation">Smart Irrigation</option>
                            <option value="precision-agriculture">Precision Agriculture</option>
                            <option value="pest-management">Pest Management</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Tell us about your farming needs, challenges, or questions..."
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
                        <Button 
                          type="submit" 
                          className="btn-primary-custom"
                          size="lg"
                        >
                          Send Message 📧
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Information */}
            <Col lg={4}>
              <div className="h-100">
                <Card className="contact-card mb-4">
                  <Card.Body>
                    <div className="contact-icon">📍</div>
                    <h4>Visit Our Office</h4>
                    <p className="mb-0">
                      123 Agriculture Lane<br />
                      Farm City, FC 12345<br />
                      United States
                    </p>
                  </Card.Body>
                </Card>

                <Card className="contact-card mb-4">
                  <Card.Body>
                    <div className="contact-icon">📞</div>
                    <h4>Call Us</h4>
                    <p className="mb-2">
                      <strong>Main Office:</strong><br />
                      +1 (555) 123-4567
                    </p>
                    <p className="mb-0">
                      <strong>Support Line:</strong><br />
                      +1 (555) 789-0123
                    </p>
                  </Card.Body>
                </Card>

                <Card className="contact-card mb-4">
                  <Card.Body>
                    <div className="contact-icon">✉️</div>
                    <h4>Email Us</h4>
                    <p className="mb-2">
                      <strong>General:</strong><br />
                      info@agrica.com
                    </p>
                    <p className="mb-0">
                      <strong>Support:</strong><br />
                      support@agrica.com
                    </p>
                  </Card.Body>
                </Card>

                <Card className="contact-card">
                  <Card.Body>
                    <div className="contact-icon">🕒</div>
                    <h4>Business Hours</h4>
                    <p className="mb-2">
                      <strong>Monday - Friday:</strong><br />
                      8:00 AM - 6:00 PM
                    </p>
                    <p className="mb-2">
                      <strong>Saturday:</strong><br />
                      9:00 AM - 4:00 PM
                    </p>
                    <p className="mb-0">
                      <strong>Sunday:</strong><br />
                      Closed
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="about-section section-padding">
        <Container>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <h4>How quickly can you assess my farm?</h4>
                  <p>
                    Most farm assessments can be completed within 1-2 business days. 
                    Our team conducts thorough evaluations including soil testing, 
                    current system analysis, and operational review.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <h4>Do you provide ongoing support?</h4>
                  <p>
                    Yes! We offer 24/7 technical support, regular system maintenance, 
                    performance monitoring, and ongoing consultation to ensure your 
                    agricultural operations continue to thrive.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <h4>What's included in a consultation?</h4>
                  <p>
                    Our consultation includes farm assessment, soil analysis, 
                    technology recommendations, implementation planning, cost analysis, 
                    and a customized roadmap for your agricultural transformation.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <h4>Do you work with small farms?</h4>
                  <p>
                    Absolutely! We work with farms of all sizes, from small family 
                    operations to large commercial enterprises. Our solutions are 
                    scalable and can be customized for any farm size.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="section-title">Find Us</h2>
              <div className="text-center">
                <div style={{ 
                  width: '100%', 
                  height: '400px', 
                  backgroundColor: '#f8f9fa', 
                  border: '2px dashed #dee2e6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px'
                }}>
                  <div>
                    <h4 style={{ color: '#6c757d' }}>🗺️ Interactive Map</h4>
                    <p style={{ color: '#6c757d' }}>
                      Map integration would be implemented here<br />
                      (Google Maps, Mapbox, etc.)
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="stats-section section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="mb-4">Ready to Get Started?</h2>
              <p className="mb-4 fs-5">
                Take the first step towards transforming your agricultural operations. 
                Our team of experts is ready to help you achieve your farming goals.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button 
                  className="btn-primary-custom"
                  size="lg"
                  onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Consultation
                </Button>
                <Button variant="outline-light" size="lg">
                  Download Brochure
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;