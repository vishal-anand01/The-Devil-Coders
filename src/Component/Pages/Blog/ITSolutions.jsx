import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import TailoredITSolutions from '../../Assets/img/Blog/AdvancedNetworandInfrastructurManagement.jpg'
import NetworkandInfrastructureManagement from '../../Assets/img/Blog/ComprehensiveITSolutionsforEveryBusinessNeed.jpg'
import ScalableITSupportandMaintenance from '../../Assets/img/Blog/ScalableITSupportandMaintenance.jpg'

const ITSolutions = () => {


    // Dummy data example
    const posts = [
      { id: 10, category: 'IT Solutions', title: ' Tailored IT Solutions Services And Many More', content: `Our IT Solutions are customized to meet the unique needs of businesses across various industries. From custom software development and system integration to IT consulting and project management, we provide end-to-end solutions that enhance operational efficiency and drive growth. Our team of experts works closely with you to understand your requirements and deliver innovative, technology-driven solutions.`, image: TailoredITSolutions },

        { id: 11, category: 'IT Solutions', title: ' Network and Infrastructure Management', content: `Effective network and infrastructure management is crucial for business continuity and performance. Our IT Solutions include comprehensive network design, implementation, and management services. We ensure your IT infrastructure is robust, scalable, and secure, capable of supporting your business's current needs and future growth. Our proactive monitoring and maintenance services minimize downtime and optimize network performance.`, image: NetworkandInfrastructureManagement },

        { id: 12, category: 'IT Solutions', title: 'Scalable IT Support and Maintenance', content: `Effective network and infrastructure management is crucial for business continuity and performance. Our IT Solutions include comprehensive network design, implementation, and management services. We ensure your IT infrastructure is robust, scalable, and secure, capable of supporting your business's current needs and future growth. Our proactive monitoring and maintenance services minimize downtime and optimize network performance.`, image: ScalableITSupportandMaintenance },

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

export default ITSolutions;
