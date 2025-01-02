import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import CustomGraphicDesignSolutions from '../../Assets/img/Blog/CustomGraphicDesignSolutions.jpg'
import CreativeVisualContent from '../../Assets/img/Blog/CreativeVisualContent.jpg'
import ProfessionalPrintDesign from '../../Assets/img/Blog/ProfessionalPrintDesign.jpg'

const GraphicDesigning = () => {


    // Dummy data example
    const posts = [
      { id: 25, category: 'Graphic Designing', title: 'Custom Graphic Design', content: 'Our Graphic Designing services offer custom solutions tailored to your unique brand identity and business needs. We create visually stunning designs that effectively communicate your message and captivate your audience. From logos and branding materials to marketing collateral and digital assets, our custom designs help your brand stand out and leave a lasting impression.', image: CustomGraphicDesignSolutions },

        { id: 26, category: 'Graphic Designing', title: 'Creative Visual Content', content: 'We specialize in creating engaging and creative visual content that enhances your brand’s presence across various platforms. Our services include designing social media graphics, infographics, advertisements, and promotional materials. By combining artistic creativity with strategic thinking, we produce visuals that not only look great but also drive engagement and conversions.', image: CreativeVisualContent },

        { id: 27, category: 'Graphic Designing', title: 'Professional Print Design', content: 'Our Graphic Designing services extend to professional print design, ensuring your printed materials are of the highest quality. We design brochures, flyers, posters, business cards, and more, with a focus on clarity, aesthetic appeal, and brand consistency. With our expertise in print design, your marketing materials will effectively convey your message and enhance your brand’s image.', image: ProfessionalPrintDesign },

    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>Graphic Design</h1>
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

export default GraphicDesigning;
