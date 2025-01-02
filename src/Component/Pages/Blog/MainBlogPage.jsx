import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import BlogSlider from './BlogSlider';
import BlogPosts from './BlogPosts';
import Sidebar from './Sidebar';
import { Helmet } from 'react-helmet';
import '../../Assets/CSS/BlogPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const BlogPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>

      <Helmet>
        {/* Title */}
        <title>Blog | Crew Captivators Solutions Pvt. Ltd.</title>
        {/* Meta description */}
        <meta
          name="description"
          content="Explore comprehensive business solutions including Tax and Accounting Consultant, Tender Bidding Services, Online Affiliation Services, IT Solutions, Media Production, NEFA Cab Services, Website Designing, Admission Assistance, Graphic Designing, Lead Generation Services, Telemarketing (BPO Services), Social Media Promotion, App Development (Android & iOS), and Interior Designing."
        />


        {/* Other meta tags */}
        {/* Add any other necessary meta tags here */}
      </Helmet>


      <div className='container-fluid'>
        <div data-aos="fade-up">
          <BlogSlider />
        </div>
        <div className='container-fluid'>
          <Row>
            <Col md={10}>
              <div data-aos="fade-up">
                <BlogPosts />
              </div>
            </Col>
            <Col md={2}>
              <div data-aos="fade-up">
                <Sidebar />
              </div>
            </Col>
          </Row>

        </div>
      </div>

    </>
  );
};
export default BlogPage
