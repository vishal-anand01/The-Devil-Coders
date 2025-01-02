import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import HeroRightPartImg from '../../Assets/Json/Blog/HeroSectionAnimation.json'
import BlogPharamacy from '../../Assets/Json/Blog/Pharmacy.json'
import Faq from '../FaqSection'
import initializeTypewriter from '../../Assets/JavacsriptFile/AboutPageName';
import PartnshipAnimation from '../../Assets/Json/Blog/PartnershipAnimation.json'
import CivilConstruction from '../../Assets/Json/Blog/CivlContruction.json'
import Supply from '../../Assets/Json/Blog/Supply.json'
import Machine from '../../Assets/Json/Blog/Mchine.json'
import NefaCabs from '../../Assets/img/logo/nefa.png'
import '../../Assets/CSS/Partner.css'

const Partners = () => {

    // ye script hero section company name word by word show hone ke liye hai

    useEffect(() => {
        initializeTypewriter([
            { elementId: 'app', text: 'Welcome to Our Partnerships' },
            // Add more configurations for other elements if needed
        ]);
    }, []);


    const [activeTab, setActiveTab] = useState('tab-1');
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setIsNavOpen(false);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>

            {/* Add Helmet component to manage document head */}
            <Helmet>
                {/* Title */}
                <title>Partners | Crew Captivators Solutions Pvt. Ltd.</title>
                {/* Meta description */}
                <meta name="description" content="Explore our partners and their projects with Crew Captivators Solutions Pvt. Ltd. We are a leading solution provider dedicated to taking your business to the next level." />
                {/* Other meta tags */}
                {/* Add any other necessary meta tags here */}
            </Helmet>

            {/* hero section start */}

            <div className='hero-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex justify-content-center align-item-center'>
                            <div className='hero-left-part'>
                                <p className='hero-left-part-first-paragraph'>We are Creators..</p>
                                <div id="app" className='hero-left-part-headind'></div>

                                <p className='hero-left-part-second-paragraph'>At <span style={{ fontWeight: 'bold' }}>Crew Captivators Solutions Pvt. Ltd.</span> , we believe in the power of collaboration and partnership to achieve mutual success. Partnering with us means joining forces with a company dedicated to providing comprehensive, all-in-one solutions. Together, we can innovate, grow, and succeed.</p>

                                <Link
                                    to="/contact"
                                    className="btn home-about-section-button rounded-pill mt-3"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>

                        <div className='col-sm-6 display-flex align-items-center'>
                            <div className='hero-right-part'>
                                <div className='blog-hero-right-part-animation'>
                                    <Lottie animationData={HeroRightPartImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* hero section end */}
            <div className='container'>
                <div className='row'>
                    <div className='col-12 ' style={{ textAlign: '-webkit-center' }}>
                        <div className='blog-partnership-animation'>
                            <Lottie animationData={PartnshipAnimation} />
                        </div>
                    </div>
                </div>
            </div>


            <main className="container mt-5">

                <section className="events">
                    <nav className={`events__tabs ${isNavOpen ? '-open' : ''}`}>

                        <Link
                            className={`events__tab ${activeTab === 'tab-1' ? '-active' : ''} d-flex align-items-center`}
                            data-tabcontent="tab-1"
                            role="button"
                            onClick={() => handleTabClick('tab-1')}
                        >
                            Nefa Cabs
                        </Link>


                        <Link
                            className={`events__tab ${activeTab === 'tab-2' ? '-active' : ''} d-flex align-items-center`}
                            data-tabcontent="tab-2"
                            role="button"
                            onClick={() => handleTabClick('tab-2')}
                        >
                            Namgee Tago Private Limited
                        </Link>

                        <Link
                            className={`events__tab ${activeTab === 'tab-3' ? '-active' : ''} d-flex align-items-center`}
                            data-tabcontent="tab-3"
                            role="button"
                            onClick={() => handleTabClick('tab-3')}
                        >
                            NT Enterprises
                        </Link>

                        <Link
                            className={`events__tab ${activeTab === 'tab-4' ? '-active' : ''} d-flex align-items-center`}
                            data-tabcontent="tab-4"
                            role="button"
                            onClick={() => handleTabClick('tab-4')}
                        >
                            Yakar Drug House
                        </Link>


                        <Link className="events__trigger" to="#" role="button" onClick={toggleNav}>
                            <span className="sr-only">Open and Close</span>
                            <i className="fas fa-chevron-down" />
                            <i className="fas fa-chevron-up" />
                        </Link>
                    </nav>

                    <div id="tab-1" className={`events__list ${activeTab === 'tab-1' ? '-active' : ''}`}>

                        <div className="events__row">
                            <div className="events__img">
                                <div className='college-logo'>
                                    <img src={NefaCabs} alt='Nefa Cabs Logo' />
                                </div>
                            </div>
                            <div className="events__content">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-3 d-flex align-items-center'> <h2 className="events__title">Nefa Cabs</h2></div>
                                        <div className='col-sm-3 d-flex align-items-center'> <address className="events__address">
                                            Court St, opposite Directorate of Agriculture, D Sector
                                            <br />
                                            Naharlagun, Arunachal Pradesh 791110
                                        </address></div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-6  d-flex align-items-center justify-content-center'>
                                                        <time className="events__time" dateTime="2019-08-23">
                                                            Since 2024
                                                        </time>
                                                    </div>
                                                    <div className='col-6 d-flex align-items-center justify-content-center'>
                                                        <Link to="https://nefacabs.com/" target='blank' className='partners-link'>Visit Us</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                                            Contact Now
                                        </Link></div>
                                    </div>
                                </div>




                            </div>
                        </div>

                        {/* Repeat for other events in tab-2 */}
                    </div>

                    <div id="tab-2" className={`events__list ${activeTab === 'tab-2' ? '-active' : ''}`}>
                        <div className="events__row">
                            <div className="events__img">
                                <div className='blog-partnership-civil'>
                                    <Lottie animationData={CivilConstruction} />
                                </div>
                            </div>
                            <div className="events__content">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-3 d-flex align-items-center'>
                                            <h2 className="events__title">Civil Construction</h2>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center'>
                                            <address className="events__address">
                                                Court St, opposite Directorate of Agriculture, D Sector
                                                <br />
                                                Naharlagun, Arunachal Pradesh 791110
                                            </address>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-6  d-flex align-items-center justify-content-center'>
                                                        <time className="events__time" dateTime="2019-08-23">
                                                            Since 2023
                                                        </time>
                                                    </div>
                                                    <div className='col-6 d-flex align-items-center justify-content-center'>
                                                        <Link to="/" className='partners-link'>Visit Us</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                                            Contact Now
                                        </Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="events__row">
                            <div className="events__img">
                                <div className='blog-partnership-civil'>
                                    <Lottie animationData={Supply} />
                                </div>
                            </div>
                            <div className="events__content">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-3 d-flex align-items-center'> <h2 className="events__title">Suppliers</h2></div>
                                        <div className='col-sm-3 d-flex align-items-center'> <address className="events__address">
                                            Court St, opposite Directorate of Agriculture, D Sector
                                            <br />
                                            Naharlagun, Arunachal Pradesh 791110
                                        </address></div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-6  d-flex align-items-center justify-content-center'>
                                                        <time className="events__time" dateTime="2019-08-23">
                                                            Since 2023
                                                        </time>
                                                    </div>
                                                    <div className='col-6 d-flex align-items-center justify-content-center'>
                                                        <Link to="/" className='partners-link'>Visit Us</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                                            Contact Now
                                        </Link></div>
                                    </div>
                                </div>




                            </div>
                        </div>

                        <div className="events__row">
                            <div className="events__img">
                                <div className='blog-partnership-civil'>
                                    <Lottie animationData={Machine} />
                                </div>
                            </div>
                            <div className="events__content">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-3 d-flex align-items-center'>  <h2 className="events__title">Machiniary</h2></div>
                                        <div className='col-sm-3 d-flex align-items-center'> <address className="events__address">
                                            Court St, opposite Directorate of Agriculture, D Sector
                                            <br />
                                            Naharlagun, Arunachal Pradesh 791110
                                        </address></div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-6  d-flex align-items-center justify-content-center'>
                                                        <time className="events__time" dateTime="2019-08-23">
                                                            Since 2023
                                                        </time>
                                                    </div>
                                                    <div className='col-6 d-flex align-items-center justify-content-center'>
                                                        <Link to="/" className='partners-link'>Visit Us</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'><Link to="/contact" className="events__btn">
                                            Contact Now
                                        </Link></div>
                                    </div>
                                </div>




                            </div>
                        </div>
                        {/* Repeat for other events in tab-1 */}
                    </div>

                    <div id="tab-3" className={`events__list ${activeTab === 'tab-3' ? '-active' : ''}`}>
                        <div className="events__row">
                            <div className="events__img">
                                <div className='blog-partnership-civil'>
                                    <Lottie animationData={CivilConstruction} />
                                </div>
                            </div>
                            <div className="events__content">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-3 d-flex align-items-center'>
                                            <h2 className="events__title">Civil Construction</h2>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center'>
                                            <address className="events__address">
                                                Court St, opposite Directorate of Agriculture, D Sector
                                                <br />
                                                Naharlagun, Arunachal Pradesh 791110
                                            </address>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-6  d-flex align-items-center justify-content-center'>
                                                        <time className="events__time" dateTime="2019-08-23">
                                                            Since 2011
                                                        </time>
                                                    </div>
                                                    <div className='col-6 d-flex align-items-center justify-content-center'>
                                                        <Link to="/" className='partners-link'>Visit Us</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                                            Contact Now
                                        </Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="events__row">
                            <div className="events__img">
                                <div className='blog-partnership-civil'>
                                    <Lottie animationData={Supply} />
                                </div>
                            </div>
                            <div className="events__content">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-3 d-flex align-items-center'> <h2 className="events__title">Suppliers</h2></div>
                                        <div className='col-sm-3 d-flex align-items-center'> <address className="events__address">
                                            Court St, opposite Directorate of Agriculture, D Sector
                                            <br />
                                            Naharlagun, Arunachal Pradesh 791110
                                        </address></div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-6  d-flex align-items-center justify-content-center'>
                                                        <time className="events__time" dateTime="2019-08-23">
                                                            Since 2011
                                                        </time>
                                                    </div>
                                                    <div className='col-6 d-flex align-items-center justify-content-center'>
                                                        <Link to="/" className='partners-link'>Visit Us</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                                            Contact Now
                                        </Link></div>
                                    </div>
                                </div>




                            </div>
                        </div>
                        {/* Repeat for other events in tab-2 */}
                    </div>

                    <div id="tab-4" className={`events__list ${activeTab === 'tab-4' ? '-active' : ''}`}>

                        <div className="events__row">
                            <div className="events__img">
                                <div className='blog-partnership-civil'>
                                    <Lottie animationData={Supply} />
                                </div>
                            </div>
                            <div className="events__content">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-3 d-flex align-items-center'> <h2 className="events__title">Medical Equipment Suppliers</h2></div>
                                        <div className='col-sm-3 d-flex align-items-center'> <address className="events__address">
                                            Court St, opposite Directorate of Agriculture, D Sector
                                            <br />
                                            Naharlagun, Arunachal Pradesh 791110
                                        </address></div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-6  d-flex align-items-center justify-content-center'>
                                                        <time className="events__time" dateTime="2019-08-23">
                                                            Since 2009
                                                        </time>
                                                    </div>
                                                    <div className='col-6 d-flex align-items-center justify-content-center'>
                                                        <Link to="https://www.msmemart.com/member/211395/ms-yakar-drug-house" target='blank' className='partners-link'>Visit Us</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                                            Contact Now
                                        </Link></div>
                                    </div>
                                </div>




                            </div>
                        </div>


                        <div className="events__row">
                            <div className="events__img">
                                <div className='blog-partnership-civil'>
                                    <Lottie animationData={BlogPharamacy} />
                                </div>
                            </div>
                            <div className="events__content">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-sm-3 d-flex align-items-center'> <h2 className="events__title">Pharmacitical Suppliers</h2></div>
                                        <div className='col-sm-3 d-flex align-items-center'> <address className="events__address">
                                            Court St, opposite Directorate of Agriculture, D Sector
                                            <br />
                                            Naharlagun, Arunachal Pradesh 791110
                                        </address></div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-6  d-flex align-items-center justify-content-center'>
                                                        <time className="events__time" dateTime="2019-08-23">
                                                            Since 2009
                                                        </time>
                                                    </div>
                                                    <div className='col-6 d-flex align-items-center justify-content-center'>
                                                        <Link to="https://www.msmemart.com/member/211395/ms-yakar-drug-house" target='blank' className='partners-link'>Visit Us</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                                            Contact Now
                                        </Link></div>
                                    </div>
                                </div>




                            </div>
                        </div>


                        {/* Repeat for other events in tab-2 */}
                    </div>
                </section>
            </main>
            {/* .container */}


            <Faq />
        </>
    )
}

export default Partners
