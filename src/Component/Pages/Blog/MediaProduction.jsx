import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import ProfessionalVideoProduction from '../../Assets/img/Blog/ProfessionalVideoProduction.jpg'
import CreativeContentCreation from '../../Assets/img/Blog/CreativeContentCreation.jpg'
import PostProductionServices from '../../Assets/img/Blog/PostProductionServices.jpg'
const MediaProduction = () => {


    // Dummy data example
    const posts = [
      { id: 13, category: 'Media Production', title: 'Video Production', content: `Our Media Production services include professional video production tailored to your specific needs. From concept development and scriptwriting to filming and post-production, we handle every aspect of the process. Whether you need promotional videos, corporate presentations, or event coverage, our team ensures high-quality results that engage and captivate your audience.`, image: ProfessionalVideoProduction },

      { id: 14, category: 'Media Production', title: 'Creative Content Creation', content: `We specialize in creative content creation that effectively communicates your brand’s message. Our team of skilled writers, designers, and producers work together to create compelling content, including commercials, social media videos, and educational materials. We focus on storytelling and visual appeal to make your content stand out and resonate with your target audience.`, image: CreativeContentCreation },

      { id: 15, category: 'Media Production', title: 'Post-Production Services', content: `Our comprehensive post-production services ensure that your media content is polished and professional. We offer video editing, color correction, sound design, and special effects to enhance the quality of your productions. Our experienced editors and technicians use state-of-the-art software to deliver a final product that meets your expectations and exceeds industry standards.`, image: PostProductionServices },

    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>Media Production</h1>
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

export default MediaProduction;
