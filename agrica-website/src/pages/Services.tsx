import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="section-title">Our Services</h1>
              <p className="section-subtitle">
                Comprehensive agricultural solutions designed to optimize your farming 
                operations and maximize yields while ensuring sustainability.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <Container>
          <Row className="g-4">
            <Col lg={6} md={6}>
              <Card className="service-card hover-lift h-100">
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=250&fit=crop"
                  alt="Crop Management"
                />
                <div className="service-card-body">
                  <h4>🌾 Crop Management</h4>
                  <p>
                    Comprehensive crop planning, monitoring, and optimization services 
                    that help you select the right crops, plan planting schedules, 
                    and maximize yields through data-driven decision making.
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li>• Crop selection consultation</li>
                    <li>• Planting schedule optimization</li>
                    <li>• Growth monitoring systems</li>
                    <li>• Harvest timing recommendations</li>
                  </ul>
                  <Button variant="outline-primary" className="btn-outline-primary-custom">
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
            
            <Col lg={6} md={6}>
              <Card className="service-card hover-lift h-100">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=250&fit=crop"
                  alt="Soil Analysis"
                />
                <div className="service-card-body">
                  <h4>🧪 Soil Analysis & Testing</h4>
                  <p>
                    Advanced soil testing and analysis services that provide detailed 
                    insights into soil composition, nutrient levels, pH balance, 
                    and recommendations for optimal fertilization strategies.
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li>• Comprehensive soil testing</li>
                    <li>• Nutrient level analysis</li>
                    <li>• pH and salinity assessment</li>
                    <li>• Fertilization recommendations</li>
                  </ul>
                  <Button variant="outline-primary" className="btn-outline-primary-custom">
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
            
            <Col lg={6} md={6}>
              <Card className="service-card hover-lift h-100">
                <img 
                  src="https://images.unsplash.com/photo-1595246140520-e274b2388ac8?w=500&h=250&fit=crop"
                  alt="Smart Irrigation"
                />
                <div className="service-card-body">
                  <h4>💧 Smart Irrigation Systems</h4>
                  <p>
                    State-of-the-art irrigation solutions that optimize water usage 
                    through automated systems, weather monitoring, and precision 
                    watering techniques tailored to your specific crop needs.
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li>• Automated irrigation systems</li>
                    <li>• Weather-based scheduling</li>
                    <li>• Precision water delivery</li>
                    <li>• Water conservation strategies</li>
                  </ul>
                  <Button variant="outline-primary" className="btn-outline-primary-custom">
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
            
            <Col lg={6} md={6}>
              <Card className="service-card hover-lift h-100">
                <img 
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=250&fit=crop"
                  alt="Precision Agriculture"
                />
                <div className="service-card-body">
                  <h4>🛰️ Precision Agriculture</h4>
                  <p>
                    GPS-guided farming equipment, satellite monitoring, and 
                    drone technology for precise field management, variable 
                    rate applications, and detailed crop monitoring.
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li>• GPS-guided equipment</li>
                    <li>• Satellite field monitoring</li>
                    <li>• Drone surveillance systems</li>
                    <li>• Variable rate applications</li>
                  </ul>
                  <Button variant="outline-primary" className="btn-outline-primary-custom">
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
            
            <Col lg={6} md={6}>
              <Card className="service-card hover-lift h-100">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=250&fit=crop"
                  alt="Agricultural Consulting"
                />
                <div className="service-card-body">
                  <h4>👨‍🌾 Agricultural Consulting</h4>
                  <p>
                    Expert consultation services from experienced agricultural 
                    professionals who provide personalized advice on farming 
                    operations, business planning, and technology adoption.
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li>• Farm operation analysis</li>
                    <li>• Business planning support</li>
                    <li>• Technology integration</li>
                    <li>• Sustainability consulting</li>
                  </ul>
                  <Button variant="outline-primary" className="btn-outline-primary-custom">
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
            
            <Col lg={6} md={6}>
              <Card className="service-card hover-lift h-100">
                <img 
                  src="https://images.unsplash.com/photo-1592982103002-0a3f139fb0ee?w=500&h=250&fit=crop"
                  alt="Pest Management"
                />
                <div className="service-card-body">
                  <h4>🐛 Integrated Pest Management</h4>
                  <p>
                    Comprehensive pest control strategies that combine biological, 
                    cultural, and chemical methods to protect crops while minimizing 
                    environmental impact and maintaining ecosystem balance.
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li>• Pest identification & monitoring</li>
                    <li>• Biological control methods</li>
                    <li>• Targeted treatment plans</li>
                    <li>• Preventive strategies</li>
                  </ul>
                  <Button variant="outline-primary" className="btn-outline-primary-custom">
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Additional Services */}
      <section className="about-section section-padding">
        <Container>
          <h2 className="section-title">Specialized Solutions</h2>
          <p className="section-subtitle">
            Advanced agricultural technologies and specialized services for modern farming challenges
          </p>
          
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift h-100">
                <Card.Body>
                  <div className="feature-icon">📊</div>
                  <h4>Data Analytics</h4>
                  <p>
                    Advanced data analysis and reporting to help you make informed 
                    decisions based on field performance, weather patterns, and market trends.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift h-100">
                <Card.Body>
                  <div className="feature-icon">🌡️</div>
                  <h4>Climate Monitoring</h4>
                  <p>
                    Real-time weather monitoring and climate prediction services 
                    to help you adapt farming practices to changing environmental conditions.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift h-100">
                <Card.Body>
                  <div className="feature-icon">🧬</div>
                  <h4>Biotechnology</h4>
                  <p>
                    Cutting-edge biotechnology solutions including plant breeding, 
                    genetic markers, and tissue culture for improved crop varieties.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift h-100">
                <Card.Body>
                  <div className="feature-icon">♻️</div>
                  <h4>Sustainability Programs</h4>
                  <p>
                    Comprehensive sustainability programs focused on soil health, 
                    carbon sequestration, and regenerative farming practices.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift h-100">
                <Card.Body>
                  <div className="feature-icon">📱</div>
                  <h4>Mobile Solutions</h4>
                  <p>
                    Mobile applications and platforms that put agricultural data 
                    and controls at your fingertips, anywhere on your farm.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift h-100">
                <Card.Body>
                  <div className="feature-icon">🎓</div>
                  <h4>Training & Education</h4>
                  <p>
                    Comprehensive training programs and educational resources to 
                    help farmers adopt new technologies and best practices.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Process */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">Our Service Process</h2>
          <p className="section-subtitle">
            A systematic approach to transforming your agricultural operations
          </p>
          
          <Row className="g-4">
            <Col lg={3} md={6}>
              <div className="text-center">
                <div className="feature-icon mx-auto mb-3" style={{ fontSize: '2.5rem' }}>
                  1️⃣
                </div>
                <h4>Assessment</h4>
                <p>
                  Comprehensive evaluation of your current farming operations, 
                  soil conditions, and specific challenges.
                </p>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className="text-center">
                <div className="feature-icon mx-auto mb-3" style={{ fontSize: '2.5rem' }}>
                  2️⃣
                </div>
                <h4>Planning</h4>
                <p>
                  Development of customized solutions and implementation 
                  strategies tailored to your specific needs and goals.
                </p>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className="text-center">
                <div className="feature-icon mx-auto mb-3" style={{ fontSize: '2.5rem' }}>
                  3️⃣
                </div>
                <h4>Implementation</h4>
                <p>
                  Professional installation and setup of systems with 
                  comprehensive training and support throughout the process.
                </p>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className="text-center">
                <div className="feature-icon mx-auto mb-3" style={{ fontSize: '2.5rem' }}>
                  4️⃣
                </div>
                <h4>Support</h4>
                <p>
                  Ongoing monitoring, maintenance, and optimization services 
                  to ensure maximum performance and results.
                </p>
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
              <h2 className="mb-4">Ready to Optimize Your Farm?</h2>
              <p className="mb-4 fs-5">
                Let our experts help you choose the right services for your farming needs. 
                Contact us today for a personalized consultation.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/contact" className="btn btn-primary-custom">
                  Get Consultation
                </Link>
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

export default Services;