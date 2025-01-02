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


const AppDevelopmentServices = () => {
    const countsRef = useRef(null);
    const [startCounting, setStartCounting] = useState(false);



    useEffect(() => {
        initializeTypewriter([
            { elementId: 'app', text: 'App Development' }
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

    // ye script testimonial ke liye hai
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
    // yahan ye script end ho rha hai testimonial ka 
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);



    return (
        <>

            {/* Add Helmet component to manage document head */}
            <Helmet>
                {/* Title */}
                <title>App Development - Crew Captivators Solutions Pvt. Ltd.</title>
                {/* Meta description */}
                <meta
                    name="description"
                    content="Crafting intuitive and innovative mobile applications tailored to your needs, our app development services ensure seamless user experiences and robust functionality."
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
                                <h1 data-aos="fade-up">Grow your business with Crew Captivators Solutions Pvt. Ltd.</h1>
                                <h2 data-aos="fade-up" data-aos-delay={400}>
                                    Unlock your business's full potential with tailored strategies for growth from industry experts.
                                </h2>
                                <div data-aos="fade-up" data-aos-delay={800}>
                                    <Link to="/contact" className="btn-get-started scrollto">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 order-1 order-lg-2 hero-img"
                                data-aos="fade-left"
                                data-aos-delay={200}
                            >
                                <img
                                    src={Tenderbg}
                                    className="img-fluid animated"
                                    alt="Tenderbg"
                                />
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
                                <h2>About Us</h2>
                            </div>
                            <div className="row content">
                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                                    <p>
                                        Transforming ideas into digital realities, our app development expertise brings your vision to life with cutting-edge technology and seamless user experiences.

                                    </p>
                                    <ul>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Innovative Solutions
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>User-Centric Design
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Cross-Platform Compatibility
                                        </li>


                                    </ul>
                                </div>
                                <div
                                    className="col-lg-6 pt-4 pt-lg-0"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <p>
                                        Empowering businesses with tailor-made digital solutions, our comprehensive app development services seamlessly integrate creativity and functionality to drive engagement, foster growth, and navigate the ever-evolving landscape of the digital world with confidence and innovation.
                                    </p>
                                    <Link to="/contact" className="btn-learn-more">
                                        Contact Now
                                    </Link>
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
                                <h2>Services</h2>
                                <p>
                                    Crafting dynamic mobile applications for both Android and iOS platforms, our services ensure seamless user experiences and robust functionality.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="icon">
                                            <i class="fas fa-paint-brush"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">User Interface Design</Link>
                                        </h4>
                                        <p className="description">
                                            Designing intuitive interfaces that captivate users and enhance usability.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="icon">
                                            <i class="fas fa-mobile-alt"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Cross-Platform Development</Link>
                                        </h4>
                                        <p className="description">
                                            Building applications compatible with both Android and iOS platforms.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon">
                                            <i class="fas fa-cogs"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Custom App Development</Link>
                                        </h4>
                                        <p className="description">
                                            Tailoring applications to meet specific business requirements and objectives.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="icon">
                                            <i class="fas fa-code"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Native App Development</Link>
                                        </h4>
                                        <p className="description">
                                            Developing applications optimized for performance and user experience on each platform.
                                        </p>
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
                                                <Link to="">Backend Integration</Link>
                                            </h5>
                                            <p className="card-text">
                                                Integrating robust backend systems to support app functionalities and data management.
                                            </p>
                                            <div className="read-more">
                                                <Link to="/contact">
                                                    <i class="fa-solid fa-arrow-right"></i> Contact Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
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
                                                <Link to="">Quality Assurance Testing</Link>
                                            </h5>
                                            <p className="card-text">
                                                Conducting rigorous testing to ensure app reliability, security, and compatibility.
                                            </p>
                                            <div className="read-more">
                                                <Link to="/contact">
                                                    <i class="fa-solid fa-arrow-right"></i> Contact Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch mt-4">
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
                                                <Link to="">App Store Deployment</Link>
                                            </h5>
                                            <p className="card-text">
                                                Assisting in the submission and approval process for app release on app stores.
                                            </p>
                                            <div className="read-more">
                                                <Link to="/contact">
                                                    <i class="fa-solid fa-arrow-right"></i> Contact Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch mt-4">
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
                                                <Link to="">Post-launch Support</Link>
                                            </h5>
                                            <p className="card-text">
                                                Providing ongoing support and maintenance services to ensure app performance and user satisfaction.
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
                    </section>
                    {/* End More Services Section */}
                    {/* ======= Features Section ======= */}
                    <section id="features" className="features">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Features</h2>
                                <p>Comprehensive features designed to enhance app development, delivering seamless user experiences and robust functionality.</p>
                            </div>
                            <div className="row" data-aos="fade-up" data-aos-delay={300}>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                        <i className="fas fa-user-lock" style={{ color: "#ffbb2c" }} />
                                        <h3>
                                            <Link to="">User Authentication</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-bell"
                                            style={{ color: "#5578ff" }}
                                        />
                                        <h3>
                                            <Link to="">Push Notifications</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-shopping-cart"
                                            style={{ color: "#e80368" }}
                                        />
                                        <h3>
                                            <Link to="">In-App Purchases</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                    <div className="icon-box">
                                        <i className="fas fa-wifi" style={{ color: "#e361ff" }} />
                                        <h3>
                                            <Link to="">Offline Mode</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-share-alt" style={{ color: "#47aeff" }} />
                                        <h3>
                                            <Link to="">Social Media Integration</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-map-marker-alt" style={{ color: "#ffa76e" }} />
                                        <h3>
                                            <Link to="">Location-Based Services</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-lock" style={{ color: "#11dbcf" }} />
                                        <h3>
                                            <Link to="">Data Encryption</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-chart-line" style={{ color: "#4233ff" }} />
                                        <h3>
                                            <Link to="">Analytics and Reporting</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-paint-roller" style={{ color: "#b2904f" }} />
                                        <h3>
                                            <Link to="">Customizable Themes</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-language" style={{ color: "#b20969" }} />
                                        <h3>
                                            <Link to="">Multi-Language Support</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-mobile-alt"
                                            style={{ color: "#ff5828" }}
                                        />
                                        <h3>
                                            <Link to="">Cross-Platform Compatibility</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-cloud" style={{ color: "#29cc61" }} />
                                        <h3>
                                            <Link to="">Cloud Integration</Link>
                                        </h3>
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
                                className="section-title mb-5 text-center wow fadeInUp"
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
                                            Our process starts with understanding your app’s target audience and core requirements. We analyze competitors and existing models to design an app that stands out.
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
                                        <h3>Designing and Development </h3>
                                        <p>
                                            We specialize in the latest design trends and technologies for Android and iOS app development, ensuring your app enhances your business reach.
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
                                        <h3>Release And Support</h3>
                                        <p>
                                            We monitor the app post-launch, fixing bugs and updating features, ensuring compatibility across all platforms and devices.
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


        </>

    )
}

export default AppDevelopmentServices
