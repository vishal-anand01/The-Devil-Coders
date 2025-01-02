import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import '../Assets/CSS/AllSubPagesOfServices.css'
import Tenderbg from '../Assets/img/tenderservicesbg.png'
import initializeTypewriter from '../Assets/JavacsriptFile/AboutPageName';
import bg1 from '../Assets/img/tender-biding-services-bg1.jpg'
import bg2 from '../Assets/img/tender-biding-services-bg2.jpg'
import bg3 from '../Assets/img/tender-biding-services-bg3.jpg'
import bg4 from '../Assets/img/tender-biding-services-bg4.jpg'

import Faq from './FaqSection'
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AwardWinnerAnimation from '../Assets/Json/AwardWinner.json'
import Lottie from 'lottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurExpertise from '../Assets/Json/OurExpertise.json';
import FirstArrow from '../Assets/img/First.png'
import SecondArrow from '../Assets/img/Second.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HomePageReview from '../Assets/Json/Home-page-clients-animation.json'

import JimmiSonam from '../Assets/img/Review/JimmySonam.png'
import ayumdakme from '../Assets/img/Review/unnamed (1).png'
import SabriNguso from '../Assets/img/Review/SabriNguso.png'

const AdmissionAssistance = () => {

    const countsRef = useRef(null);
    const [startCounting, setStartCounting] = useState(false);


    useEffect(() => {
        initializeTypewriter([
            { elementId: 'app', text: 'Admission Assistance' },
            // Add more configurations for other elements if needed
        ]);
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setStartCounting(false); // Resetting the counter
                    setTimeout(() => setStartCounting(true), 200); // Delay to reset and then start counting
                }
            });
        }, options);

        observer.observe(countsRef.current);

        return () => {
            observer.disconnect();
        };


    }, []);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 300,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 5000, // Time between slides (5000 ms = 5 seconds)
        autoplayHoverPause: true, // Pause on hover
        items: 1,
        animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
        navText: ['<span class="arrow-left"></span>', '<span class="arrow-right"></span>'],
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            800: { items: 1 },
            1024: { items: 1 },
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>

            <div className='AdmissionAssistancePageMain'>

                {/* Add Helmet component to manage document head */}
                <Helmet>
                    {/* Title */}
                    <title>Admission Assistance - Crew Captivators Solutions Pvt. Ltd.</title>
                    {/* Meta description */}
                    <meta
                        name="description"
                        content="Streamline your journey to academic success with our expert admission assistance services. From personalized guidance to application support, we help students navigate the admissions process smoothly, ensuring they secure placements in their desired educational institutions hassle-free."
                    />
                    {/* Other meta tags */}
                    {/* Add any other necessary meta tags here */}
                </Helmet>


                <div className="about-us-container">
                    <div id="app" className="about-us-text"></div>
                </div>

                <div className='services-details-page'>

                    {/* ======= Hero Section ======= */}
                    <section id="hero" className="d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                    <div data-aos="fade-up">
                                        <h1 data-aos="fade-up">Grow your business with Crew Captivators Solutions Pvt. Ltd.</h1>
                                    </div>
                                    <div data-aos="fade-up">
                                        <h2 data-aos="fade-up" data-aos-delay={400}>
                                            Unlock your business's full potential with tailored strategies for growth from industry experts.
                                        </h2>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay={800}>
                                        <div data-aos="fade-up">
                                            <Link to="/contact" className="btn-get-started scrollto">
                                                Get Started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-6 order-1 order-lg-2 hero-img"
                                    data-aos="fade-left"
                                    data-aos-delay={200}
                                >  <div data-aos="fade-up">
                                        <img
                                            src={Tenderbg}
                                            className="img-fluid animated"
                                            alt="Tenderbg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Hero */}
                    <main id="main">

                        {/* ======= About Us Section ======= */}
                        <section id="about" className="about">
                            <div className="container">
                                <div className="section-title" data-aos="fade-up">
                                    <div data-aos="fade-up">
                                        <h2>About Us</h2>
                                    </div>
                                </div>
                                <div className="row content">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                                        <div data-aos="fade-up">
                                            <p>
                                                Navigating college apps can be overwhelming, but we're here for you! Our personalized admission services cater to your goals and background. From forms to interviews, we empower you to stand out. We make it achievable, guiding you toward success with confidence.

                                            </p>
                                        </div>
                                        <ul>
                                            <div data-aos="fade-up">
                                                <li>
                                                    <i class="fa-solid fa-check-double"></i>Reliable Rides, Unmatched Comfort
                                                </li>
                                            </div>
                                            <div data-aos="fade-up">
                                                <li>
                                                    <i class="fa-solid fa-check-double"></i> Your Trusted Travel Companion
                                                </li>
                                            </div>
                                            <div data-aos="fade-up">
                                                <li>
                                                    <i class="fa-solid fa-check-double"></i> Journey with Confidence : Nefa Cabs Services
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                    <div
                                        className="col-lg-6 pt-4 pt-lg-0"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        <div data-aos="fade-up">
                                            <p>
                                                Navigating college admissions can be overwhelming, but our personalized assistance simplifies the process. From decoding complex forms to interview preparation, our experienced team provides expert guidance tailored to your needs. Let us alleviate the stress and help you confidently pursue your academic goals.
                                            </p>
                                        </div>
                                        <div data-aos="fade-up">
                                            <Link to="/contact" className="btn-learn-more">
                                                Contact Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End About Us Section */}


                        {/* ======= Counts Section ======= */}
                        <section id="counts" className="counts" ref={countsRef}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div data-aos="fade-up">
                                            <div className='AwardWinnerAnimation animated'>
                                                <Lottie animationData={AwardWinnerAnimation} />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                                        data-aos="fade-left"
                                        data-aos-delay={300}
                                    >
                                        <div className="content d-flex flex-column justify-content-center">
                                            <div className="row">
                                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                    <div data-aos="fade-up">
                                                        <div className="count-box">
                                                            <i className="fas fa-smile"></i>
                                                            {startCounting && (
                                                                <CountUp end={95} duration={3} suffix="%" />
                                                            )}
                                                            <p>
                                                                <strong>Happy Clients</strong> Exceptional satisfaction, diverse client.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                    <div data-aos="fade-up">


                                                        <div className="count-box">
                                                            <i className="fas fa-tasks"></i>
                                                            {startCounting && (
                                                                <CountUp end={90} duration={3} suffix="%" />
                                                            )}
                                                            <p>
                                                                <strong>Successful Businesses</strong> Extensive experience, successful execution.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                    <div data-aos="fade-up">

                                                        <div className="count-box">
                                                            <i className="fas fa-clock"></i>
                                                            {startCounting && (
                                                                <CountUp end={320} duration={3} suffix="+" />
                                                            )}
                                                            <p><strong>Clients who love CCS Pvt. Ltd.</strong> value excellence and trust in our expertise. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                    <div data-aos="fade-up">
                                                        <div className="count-box">
                                                            <i className="fas fa-users"></i>
                                                            {startCounting && (
                                                                <div style={{ display: 'flex', alignItems: 'center', position: 'relative', left: '-40px' }}>
                                                                    <CountUp end={4.8} duration={3} decimals={1} />
                                                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: '0.2em', fontSize: '1.2em', color: '#FFD700' }} />
                                                                </div>
                                                            )}
                                                            <p><strong>Review </strong> Given By Satisfied Clients</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End .content*/}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End Counts Section */}



                        {/* ======= Services Section ======= */}
                        <section id="services" className="services">
                            <div className="container">
                                <div className="section-title" data-aos="fade-up">
                                    <div data-aos="fade-up">
                                        <h2>Services</h2>
                                    </div>
                                    <div data-aos="fade-up">
                                        <p>
                                            Expert guidance through the entire college admissions journey, from decoding forms to interview prep, tailored to your needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div data-aos="fade-up">
                                            <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                                <div className="icon">
                                                    <i class="fas fa-user-tie"></i>
                                                </div>
                                                <h4 className="title">
                                                    <Link to="">Expert Consultation</Link>
                                                </h4>
                                                <p className="description">
                                                    Receive personalized advice and insights from experienced professionals to navigate the complexities of college admissions successfully.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div data-aos="fade-up">
                                            <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                                <div className="icon">
                                                    <i class="fas fa-file"></i>
                                                </div>
                                                <h4 className="title">
                                                    <Link to="">Comprehensive Application Suppor</Link>
                                                </h4>
                                                <p className="description">
                                                    Access a full range of services tailored to streamline your application process, ensuring thoroughness and accuracy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div data-aos="fade-up">
                                            <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                                <div className="icon">
                                                    <i class="fas fa-users"></i>
                                                </div>
                                                <h4 className="title">
                                                    <Link to="">Mock Interview Sessions</Link>
                                                </h4>
                                                <p className="description">
                                                    Engage in simulated interview scenarios to hone your communication skills and gain confidence for actual admissions interviews.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div data-aos="fade-up">
                                            <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                                                <div className="icon">
                                                    <i class="fas fa-brain"></i>
                                                </div>
                                                <h4 className="title">
                                                    <Link to="">Essay Brainstorming Workshops</Link>
                                                </h4>
                                                <p className="description">
                                                    Participate in collaborative sessions to generate compelling essay ideas and develop strong narratives that captivate admissions officers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End Services Section */}

                        {/* ======= More Services Section ======= */}
                        <section id="more-services" className="more-services">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 d-flex align-items-stretch">
                                        <div data-aos="fade-up">
                                            <div
                                                className="card"
                                                style={{
                                                    backgroundImage: `url(${bg1})`
                                                }}
                                                data-aos="fade-up"
                                                data-aos-delay={100}
                                            >
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <Link to="">Strategic Test Preparation</Link>
                                                    </h5>
                                                    <p className="card-text">
                                                        Utilize targeted study plans and resources to optimize your performance in standardized tests, enhancing your overall application profile.
                                                    </p>
                                                    <div className="read-more">
                                                        <Link to="/contact">
                                                            <i class="fa-solid fa-arrow-right"></i> Contact Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                        <div data-aos="fade-up">
                                            <div
                                                className="card"
                                                style={{
                                                    backgroundImage: `url(${bg2})`
                                                }}
                                                data-aos="fade-up"
                                                data-aos-delay={200}
                                            >
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <Link to="">Specialized Program Matching</Link>
                                                    </h5>
                                                    <p className="card-text">
                                                        Explore tailored recommendations for academic programs and institutions that align with your interests, goals, and preferences.
                                                    </p>
                                                    <div className="read-more">
                                                        <Link to="/contact">
                                                            <i class="fa-solid fa-arrow-right"></i> Contact Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-stretch mt-4">
                                        <div data-aos="fade-up">
                                            <div
                                                className="card"
                                                style={{
                                                    backgroundImage: `url(${bg3})`
                                                }}
                                                data-aos="fade-up"
                                                data-aos-delay={100}
                                            >
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <Link to="">Financial Planning Assistance</Link>
                                                    </h5>
                                                    <p className="card-text">
                                                        Receive guidance on understanding financial aid options, budgeting for college expenses, and seeking scholarships or grants.
                                                    </p>
                                                    <div className="read-more">
                                                        <Link to="/contact">
                                                            <i class="fa-solid fa-arrow-right"></i> Contact Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-stretch mt-4">
                                        <div data-aos="fade-up">
                                            <div
                                                className="card"
                                                style={{
                                                    backgroundImage: `url(${bg4})`
                                                }}
                                                data-aos="fade-up"
                                                data-aos-delay={200}
                                            >
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <Link to="">Progress Tracking Tools</Link>
                                                    </h5>
                                                    <p className="card-text">
                                                        Utilize online platforms or resources to monitor application progress, deadlines, and requirements, ensuring timely completion and submission.
                                                    </p>
                                                    <div className="read-more">
                                                        <Link to="/contact">
                                                            <i class="fa-solid fa-arrow-right"></i> Contact Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End More Services Section */}

                        {/* ======= Features Section ======= */}
                        <section id="features" className="features">
                            <div className="container">
                                <div className="section-title" data-aos="fade-up">
                                    <div data-aos="fade-up">
                                        <h2>Features</h2>
                                    </div>
                                    <div data-aos="fade-up">
                                        <p> Comprehensive admission assistance including guidance, application support, and interview preparation.</p>
                                    </div>
                                </div>
                                <div className="row" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="col-lg-3 col-md-4">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i className="fas fa-user-graduate" style={{ color: "#ffbb2c" }} />
                                                <h3>
                                                    <Link to="">Personalized Guidance</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i
                                                    className="fas fa-file-alt"
                                                    style={{ color: "#5578ff" }}
                                                />
                                                <h3>
                                                    <Link to="">Application Support</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i
                                                    className="fas fa-chalkboard-teacher"
                                                    style={{ color: "#e80368" }}
                                                />
                                                <h3>
                                                    <Link to="">Academic Advising</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i className="fas fa-language" style={{ color: "#e361ff" }} />
                                                <h3>
                                                    <Link to="">Language Proficiency Support</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i className="fas fa-tasks" style={{ color: "#47aeff" }} />
                                                <h3>
                                                    <Link to="">Application Tracking</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i className="fas fa-bell" style={{ color: "#ffa76e" }} />
                                                <h3>
                                                    <Link to="">Admission Notifications</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i className="fas fa-exclamation-circle" style={{ color: "#11dbcf" }} />
                                                <h3>
                                                    <Link to="">Decision Deadline Alerts</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i className="fas fa-hands-helping" style={{ color: "#4233ff" }} />
                                                <h3>
                                                    <Link to="">Admission Consultant Support</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i className="fas fa-school" style={{ color: "#b2904f" }} />
                                                <h3>
                                                    <Link to="">Institute Selection</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i className="fas fa-check-circle" style={{ color: "#b20969" }} />
                                                <h3>
                                                    <Link to="">Application Status Updates</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i
                                                    className="fas fa-clock"
                                                    style={{ color: "#ff5828" }}
                                                />
                                                <h3>
                                                    <Link to="">Deadline Management</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 mt-4">
                                        <div data-aos="fade-up">
                                            <div className="icon-box">
                                                <i className="fas fa-info-circle" style={{ color: "#29cc61" }} />
                                                <h3>
                                                    <Link to="">Admission Requirements Overview</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End Features Section */}

                        {/* ======= Our Expertise ======= */}
                        <section className="online-business ptb-70">
                            <div className="container">
                                <div
                                    className="section-title mb-3 text-center wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.1s",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <h2>Our Expertise</h2>
                                    <h4>Our Simple, Seamless &amp; Streamlined Process</h4>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="services-img1 text-center">
                                            <div data-aos="fade-up">
                                                <Lottie animationData={OurExpertise} className='Our Expertise' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div
                                            className="benifits-content wow fadeInUp"
                                            data-wow-delay="0.1s"
                                            style={{
                                                visibility: "visible",
                                                animationDelay: "0.1s",
                                                animationName: "fadeInUp"
                                            }}
                                        >
                                            <h3>Discovery</h3>
                                            <p>
                                                We start by understanding your educational aspirations and preferences, helping you identify the right institutions and courses for your future.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-sm-8 order-1 order-sm-0">
                                        <div
                                            className="benifits-content wow fadeInUp"
                                            data-wow-delay="0.2s"
                                            style={{
                                                visibility: "visible",
                                                animationDelay: "0.2s",
                                                animationName: "fadeInUp"
                                            }}
                                        >
                                            <h3>Application and Documentation</h3>
                                            <p>
                                                Our team guides you through the entire admission process, from filling out applications to gathering necessary documents, ensuring everything is submitted on time.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-4 order-0 order-sm-1">
                                        <div className="benifits-img text-center text-sm-start">
                                            <img
                                                src={FirstArrow}
                                                alt="Crew Captivators Solutions Pvt. Ltd. Arrow"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-sm-4">
                                        <div className="benifits-img text-center text-sm-end">
                                            <img
                                                src={SecondArrow}
                                                alt="Crew Captivators Solutions Pvt. Ltd. Arrow"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-8">
                                        <div
                                            className="benifits-content wow fadeInUp"
                                            data-wow-delay="0.3s"
                                            style={{
                                                visibility: "visible",
                                                animationDelay: "0.3s",
                                                animationName: "fadeInUp"
                                            }}
                                        >
                                            <h3>Follow-up and Support</h3>
                                            <p>
                                                We provide continuous support and follow-up until your admission process is successfully completed, offering guidance every step of the way.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* ======= End Our Expertise ======= */}

                        {/* Testimonial Section */}
                        <div className="testimonial-section" data-aos="fade-up">
                            <div className="large-container" data-aos="fade-up">
                                <div className="sec-title" data-aos="fade-up">
                                    <div data-aos="fade-up">
                                        <h5 className="title">Our Clients</h5>
                                    </div>
                                    <div data-aos="fade-up">
                                        <h2>What Our Clients Say About Us?</h2>
                                    </div>
                                </div>
                                <OwlCarousel className="testimonial-carousel owl-theme" {...options}>
                                    {/* Testimonial Block */}

                                    {/* Testimonial Block */}

                                    <div className="testimonial-block" data-aos="fade-up">
                                        <div className="inner-box" data-aos="fade-up">
                                            <div className="text" data-aos="fade-up">
                                                Exceptional Technical Expertise:
                                                "The team at Crew Captivators possesses unparalleled technical expertise. They consistently deliver innovative and robust solutions.
                                            </div>
                                            <div className="info-box" data-aos="fade-up">
                                                <div className="thumb" data-aos="fade-up">
                                                    <img
                                                        src={JimmiSonam}
                                                        alt="Jimmi Sonam Review"
                                                    />
                                                </div>
                                                <h4 className="name" data-aos="fade-up">Jimmy Sonam</h4>
                                                {/* <span className="designation">Ui Designer &amp; CEO</span> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Block */}
                                    <div className="testimonial-block" data-aos="fade-up">
                                        <div className="inner-box" data-aos="fade-up">
                                            <div className="text" data-aos="fade-up">
                                                I recently tried Crew Captivators Solution, and I must say, it exceeded my expectations. The team's professionalism and attention to detail were impressive. They effectively captivated the audience with their innovative approach, Overall a solid choice for captivating solutions!
                                            </div>
                                            <div className="info-box" data-aos="fade-up">
                                                <div className="thumb" data-aos="fade-up">
                                                    <img
                                                        src={ayumdakme}
                                                        alt="Ayum Dakme Review"
                                                    />
                                                </div>
                                                <h4 className="name" data-aos="fade-up">Ayum Dakme</h4>

                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Block */}
                                    <div className="testimonial-block" data-aos="fade-up">
                                        <div className="inner-box" data-aos="fade-up">
                                            <div className="text" data-aos="fade-up">
                                                Crew Captivators Solutions Pvt. Ltd. offers a comprehensive range of services, from tax and accounting consultancy to app development and telecaller services. Their diverse portfolio reflects expertise across corporate consultancy, IT solutions, media production, and creative design.
                                            </div>
                                            <div className="info-box" data-aos="fade-up">
                                                <div className="thumb" data-aos="fade-up">
                                                    <img
                                                        src={SabriNguso}
                                                        alt="Sabri Nguso Review"
                                                    />
                                                </div>
                                                <h4 className="name" data-aos="fade-up">Sabri Nguso</h4>
                                                {/* <span className="designation">Ui Designer &amp; CEO</span> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* You can add more testimonial blocks similarly */}

                                </OwlCarousel>
                                <div className="thumb-layer paroller" data-aos="fade-up">
                                    <figure className="HomePageReviewPart" data-aos="fade-up">
                                        <Lottie animationData={HomePageReview} data-aos="fade-up" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/*End Testimonial Section */}


                        <Faq />

                    </main>
                    {/* End #main */}

                </div>

            </div>
        </>

    )
}

export default AdmissionAssistance
