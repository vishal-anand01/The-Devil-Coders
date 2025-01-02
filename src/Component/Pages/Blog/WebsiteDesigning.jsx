import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import CustomWebsiteDesign from '../../Assets/img/Blog/CustomWebsiteDesign.jpg'
import Responsive from '../../Assets/img/Blog/Responsive.jpg'
import SEOOptimizedDesign from '../../Assets/img/Blog/SEOOptimizedDesign.jpg'

const WebsiteDesigning = () => {


    // Dummy data example
    const posts = [
      { id: 19, category: 'Website Designing', title: 'Custom Website Design', content: `Our Website Designing services focus on creating custom websites that reflect your brand's unique identity. We design visually appealing and user-friendly websites tailored to your specific needs and goals. From initial concept to final launch, we ensure your website stands out and provides an exceptional user experience.`, image: CustomWebsiteDesign },

        { id: 20, category: 'Website Designing', title: 'Mobile Responsive', content: `We specialize in designing responsive and mobile-friendly websites that look great on any device. Our designs ensure seamless navigation and optimal performance across desktops, tablets, and smartphones. With our expertise, your website will provide a consistent and engaging experience for users, no matter how they access it.`, image: Responsive },

        { id: 21, category: 'Website Designing', title: 'SEO-Optimized Design', content: 'Our Website Designing services include SEO optimization to help your site rank higher in search engine results. We implement best practices for on-page SEO, ensuring your website is easily discoverable by your target audience. With our focus on search engine visibility, you can attract more visitors and grow your online presence effectively.', image: SEOOptimizedDesign },

    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>Website Designing</h1>
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

export default WebsiteDesigning;
