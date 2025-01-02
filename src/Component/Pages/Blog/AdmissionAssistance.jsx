import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import StrategicAdmissionPlanning from '../../Assets/img/Blog/Strategic-Bid-Management.jpg'
import HolisticApplicationEnhancement from '../../Assets/img/Blog/HolisticApplicationEnhancement.jpg'
import PostAcceptanceGuidance from '../../Assets/img/Blog/Post-AcceptanceGuidance.jpg'

const AdmissionAssistance = () => {


    // Dummy data example
    const posts = [
      { id: 22, category: 'Admission Assistance', title: 'Strategic Admission Planning', content: 'Our Admission Assistance services provide strategic planning to help students navigate the admission process effectively. We develop personalized timelines, set achievable milestones, and offer continuous support throughout the application journey. Our structured approach ensures that every aspect of the application is handled with care and precision, increasing the likelihood of acceptance.', image: StrategicAdmissionPlanning },

        { id: 23, category: 'Admission Assistance', title: 'Application Enhancement', content: `We focus on enhancing every component of a student's application to present a well-rounded profile to admissions committees. Our services include crafting compelling personal statements, optimizing extracurricular activity lists, and highlighting unique strengths and achievements. By showcasing a student's full potential, we help them stand out in a competitive admission landscape.`, image: HolisticApplicationEnhancement },

        { id: 24, category: 'Admission Assistance', title: 'Post-Acceptance Guidance', content: `Our support doesn't end with acceptance letters. We provide post-acceptance guidance to help students transition smoothly into their new academic environments. This includes assistance with enrollment procedures, housing arrangements, and orientation preparation. Our goal is to ensure students are well-prepared and confident as they embark on their new educational journey.`, image: PostAcceptanceGuidance },

    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>Admission Assistance</h1>
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

export default AdmissionAssistance;
