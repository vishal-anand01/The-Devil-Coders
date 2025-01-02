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

const GraphicsDesignPage = () => {
    const countsRef = useRef(null);
    const [startCounting, setStartCounting] = useState(false);


    useEffect(() => {
        initializeTypewriter([
            { elementId: 'app', text: 'Graphics Design Services' },
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
                <title>Graphic | Video Designer | Photo | Drone| Video Grapher - Crew Captivators Solutions Pvt. Ltd.</title>
                {/* Meta description */}
                <meta
                    name="description"
                    content="Unlock creativity with our team of experts offering graphic design, video editing, photography, drone operation, and videography services, tailored to elevate your brand's visual narrative and captivate your audience."
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
                                        Transform your vision into stunning visuals with our cutting-edge graphic design services. From logos to marketing materials, our team of skilled designers ensures every aspect of your brand reflects professionalism and creativity. Let us bring your ideas to life...

                                    </p>
                                    <ul>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Graphic Designer
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Video Designer
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Photo Grapher
                                        </li>

                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Drone Operator
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Video Grapher
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="col-lg-6 pt-4 pt-lg-0"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <p>
                                        Explore the expertise of our multi-disciplinary team, featuring graphic designers, video editors, photographers, drone operators, and videographers. Each member brings a unique set of skills and experiences to the table, ensuring that we can cater to all your design requirements with precision and creativity. From concept development to final execution, trust our team to deliver tailored solutions that exceed your expectations and make your projects shine.
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
                                    Professional graphic design solutions tailored to elevate your brand's visual identity and captivate your audience.

                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="icon">
                                            <i class="fas fa-palette"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Creative Logo Design</Link>
                                        </h4>
                                        <p className="description">
                                            Craft unique and memorable logos that embody your brand's essence and distinguish you from competitors.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="icon">
                                            <i class="fas fa-newspaper"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Eye-catching Marketing Materials</Link>
                                        </h4>
                                        <p className="description">
                                            Engage your audience with visually striking marketing materials that effectively convey your message and drive results.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon">
                                            <i class="fas fa-desktop"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Digital Graphics Creation</Link>
                                        </h4>
                                        <p className="description">
                                            Enhance your online presence with captivating digital graphics designed to attract and retain your audience's attention.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="icon">
                                            <i class="fas fa-id-card"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Brand Identity Development</Link>
                                        </h4>
                                        <p className="description">
                                            Build a strong and cohesive brand identity that resonates with your audience and communicates your values effectively.
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
                                                <Link to="">Motion Graphics Design</Link>
                                            </h5>
                                            <p className="card-text">
                                                Elevate your video content with our motion graphics design services. Our team specializes in creating dynamic animations and visual effects that bring your videos to life. From animated logos to complex data visualizations, we craft captivating motion graphics that engage your audience and enhance your storytelling.
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
                                                <Link to="">Product Photography</Link>
                                            </h5>
                                            <p className="card-text">
                                                Make your products stand out with professional product photography. Our experienced photographers utilize advanced techniques and lighting setups to capture stunning images that highlight the unique features and qualities of your products. Whether it's for e-commerce, advertising, or catalog purposes, our product photography services help you showcase your offerings in the best possible light.
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
                                                <Link to="">Aerial Photography </Link>
                                            </h5>
                                            <p className="card-text">
                                                Capture breathtaking aerial perspectives with our aerial photography services. Using state-of-the-art drone technology, our skilled drone operators capture stunning aerial images and videos of landscapes, properties, events, and more. Whether you need aerial shots for real estate marketing, environmental surveys, or cinematic productions, our aerial photography services deliver stunning results from unique vantage points.
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
                                                <Link to="">Video Editing Services</Link>
                                            </h5>
                                            <p className="card-text">
                                                Transform your raw footage into polished, professional-quality videos with our video editing services. Our expert editors work closely with you to understand your vision and goals, then meticulously edit your footage to create compelling narratives, smooth transitions, and engaging visual effects. Whether it's for corporate videos, marketing campaigns, or social media content, our video editing services help you tell your story effectively and leave a lasting impression on your audience.
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
                                <p> Explore a diverse range of specialized roles and services tailored to meet your creative needs and bring your vision to life.</p>
                            </div>
                            <div className="row" data-aos="fade-up" data-aos-delay={300}>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                        <i className="fas fa-paint-brush" style={{ color: "#ffbb2c" }} />
                                        <h3>
                                            <Link to="">Graphic Design Expertise</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-film"
                                            style={{ color: "#5578ff" }}
                                        />
                                        <h3>
                                            <Link to="">Video Editing Mastery</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-camera"
                                            style={{ color: "#e80368" }}
                                        />
                                        <h3>
                                            <Link to="">Photography Excellence</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                    <div className="icon-box">
                                        <i className="fas fa-video" style={{ color: "#e361ff" }} />
                                        <h3>
                                            <Link to="">Video Production Proficiency</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-book-open" style={{ color: "#47aeff" }} />
                                        <h3>
                                            <Link to="">Visual Storytelling Mastery</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-images" style={{ color: "#ffa76e" }} />
                                        <h3>
                                            <Link to="">Creative Image Composition</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-plane" style={{ color: "#11dbcf" }} />
                                        <h3>
                                            <Link to="">Aerial Cinematography Skills</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-rocket" style={{ color: "#4233ff" }} />
                                        <h3>
                                            <Link to="">Drone Operation Expertise</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-film" style={{ color: "#b2904f" }} />
                                        <h3>
                                            <Link to="">Motion Graphics Wizardry</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-camera-retro" style={{ color: "#b20969" }} />
                                        <h3>
                                            <Link to="">Professional Photo Retouching</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-video"
                                            style={{ color: "#ff5828" }}
                                        />
                                        <h3>
                                            <Link to="">Cinematic Video Rendering</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-id-badge" style={{ color: "#29cc61" }} />
                                        <h3>
                                            <Link to="">Brand Identity Creation</Link>
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
                                            We begin by exploring your brand’s visual identity and messaging, ensuring our designs align perfectly with your objectives and audience.
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
                                        <h3>Design and Creation</h3>
                                        <p>
                                            Our designers craft compelling visuals, from logos to marketing materials, using cutting-edge tools to create impactful designs that elevate your brand.
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
                                        <h3>Revision and Delivery</h3>
                                        <p>
                                            We work closely with you to refine and finalize the designs, ensuring they are ready for implementation across all your marketing channels.
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

export default GraphicsDesignPage
