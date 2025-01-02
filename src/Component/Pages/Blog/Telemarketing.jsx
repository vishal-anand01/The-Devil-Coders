import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'
import OutboundTelemarketingCampaigns from '../../Assets/img/Blog/OutboundTelemarketingCampaigns.jpg'
import InboundCustomerSupportServices from '../../Assets/img/Blog/InboundCustomerupportServices.jpg'
import AppointmentSettingandLeadQualification from '../../Assets/img/Blog/AppointmentSettingandLeadQualification.jpg'


const Telemarketing = () => {


    // Dummy data example
    const posts = [
        { id: 31, category: 'Telemarketing (BPO Services)', title: 'Outbound Telemarketing Campaigns', content: `Our Telemarketing services include executing outbound telemarketing campaigns designed to reach potential customers and generate high-quality leads. Our team of experienced telemarketers conducts market research, performs cold calls, and engages prospects with compelling communication strategies. By understanding your business's unique value proposition, we create campaigns that effectively drive sales and expand your customer base.`, image: OutboundTelemarketingCampaigns },

        { id: 32, category: 'Telemarketing (BPO Services)', title: 'Inbound Customer Support Services   ', content: `We offer comprehensive inbound customer support services to ensure your customers receive prompt and professional assistance. Our dedicated support team manages incoming calls, emails, and live chat inquiries, addressing customer concerns, providing product information, and resolving issues efficiently. By delivering exceptional customer service, we help improve customer satisfaction and retention rates.`, image: InboundCustomerSupportServices },

        { id: 33, category: 'Telemarketing (BPO Services)', title: 'Appointment Setting and Lead Qualification', content: `Our telemarketing services extend to appointment setting and lead qualification, streamlining your sales process and enhancing productivity. We qualify leads based on your criteria and schedule appointments for your sales team, ensuring they focus on high-potential prospects. With our expertise, we help you optimize your sales efforts, improve conversion rates, and achieve your business goals.`, image: AppointmentSettingandLeadQualification },


    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>Telemarketing (BPO Services)</h1>
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

export default Telemarketing;
