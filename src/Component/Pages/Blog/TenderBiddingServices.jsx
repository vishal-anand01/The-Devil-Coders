import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import ComprehensiveTenderPreparation from '../../Assets/img/Blog/Comprehensive-Tender-Preparation.jpg'
import StrategicBidManagement from '../../Assets/img/Blog/Strategic-Bid-Management.jpg'
import PostSubmissionSupport from '../../Assets/img/Blog/Post-Submission-Support.jpg'

const TenderBiddingServices = () => {


  // Dummy data example
  const posts = [
    { id: 4, category: 'Tender Bidding Services', title: 'Comprehensive Tender Preparation', content: "Our Tender Bidding Services ensure that your business can submit competitive and successful tenders tailored to specific industry requirements. Our experienced team of professionals excels at understanding your business's capabilities and specifications, preparing tender documents, adhering to submission guidelines, and ensuring timely submission. This comprehensive approach maximizes your chances of winning contracts.", image: ComprehensiveTenderPreparation },

    { id: 5, category: 'Tender Bidding Services', title: 'Strategic Bid Management Services', content: "Strategic Bid Management is at the core of our Tender Bidding Services. We analyze the market, assess competitors, and create strategic bids that highlight your business's unique strengths. By leveraging our expertise, we ensure that your bids are not only compliant with all necessary regulations but also stand out to evaluators, giving you a competitive edge.", image: StrategicBidManagement },

    { id: 6, category: 'Tender Bidding Services', title: 'Post-Submission Support', content: "Our services don't end with the submission of your tender. We provide post-submission support to address any queries or requests for additional information from the evaluators. We also offer guidance on improving future bids based on feedback and outcomes, ensuring continuous improvement and increased success rates in future tender opportunities.", image: PostSubmissionSupport },
  ];

  return (
    <>
      <div className='container-fluid p-0 m-0 post-details-background'>
        <div className='row'>
          <div className='col-sm-6 post-details-heading'>
            <h1>Tender Bidding Services</h1>
          </div>
          <div className='col-sm-6'>

            <Lottie animationData={BlogPostDetailAnimation} className='BlogPostDetailsAnimation' />

          </div>
        </div>
      </div>

      <div className="container mt-5 ">
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

export default TenderBiddingServices;
