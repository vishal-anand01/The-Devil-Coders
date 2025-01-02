import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import initializeTypewriter from '../Assets/JavacsriptFile/AboutPageName';
import '../Assets/CSS/featuresPage.css';

import { Container, Row, Col, Card } from 'react-bootstrap';



const Features = () => {


  useEffect(() => {
    initializeTypewriter([
      { elementId: 'app', text: 'Features' },
      // Add more configurations for other elements if needed
    ]);
  }, []);


  const services = [
    {
      title: 'Tax and Accounting Consultant',
      description: 'Our tax and accounting consultants provide personalized services to optimize your financial management. From tax planning and preparation to financial statement analysis, we ensure compliance with tax laws and regulations while maximizing your financial efficiency.',
      benefits: [
        'Maximized tax savings',
        'Improved financial decision-making',
        'Reduced tax-related risks',
        'Enhanced financial transparency'
      ],
      imageUrl: 'https://via.placeholder.com/300',// Sample image URL
      Link: '/tax-accounting'
    },
    {
      title: 'Tender Bidding Services',
      description: 'Our tender bidding services offer comprehensive support to ensure successful contract acquisitions. From tender search and analysis to bid strategy development, we help you secure lucrative contracts and expand your business opportunities.',
      benefits: [
        'Increased contract acquisition rate',
        'Streamlined bidding process',
        'Enhanced competitiveness',
        'Expanded business growth'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'Online Affiliation Services',
      description: 'Our online affiliation services assist you in identifying suitable affiliate programs, setting up affiliate networks, and tracking performance analytics to maximize your revenue potential.',
      benefits: [
        'Maximized revenue potential',
        'Expanded network of affiliates',
        'Performance tracking and analytics',
        'Increased customer acquisition'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'IT Solutions',
      description: 'We provide comprehensive IT solutions including custom software development, network infrastructure setup and management, cybersecurity services, and cloud computing solutions to meet your business needs.',
      benefits: [
        'Customized software solutions',
        'Secure network infrastructure',
        'Cybersecurity measures',
        'Scalable cloud solutions'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'Media Production',
      description: 'Our media production services cover video production, audio production, scriptwriting, editing, and post-production services to help you create engaging and impactful content for your audience.',
      benefits: [
        'High-quality video production',
        'Engaging audio production',
        'Professional scriptwriting',
        'Effective post-production editing'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'NEFA Cab Services',
      description: 'NEFA Cab Services offers convenient and reliable transportation solutions with easy booking via mobile app or website, GPS tracking, safe drivers, and multiple payment options for your comfort.',
      benefits: [
        'Convenient transportation options',
        'Safe and reliable drivers',
        'Easy booking via mobile app or website',
        'GPS tracking for real-time monitoring'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'Website Designing',
      description: 'We specialize in responsive website designing with customized themes, user-friendly navigation, search engine optimization, and integration of analytics tools to enhance your online presence.',
      benefits: [
        'Responsive website design',
        'User-friendly navigation',
        'Search engine optimization',
        'Analytics integration'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'Admission Assistance',
      description: 'Our admission assistance services provide guidance on selecting suitable educational institutions, assistance with application form filling, essay editing, interview preparation, and scholarship guidance for your academic success.',
      benefits: [
        'Guidance in selecting educational institutions',
        'Assistance with application form filling',
        'Essay editing and review',
        'Scholarship guidance'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'Graphic Designing',
      description: 'We offer professional graphic designing services including logo design, branding, marketing collateral creation, digital illustration, and packaging design to enhance your brand identity and visibility.',
      benefits: [
        'Professional logo design',
        'Branding services',
        'Marketing collateral creation',
        'Digital illustration'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'Lead Generation Services',
      description: 'Our lead generation services help you identify and engage potential customers through targeted strategies, nurturing campaigns, and sales funnel management to drive business growth and revenue.',
      benefits: [
        'Identification of potential customers',
        'Targeted marketing strategies',
        'Nurturing campaigns',
        'Sales funnel management'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'Telemarketing (BPO Services)',
      description: 'Our telemarketing services provide outbound sales calling, inbound customer support, market research surveys, appointment setting, and CRM integration to boost your sales and customer satisfaction.',
      benefits: [
        'Outbound sales calling',
        'Inbound customer support',
        'Market research surveys',
        'CRM integration'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'Social Media Promotion',
      description: 'We offer social media promotion services with strategy development, content creation, community management, paid advertising campaigns, and performance tracking to enhance your online visibility and engagement.',
      benefits: [
        'Strategy development',
        'Content creation',
        'Community management',
        'Paid advertising campaigns'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'App Development (Android & iOS)',
      description: 'Our app development services cover native app development for both Android and iOS platforms, ensuring cross-platform compatibility, user-friendly interface design, testing, and app store optimization to reach a wider audience.',
      benefits: [
        'Native app development',
        'Cross-platform compatibility',
        'User-friendly interface design',
        'App store optimization'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    },
    {
      title: 'Interior Designer',
      description: 'We provide interior design services including initial consultation, concept development, space planning, material selection, and project management to create functional and aesthetically pleasing spaces tailored to your needs.',
      benefits: [
        'Initial consultation',
        'Concept development',
        'Space planning',
        'Project management'
      ],
      imageUrl: 'https://via.placeholder.com/300' // Sample image URL
    }
  ];


  return (
    <>
      <div className="about-us-container">
        <div id="app" className="about-us-text"></div>
      </div>

      <div className='features-lets-work-together mt-5 mb-5'>
        <section _ngcontent-ifq-c34="" className="wrapper bg-light angled upper-end">
          <div _ngcontent-ifq-c34="" className="container py-12 py-md-12">
            <div
              _ngcontent-ifq-c34=""
              className="row align-items-center"
            >
              <div _ngcontent-ifq-c34="" className="col-lg-7 position-relative">
                <div
                  _ngcontent-ifq-c34=""
                  data-rellax-speed={1}
                  className="shape bg-dot primary rellax w-18 h-18"
                  style={{ top: 0, left: "-1.4rem", zIndex: 0 }}
                />
                <div _ngcontent-ifq-c34="" className="row gx-md-5 gy-5">
                  <div _ngcontent-ifq-c34="" className="col-md-6">
                    <figure
                      _ngcontent-ifq-c34=""
                      className="rounded mt-md-10 position-relative"
                    >
                      <img
                        _ngcontent-ifq-c34=""
                        src="https://thefuenix.com/assets/g5.jpg"
                        srcSet="assets/g5@2x.jpg 2x"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div _ngcontent-ifq-c34="" className="col-md-6">
                    <div _ngcontent-ifq-c34="" className="row gx-md-5 gy-5">
                      <div _ngcontent-ifq-c34="" className="col-md-12 order-md-2">
                        <figure _ngcontent-ifq-c34="" className="rounded">
                          <img
                            _ngcontent-ifq-c34=""
                            src="https://thefuenix.com/assets/g6.jpg"
                            srcSet="assets/g6@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div _ngcontent-ifq-c34="" className="col-md-10">
                        <div
                          _ngcontent-ifq-c34=""
                          className="card bg-pale-primary text-center"
                        >
                          <div
                            _ngcontent-ifq-c34=""
                            className="card-body py-11 counter-wrapper"
                          >
                            <h3 _ngcontent-ifq-c34="" className="counter text-nowrap">
                              500+
                            </h3>
                            <p _ngcontent-ifq-c34="" className="mb-0">
                              Satisfied Customers
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div _ngcontent-ifq-c34="" className="col-lg-5">
                <h2 _ngcontent-ifq-c34="" className="display-4 mb-3">
                  Let’s work together!!{" "}
                </h2>
                <div _ngcontent-ifq-c34="" className="lets-line" />
                <p _ngcontent-ifq-c34="" className="lead fs-lg">
                  Let's make something great together. We are{" "}
                  <span _ngcontent-ifq-c34="" className="underline">
                    trusted by
                  </span>{" "}
                  over 500+ clients. Join them by using our services and grow your
                  business.
                </p>
                <p _ngcontent-ifq-c34="">
                  Our highly qualified experts provide your business with the most
                  suitable solutions and help your business achieve its goals and
                  visions. We will help you in engaging more potential audiences, rank
                  high on the search results and improve your conversion rates.{" "}
                </p>
                <Link to="#" className="btn p-2 .rounded-pill core-team-member-button-features">Join Us</Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      <div className='Features-main-section'>
        <Container className="py-5">
          <Row xs={1} md={2} lg={3} className="g-4">
            {services.map((service, index) => (
              <Col key={index}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

    </>
  )
}

const ServiceCard = ({ service }) => {
  const { title, description, benefits, imageUrl } = service;
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imageUrl} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h5>Benefits:</h5>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <Link to="#" className="btn p-2 .rounded-pill core-team-member-button">Contact Now</Link>
      </Card.Body>
    </Card>
  );
};


export default Features
