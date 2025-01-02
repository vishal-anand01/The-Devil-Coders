import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'
import CustomAppDevelopment from '../../Assets/img/Blog/CustomAppDevelopment.jpg'
import CrossPlatformCompatibility from '../../Assets/img/Blog/Cross-PlatformCompatibility.jpg'
import MaintenanceandSupport from '../../Assets/img/Blog/MaintenanceandSupport.jpg'


const AppDevelopment = () => {


    // Dummy data example
    const posts = [
        { id: 37, category: 'App Development (Android & iOS)', title: 'Custom App Development', content: 'Our App Development services offer custom solutions for both Android and iOS platforms. We design and develop apps tailored to your specific business needs, ensuring a seamless user experience and intuitive interface. From initial concept to final deployment, our team works closely with you to create a unique app that aligns with your brand and goals.', image: CustomAppDevelopment },

        { id: 38, category: 'App Development (Android & iOS)', title: 'Cross-Platform Compatibility', content: 'We specialize in developing apps that offer cross-platform compatibility, allowing you to reach a broader audience. Using advanced frameworks and technologies, we ensure that your app performs flawlessly on both Android and iOS devices. This approach not only saves time and resources but also provides a consistent experience for all users.', image: CrossPlatformCompatibility },

        { id: 39, category: 'App Development (Android & iOS)', title: 'Maintenance and Support', content: 'Our commitment to your app doesn’t end at launch. We provide ongoing maintenance and support to ensure your app remains up-to-date and functions smoothly. Our services include regular updates, bug fixes, and feature enhancements. With our continuous support, you can be confident that your app will evolve with your business and stay relevant in the competitive market.', image: MaintenanceandSupport },
    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>App Development (Android & iOS)</h1>
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

export default AppDevelopment;
