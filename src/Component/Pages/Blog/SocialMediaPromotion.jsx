import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'
import TargetedSocialMediaCampaigns from '../../Assets/img/Blog/TargetedSocialMediaCampaigns.jpg'
import EngagingContentCreation from '../../Assets/img/Blog/EngagingContentCreation.jpg'
import SocialMediaAnalyticsandOptimization6 from '../../Assets/img/Blog/SocialMediaAnalyticsandOptimization6.jpg'


const SocialMediaPromotion = () => {


    // Dummy data example
    const posts = [
        { id: 34, category: 'Social Media Promotion', title: 'Targeted Social Media Campaigns', content: 'Our Social Media Promotion services include creating targeted campaigns to reach and engage your ideal audience. We analyze your market and audience demographics to develop customized content and advertisements that resonate with your followers. By leveraging platforms like Facebook, Instagram, Twitter, and LinkedIn, we ensure your brand gains visibility and attracts potential customers.', image: TargetedSocialMediaCampaigns },

        { id: 35, category: 'Social Media Promotion', title: 'Engaging Content Creation', content: 'We specialize in crafting engaging content that captivates your audience and encourages interaction. Our team creates a variety of content, including posts, stories, videos, and graphics, tailored to each social media platform. By consistently delivering high-quality, relevant content, we help build your brand’s online presence and foster a loyal community of followers.', image: EngagingContentCreation },

        { id: 36, category: 'Social Media Promotion', title: 'Social Media Analytics and Optimization6', content: 'Our services include detailed social media analytics and optimization to ensure your campaigns are effective and deliver results. We monitor key performance indicators, track engagement metrics, and analyze the success of each campaign. Using these insights, we continuously refine our strategies to improve reach, engagement, and conversion rates, maximizing your return on investment.', image: SocialMediaAnalyticsandOptimization6 },


    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>Social Media Promotion</h1>
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

export default SocialMediaPromotion;
