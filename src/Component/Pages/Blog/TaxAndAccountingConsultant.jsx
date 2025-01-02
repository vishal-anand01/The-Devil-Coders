import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'; // Adjust imports as per your needs
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Sidebar from './Sidebar';
import BlogPostDetailAnimation from '../../Assets/Json/BlogPageHeroBackground.json'

import ComprehensiveTaxPlanning from '../../Assets/img/Blog/Comprehensive-Tax-Planning.jpg'
import ExpertAccountingServices from '../../Assets/img/Blog/Expert-Accounting-Services.jpg'
import HassleFreeTaxFiling from '../../Assets/img/Blog/Hassle-Free-Tax-Filing.jpg'

const TaxAccountingConsultantPage = () => {


    // Dummy data example
    const posts = [
        {
            id: 1,
            category: 'Tax and Accounting Consultant',
            title: 'Comprehensive Tax Planning',
            content: `Effective tax planning is essential for both individuals and businesses to minimize tax liabilities and maximize savings. Our comprehensive tax planning services ensure that you are taking full advantage of all available tax benefits and deductions. We provide tailored strategies that align with your financial goals and comply with the latest tax regulations. Whether you are an individual looking to reduce your tax burden or a business aiming to optimize your tax strategy, our experts are here to help.`,
            image: ComprehensiveTaxPlanning
        },

        {
            id: 2,
            category: 'Tax and Accounting Consultant',
            title: 'Expert Accounting Services',
            content: 'Accurate and efficient accounting is crucial for the financial health of any business. Our expert accounting services provide you with reliable financial records, insightful analysis, and actionable recommendations. From bookkeeping to financial statement preparation, we handle all aspects of your accounting needs. Our team ensures compliance with accounting standards and helps you make informed financial decisions. Let us take care of your accounting, so you can focus on growing your business.',
            image: ExpertAccountingServices
        },

        {
            id: 3,
            category: 'Tax and Accounting Consultant',
            title: 'Hassle-Free Tax Filing',
            content: 'Filing taxes can be a complex and time-consuming process. Our hassle-free tax filing services make sure that your tax returns are filed accurately and on time. We handle all the paperwork, calculations, and submissions, ensuring that you remain compliant with tax laws. Our team stays updated with the latest tax code changes and uses advanced software to streamline the filing process. Trust us to manage your tax filings, so you can avoid penalties and focus on what matters most.',
            image: HassleFreeTaxFiling
        },
    ];

    return (
        <>
            <div className='container-fluid p-0 m-0 post-details-background'>
                <div className='row'>
                    <div className='col-sm-6 post-details-heading'>
                        <h1>Tax and Accounting Consultant</h1>
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

export default TaxAccountingConsultantPage;
