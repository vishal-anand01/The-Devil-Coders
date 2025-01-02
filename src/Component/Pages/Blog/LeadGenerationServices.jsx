import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import TargetedLeadGenerationStrategies from '../../Assets/img/Blog/TargetedLeadGenerationStrategies.jpg'
import MultiChannelLeadAcquisition from '../../Assets/img/Blog/Multi-ChannelLeadAcquisition.jpg'
import ComprehensiveLeadNurturing from '../../Assets/img/Blog/ComprehensiveLeadNurturing.jpg'

const LeadGenerationServices = () => {


    // Dummy data example
    const posts = [
        { id: 28, category: 'Lead Generation Services', title: 'Targeted Lead Generation Strategies', content: 'Our Lead Generation Services utilize targeted strategies to identify and attract potential customers who are genuinely interested in your products or services. By leveraging advanced data analytics and market research, we create customized campaigns that reach the right audience at the right time, increasing the chances of conversion and boosting your sales pipeline.', image:TargetedLeadGenerationStrategies },

        { id: 29, category: 'Lead Generation Services', title: 'Multi-Channel Lead Acquisition', content: 'We implement multi-channel lead acquisition techniques to maximize your reach and generate high-quality leads. Our approach includes a combination of email marketing, social media campaigns, content marketing, SEO, and PPC advertising. By using diverse channels, we ensure a steady flow of leads from various sources, enhancing your overall lead generation efforts.', image: MultiChannelLeadAcquisition },

        { id: 30, category: 'Lead Generation Services', title: 'Comprehensive Lead Nurturing', content: 'Our services go beyond just generating leads; we also focus on nurturing them through the sales funnel. We provide comprehensive lead nurturing strategies, including personalized follow-ups, targeted content, and automated workflows. By maintaining consistent and meaningful engagement with potential customers, we help you build strong relationships and convert leads into loyal customers.', image: ComprehensiveLeadNurturing },


    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>Lead Generation</h1>
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

export default LeadGenerationServices;
