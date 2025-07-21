import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Carousel Section */}
      <section style={{ marginTop: '76px' }}>
        <Carousel fade interval={4000} controls={true} indicators={true}>
          <Carousel.Item>
            <div 
              className="carousel-slide"
              style={{
                backgroundImage: 'linear-gradient(rgba(45, 95, 63, 0.7), rgba(74, 124, 89, 0.7)), url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop)',
                height: '70vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                color: 'white'
              }}
            >
              <Container>
                <Row>
                  <Col lg={8} className="mx-auto text-center">
                    <h1 className="display-4 fw-bold mb-4">Growing the Future of Agriculture</h1>
                    <p className="lead mb-4">
                      Discover innovative agricultural solutions that boost productivity, 
                      enhance sustainability, and empower farmers worldwide.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <Link to="/services" className="btn btn-primary-custom btn-lg">
                        Our Services
                      </Link>
                      <Link to="/about" className="btn btn-outline-primary-custom btn-lg">
                        Learn More
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div 
              className="carousel-slide"
              style={{
                backgroundImage: 'linear-gradient(rgba(45, 95, 63, 0.7), rgba(74, 124, 89, 0.7)), url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop)',
                height: '70vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                color: 'white'
              }}
            >
              <Container>
                <Row>
                  <Col lg={8} className="mx-auto text-center">
                    <h1 className="display-4 fw-bold mb-4">Smart Farming Solutions</h1>
                    <p className="lead mb-4">
                      Revolutionize your farming with cutting-edge technology and 
                      data-driven insights for maximum yield and sustainability.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <Link to="/services" className="btn btn-primary-custom btn-lg">
                        Explore Technology
                      </Link>
                      <Link to="/contact" className="btn btn-outline-primary-custom btn-lg">
                        Get Started
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div 
              className="carousel-slide"
              style={{
                backgroundImage: 'linear-gradient(rgba(45, 95, 63, 0.7), rgba(74, 124, 89, 0.7)), url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop)',
                height: '70vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                color: 'white'
              }}
            >
              <Container>
                <Row>
                  <Col lg={8} className="mx-auto text-center">
                    <h1 className="display-4 fw-bold mb-4">Sustainable Agriculture</h1>
                    <p className="lead mb-4">
                      Join the movement towards sustainable farming practices that 
                      protect our environment and ensure food security.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <Link to="/about" className="btn btn-primary-custom btn-lg">
                        Our Mission
                      </Link>
                      <Link to="/contact" className="btn btn-outline-primary-custom btn-lg">
                        Partner With Us
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">Why Choose Agrica?</h2>
          <p className="section-subtitle">
            We provide comprehensive agricultural solutions that transform traditional farming 
            into smart, sustainable practices.
          </p>
          
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift">
                <Card.Body>
                  <div className="feature-icon">🌾</div>
                  <h3>Smart Farming</h3>
                  <p>
                    Utilize cutting-edge technology and data analytics to optimize 
                    crop yields and reduce resource waste.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift">
                <Card.Body>
                  <div className="feature-icon">🧪</div>
                  <h3>Soil Analysis</h3>
                  <p>
                    Comprehensive soil testing and analysis to determine optimal 
                    fertilizers and growing conditions for your crops.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift">
                <Card.Body>
                  <div className="feature-icon">💧</div>
                  <h3>Water Management</h3>
                  <p>
                    Efficient irrigation systems and water conservation techniques 
                    to maximize crop health while minimizing water usage.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift">
                <Card.Body>
                  <div className="feature-icon">🛰️</div>
                  <h3>Precision Agriculture</h3>
                  <p>
                    GPS-guided farming equipment and satellite monitoring for 
                    precise field management and crop monitoring.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift">
                <Card.Body>
                  <div className="feature-icon">🌱</div>
                  <h3>Sustainable Practices</h3>
                  <p>
                    Environmentally friendly farming methods that preserve soil 
                    health and promote long-term agricultural sustainability.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card className="feature-card hover-lift">
                <Card.Body>
                  <div className="feature-icon">📈</div>
                  <h3>Yield Optimization</h3>
                  <p>
                    Advanced techniques and consultation services to maximize 
                    crop yields and improve farm profitability.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Preview Section */}
      <section className="about-section section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                alt="Modern farming"
                className="img-fluid about-image"
              />
            </Col>
            <Col lg={6}>
              <h2 className="section-title text-start">
                Transforming Agriculture for Tomorrow
              </h2>
              <p className="mb-4">
                At Agrica, we believe in the power of innovation to revolutionize agriculture. 
                Our team of experts combines decades of farming experience with cutting-edge 
                technology to deliver solutions that work.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✅ 15+ years of agricultural expertise</li>
                <li className="mb-2">✅ 1000+ successful farm transformations</li>
                <li className="mb-2">✅ 24/7 support and consultation</li>
                <li className="mb-2">✅ Sustainable and eco-friendly solutions</li>
              </ul>
              <Link to="/about" className="btn btn-primary-custom">
                Discover Our Story
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="stats-section section-padding">
        <Container>
          <Row>
            <Col md={3} sm={6} className="mb-4">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <div className="stat-label">Farms Transformed</div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="stat-item">
                <span className="stat-number">50M+</span>
                <div className="stat-label">Crops Harvested</div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="stat-item">
                <span className="stat-number">25%</span>
                <div className="stat-label">Average Yield Increase</div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <div className="stat-label">Countries Served</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Carousel Preview Section */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive agricultural solutions tailored to your farming needs
          </p>
          
          <Carousel indicators={false} controls={true} interval={3000} className="services-carousel">
            <Carousel.Item>
              <Row className="g-4">
                <Col lg={4} md={6}>
                  <Card className="service-card hover-lift">
                    <img 
                      src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop"
                      alt="Crop Management"
                    />
                    <div className="service-card-body">
                      <h4>Crop Management</h4>
                      <p>
                        Expert guidance on crop selection, planting schedules, and 
                        harvest optimization for maximum productivity.
                      </p>
                    </div>
                  </Card>
                </Col>
                
                <Col lg={4} md={6}>
                  <Card className="service-card hover-lift">
                    <img 
                      src="https://images.unsplash.com/photo-1595246140520-e274b2388ac8?w=400&h=200&fit=crop"
                      alt="Smart Irrigation"
                    />
                    <div className="service-card-body">
                      <h4>Smart Irrigation</h4>
                      <p>
                        Advanced irrigation systems that conserve water while ensuring 
                        optimal hydration for your crops.
                      </p>
                    </div>
                  </Card>
                </Col>
                
                <Col lg={4} md={6}>
                  <Card className="service-card hover-lift">
                    <img 
                      src="https://images.unsplash.com/photo-1527788263495-3518893b4b30?w=400&h=200&fit=crop"
                      alt="Agricultural Consulting"
                    />
                    <div className="service-card-body">
                      <h4>Agricultural Consulting</h4>
                      <p>
                        Personalized consultation services to help you make informed 
                        decisions about your farming operations.
                      </p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="g-4">
                <Col lg={4} md={6}>
                  <Card className="service-card hover-lift">
                    <img 
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop"
                      alt="Soil Analysis"
                    />
                    <div className="service-card-body">
                      <h4>Soil Analysis</h4>
                      <p>
                        Advanced soil testing and analysis services that provide detailed 
                        insights into soil composition and health.
                      </p>
                    </div>
                  </Card>
                </Col>
                
                <Col lg={4} md={6}>
                  <Card className="service-card hover-lift">
                    <img 
                      src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=200&fit=crop"
                      alt="Precision Agriculture"
                    />
                    <div className="service-card-body">
                      <h4>Precision Agriculture</h4>
                      <p>
                        GPS-guided farming equipment and satellite monitoring for 
                        precise field management.
                      </p>
                    </div>
                  </Card>
                </Col>
                
                <Col lg={4} md={6}>
                  <Card className="service-card hover-lift">
                    <img 
                      src="https://images.unsplash.com/photo-1592982103002-0a3f139fb0ee?w=400&h=200&fit=crop"
                      alt="Pest Management"
                    />
                    <div className="service-card-body">
                      <h4>Pest Management</h4>
                      <p>
                        Comprehensive pest control strategies that protect crops while 
                        minimizing environmental impact.
                      </p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
          
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-primary-custom">
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="stats-section section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="mb-4">Ready to Transform Your Farm?</h2>
              <p className="mb-4 fs-5">
                Join thousands of farmers who have already revolutionized their agriculture 
                with our innovative solutions. Start your journey today!
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/contact" className="btn btn-primary-custom">
                  Get Started Today
                </Link>
                <Button variant="outline-light" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;