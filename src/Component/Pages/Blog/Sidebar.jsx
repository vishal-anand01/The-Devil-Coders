import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <>
            <div className='container'>
                <div className='blog-sidebar-box'>
                    <h5 className="mt-4">Popular Categories</h5>
                    <ListGroup className='Popular-Categories'>
                        <Link to="/blog/tax-and-accounting-consultant">
                            <ListGroup.Item>Tax and Accounting Consultant</ListGroup.Item>
                        </Link>
                        <Link to="/blog/tender-bidding-services">
                            <ListGroup.Item>Tender Bidding Services</ListGroup.Item>
                        </Link>
                        <Link to="/blog/online-affiliation-services">
                            <ListGroup.Item>Online Affiliation Services</ListGroup.Item>
                        </Link>
                        <Link to="/blog/it-solutions">
                            <ListGroup.Item>IT Solutions</ListGroup.Item>
                        </Link>
                        <Link to="/blog/media-production">
                            <ListGroup.Item>Media Production</ListGroup.Item>
                        </Link>
                        <Link to="/blog/nefa-cab-services">
                            <ListGroup.Item>NEFA Cab Services</ListGroup.Item>
                        </Link>
                        <Link to="/blog/website-designing">
                            <ListGroup.Item>Website Designing</ListGroup.Item>
                        </Link>
                        <Link to="/blog/admission-assistance">
                            <ListGroup.Item>Admission Assistance</ListGroup.Item>
                        </Link>
                        <Link to="/blog/graphic-designing">
                            <ListGroup.Item>Graphic Designing</ListGroup.Item>
                        </Link>
                        <Link to="/blog/lead-generation-services">
                            <ListGroup.Item>Lead Generation Services</ListGroup.Item>
                        </Link>
                        <Link to="/blog/telemarketing-(bpo-services)">
                            <ListGroup.Item>Telemarketing (BPO Services)</ListGroup.Item>
                        </Link>
                        <Link to="/blog/social-media-promotion">
                            <ListGroup.Item>Social Media Promotion</ListGroup.Item>
                        </Link>
                        <Link to="/blog/app-development-(android-&-ios)">
                            <ListGroup.Item>App Development (Android & iOS)</ListGroup.Item>
                        </Link>
                        <Link to="/blog/interior-designer">
                            <ListGroup.Item>Interior Designer</ListGroup.Item>
                        </Link>
                    </ListGroup>
                </div>
            </div>



        </>
    );
};

export default Sidebar;
