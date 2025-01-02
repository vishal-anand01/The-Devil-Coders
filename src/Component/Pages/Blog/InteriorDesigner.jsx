import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'
import CustomizedInteriorDesignSolutions from '../../Assets/img/Blog/CustomizedInteriorDesignSolutions.jpg'
import SpacePlanningandOptimization from '../../Assets/img/Blog/SpacePlanningandOptimization.jpg'
import ComprehensiveProjectManagement from '../../Assets/img/Blog/ComprehensiveProjectManagement.jpg'


const InteriorDesigner = () => {


  // Dummy data example
  const posts = [
    { id: 40, category: 'Interior Designer', title: 'Customized Interior Design Solutions', content: 'Our Interior Design services offer customized solutions tailored to your unique style and needs. We work closely with you to understand your vision and preferences, creating personalized designs that reflect your personality and lifestyle. From residential to commercial spaces, our goal is to transform your environment into a stunning and functional space that meets your specific requirements.', image: CustomizedInteriorDesignSolutions },

    { id: 41, category: 'Interior Designer', title: 'Space Planning and Optimization', content: 'Effective space planning and optimization are at the core of our Interior Design services. We analyze your space to create layouts that maximize functionality and flow while maintaining aesthetic appeal. Our expert designers ensure that every square foot is utilized efficiently, providing practical solutions that enhance the overall experience of your space.', image: SpacePlanningandOptimization },

    { id: 42, category: 'Interior Designer', title: 'Comprehensive Project Management', content: 'Our Interior Design services include comprehensive project management to ensure a seamless and stress-free experience. We handle every aspect of the design process, from initial concept development to final installation. Our team coordinates with contractors, suppliers, and craftsmen to ensure your project is completed on time and within budget, delivering exceptional results that exceed your expectations.', image: ComprehensiveProjectManagement }

  ];

  return (
    <>
      <div className='container-fluid p-0 m-0 post-details-background'>
        <div className='row'>
          <div className='col-sm-6 post-details-heading'>
            <h1>Interior Designer</h1>
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

export default InteriorDesigner;
