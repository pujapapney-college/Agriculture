import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="section-title">About Agrica</h1>
              <p className="section-subtitle">
                We are passionate about revolutionizing agriculture through innovation, 
                sustainability, and cutting-edge technology.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Story */}
      <section className="about-section section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title text-start">Our Story</h2>
              <p className="mb-4">
                Founded in 2009, Agrica emerged from a simple yet powerful vision: to bridge 
                the gap between traditional farming practices and modern agricultural technology. 
                Our founders, a team of agricultural scientists and technology experts, recognized 
                the immense potential in combining data-driven insights with time-tested farming wisdom.
              </p>
              <p className="mb-4">
                Starting with a small research farm in the heartland of America, we began developing 
                innovative solutions that would help farmers increase yields while maintaining 
                environmental sustainability. Over the years, our commitment to excellence and 
                continuous innovation has earned us the trust of farmers across 30+ countries.
              </p>
              <p>
                Today, Agrica stands as a leading agricultural technology company, empowering 
                farmers with the tools and knowledge they need to thrive in an ever-changing world.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=400&fit=crop" 
                alt="Our company story"
                className="img-fluid about-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">Our Mission, Vision & Values</h2>
          
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift h-100">
                <Card.Body>
                  <div className="feature-icon">🎯</div>
                  <h3>Our Mission</h3>
                  <p>
                    To empower farmers worldwide with innovative, sustainable agricultural 
                    solutions that increase productivity, reduce environmental impact, 
                    and ensure food security for future generations.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift h-100">
                <Card.Body>
                  <div className="feature-icon">👁️</div>
                  <h3>Our Vision</h3>
                  <p>
                    To become the global leader in agricultural innovation, creating 
                    a world where farming is smart, sustainable, and accessible to all, 
                    ensuring prosperity for farmers and communities alike.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift h-100">
                <Card.Body>
                  <div className="feature-icon">💎</div>
                  <h3>Our Values</h3>
                  <p>
                    Innovation, Sustainability, Integrity, Collaboration, and Excellence. 
                    These core values guide every decision we make and every solution 
                    we develop for our farming community.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="about-section section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Why Choose Agrica?</h2>
              
              <Row className="g-4">
                <Col md={6}>
                  <div className="d-flex mb-3">
                    <div className="feature-icon me-3" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                      🏆
                    </div>
                    <div>
                      <h4 className="h5">Proven Track Record</h4>
                      <p>Over 15 years of successful agricultural transformations with measurable results.</p>
                    </div>
                  </div>
                </Col>
                
                <Col md={6}>
                  <div className="d-flex mb-3">
                    <div className="feature-icon me-3" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                      🔬
                    </div>
                    <div>
                      <h4 className="h5">Cutting-Edge Technology</h4>
                      <p>Latest advancements in agricultural science and precision farming techniques.</p>
                    </div>
                  </div>
                </Col>
                
                <Col md={6}>
                  <div className="d-flex mb-3">
                    <div className="feature-icon me-3" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                      👥
                    </div>
                    <div>
                      <h4 className="h5">Expert Team</h4>
                      <p>Experienced agricultural scientists, engineers, and farming consultants.</p>
                    </div>
                  </div>
                </Col>
                
                <Col md={6}>
                  <div className="d-flex mb-3">
                    <div className="feature-icon me-3" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                      🌍
                    </div>
                    <div>
                      <h4 className="h5">Global Reach</h4>
                      <p>Serving farmers across 30+ countries with localized solutions and support.</p>
                    </div>
                  </div>
                </Col>
                
                <Col md={6}>
                  <div className="d-flex mb-3">
                    <div className="feature-icon me-3" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                      🛠️
                    </div>
                    <div>
                      <h4 className="h5">Comprehensive Support</h4>
                      <p>24/7 technical support and ongoing consultation throughout your farming journey.</p>
                    </div>
                  </div>
                </Col>
                
                <Col md={6}>
                  <div className="d-flex mb-3">
                    <div className="feature-icon me-3" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                      ♻️
                    </div>
                    <div>
                      <h4 className="h5">Sustainability Focus</h4>
                      <p>Environmentally responsible solutions that protect and preserve natural resources.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <p className="section-subtitle">
            Our experienced leaders bring together decades of agricultural expertise 
            and technological innovation.
          </p>
          
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift text-center">
                <Card.Body>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                    alt="CEO"
                    className="rounded-circle mb-3"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <h4>Dr. Michael Johnson</h4>
                  <p className="text-muted mb-2">Chief Executive Officer</p>
                  <p>
                    25+ years in agricultural research and sustainable farming practices. 
                    PhD in Agricultural Sciences from Stanford University.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift text-center">
                <Card.Body>
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                    alt="CTO"
                    className="rounded-circle mb-3"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <h4>Sarah Chen</h4>
                  <p className="text-muted mb-2">Chief Technology Officer</p>
                  <p>
                    Expert in agricultural technology and precision farming systems. 
                    Former NASA engineer with focus on remote sensing applications.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift text-center">
                <Card.Body>
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                    alt="COO"
                    className="rounded-circle mb-3"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <h4>David Rodriguez</h4>
                  <p className="text-muted mb-2">Chief Operations Officer</p>
                  <p>
                    20+ years in agricultural operations and supply chain management. 
                    Specialized in scaling agricultural solutions globally.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Achievements */}
      <section className="stats-section section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="mb-4">Our Achievements</h2>
              <p className="fs-5">
                Over the years, we've been recognized for our contributions to sustainable 
                agriculture and technological innovation.
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <div className="stat-label">Years of Excellence</div>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <div className="stat-label">Industry Awards</div>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <div className="stat-label">Research Papers</div>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <div className="stat-item">
                <span className="stat-number">5M+</span>
                <div className="stat-label">Acres Optimized</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;