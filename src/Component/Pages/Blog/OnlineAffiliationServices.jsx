import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import SimplifyingtheAffiliationProcessOnline from '../../Assets/img/Blog/SimplifyingtheAffiliationProcessOnline.jpg'
import ExpertGuidanceforAccreditationSuccess from '../../Assets/img/Blog/ExpertGuidanceforAccreditationSuccess.jpg'
import ContinuousSupportPostAffiliation from '../../Assets/img/Blog/ContinuousSupportPostAffiliation.jpg'

const OnlineAffiliationServices = () => {


    // Dummy data example
    const posts = [
      { id: 7, category: 'Online Affiliation Services', title: 'Simplifying the Affiliation Process Online', content: "Our Online Affiliation Services are designed to simplify and expedite the process of gaining affiliations for educational institutions. We offer comprehensive assistance in preparing and submitting affiliation applications online, ensuring all required documentation is accurately compiled and submitted on time. Our goal is to streamline the administrative burden and optimize the chances of successful affiliation approval.", image: SimplifyingtheAffiliationProcessOnline },

      { id: 8, category: 'Online Affiliation Services', title: 'Expert Guidance', content: "We provide expert guidance and consultation throughout the accreditation journey. Our team of professionals offers strategic advice on meeting accreditation standards and requirements, helping institutions navigate the complexities of compliance effectively. With our support, educational institutions can enhance their credibility and reputation within their respective fields.", image: ExpertGuidanceforAccreditationSuccess },

      { id: 9, category: 'Online Affiliation Services', title: 'Continuous Support Post-Affiliation', content: "Beyond the initial affiliation approval, our services extend to continuous support post-affiliation. We assist institutions in maintaining compliance with regulatory standards, handling audits, and addressing any challenges that may arise. Our commitment is to ensure sustained growth and success for educational institutions within their affiliated networks.", image: ContinuousSupportPostAffiliation },
    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>Online Affiliation Services</h1>
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

export default OnlineAffiliationServices;
