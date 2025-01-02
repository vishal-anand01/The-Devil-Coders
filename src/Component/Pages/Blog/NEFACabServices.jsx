import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import ReliableTransportationSolutions from '../../Assets/img/Blog/ReliableTransportationSolutions.jpg'
import AffordablePricing from '../../Assets/img/Blog/AffordablePricing.jpg'
import CustomerSupport from '../../Assets/img/Blog/CustomerSupport.jpg'

const NEFACabServices = () => {


    // Dummy data example
    const posts = [
      { id: 16, category: 'NEFA Cab Services', title: 'Reliable Transportation Solutions', content: `NEFA Cab Services offers reliable transportation solutions for all your travel needs. Whether you require airport transfers, city tours, or long-distance travel, our fleet of well-maintained vehicles and professional drivers ensure a safe and comfortable journey. Our commitment to punctuality and customer satisfaction makes us the preferred choice for dependable transportation.`, image: ReliableTransportationSolutions },

      { id: 17, category: 'NEFA Cab Services', title: 'Affordable Pricing in Nefa Cab', content: `At NEFA Cab Services, we believe in providing quality transportation at affordable prices. Our transparent pricing structure ensures there are no hidden charges, and we offer competitive rates for all our services. With a variety of vehicles to choose from, you can find the perfect option to suit your budget without compromising on comfort or reliability.`, image: AffordablePricing },

      { id: 18, category: 'NEFA Cab Services', title: '24/7 Customer Support', content: `Our 24/7 customer support ensures you have access to assistance whenever you need it. Whether you need to make a booking, modify your travel plans, or have any queries, our dedicated support team is always available to help. At NEFA Cab Services, we prioritize your convenience and satisfaction, making your travel experience seamless and enjoyable.`, image: CustomerSupport },

    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>IT Solutions</h1>
                    </div>
                    <div className='col-sm-6'>

                        <Lottie animationData={BlogPostDetailAnimation} className='BlogPostDetailsAnimation' />

                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <Row>
                    <Col md={9} className='blog-details-page-style'>
                        <Row>
                            {posts.map(post => (
                                <Col md={4} key={post.id} className="mb-5">
                                    <Card>
                                        <Card.Img variant="top" src={post.image} />
                                        <Card.Body>
                                            <Card.Title>{post.title}</Card.Title>
                                            <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
                                            <Link to={`/blog/post/${post.id}`}>
                                                <Button className='blog-read-more-button'>Read More</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={3} className='mb-5 sidebar-style'>
                        <Sidebar />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default NEFACabServices;
