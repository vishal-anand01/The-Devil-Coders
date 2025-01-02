import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import '../Assets/CSS/AllSubPagesOfServices.css'
import '../Assets/CSS/WebDesigningAndDevelopmentPage.css'
import Tenderbg from '../Assets/img/tenderservicesbg.png'
import initializeTypewriter from '../Assets/JavacsriptFile/AboutPageName';
// import bg1 from '../Assets/img/tender-biding-services-bg1.jpg'
// import bg2 from '../Assets/img/tender-biding-services-bg2.jpg'
// import bg3 from '../Assets/img/tender-biding-services-bg3.jpg'
// import bg4 from '../Assets/img/tender-biding-services-bg4.jpg'

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

const WebDesigningAndDevelopment = () => {
    const countsRef = useRef(null);
    const [startCounting, setStartCounting] = useState(false);



    useEffect(() => {
        initializeTypewriter([
            { elementId: 'app', text: 'Web Designing & Development' },
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
        let elementsCC = document.querySelectorAll('.origin-center');
        elementsCC.forEach(element => {
            let bbox = element.getBBox(),
                x = bbox.x,
                y = bbox.y,
                w = bbox.width,
                h = bbox.height;

            //center center
            let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';

            element.style.setProperty("transform-origin", resultCC)
        });

        let elementsTL = document.querySelectorAll('.origin-left');
        elementsTL.forEach(element => {
            let bbox = element.getBBox(),
                x = bbox.x,
                y = bbox.y;


            //top left
            let resultTL = x + 'px ' + y + 'px';

            element.style.setProperty("transform-origin", resultTL)
        });
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>

            {/* Add Helmet component to manage document head */}
            <Helmet>
                {/* Title */}
                <title>Web Designing & Development - Crew Captivators Solutions Pvt. Ltd.</title>
                {/* Meta description */}
                <meta
                    name="description"
                    content="Empower your digital presence with our comprehensive web and app development solutions. From captivating websites to innovative mobile apps, we specialize in creating seamless user experiences that elevate your brand and drive success in the online world."
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
                                        Web designing and development converge to create engaging online experiences, while e-commerce website development focuses on enhancing digital storefronts for efficient transactions and business growth.
                                    </p>
                                    <ul>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Web Designing and Development
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>E-commerce Website Development
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>App Development ( Android & IOS )
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="col-lg-6 pt-4 pt-lg-0"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <p>
                                        Combining expertise in web design and development with specialized e-commerce solutions, alongside proficient Android and iOS app development, we empower businesses with comprehensive digital solutions. From crafting visually stunning websites to building intuitive e-commerce platforms and mobile applications, our services cater to diverse digital needs, ensuring seamless user experiences and sustainable growth.
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
                                <p>Comprehensive digital services including web design, development, e-commerce solutions, and mobile app development for Android and iOS platforms.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="icon">
                                            <i class="fa-regular fa-pen-to-square"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Web Designing</Link>
                                        </h4>
                                        <p className="description">
                                            Crafting visually appealing and user-friendly interfaces to enhance online engagement.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="icon">
                                            <i class="fa-solid fa-laptop-code"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Web Development</Link>
                                        </h4>
                                        <p className="description">
                                            Building robust websites with seamless functionality and optimized performance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">E-commerce Website Development</Link>
                                        </h4>
                                        <p className="description">
                                            Creating tailored online stores for effortless shopping experiences and business expansion.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="icon">
                                            <i class="fa-brands fa-android"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Mobile App Development (Android & iOS)</Link>
                                        </h4>
                                        <p className="description">
                                            Developing versatile mobile applications to reach and engage users on the go.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Services Section */}
                    {/* ======= More Services Section ======= */}


                    <div className='Designing container' >
                        <main className="wrapper">
                            <div className="icon-wrap">
                                <div className='row'>
                                    <div className='col-lg-3 col-md-12'>
                                        {/*Front End Development*/}
                                        <div className="card">
                                            <h2>Front End Development</h2>
                                            <svg className="icon-develop" viewBox="0 0 359.4 338.2">
                                                <linearGradient
                                                    id="XMLID_143_x"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="215.598"
                                                    y1="126.7459"
                                                    x2="110.5261"
                                                    y2="333.7376"
                                                >
                                                    <stop offset="0.1902" style={{ stopColor: "#3498db" }} />
                                                    <stop offset={1} style={{ stopColor: "#3498db" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_108_"
                                                    fill="url(#XMLID_143_x)"
                                                    d="M357.3,182.3c0,120.4-102.9,157.6-193.3,153.5C101.6,333-15.5,259.1,4.5,172.1
		c8.9-38.7,41.1-54.6,71-70.1c50.7-26.3,103.6-81.2,147.9-95.1C303.5-18.1,357.3,64.4,357.3,182.3z"
                                                />
                                                <linearGradient
                                                    id="XMLID_144_x"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="239.8168"
                                                    y1="61.8964"
                                                    x2="235.8169"
                                                    y2="95.2293"
                                                >
                                                    <stop offset="6.016400e-002" style={{ stopColor: "#DB6B86" }} />
                                                    <stop offset="8.596202e-002" style={{ stopColor: "#DC6D87" }} />
                                                    <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_105_"
                                                    className="gear-b hover origin-center"
                                                    fill="url(#XMLID_144_x)"
                                                    d="M274.7,102.6l3-11.6l-8.1-2.1c0.1-1.4,0.1-2.8,0-4.2l7.9-2.4L274,70.9l-7.5,2.3
		c-0.7-1.6-1.6-3.1-2.6-4.6l5.4-5.4l-8.5-8.5l-5.4,5.4c-1.5-1-3-1.9-4.6-2.6l2.3-7.5l-11.5-3.5l-2.4,7.9c-1.4-0.1-2.8-0.1-4.2,0
		l-2.1-8.1l-11.6,3l2,8c-1.8,0.8-3.5,1.8-5.2,2.9l-5.6-5.6l-8.5,8.5l5.6,5.6c-1.1,1.7-2.1,3.4-2.9,5.2l-7.9-2l-3,11.6l8.1,2.1
		c-0.1,1.4-0.1,2.8,0,4.2l-7.9,2.4l3.5,11.5l7.5-2.3c0.7,1.6,1.6,3.1,2.6,4.6l-5.4,5.4l8.5,8.5l5.4-5.4c1.5,1,3,1.9,4.6,2.6l-2.3,7.5
		l11.5,3.5l2.4-7.9c1.4,0.1,2.8,0.1,4.2,0l2.1,8.1l11.6-3l-2-8c1.8-0.8,3.5-1.8,5.2-2.9l5.6,5.6l8.5-8.5l-5.6-5.6
		c1.1-1.7,2.1-3.4,2.9-5.2L274.7,102.6z M228.3,95.7c-4.7-4.7-4.7-12.3,0-17c4.7-4.7,12.3-4.7,17,0c4.7,4.7,4.7,12.3,0,17
		C240.6,100.4,233,100.4,228.3,95.7z"
                                                />
                                                <polygon
                                                    id="XMLID_104_"
                                                    fill="#95235B"
                                                    points="131.1,150.3 143.8,128.2 179.3,146.7 166.8,169.3 "
                                                />
                                                <g id="XMLID_102_">
                                                    <polygon
                                                        id="XMLID_103_"
                                                        fill="#FFFFFF"
                                                        points="204.4,273.3 133.8,273.3 138.6,251.8 199.5,251.8 	"
                                                    />
                                                </g>
                                                <polygon
                                                    id="XMLID_101_"
                                                    fill="#D3D5DB"
                                                    points="209.1,279.3 129.1,279.3 133.8,273.3 204.4,273.3 "
                                                />
                                                <linearGradient
                                                    id="XMLID_145_x"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="129.0644"
                                                    y1="276.319"
                                                    x2="209.0927"
                                                    y2="276.319"
                                                >
                                                    <stop offset="6.016400e-002" style={{ stopColor: "#DB6B86" }} />
                                                    <stop offset="8.596202e-002" style={{ stopColor: "#DC6D87" }} />
                                                    <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                </linearGradient>
                                                <polygon
                                                    id="XMLID_100_"
                                                    fill="url(#XMLID_145_x)"
                                                    points="209.1,279.3 129.1,279.3 133.8,273.3 204.4,273.3 "
                                                />
                                                <rect
                                                    id="XMLID_99_"
                                                    x="128.7"
                                                    y="279.3"
                                                    fill="#FFFFFF"
                                                    width={80}
                                                    height="1.5"
                                                />
                                                <g id="XMLID_96_">
                                                    <path
                                                        id="XMLID_10_"
                                                        fill="#582768"
                                                        d="M274.9,234.3V108.6c0-5.2-4.3-9.5-9.5-9.5H71.9c-5.2,0-9.5,4.3-9.5,9.5v125.7H274.9z"
                                                    />
                                                </g>
                                                <rect
                                                    id="XMLID_95_"
                                                    x="72.1"
                                                    y="107.5"
                                                    fill="#F7EDF5"
                                                    width="193.7"
                                                    height="116.3"
                                                />
                                                <path
                                                    id="XMLID_94_"
                                                    fill="#582768"
                                                    d="M62.4,232.4v10.5c0,5.2,4.3,9.5,9.5,9.5h193.5c5.2,0,9.5-4.3,9.5-9.5v-10.5H62.4z"
                                                />
                                                <rect
                                                    id="XMLID_93_"
                                                    x="62.4"
                                                    y="232.4"
                                                    fill="#FFFFFF"
                                                    width="212.5"
                                                    height="1.1"
                                                />
                                                <g id="XMLID_91_">
                                                    <rect
                                                        id="XMLID_92_"
                                                        x="76.6"
                                                        y="118.1"
                                                        fill="#95235B"
                                                        width="181.3"
                                                        height="73.3"
                                                    />
                                                </g>
                                                <g id="XMLID_89_">
                                                    <linearGradient
                                                        id="XMLID_146_x"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="219.1057"
                                                        y1="165.8271"
                                                        x2="122.106"
                                                        y2="183.827"
                                                    >
                                                        <stop offset="9.016400e-002" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <polygon
                                                        id="XMLID_90_"
                                                        fill="url(#XMLID_146_x)"
                                                        points="257.8,146.9 232.8,153.6 206.8,140.8 180.7,162.4 154.7,173.4 128.7,150.3
			102.6,159.6 76.6,133.7 76.6,217.2 257.8,217.2 	"
                                                    />
                                                </g>
                                                <g id="XMLID_87_" className="hover origin-center">
                                                    <path
                                                        id="XMLID_88_"
                                                        fill="#FFFFFF"
                                                        d="M105.7,159.6c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2c0-1.7,1.4-3.2,3.2-3.2
			C104.3,156.4,105.7,157.9,105.7,159.6z"
                                                    />
                                                    <path
                                                        id="XMLID_76_"
                                                        fill="#EE8C97"
                                                        d="M102.5,163.5c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9
			C106.4,161.8,104.7,163.5,102.5,163.5z M102.5,157.2c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5
			C105,158.3,103.9,157.2,102.5,157.2z"
                                                    />
                                                </g>
                                                <g id="XMLID_85_" className="hover origin-center">
                                                    <path
                                                        id="XMLID_86_"
                                                        fill="#FFFFFF"
                                                        d="M131.5,150.6c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2
			C130.1,147.4,131.5,148.8,131.5,150.6z"
                                                    />
                                                    <path
                                                        id="XMLID_73_"
                                                        fill="#EE8C97"
                                                        d="M128.4,154.5c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9
			C132.2,152.7,130.5,154.5,128.4,154.5z M128.4,148.1c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5
			S129.7,148.1,128.4,148.1z"
                                                    />
                                                </g>
                                                <g id="XMLID_83_" className="hover origin-center">
                                                    <circle id="XMLID_84_" fill="#FFFFFF" cx="154.6" cy="173.6" r="3.2" />
                                                    <path
                                                        id="XMLID_70_"
                                                        fill="#EE8C97"
                                                        d="M154.6,177.5c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9
			C158.4,175.7,156.7,177.5,154.6,177.5z M154.6,171.1c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5
			S155.9,171.1,154.6,171.1z"
                                                    />
                                                </g>
                                                <g id="XMLID_81_">
                                                    <circle id="XMLID_82_" fill="#FFFFFF" cx="180.9" cy="162.3" r="3.2" />
                                                </g>
                                                <path
                                                    id="XMLID_80_"
                                                    fill="#FFFFFF"
                                                    d="M210,141.1c0,1.7-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2
		C208.6,137.9,210,139.3,210,141.1z"
                                                />
                                                <path
                                                    id="XMLID_79_"
                                                    fill="#FFFFFF"
                                                    d="M236.1,153.7c0,1.8-1.4,3.2-3.2,3.2c-1.7,0-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2
		C234.7,150.6,236.1,152,236.1,153.7z"
                                                />
                                                <g id="XMLID_60_">
                                                    <path
                                                        id="XMLID_67_"
                                                        fill="#EE8C97"
                                                        d="M180.9,166.2c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9
			C184.8,164.5,183,166.2,180.9,166.2z M180.9,159.9c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5
			C183.3,161,182.2,159.9,180.9,159.9z"
                                                    />
                                                    <path
                                                        id="XMLID_64_"
                                                        fill="#EE8C97"
                                                        d="M206.8,144.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9
			C210.7,143.2,209,144.9,206.8,144.9z M206.8,138.6c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5
			C209.3,139.7,208.2,138.6,206.8,138.6z"
                                                    />
                                                    <path
                                                        id="XMLID_61_"
                                                        fill="#EE8C97"
                                                        d="M232.9,157.6c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9
			C236.8,155.9,235,157.6,232.9,157.6z M232.9,151.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5
			C235.4,152.4,234.3,151.3,232.9,151.3z"
                                                    />
                                                </g>
                                                <path
                                                    id="XMLID_59_"
                                                    className="star star-1 origin-center"
                                                    fill="#FFFFFF"
                                                    d="M156.5,64.7v3h-3c-1,0-1.9,0.8-1.9,1.9v0.1c0,1,0.8,1.9,1.9,1.9h3v3c0,1,0.8,1.9,1.9,1.9h0.1
		c1,0,1.9-0.8,1.9-1.9v-3h3c1,0,1.9-0.8,1.9-1.9v-0.1c0-1-0.8-1.9-1.9-1.9h-3v-3c0-1-0.8-1.9-1.9-1.9h-0.1
		C157.4,62.8,156.5,63.6,156.5,64.7z"
                                                />
                                                <path
                                                    id="XMLID_58_"
                                                    className="star star-2 origin-center"
                                                    fill="#FFFFFF"
                                                    d="M96.6,271.8v2.8h-2.8c-1,0-1.7,0.8-1.7,1.7v0.1c0,1,0.8,1.7,1.7,1.7h2.8v2.8
		c0,1,0.8,1.7,1.7,1.7h0.1c1,0,1.7-0.8,1.7-1.7v-2.8h2.8c1,0,1.7-0.8,1.7-1.7v-0.1c0-1-0.8-1.7-1.7-1.7h-2.8v-2.8
		c0-1-0.8-1.7-1.7-1.7h-0.1C97.4,270,96.6,270.8,96.6,271.8z"
                                                />
                                                <circle id="XMLID_57_" fill="#FFFFFF" cx="277.7" cy="267.9" r="3.4" />
                                                <g id="XMLID_52_">
                                                    <path
                                                        id="XMLID_56_"
                                                        fill="#FFFFFF"
                                                        d="M185.3,108.2c0,1.8-1.5,3.3-3.3,3.3l0,0c-1.8,0-3.3-1.5-3.3-3.3l0,0c0-1.8,1.5-3.3,3.3-3.3l0,0
			C183.8,104.9,185.3,106.3,185.3,108.2L185.3,108.2z"
                                                    />
                                                    <path
                                                        id="XMLID_53_"
                                                        fill="#B3BAC2"
                                                        d="M182,105.8c1.3,0,2.4,1.1,2.4,2.4c0,1.3-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4
			C179.6,106.8,180.6,105.8,182,105.8 M182,104.9c-1.8,0-3.3,1.5-3.3,3.3c0,1.8,1.5,3.3,3.3,3.3c1.8,0,3.3-1.5,3.3-3.3
			C185.3,106.3,183.8,104.9,182,104.9L182,104.9z"
                                                    />
                                                </g>
                                                <linearGradient
                                                    id="XMLID_147_x"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="195.8642"
                                                    y1="180.5484"
                                                    x2="240.4267"
                                                    y2="180.5484"
                                                >
                                                    <stop offset="6.016400e-002" style={{ stopColor: "#DB6B86" }} />
                                                    <stop offset="8.596202e-002" style={{ stopColor: "#DC6D87" }} />
                                                    <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_49_"
                                                    className="gear-s origin-center"
                                                    fill="url(#XMLID_147_x)"
                                                    d="M196.5,187.5l3.7-1c0.8,2.3,2,4.6,3.7,6.5l-2.7,2.7l0,0l1.7,1.7l0,0l2.7-2.7
		c2,1.7,4.2,3,6.5,3.7l-1,3.7l2.4,0.6l1-3.7c2.4,0.5,4.8,0.5,7.2,0l1,3.7l2.4-0.6l-1-3.7c2.3-0.8,4.6-2,6.5-3.7l2.7,2.7l1.7-1.7
		l-2.7-2.7c1.7-1.9,3-4.2,3.7-6.5l3.7,1l0.6-2.4l-3.7-1c0.5-2.4,0.5-4.8,0-7.2l3.7-1l-0.6-2.4l-3.7,1c-0.8-2.4-2-4.6-3.7-6.5l2.7-2.7
		l0,0l-1.7-1.7l0,0l-2.7,2.7c-2-1.7-4.2-3-6.5-3.7l1-3.7l-2.3-0.6l-1,3.7c-2.4-0.5-4.8-0.5-7.2,0l-1-3.7l-2.3,0.6l1,3.7
		c-2.3,0.8-4.6,2-6.5,3.8l-2.7-2.7l-1.7,1.7l2.7,2.7c-1.7,2-3,4.2-3.8,6.5l-3.7-1l-0.6,2.3l3.7,1c-0.5,2.4-0.5,4.8,0,7.2l-3.7,1
		L196.5,187.5z M209.2,171.6c4.9-5,13-5,17.9,0c4.9,4.9,4.9,13,0,17.9c-5,4.9-13,4.9-17.9,0C204.2,184.6,204.2,176.5,209.2,171.6z"
                                                />
                                                <linearGradient
                                                    id="XMLID_148_x"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="280.25"
                                                    y1="206.6944"
                                                    x2="318.2871"
                                                    y2="206.6944"
                                                >
                                                    <stop offset="9.016400e-002" style={{ stopColor: "#A62257" }} />
                                                    <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                    <stop offset={1} style={{ stopColor: "#582768" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_48_"
                                                    fill="url(#XMLID_148_x)"
                                                    d="M314.7,205.8c0.2-0.8,0.4-1.7,0.4-2.6c0-5.5-4.5-10-10-10c-3.9,0-7.3,2.2-8.9,5.5
		c-0.9-0.6-2-0.9-3.2-0.9c-3.4,0-6.2,2.8-6.2,6.2c0,0.3,0,0.5,0,0.8c-3.6,0.7-6.4,3.8-6.4,7.7c0,1.4,0.4,2.8,1,3.9
		c1.3,2.3,3.9,3.9,6.8,3.9h9.1v-7h-1.7c-1.3,0-1.9-0.6-1.2-1.3l1.1-1.1c0.7-0.7,1.7-1.9,2.4-2.6l1.1-1.1c0.7-0.7,1.7-0.7,2.4,0l1,1.1
		c0.7,0.7,1.7,1.9,2.4,2.6l1,1.1c0.7,0.7,0.1,1.3-1.2,1.3h-1.7v7h7.6l0,0c2.9,0,5.4-1.6,6.8-3.9c0.7-1.2,1.1-2.5,1.1-3.9
		C318.3,209.6,316.8,207.2,314.7,205.8z"
                                                />
                                                <linearGradient
                                                    id="XMLID_149_x"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="23.9795"
                                                    y1="205.087"
                                                    x2="115.4355"
                                                    y2="205.087"
                                                >
                                                    <stop offset="6.016400e-002" style={{ stopColor: "#DB6B86" }} />
                                                    <stop offset="8.596202e-002" style={{ stopColor: "#DC6D87" }} />
                                                    <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_47_"
                                                    fill="url(#XMLID_149_x)"
                                                    d="M24,170v66.4c0,2.1,1.7,3.8,3.8,3.8h83.9c2.1,0,3.8-1.7,3.8-3.8V170H24z"
                                                />
                                                <path
                                                    id="XMLID_46_"
                                                    fill="#582768"
                                                    d="M111.7,160.4H27.8c-2.1,0-3.8,1.7-3.8,3.8v5.8h91.5v-5.8C115.4,162.1,113.7,160.4,111.7,160.4z"
                                                />
                                                <path
                                                    id="XMLID_45_"
                                                    fill="#FFFFFF"
                                                    d="M41.7,166.9L41.7,166.9c-1,0-1.7-0.8-1.7-1.8l0,0c0-1,0.8-1.7,1.7-1.7l0,0c1,0,1.7,0.8,1.7,1.7
		l0,0C43.5,166.2,42.7,166.9,41.7,166.9z"
                                                />
                                                <path
                                                    id="XMLID_44_"
                                                    fill="#FFFFFF"
                                                    d="M36.2,166.9L36.2,166.9c-1,0-1.8-0.8-1.8-1.8l0,0c0-1,0.8-1.7,1.8-1.7l0,0c1,0,1.7,0.8,1.7,1.7
		l0,0C37.9,166.2,37.1,166.9,36.2,166.9z"
                                                />
                                                <path
                                                    id="XMLID_43_"
                                                    fill="#FFFFFF"
                                                    d="M30.2,166.9L30.2,166.9c-1,0-1.8-0.8-1.8-1.8l0,0c0-1,0.8-1.7,1.8-1.7l0,0c1,0,1.7,0.8,1.7,1.7
		l0,0C32,166.2,31.2,166.9,30.2,166.9z"
                                                />
                                                <g id="XMLID_27_">
                                                    <path
                                                        id="XMLID_41_"
                                                        fill="#FFFFFF"
                                                        d="M40,209.6c-1.1,0-2.2-0.9-2.2-2.4v-3.7c0-0.7-0.3-1.2-0.9-1.2v-0.9c0.6,0,0.9-0.6,0.9-1.2v-3.7
			c0-1.5,1.1-2.4,2.2-2.4h1.1v1H40c-0.6,0-1.2,0.6-1.2,1.4v3.8c0,0.8-0.2,1.3-0.8,1.6c0.6,0.3,0.8,0.8,0.8,1.6v3.8
			c0,0.8,0.5,1.4,1.2,1.4h1.1v1H40z"
                                                    />
                                                    <path
                                                        className="code_bracket"
                                                        fill="#FFFFFF"
                                                        d="M98.4,208.6h1.1c0.6,0,1.2-0.6,1.2-1.4v-3.8c0-0.8,0.2-1.3,0.8-1.6c-0.6-0.2-0.8-0.8-0.8-1.6
			v-3.8c0-0.8-0.5-1.4-1.2-1.4h-1.1v-1h1.1c1.1,0,2.2,0.9,2.2,2.4v3.7c0,0.7,0.3,1.2,0.9,1.2v0.9c-0.6,0-0.9,0.6-0.9,1.2v3.7
			c0,1.5-1.1,2.4-2.2,2.4h-1.1V208.6z"
                                                    />
                                                    <g>
                                                        <path
                                                            className="code-letter code-letter_c"
                                                            fill="#FFFFFF"
                                                            d="M43.4,201.8c0-3.8,2.8-6.5,6.4-6.5c2.2,0,3.7,1.1,4.7,2.5l-1.3,0.7c-0.7-1-2-1.8-3.4-1.8
				c-2.7,0-4.8,2.1-4.8,5.1c0,3,2.1,5.1,4.8,5.1c1.4,0,2.7-0.8,3.4-1.8l1.3,0.7c-1,1.4-2.5,2.5-4.7,2.5
				C46.2,208.3,43.4,205.6,43.4,201.8z"
                                                        />
                                                        <path
                                                            className="code-letter hover code-letter_o"
                                                            fill="#FFFFFF"
                                                            d="M56,201.8c0-3.7,2.5-6.5,6.2-6.5c3.7,0,6.2,2.8,6.2,6.5c0,3.7-2.5,6.5-6.2,6.5
				C58.5,208.3,56,205.5,56,201.8z M66.8,201.8c0-2.9-1.8-5.1-4.6-5.1c-2.8,0-4.6,2.2-4.6,5.1c0,2.9,1.8,5.1,4.6,5.1
				C65,206.9,66.8,204.7,66.8,201.8z"
                                                        />
                                                        <path
                                                            className="code-letter hover code-letter_d"
                                                            fill="#FFFFFF"
                                                            d="M70.8,208.1v-12.5h4.3c3.9,0,6.4,2.7,6.4,6.3c0,3.6-2.5,6.2-6.4,6.2H70.8z M79.9,201.8
				c0-2.7-1.7-4.9-4.8-4.9h-2.7v9.7h2.7C78.1,206.7,79.9,204.5,79.9,201.8z"
                                                        />
                                                        <path
                                                            className="code-letter hover code-letter_e"
                                                            fill="#FFFFFF"
                                                            d="M83.9,208.1v-12.5h8.2v1.4h-6.6v4H92v1.4h-6.5v4.3h6.6v1.4H83.9z"
                                                        />
                                                    </g>
                                                </g>
                                                <g id="XMLID_14_">
                                                    <g id="XMLID_24_">
                                                        <path
                                                            id="XMLID_8_"
                                                            fill="#FFFFFF"
                                                            d="M332.7,174.1c0,1.9-1.5,3.4-3.4,3.4H170.5c-1.9,0-3.4-1.5-3.4-3.4V95.8h165.6V174.1z"
                                                        />
                                                    </g>
                                                    <linearGradient
                                                        id="XMLID_150_x"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="167.0975"
                                                        y1="91.4908"
                                                        x2="332.6689"
                                                        y2="91.4908"
                                                    >
                                                        <stop offset="6.016400e-002" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-002" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_23_"
                                                        fill="url(#XMLID_150_x)"
                                                        d="M329.3,87.2H170.5c-1.9,0-3.4,1.5-3.4,3.4v5.2h165.6v-5.2C332.7,88.7,331.1,87.2,329.3,87.2z"
                                                    />
                                                    <path
                                                        id="XMLID_22_"
                                                        fill="#FFFFFF"
                                                        d="M181.3,93.4L181.3,93.4c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6l0,0
			c0.9,0,1.6,0.7,1.6,1.6l0,0C182.9,92.7,182.2,93.4,181.3,93.4z"
                                                    />
                                                    <path
                                                        id="XMLID_21_"
                                                        fill="#FFFFFF"
                                                        d="M176.3,93.4L176.3,93.4c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6l0,0
			c0.9,0,1.6,0.7,1.6,1.6l0,0C177.9,92.7,177.2,93.4,176.3,93.4z"
                                                    />
                                                    <path
                                                        id="XMLID_20_"
                                                        fill="#FFFFFF"
                                                        d="M171,93.4L171,93.4c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6l0,0
			c0.9,0,1.6,0.7,1.6,1.6l0,0C172.6,92.7,171.9,93.4,171,93.4z"
                                                    />
                                                    <g id="XMLID_15_">
                                                        <g id="XMLID_17_">
                                                            <rect
                                                                id="XMLID_19_"
                                                                className="line-b hover origin-left"
                                                                x="185.3"
                                                                y="143.4"
                                                                fill="#F6A0A2"
                                                                width="38.3"
                                                                height="3.3"
                                                            />
                                                            <rect
                                                                id="XMLID_18_"
                                                                className="line-m hover origin-left"
                                                                x="185.3"
                                                                y="133.1"
                                                                fill="#F6A0A2"
                                                                width="72.1"
                                                                height="3.2"
                                                            />
                                                        </g>
                                                        <rect
                                                            id="XMLID_16_"
                                                            className="line-t hover origin-left"
                                                            x="185.3"
                                                            y="122.6"
                                                            fill="#F6A0A2"
                                                            width="72.1"
                                                            height="3.2"
                                                        />
                                                    </g>
                                                </g>
                                                <g id="XMLID_3_">
                                                    <path
                                                        id="XMLID_11_"
                                                        fill="#A52257"
                                                        d="M305,118.4c-0.1-0.2-0.4-0.2-0.5,0l-6.8,11.8h4.3c0.2,0,0.3,0.1,0.3,0.3v23.6
			c0,0.2,0.1,0.3,0.3,0.3h4.3c0.2,0,0.3-0.2,0.3-0.3v-23.6c0-0.2,0.1-0.3,0.3-0.3h4.3L305,118.4z"
                                                    />
                                                    <path
                                                        id="XMLID_4_"
                                                        fill="#A52257"
                                                        d="M287.2,154.3c0.1,0.2,0.4,0.2,0.5,0l6.8-11.8h-4.3c-0.2,0-0.3-0.1-0.3-0.3v-23.6
			c0-0.2-0.2-0.3-0.3-0.3h-4.3c-0.2,0-0.3,0.1-0.3,0.3v23.6c0,0.2-0.1,0.3-0.3,0.3h-4.3L287.2,154.3z"
                                                    />
                                                </g>
                                            </svg>
                                            <Link to="/contact" className='btn-learn-more'>Contact Now</Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12'>
                                        {/*UIUX Design*/}
                                        <div className="card">
                                            <h2>UIUX Design</h2>
                                            <svg className="icon-design" viewBox="0 0 310.4 336">
                                                <linearGradient
                                                    id="XMLID_130_v"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="263.4456"
                                                    y1="-35.5969"
                                                    x2="114.7688"
                                                    y2="254.0336"
                                                    gradientTransform="matrix(1.0458 1.400000e-003 1.400000e-003 1.0425 -7.7523 -18.7189)"
                                                >
                                                    <stop offset="0.1902" style={{ stopColor: "#3498db" }} />
                                                    <stop offset={1} style={{ stopColor: "#3498db" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_94_"
                                                    fill="url(#XMLID_130_v)"
                                                    d="M0.9,119.5C-3.2,65.7,107.4-40.2,185.7,17.8c44.3,32.8,33.5,62.4,70.3,82.8
		c31.3,17.4,55,57.5,51.5,111.9c-3.7,57.6-67.8,106.6-123.4,117.1C107.9,344,56.3,305.4,39.4,280.8c-22.8-33-7.3-51-10.5-81.6
		C24.5,158.6,3.2,149.7,0.9,119.5z"
                                                />
                                                <linearGradient
                                                    id="XMLID_131_v"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="167.3098"
                                                    y1="173.2032"
                                                    x2="273.9668"
                                                    y2="173.2032"
                                                >
                                                    <stop offset="9.016400e-002" style={{ stopColor: "#F38099" }} />
                                                    <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_91_"
                                                    className="ruler-part hover"
                                                    fill="url(#XMLID_131_v)"
                                                    d="M190.4,225l-21.6-21.6c-2-2-2-5.2,0-7.2l74.8-74.8c2-2,5.2-2,7.2,0l21.6,21.6c2,2,2,5.2,0,7.2
		L197.7,225C195.7,227,192.4,227,190.4,225z M256.2,137.6c-1.7-1.7-4.6-1.7-6.3,0c-1.7,1.7-1.7,4.6,0,6.3c1.7,1.7,4.6,1.7,6.3,0
		C258,142.2,258,139.3,256.2,137.6z"
                                                />
                                                <path
                                                    id="XMLID_90_"
                                                    className="ruler-part hover"
                                                    fill="#7f245f"
                                                    d="M173.9,208.5l-5.1-5.1c-2-2-2-5.2,0-7.2l74.8-74.8c2-2,5.2-2,7.2,0l5.1,5.1L173.9,208.5z"
                                                />
                                                <g id="XMLID_65_" className="ruler-part hover">
                                                    <g id="XMLID_88_">
                                                        <polygon
                                                            id="XMLID_89_"
                                                            fill="#F6ECF4"
                                                            points="246.5,130.5 240.5,124.5 241.4,123.6 247.4,129.6 246.5,130.5 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_86_">
                                                        <polygon
                                                            id="XMLID_87_"
                                                            fill="#F6ECF4"
                                                            points="240.3,136.7 234.3,130.7 235.2,129.8 241.2,135.8 240.3,136.7 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_84_">
                                                        <polygon
                                                            id="XMLID_85_"
                                                            fill="#F6ECF4"
                                                            points="234.1,142.9 228.1,136.9 229,136 235,142 234.1,142.9 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_82_">
                                                        <polygon
                                                            id="XMLID_83_"
                                                            fill="#F6ECF4"
                                                            points="227.9,149.1 221.9,143.1 222.8,142.2 228.8,148.2 227.9,149.1 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_80_">
                                                        <polygon
                                                            id="XMLID_81_"
                                                            fill="#F6ECF4"
                                                            points="221.7,155.3 215.7,149.3 216.6,148.4 222.6,154.4 221.7,155.3 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_78_">
                                                        <polygon
                                                            id="XMLID_79_"
                                                            fill="#F6ECF4"
                                                            points="215.5,161.5 209.5,155.5 210.4,154.6 216.4,160.6 215.5,161.5 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_76_">
                                                        <polygon
                                                            id="XMLID_77_"
                                                            fill="#F6ECF4"
                                                            points="209.3,167.7 203.3,161.7 204.2,160.8 210.2,166.8 209.3,167.7 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_74_">
                                                        <polygon
                                                            id="XMLID_75_"
                                                            fill="#F6ECF4"
                                                            points="203.1,173.9 197.1,167.9 198,167 204,173 203.1,173.9 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_72_">
                                                        <polygon
                                                            id="XMLID_73_"
                                                            fill="#F6ECF4"
                                                            points="196.9,180.1 190.9,174.1 191.8,173.2 197.8,179.2 196.9,180.1 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_70_">
                                                        <polygon
                                                            id="XMLID_71_"
                                                            fill="#F6ECF4"
                                                            points="190.7,186.3 184.7,180.3 185.6,179.4 191.6,185.4 190.7,186.3 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_68_">
                                                        <polygon
                                                            id="XMLID_69_"
                                                            fill="#F6ECF4"
                                                            points="184.5,192.5 178.5,186.5 179.4,185.6 185.4,191.6 184.5,192.5 			"
                                                        />
                                                    </g>
                                                    <g id="XMLID_66_">
                                                        <polygon
                                                            id="XMLID_67_"
                                                            fill="#F6ECF4"
                                                            points="178.3,198.7 172.3,192.7 173.2,191.8 179.2,197.8 178.3,198.7 			"
                                                        />
                                                    </g>
                                                </g>
                                                <path
                                                    id="XMLID_64_"
                                                    className="pen-part hover"
                                                    fill="#582768"
                                                    d="M88.9,186.5l-69.1-69.1c4-3.1,9-3.7,12.2-1.3l63.6,63.6L88.9,186.5z"
                                                />
                                                <path
                                                    id="XMLID_63_"
                                                    className="pen-part hover"
                                                    fill="#662666"
                                                    d="M111.7,163.7l-16.1,16.1L32,116.1l0,0c0,0,0-0.1-0.1-0.1c0,0,0.1,0.1,0.1,0.1
		c-2.6-3.6-1.6-9.4,2.5-13.5c4.1-4.1,9.9-5.1,13.5-2.5c0,0,0-0.1-0.1-0.1c0,0,0.1,0,0.1,0.1l0,0L111.7,163.7z"
                                                />
                                                <path
                                                    id="XMLID_62_"
                                                    className="pen-part hover"
                                                    fill="#582768"
                                                    d="M48.1,100c-2.3-3.2-1.8-8.2,1.3-12.2l69.1,69.1l-6.8,6.8L48.1,100z"
                                                />
                                                <path
                                                    id="XMLID_61_"
                                                    className="pen-part hover"
                                                    fill="#FFFFFF"
                                                    d="M49.4,87.8c-3.1,4-3.7,9-1.3,12.2l0,0c0,0-0.1,0-0.1-0.1c0,0,0.1,0.1,0.1,0.1
		c-3.6-2.6-9.4-1.6-13.5,2.5c-4.1,4.1-5.1,9.9-2.5,13.5c0,0-0.1,0-0.1-0.1c0,0,0,0.1,0.1,0.1l0,0c-3.2-2.3-8.2-1.8-12.2,1.3L20,88
		L49.4,87.8z"
                                                />
                                                <path
                                                    id="XMLID_60_"
                                                    className="pen-part hover"
                                                    fill="#662666"
                                                    d="M19.9,102.4L20,88l14.5-0.1c-1.9,2.8-4.1,5.4-6.6,7.9C25.3,98.4,22.7,100.5,19.9,102.4z"
                                                />
                                                <g id="XMLID_56_">
                                                    <rect
                                                        id="XMLID_59_"
                                                        x="91.1"
                                                        y="181.8"
                                                        transform="matrix(-0.707 0.7072 -0.7072 -0.707 295.6422 250.8741)"
                                                        fill="#617591"
                                                        width="9.5"
                                                        height="9.8"
                                                    />
                                                    <polygon
                                                        id="XMLID_58_"
                                                        fill="#91A0BA"
                                                        points="95.8,179.8 111.8,163.8 118.8,170.7 102.7,186.8 		"
                                                    />
                                                    <rect
                                                        id="XMLID_57_"
                                                        x="113.9"
                                                        y={159}
                                                        transform="matrix(-0.7072 0.707 -0.707 -0.7072 318.4447 195.8433)"
                                                        fill="#617591"
                                                        width="9.5"
                                                        height="9.8"
                                                    />
                                                </g>
                                                <g id="XMLID_53_">
                                                    <linearGradient
                                                        id="XMLID_132_v"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="60.2631"
                                                        y1="75.0575"
                                                        x2="151.9815"
                                                        y2="188.016"
                                                    >
                                                        <stop offset="9.016400e-002" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <polygon
                                                        id="XMLID_10_"
                                                        fill="url(#XMLID_132_v)"
                                                        points="181.7,58.4 71.1,58.4 71.1,99.4 71.1,153.4 71.1,263.8 221.4,263.8 221.4,153.4
			221.4,137.7 221.4,98 		"
                                                    />
                                                </g>
                                                <g id="XMLID_50_">
                                                    <defs>
                                                        <polygon
                                                            id="XMLID_51_"
                                                            points="221.4,263.8 221.4,153.4 221.4,98 181.7,58.4 71.1,58.4 71.1,99.4 71.1,153.4 71.1,263.8 			"
                                                        />
                                                    </defs>
                                                    <clipPath id="XMLID_133_">
                                                        <use xlinkHref="#XMLID_51_" style={{ overflow: "visible" }} />
                                                    </clipPath>
                                                    <path
                                                        id="XMLID_52_"
                                                        opacity="0.7"
                                                        clipPath="url(#XMLID_133_)"
                                                        fill="#5A2668"
                                                        d="M50.6,242.3c38.6-40,16.5-19.3,53.6-57.9l-1.7-1.7l7.3-7.3l2,2c2.5-2.5,4.9-5.2,7.1-8.3
			c5.2-7,9.1-14.3,11.6-21.2c7.2,4.4,16.7,5.9,25.1,3.4c3.7-1.1,6.8-3,9.2-5.2l4.2,4.2l-0.1,0.1l-24.1,24.1c-1.6-1-3.5-1.2-4.5-0.1
			c-1.3,1.3-0.9,3.8,1,5.6c1.8,1.8,4.4,2.3,5.6,1c1-1,0.9-2.9-0.1-4.6l24.2-24.1l0.1-0.1l4.2,4.2c-2.3,2.4-4.1,5.4-5.2,9.2
			c-2.5,8.4-1,17.9,3.4,25.1c-6.9,2.4-14.3,6.3-21.2,11.6c-3,2.3-5.8,4.7-8.3,7.2l2,2l-7.3,7.3l-1.7-1.7
			c-38.6,37.2-17.9,15.1-57.9,53.7C55.4,294.4,27,265.9,50.6,242.3z"
                                                    />
                                                </g>
                                                <g id="XMLID_46_">
                                                    <path
                                                        id="XMLID_47_"
                                                        className="circle-part hover"
                                                        fill="#FFFFFF"
                                                        d="M139.8,218L139.8,218c-13.6,0-26.4-5.3-36-14.9c-19.8-19.8-19.8-52.1,0-72
			c9.6-9.6,22.4-14.9,36-14.9c13.6,0,26.4,5.3,36,14.9c19.8,19.8,19.8,52.1,0,72C166.1,212.7,153.4,218,139.8,218L139.8,218z
			 M139.8,118.7c-12.9,0-25.1,5-34.2,14.2c-18.8,18.8-18.8,49.5,0,68.4c9.1,9.1,21.3,14.2,34.2,14.2c12.9,0,25-5,34.2-14.2
			c18.8-18.8,18.8-49.5,0-68.4C164.8,123.8,152.7,118.7,139.8,118.7L139.8,118.7z"
                                                    />
                                                </g>
                                                <g id="XMLID_44_">
                                                    <polygon
                                                        id="XMLID_45_"
                                                        fill="#FFFFFF"
                                                        points="206.1,165.5 141.3,100.8 143.1,98.9 207.9,163.7 206.1,165.5 		"
                                                    />
                                                </g>
                                                <rect
                                                    id="XMLID_43_"
                                                    className="circle-part hover"
                                                    x="100.3"
                                                    y="127.6"
                                                    fill="#9E2158"
                                                    width="9.6"
                                                    height="9.6"
                                                />
                                                <path
                                                    id="XMLID_40_"
                                                    className="circle-part hover"
                                                    fill="#FFFFFF"
                                                    d="M105.1,141l-8.6-8.6l8.6-8.6l8.6,8.6L105.1,141L105.1,141z M100.2,132.4l5,5l5-5l-5-5
		L100.2,132.4L100.2,132.4z"
                                                />
                                                <polygon
                                                    id="XMLID_39_"
                                                    className="circle-part hover"
                                                    fill="#6D2563"
                                                    points="181.2,201.7 174.4,194.9 167.6,201.7 174.4,208.5 	"
                                                />
                                                <path
                                                    id="XMLID_36_"
                                                    className="circle-part hover"
                                                    fill="#FFFFFF"
                                                    d="M174.4,210.3l-8.6-8.6l8.6-8.6l8.6,8.6L174.4,210.3L174.4,210.3z M169.4,201.7l5,5l5-5l-5-5
		L169.4,201.7L169.4,201.7z"
                                                />
                                                <polygon
                                                    id="XMLID_35_"
                                                    className="circle-part hover"
                                                    fill="#6D2563"
                                                    points="181.4,132.2 174.6,125.4 167.8,132.2 174.6,139 	"
                                                />
                                                <path
                                                    id="XMLID_32_"
                                                    className="circle-part hover"
                                                    fill="#FFFFFF"
                                                    d="M174.6,140.8l-8.6-8.6l8.6-8.6l8.6,8.6L174.6,140.8L174.6,140.8z M169.6,132.2l5,5l5-5l-5-5
		L169.6,132.2L169.6,132.2z"
                                                />
                                                <g id="XMLID_27_">
                                                    <polygon
                                                        id="XMLID_31_"
                                                        fill="#FFFFFF"
                                                        points="111.2,202.4 104.4,195.6 97.6,202.4 104.4,209.2 		"
                                                    />
                                                    <path
                                                        id="XMLID_28_"
                                                        fill="#175079"
                                                        d="M104.4,211l-8.6-8.6l8.6-8.6l8.6,8.6L104.4,211L104.4,211z M99.5,202.4l5,5l5-5l-5-5
			L99.5,202.4L99.5,202.4z"
                                                    />
                                                </g>
                                                <polygon
                                                    id="XMLID_26_"
                                                    fill="#802460"
                                                    points="146.8,97.6 140,90.8 133.2,97.6 140,104.4 	"
                                                />
                                                <path
                                                    id="XMLID_23_"
                                                    className="anchor-part anchor-part--1"
                                                    fill="#FFFFFF"
                                                    d="M140,106.2l-8.6-8.6L140,89l8.6,8.6L140,106.2L140,106.2z M135,97.6l5,5l5-5l-5-5L135,97.6
		L135,97.6z"
                                                />
                                                <rect
                                                    id="XMLID_22_"
                                                    x="204.4"
                                                    y={162}
                                                    transform="matrix(0.7069 0.7073 -0.7073 0.7069 179.3371 -99.087)"
                                                    fill="#622666"
                                                    width="9.6"
                                                    height="9.6"
                                                />
                                                <path
                                                    id="XMLID_19_"
                                                    className="anchor-part anchor-part--2"
                                                    fill="#FFFFFF"
                                                    d="M209.2,175.5l-8.6-8.6l8.6-8.6l8.6,8.6L209.2,175.5L209.2,175.5z M204.2,166.8l5,5l5-5l-5-5
		L204.2,166.8L204.2,166.8z"
                                                />
                                                <g id="XMLID_16_">
                                                    <linearGradient
                                                        id="XMLID_134_v"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="34.4768"
                                                        y1="224.0676"
                                                        x2="131.021"
                                                        y2="224.0676"
                                                    >
                                                        <stop offset="6.016400e-002" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-002" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_8_"
                                                        fill="url(#XMLID_134_v)"
                                                        d="M71.8,263.5c-23.6,23.6-52.1-4.8-28.4-28.5c39-40.4,15.9-18.8,54.9-59.2
			c10.9,10.9,21.8,21.8,32.7,32.7C90.6,247.6,112.2,224.4,71.8,263.5z"
                                                    />
                                                </g>
                                                <path
                                                    id="XMLID_15_"
                                                    fill="#FFFFFF"
                                                    d="M80,216.7c-3.7,3.4-9.3,8.9-20.7,20.1c-5.1,5.1-9.7,8.1-13.5,9.4c1.4-3.8,4.4-8.5,9.4-13.5
		c34.5-35.1,14.5-15.9,49-51c1.6,1.6,3.2,3.2,4.7,4.7C85.8,210.1,88.4,207.9,80,216.7z"
                                                />
                                                <linearGradient
                                                    id="XMLID_135_v"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="120.7522"
                                                    y1="199.1821"
                                                    x2="137.1653"
                                                    y2="172.1487"
                                                >
                                                    <stop offset="9.016400e-002" style={{ stopColor: "#ECDBEC" }} />
                                                    <stop offset={1} style={{ stopColor: "#FFFFFF" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_14_"
                                                    fill="url(#XMLID_135_v)"
                                                    d="M148.5,144.1c3.7-1.1,6.8-3,9.2-5.2l4.2,4.2l-0.1,0.1l-24.1,24.1c-1.6-1.1-3.5-1.2-4.5-0.1
		c-1.3,1.3-0.9,3.8,1,5.6c1.8,1.8,4.4,2.3,5.6,1c1-1,0.9-2.9-0.1-4.6l24.1-24.1l0.1-0.1l4.2,4.2c-2.3,2.4-4.1,5.4-5.2,9.2
		c-2.5,8.4-1,17.9,3.4,25.1c-6.9,2.4-14.3,6.3-21.2,11.6c-5,3.8-9.4,7.9-12.9,12.1c-4.4-5.5-9.5-11.2-15.3-17
		c-5.8-5.8-11.5-10.9-17-15.3c4.2-3.5,8.3-7.8,12.1-12.9c5.2-7,9.1-14.3,11.6-21.2C130.6,145.1,140.1,146.6,148.5,144.1z"
                                                />
                                                <polygon
                                                    id="XMLID_13_"
                                                    fill="#CE5C59"
                                                    points="131.4,211.5 95.3,175.5 102.6,168.1 138.6,204.2 	"
                                                />
                                                <polygon
                                                    id="XMLID_12_"
                                                    className="cursor-part hover origin-center"
                                                    fill="#7f245f"
                                                    points="254.1,246.9 221.7,236.3 189.2,225.8 199.8,258.2 210.3,290.7 221.7,268.5 239,285.8
		249.3,275.6 231.9,258.3 	"
                                                />
                                                <polygon
                                                    id="XMLID_11_"
                                                    className="cursor-part hover origin-center"
                                                    fill="#A52257"
                                                    points="221.7,236.3 189.2,225.8 189.6,226.9 243.8,281.1 249.3,275.6 231.9,258.3
		254.1,246.9 	"
                                                />
                                                <linearGradient
                                                    id="XMLID_136_v"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="181.7056"
                                                    y1="78.2178"
                                                    x2="221.3657"
                                                    y2="78.2178"
                                                >
                                                    <stop offset="9.016400e-002" style={{ stopColor: "#A62257" }} />
                                                    <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                    <stop offset={1} style={{ stopColor: "#582768" }} />
                                                </linearGradient>
                                                <polygon
                                                    id="XMLID_9_"
                                                    fill="url(#XMLID_136_v)"
                                                    points="181.7,98 221.4,98 181.7,58.4 	"
                                                />
                                                <path
                                                    className="star star-1 origin-center"
                                                    id="XMLID_5_"
                                                    fill="#FFFFFF"
                                                    d="M152.4,21.6v3h-3c-1,0-1.9,0.8-1.9,1.9v0.1c0,1,0.8,1.9,1.9,1.9h3v3c0,1,0.8,1.9,1.9,1.9h0.1
		c1,0,1.9-0.8,1.9-1.9v-3h3c1,0,1.9-0.8,1.9-1.9v-0.1c0-1-0.8-1.9-1.9-1.9h-3v-3c0-1-0.8-1.9-1.9-1.9h-0.1
		C153.2,19.7,152.4,20.6,152.4,21.6z"
                                                />
                                                <path
                                                    className="star star-2 origin-center"
                                                    id="XMLID_4_"
                                                    fill="#E5D0E6"
                                                    d="M139.6,290.4v2.8h-2.8c-1,0-1.7,0.8-1.7,1.7v0.1c0,1,0.8,1.7,1.7,1.7h2.8v2.8
		c0,1,0.8,1.7,1.7,1.7h0.1c1,0,1.7-0.8,1.7-1.7v-2.8h2.8c1,0,1.7-0.8,1.7-1.7v-0.1c0-1-0.8-1.7-1.7-1.7h-2.8v-2.8
		c0-1-0.8-1.7-1.7-1.7h-0.1C140.3,288.7,139.6,289.5,139.6,290.4z"
                                                />
                                                <circle id="XMLID_3_" fill="#FFFFFF" cx="63.1" cy="42.9" r="3.4" />
                                            </svg>
                                            <Link to="/contact">Contact Now</Link>
                                        </div>
                                    </div>

                                    <div className='col-lg-3 col-md-12'>
                                        {/*Web Applications*/}
                                        <div className="card">
                                            <h2>Web Applications</h2>
                                            <svg className="icon-webApps" viewBox="0 0 364 389.9">
                                                <linearGradient
                                                    id="XMLID_17_k"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="66.8229"
                                                    y1="440.292"
                                                    x2="201.8227"
                                                    y2="103.2921"
                                                    gradientTransform="matrix(1 0 0 -1 0 392)"
                                                >
                                                    <stop offset="0.1902" style={{ stopColor: "#3498db" }} />
                                                    <stop offset={1} style={{ stopColor: "#3498db" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_258_"
                                                    style={{ fill: "url(#XMLID_17_k)" }}
                                                    d="M28.9,101.8C40.1,40.3,193.6-48,263.1,38.4c39.4,49,18.7,79.1,53.3,112
	c29.5,28,44,79.5,24.1,139.5c-21.1,63.5-106.3,100.8-170.8,97.4C81.2,382.7,35.5,325.2,24,293.1c-15.5-43.2-2.7-54.4,2.7-89.6
	C33.8,156.8,22.6,136.2,28.9,101.8z"
                                                />
                                                <path
                                                    className="star star-1 origin-center"
                                                    style={{ fill: "#DCCAE3" }}
                                                    d="M249,332.5v2.5h-2.5c-0.9,0-1.6,0.7-1.6,1.6v0.1c0,0.9,0.7,1.6,1.6,1.6h2.5v2.5
	c0,0.9,0.7,1.6,1.6,1.6h0.1c0.9,0,1.6-0.7,1.6-1.6v-2.5h2.5c0.9,0,1.6-0.7,1.6-1.6v-0.1c0-0.9-0.7-1.6-1.6-1.6h-2.5v-2.5
	c0-0.9-0.7-1.6-1.6-1.6h-0.1C249.7,330.9,249,331.6,249,332.5z"
                                                />
                                                <path
                                                    className="star star-2 origin-center"
                                                    style={{ fill: "#FFFFFF" }}
                                                    d="M162.6,24.8v3.7h-3.7c-1.3,0-2.3,1-2.3,2.3v0.1c0,1.3,1,2.3,2.3,2.3h3.7v3.7
	c0,1.3,1,2.3,2.3,2.3h0.1c1.3,0,2.3-1,2.3-2.3v-3.7h3.7c1.3,0,2.3-1,2.3-2.3v-0.1c0-1.3-1-2.3-2.3-2.3h-3.7v-3.7
	c0-1.3-1-2.3-2.3-2.3h-0.1C163.6,22.5,162.6,23.6,162.6,24.8z"
                                                />
                                                <path
                                                    id="XMLID_254_"
                                                    style={{ fill: "#9E2159" }}
                                                    d="M315.6,304.7c0,1.5-0.6,3-1.7,4.2c-1.2,1.2-2.7,1.7-4.2,1.7h-256
	c-1.5,0-3-0.6-4.2-1.7c-1.2-1.2-1.7-2.7-1.7-4.2v-17.9h267.9L315.6,304.7L315.6,304.7z"
                                                />
                                                <linearGradient
                                                    id="XMLID_18_k"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="194.502"
                                                    y1="95.7618"
                                                    x2="170.2965"
                                                    y2="276.4447"
                                                    gradientTransform="matrix(1 0 0 -1 0 392)"
                                                >
                                                    <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                    <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                    <stop offset={1} style={{ stopColor: "#582768" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_253_"
                                                    style={{ fill: "url(#XMLID_18_k)" }}
                                                    d="M315.6,115.3c0-1.5-0.6-3-1.7-4.2c-1.2-1.2-2.7-1.7-4.2-1.7h-256
	c-1.5,0-3,0.6-4.2,1.7c-1.2,1.2-1.7,2.7-1.7,4.2v171.5h267.9L315.6,115.3L315.6,115.3z"
                                                />
                                                <linearGradient
                                                    id="XMLID_19_k"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="61.1"
                                                    y1="193.95"
                                                    x2="302.2"
                                                    y2="193.95"
                                                    gradientTransform="matrix(1 0 0 -1 0 392)"
                                                >
                                                    <stop offset="0.1902" style={{ stopColor: "#EFDFED" }} />
                                                    <stop offset={1} style={{ stopColor: "#FDF0F6" }} />
                                                </linearGradient>
                                                <rect
                                                    id="XMLID_252_"
                                                    x="61.1"
                                                    y="122.7"
                                                    style={{ fill: "url(#XMLID_19_k)" }}
                                                    width="241.1"
                                                    height="150.7"
                                                />
                                                <polygon
                                                    id="XMLID_119_"
                                                    style={{ opacity: "0.1", fill: "#9E2159", enableBackground: "new" }}
                                                    points="280.9,109.3 82.3,109.3 100.5,273.4
	262.7,273.4 "
                                                />
                                                <g className="ruler hover origin-center">
                                                    <linearGradient
                                                        id="XMLID_20_k"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="3.3"
                                                        y1="169.1"
                                                        x2="359.9"
                                                        y2="169.1"
                                                        gradientTransform="matrix(1 0 0 -1 0 392)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_249_"
                                                        style={{ fill: "url(#XMLID_20_k)" }}
                                                        d="M359.9,240.3v-34.8H3.3v34.8H359.9z M24.6,222.9c0,2.2-1.8,4-4,4
		s-4-1.8-4-4s1.8-4,4-4C22.8,218.8,24.6,220.6,24.6,222.9z"
                                                    />
                                                    <g id="XMLID_120_">
                                                        <g id="XMLID_475_">
                                                            <g id="XMLID_507_">
                                                                <rect
                                                                    id="XMLID_538_"
                                                                    x="8.6"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_537_"
                                                                    x="20.1"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_536_"
                                                                    x="31.6"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_535_"
                                                                    x="43.1"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.9"
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_534_"
                                                                    x="54.6"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_533_"
                                                                    x="66.1"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_532_"
                                                                    x="77.6"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_531_"
                                                                    x="89.1"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_530_"
                                                                    x="100.6"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_529_"
                                                                    x="112.1"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_528_"
                                                                    x="123.6"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_527_"
                                                                    x="135.1"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_526_"
                                                                    x="146.6"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_525_"
                                                                    x="158.1"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_524_"
                                                                    x="169.6"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_523_"
                                                                    x="181.2"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_522_"
                                                                    x="192.7"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_521_"
                                                                    x="204.2"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_520_"
                                                                    x="215.7"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_519_"
                                                                    x="227.2"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.9"
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_518_"
                                                                    x="238.7"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_517_"
                                                                    x="250.2"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_516_"
                                                                    x="261.7"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_515_"
                                                                    x="273.2"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_514_"
                                                                    x="284.7"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_513_"
                                                                    x="296.2"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_512_"
                                                                    x="307.7"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_511_"
                                                                    x="319.2"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_510_"
                                                                    x="330.7"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_509_"
                                                                    x="342.2"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                                <rect
                                                                    id="XMLID_508_"
                                                                    x="353.7"
                                                                    y="235.2"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width={1}
                                                                    height="5.1"
                                                                />
                                                            </g>
                                                            <g id="XMLID_476_">
                                                                <rect
                                                                    id="XMLID_506_"
                                                                    x="14.5"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_505_"
                                                                    x={26}
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_504_"
                                                                    x="37.5"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_503_"
                                                                    x={49}
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_502_"
                                                                    x="60.5"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_501_"
                                                                    x={72}
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_500_"
                                                                    x="83.5"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_499_"
                                                                    x={95}
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_498_"
                                                                    x="106.5"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_497_"
                                                                    x="118.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_496_"
                                                                    x="129.5"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_495_"
                                                                    x={141}
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_494_"
                                                                    x="152.6"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_493_"
                                                                    x="164.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_492_"
                                                                    x="175.6"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_491_"
                                                                    x="187.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_490_"
                                                                    x="198.6"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_489_"
                                                                    x="210.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_488_"
                                                                    x="221.6"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_487_"
                                                                    x="233.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_486_"
                                                                    x="244.6"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_485_"
                                                                    x="256.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_484_"
                                                                    x="267.6"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_483_"
                                                                    x="279.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_482_"
                                                                    x="290.6"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_481_"
                                                                    x="302.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_480_"
                                                                    x="313.6"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_479_"
                                                                    x="325.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_478_"
                                                                    x="336.6"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                                <rect
                                                                    id="XMLID_477_"
                                                                    x="348.1"
                                                                    y="237.7"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    width="0.6"
                                                                    height="2.5"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                                <rect
                                                    id="XMLID_118_"
                                                    x="100.5"
                                                    y="58.5"
                                                    style={{ fill: "#582768" }}
                                                    width="162.2"
                                                    height="214.9"
                                                />
                                                <rect
                                                    id="XMLID_117_"
                                                    x="108.5"
                                                    y="68.7"
                                                    style={{ fill: "#FFFFFF" }}
                                                    width="146.2"
                                                    height="204.7"
                                                />
                                                <linearGradient
                                                    id="XMLID_21_k"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="181.6"
                                                    y1="288.0714"
                                                    x2="181.6"
                                                    y2="207.2943"
                                                    gradientTransform="matrix(1 0 0 -1 0 392)"
                                                >
                                                    <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                    <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                    <stop offset={1} style={{ stopColor: "#582768" }} />
                                                </linearGradient>
                                                <rect
                                                    id="XMLID_116_"
                                                    x="108.5"
                                                    y="117.7"
                                                    style={{ fill: "url(#XMLID_21_k)" }}
                                                    width="146.2"
                                                    height="56.1"
                                                />
                                                <g className="panel hover panel5 origin-center">
                                                    <linearGradient
                                                        id="XMLID_22_k"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="182.2007"
                                                        y1="128.6821"
                                                        x2="180.9038"
                                                        y2="162.3994"
                                                        gradientTransform="matrix(1 0 0 -1 0 392)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <rect
                                                        id="XMLID_115_"
                                                        x="162.9"
                                                        y={236}
                                                        style={{ fill: "url(#XMLID_22_k)" }}
                                                        width="37.4"
                                                        height="23.4"
                                                    />
                                                    <rect
                                                        id="XMLID_114_"
                                                        x="162.9"
                                                        y="259.4"
                                                        style={{ fill: "#9E2159" }}
                                                        width="37.4"
                                                        height="4.3"
                                                    />
                                                </g>
                                                <polygon
                                                    className="play-btn"
                                                    style={{ fill: "#FFFFFF" }}
                                                    points="179.1,244.8 184.2,247.7 179.1,250.6 "
                                                />
                                                <g id="XMLID_98_">
                                                    <g id="XMLID_68_">
                                                        <rect
                                                            id="XMLID_74_"
                                                            x="210.1"
                                                            y={236}
                                                            style={{ fill: "#EE8C97" }}
                                                            width="18.7"
                                                            height="2.4"
                                                        />
                                                        <rect
                                                            id="XMLID_73_"
                                                            x="210.1"
                                                            y="240.6"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="37.4"
                                                            height={1}
                                                        />
                                                        <rect
                                                            id="XMLID_72_"
                                                            x="210.1"
                                                            y="243.8"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="37.4"
                                                            height={1}
                                                        />
                                                        <rect
                                                            id="XMLID_71_"
                                                            x="210.1"
                                                            y={247}
                                                            style={{ fill: "#EE8C97" }}
                                                            width="37.4"
                                                            height={1}
                                                        />
                                                        <rect
                                                            id="XMLID_70_"
                                                            x="210.1"
                                                            y="250.1"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="37.4"
                                                            height={1}
                                                        />
                                                        <rect
                                                            id="XMLID_69_"
                                                            x="219.5"
                                                            y="253.3"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="18.7"
                                                            height={1}
                                                        />
                                                    </g>
                                                </g>
                                                <g id="XMLID_95_">
                                                    <rect
                                                        id="XMLID_97_"
                                                        x="210.1"
                                                        y="259.4"
                                                        style={{ fill: "#9E2159" }}
                                                        width="28.1"
                                                        height="4.3"
                                                    />
                                                    <rect
                                                        id="XMLID_96_"
                                                        x="238.2"
                                                        y="259.4"
                                                        style={{ fill: "#9E2159" }}
                                                        width="9.3"
                                                        height="4.3"
                                                    />
                                                </g>
                                                <g id="XMLID_84_">
                                                    <g id="XMLID_48_">
                                                        <rect
                                                            id="XMLID_52_"
                                                            x="115.7"
                                                            y="253.1"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="37.4"
                                                            height={1}
                                                        />
                                                        <rect
                                                            id="XMLID_51_"
                                                            x="115.7"
                                                            y="256.3"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="37.4"
                                                            height={1}
                                                        />
                                                        <rect
                                                            id="XMLID_50_"
                                                            x="115.7"
                                                            y="259.5"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="37.4"
                                                            height={1}
                                                        />
                                                        <rect
                                                            id="XMLID_49_"
                                                            x="115.7"
                                                            y="262.6"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="23.8"
                                                            height={1}
                                                        />
                                                    </g>
                                                </g>
                                                <g id="XMLID_75_">
                                                    <g id="XMLID_36_">
                                                        <rect
                                                            id="XMLID_39_"
                                                            x="134.2"
                                                            y={236}
                                                            style={{ fill: "#EE8C97" }}
                                                            width="18.9"
                                                            height="2.4"
                                                        />
                                                        <rect
                                                            id="XMLID_38_"
                                                            x="134.2"
                                                            y="240.6"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="18.9"
                                                            height={1}
                                                        />
                                                        <rect
                                                            id="XMLID_37_"
                                                            x="134.2"
                                                            y="243.8"
                                                            style={{ fill: "#EE8C97" }}
                                                            width="11.5"
                                                            height={1}
                                                        />
                                                    </g>
                                                </g>
                                                <rect
                                                    className="panel hover panel4 origin-center"
                                                    x="115.7"
                                                    y={236}
                                                    style={{ fill: "#A42258" }}
                                                    width="14.8"
                                                    height={14}
                                                />
                                                <rect
                                                    id="XMLID_64_"
                                                    x="115.7"
                                                    y="212.3"
                                                    style={{ fill: "#9E2159" }}
                                                    width="37.4"
                                                    height="3.1"
                                                />
                                                <rect
                                                    id="XMLID_63_"
                                                    x="115.7"
                                                    y="218.5"
                                                    style={{ fill: "#EE8C97" }}
                                                    width="37.4"
                                                    height={1}
                                                />
                                                <rect
                                                    id="XMLID_62_"
                                                    x="115.7"
                                                    y="221.9"
                                                    style={{ fill: "#EE8C97" }}
                                                    width="37.4"
                                                    height={1}
                                                />
                                                <rect
                                                    id="XMLID_61_"
                                                    x="126.1"
                                                    y="225.3"
                                                    style={{ fill: "#EE8C97" }}
                                                    width="16.7"
                                                    height={1}
                                                />
                                                <rect
                                                    className="panel hover panel3 origin-center"
                                                    x="115.7"
                                                    y="183.5"
                                                    style={{ fill: "#9E2159" }}
                                                    width="37.4"
                                                    height="22.8"
                                                />
                                                <rect
                                                    id="XMLID_58_"
                                                    x="162.9"
                                                    y="212.3"
                                                    style={{ fill: "#9E2159" }}
                                                    width="37.4"
                                                    height="3.1"
                                                />
                                                <rect
                                                    id="XMLID_57_"
                                                    x="162.9"
                                                    y="218.5"
                                                    style={{ fill: "#EE8C97" }}
                                                    width="37.4"
                                                    height={1}
                                                />
                                                <rect
                                                    id="XMLID_56_"
                                                    x="162.9"
                                                    y="221.9"
                                                    style={{ fill: "#EE8C97" }}
                                                    width="37.4"
                                                    height={1}
                                                />
                                                <rect
                                                    id="XMLID_55_"
                                                    x="173.3"
                                                    y="225.3"
                                                    style={{ fill: "#EE8C97" }}
                                                    width="16.7"
                                                    height={1}
                                                />
                                                <path
                                                    className="pause-btn"
                                                    style={{ fill: "#FFFFFF" }}
                                                    d="M183.2,244.9v5.6h-1v-5.6H183.2z M180.2,244.9v5.6h-1v-5.6H180.2z"
                                                />
                                                <rect
                                                    className="panel hover panel2 origin-center"
                                                    x="162.9"
                                                    y="183.5"
                                                    style={{ fill: "#9E2159" }}
                                                    width="37.4"
                                                    height="22.8"
                                                />
                                                <rect
                                                    id="XMLID_53_"
                                                    x="210.1"
                                                    y="212.3"
                                                    style={{ fill: "#9E2159" }}
                                                    width="37.4"
                                                    height="3.1"
                                                />
                                                <rect
                                                    id="XMLID_47_"
                                                    x="210.1"
                                                    y="218.5"
                                                    style={{ fill: "#EE8C97" }}
                                                    width="37.4"
                                                    height={1}
                                                />
                                                <rect
                                                    id="XMLID_46_"
                                                    x="210.1"
                                                    y="221.9"
                                                    style={{ fill: "#EE8C97" }}
                                                    width="37.4"
                                                    height={1}
                                                />
                                                <rect
                                                    id="XMLID_45_"
                                                    x="220.5"
                                                    y="225.3"
                                                    style={{ fill: "#EE8C97" }}
                                                    width="16.7"
                                                    height={1}
                                                />
                                                <rect
                                                    className="panel hover panel1 origin-center"
                                                    x="210.1"
                                                    y="183.5"
                                                    style={{ fill: "#582768" }}
                                                    width="37.4"
                                                    height="22.8"
                                                />
                                                <linearGradient
                                                    id="XMLID_23_k"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="115.7"
                                                    y1="298.15"
                                                    x2="231.6"
                                                    y2="298.15"
                                                    gradientTransform="matrix(1 0 0 -1 0 392)"
                                                >
                                                    <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                    <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                    <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                </linearGradient>
                                                <rect
                                                    id="XMLID_43_"
                                                    x="115.7"
                                                    y="88.8"
                                                    style={{ fill: "url(#XMLID_23_k)" }}
                                                    width="115.9"
                                                    height="10.1"
                                                />
                                                <rect
                                                    id="XMLID_41_"
                                                    x="191.7"
                                                    y="91.5"
                                                    style={{ fill: "#FFFFFF" }}
                                                    width="37.2"
                                                    height="4.7"
                                                />
                                                <rect
                                                    id="XMLID_40_"
                                                    x="231.6"
                                                    y="88.8"
                                                    style={{ fill: "#582768" }}
                                                    width="15.9"
                                                    height="10.1"
                                                />
                                                <g className="blink">
                                                    <rect
                                                        id="XMLID_35_"
                                                        x={119}
                                                        y="93.3"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="10.3"
                                                        height="1.2"
                                                    />
                                                    <rect
                                                        className="blink1"
                                                        id="XMLID_30_"
                                                        x="132.6"
                                                        y="93.3"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="10.3"
                                                        height="1.2"
                                                    />
                                                    <rect
                                                        className="blink2"
                                                        id="XMLID_29_"
                                                        x="146.2"
                                                        y="93.3"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="10.3"
                                                        height="1.2"
                                                    />
                                                    <rect
                                                        className="blink3"
                                                        id="XMLID_28_"
                                                        x="159.7"
                                                        y="93.3"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="10.3"
                                                        height="1.2"
                                                    />
                                                </g>
                                                <rect
                                                    id="XMLID_24_"
                                                    x="100.5"
                                                    y="58.5"
                                                    style={{ fill: "#582768" }}
                                                    width="162.2"
                                                    height="10.1"
                                                />
                                                <g id="XMLID_15_">
                                                    <g id="XMLID_31_">
                                                        <rect
                                                            id="XMLID_34_"
                                                            x="108.5"
                                                            y="62.9"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="34.9"
                                                            height="1.4"
                                                        />
                                                        <rect
                                                            id="XMLID_33_"
                                                            x="159.3"
                                                            y="62.9"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="9.6"
                                                            height="1.4"
                                                        />
                                                        <rect
                                                            id="XMLID_32_"
                                                            x={172}
                                                            y="62.9"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="9.6"
                                                            height="1.4"
                                                        />
                                                    </g>
                                                </g>
                                                <rect
                                                    id="XMLID_14_"
                                                    x="209.4"
                                                    y="61.9"
                                                    style={{ fill: "#FFFFFF" }}
                                                    width="15.9"
                                                    height="3.4"
                                                />
                                                <rect
                                                    id="XMLID_13_"
                                                    x="227.8"
                                                    y="61.9"
                                                    style={{ fill: "#FFFFFF" }}
                                                    width="15.9"
                                                    height="3.4"
                                                />
                                                <rect
                                                    id="XMLID_12_"
                                                    x="246.1"
                                                    y="61.9"
                                                    style={{ fill: "#FFFFFF" }}
                                                    width="8.6"
                                                    height="3.4"
                                                />
                                                <rect
                                                    id="XMLID_11_"
                                                    x="46.4"
                                                    y="286.3"
                                                    style={{ fill: "#FFFFFF" }}
                                                    width="269.2"
                                                    height="1.1"
                                                />
                                                <g id="XMLID_9_">
                                                    <polygon
                                                        id="XMLID_10_"
                                                        style={{ fill: "#E9D7E9" }}
                                                        points="212.9,331.5 145.7,331.5 150.3,311 208.3,311 	"
                                                    />
                                                </g>
                                                <polygon
                                                    id="XMLID_8_"
                                                    style={{ fill: "#D3D5DB" }}
                                                    points="217.4,337.3 141.2,337.3 145.7,331.5 212.9,331.5 "
                                                />
                                                <linearGradient
                                                    id="XMLID_25_k"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="141.2"
                                                    y1="57.6"
                                                    x2="217.4"
                                                    y2="57.6"
                                                    gradientTransform="matrix(1 0 0 -1 0 392)"
                                                >
                                                    <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                    <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                    <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                </linearGradient>
                                                <polygon
                                                    id="XMLID_7_"
                                                    style={{ fill: "url(#XMLID_25_k)" }}
                                                    points="217.4,337.3 141.2,337.3 145.7,331.5 212.9,331.5 "
                                                />
                                                <rect
                                                    id="XMLID_6_"
                                                    x="140.8"
                                                    y="337.3"
                                                    style={{ fill: "#582768" }}
                                                    width="76.2"
                                                    height="1.5"
                                                />
                                                <g>
                                                    <rect
                                                        className="line hover line-1"
                                                        id="XMLID_5_"
                                                        x="161.8"
                                                        y="156.6"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="39.6"
                                                        height="3.4"
                                                    />
                                                    <rect
                                                        className="line hover line-2"
                                                        id="XMLID_4_"
                                                        x="144.3"
                                                        y="145.9"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="74.7"
                                                        height="3.4"
                                                    />
                                                    <rect
                                                        className="line hover line-3"
                                                        id="XMLID_3_"
                                                        x="144.3"
                                                        y={135}
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="74.7"
                                                        height="3.4"
                                                    />
                                                </g>
                                            </svg>
                                            <Link to="/contact">Contact Now</Link>
                                        </div>
                                    </div>

                                    <div className='col-lg-3 col-md-12'>
                                        {/*ECommerce*/}
                                        <div className="card">
                                            <h2>eCommerce Stores</h2>
                                            <svg className="icon-eComm" viewBox="0 0 446.1 365.5">
                                                <linearGradient
                                                    id="XMLID_2_n"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="222.6759"
                                                    y1="400.9323"
                                                    x2="222.6759"
                                                    y2="162.0416"
                                                    gradientTransform="matrix(1 0 0 -1 0 368)"
                                                >
                                                    <stop offset="0.1902" style={{ stopColor: "#3498db" }} />
                                                    <stop offset={1} style={{ stopColor: "#3498db" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_210_"
                                                    style={{ fill: "url(#XMLID_2_n)" }}
                                                    d="M6.8,188.1C-6.6,157,11.5,102.8,60.4,53.7C114.1-0.2,185.8-5.9,257,12.1
    c18.2,4.6,36.5,12.5,55.5,14c14.5,1.1,25.9-6.3,37.2-6.5c25.2-0.3,45.3,16,50,39c4.4,21.7-9.7,45.8-8.4,68
    c1.6,27.4,17.3,48.3,31.1,71c64.2,106-30.2,204.4-181,145.8c-75.1-29.2-149.8,20.2-167.2-21.6c-11.4-27.5-1.6-48.1-7.9-74.8
    C60.5,222.8,25.4,231.3,6.8,188.1z"
                                                />
                                                <path
                                                    className="star star-1 origin-center"
                                                    style={{ fill: "#E5D0E6" }}
                                                    d="M104.6,307.2v2.7H102c-0.9,0-1.7,0.7-1.7,1.7v0.1c0,0.9,0.7,1.7,1.7,1.7h2.7v2.7
    c0,0.9,0.7,1.7,1.7,1.7h0.1c0.9,0,1.7-0.7,1.7-1.7v-2.7h2.7c0.9,0,1.7-0.7,1.7-1.7v-0.1c0-0.9-0.7-1.7-1.7-1.7H108v-2.7
    c0-0.9-0.7-1.7-1.7-1.7h-0.1C105.4,305.5,104.6,306.3,104.6,307.2z"
                                                />
                                                <path
                                                    className="star star-2 origin-center"
                                                    style={{ fill: "#EFDFED" }}
                                                    d="M389.9,195v3.9H386c-1.3,0-2.4,1.1-2.4,2.4v0.1c0,1.3,1.1,2.4,2.4,2.4h3.9v3.9
    c0,1.4,1.1,2.4,2.4,2.4h0.1c1.4,0,2.4-1.1,2.4-2.4v-3.9h3.9c1.3,0,2.4-1.1,2.4-2.4v-0.1c0-1.4-1.1-2.4-2.4-2.4h-3.9V195
    c0-1.4-1.1-2.4-2.4-2.4h-0.1C391,192.5,389.9,193.6,389.9,195z"
                                                />
                                                <circle
                                                    id="XMLID_207_"
                                                    style={{ fill: "#EFDFED" }}
                                                    cx={243}
                                                    cy="43.8"
                                                    r="4.5"
                                                />
                                                <path
                                                    id="XMLID_206_"
                                                    style={{ opacity: "0.4", fill: "#F1909A", enableBackground: "new" }}
                                                    d="M225.5,223.3c0,37-30,66.9-66.9,66.9
    c-37,0-66.9-30-66.9-66.9c0-37,30-66.9,66.9-66.9C195.5,156.4,225.5,186.4,225.5,223.3z"
                                                />
                                                <linearGradient
                                                    id="XMLID_3_n"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="125.4"
                                                    y1="191.55"
                                                    x2={337}
                                                    y2="191.55"
                                                    gradientTransform="matrix(1 0 0 -1 0 368)"
                                                >
                                                    <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                    <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                    <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_205_"
                                                    style={{ fill: "url(#XMLID_3_n)" }}
                                                    d="M337,176.5c0,58.4-47.3,105.7-105.8,105.7c-58.4,0-105.8-47.3-105.8-105.7
    S172.7,70.7,231.2,70.7C289.6,70.8,337,118.1,337,176.5z"
                                                />
                                                <ellipse
                                                    id="XMLID_204_"
                                                    style={{ opacity: "0.3", fill: "#ADBADF", enableBackground: "new" }}
                                                    cx={293}
                                                    cy="300.8"
                                                    rx="38.9"
                                                    ry={4}
                                                />
                                                <circle
                                                    id="XMLID_197_"
                                                    style={{ opacity: "0.3", fill: "#FFFFFF", enableBackground: "new" }}
                                                    cx="197.9"
                                                    cy="146.7"
                                                    r="8.7"
                                                />
                                                <g className="phone">
                                                    <ellipse
                                                        id="phone-shadow"
                                                        style={{ opacity: "0.3", fill: "#DBA6AC", enableBackground: "new" }}
                                                        cx="317.1"
                                                        cy="316.1"
                                                        rx="21.3"
                                                        ry="2.4"
                                                    />
                                                    <path
                                                        id="XMLID_196_"
                                                        style={{ fill: "#582768" }}
                                                        d="M369.6,287.2c0,3-1,3.8-5.4,5.4s-6.8,2.5-6.8,2.5c-3,0-5.4-2.4-5.4-5.4V57.5
c0-3,2.4-5.5,5.4-5.5c0,0,2.1-0.2,5.8,0.8c3.7,1.1,5.9,3,5.9,6L369.6,287.2z"
                                                    />
                                                    <path
                                                        id="XMLID_192_"
                                                        style={{ opacity: "0.2", fill: "#FFFFFF", enableBackground: "new" }}
                                                        d="M279.5,72l1.6,139.3l74.2-162
c-0.1-0.3-0.1-0.6-0.2-0.9l-71.4,18.7C281.4,67.1,279.5,69.3,279.5,72z"
                                                    />
                                                    <path
                                                        id="XMLID_191_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M351.4,252.9c0,2-1.7,3.6-3.8,3.6l-54.3-13.3c-2.1,0-3.8-1.6-3.8-3.6l-3-148.1
c0-2,1.7-3.6,3.8-3.6l57.4-13.7c2.1,0,3.8,1.6,3.8,3.6v175.1H351.4z"
                                                    />
                                                    <path
                                                        id="XMLID_195_"
                                                        style={{ fill: "#582768" }}
                                                        d="M360.7,290.4c0,2.7-1.9,4.8-4.3,4.8l-70-24.2c-2.3,0-4.3-2.2-4.3-4.8L280,75.8
c0-2.7,1.9-4.8,4.3-4.8l72.2-18.9c2.3,0,4.3,2.2,4.3,4.8L360.7,290.4L360.7,290.4z"
                                                    />
                                                    <path
                                                        id="XMLID_194_"
                                                        style={{ fill: "#582768" }}
                                                        d="M369,283.3c0,3-1,3.8-5.4,5.4s-6.8,2.5-6.8,2.5c-3,0-5.4-2.4-5.4-5.4V53.7
c0-3,2.4-5.4,5.4-5.4c0,0,2.1-0.2,5.8,0.8c3.7,1.1,5.9,3,5.9,6L369,283.3z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_19_n"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="318.7369"
                                                        y1="168.6587"
                                                        x2="327.4222"
                                                        y2="318.9295"
                                                        gradientTransform="matrix(1 0 0 -1 0 368)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_193_"
                                                        style={{ fill: "url(#XMLID_19_n)" }}
                                                        d="M360.2,286.6c0,2.7-1.9,4.8-4.3,4.8l-70-24.2c-2.3,0-4.3-2.2-4.3-4.8
L279.5,72c0-2.7,1.9-4.8,4.3-4.8L356,48.3c2.3,0,4.3,2.2,4.3,4.8L360.2,286.6L360.2,286.6z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_20_n"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="330.042"
                                                        y1="172.376"
                                                        x2="308.8882"
                                                        y2="254.2337"
                                                        gradientTransform="matrix(1 0 0 -1 0 368)"
                                                    >
                                                        <stop offset="0.1902" style={{ stopColor: "#EFDFED" }} />
                                                        <stop offset={1} style={{ stopColor: "#FDF0F6" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_190_"
                                                        style={{ fill: "url(#XMLID_20_n)" }}
                                                        d="M351.4,252.9c0,2-1.7,3.6-3.8,3.6l-54.3-13.3c-2.1,0-3.8-1.6-3.8-3.6
l-3-148.1c0-2,1.7-3.6,3.8-3.6l57.4-13.7c2.1,0,3.8,1.6,3.8,3.6v175.1H351.4z"
                                                    />
                                                </g>
                                                <g className="bag-bb hover">
                                                    <polygon
                                                        id="XMLID_177_"
                                                        style={{ fill: "#461E56" }}
                                                        points="265,202.4 277.3,305 264.3,313.3 "
                                                    />
                                                    <polygon
                                                        id="XMLID_174_"
                                                        style={{ fill: "#F0929A" }}
                                                        points="264.3,313.3 174.2,315.8 172.5,206.3 265,202.4 "
                                                    />
                                                </g>
                                                <path
                                                    id="XMLID_173_"
                                                    style={{ fill: "#E4ECF0" }}
                                                    d="M244.5,217.2c0,1.2-1,2.1-2.3,2.2c-1.3,0-2.3-0.9-2.4-2c0-1.2,1-2.1,2.3-2.2
    C243.4,215.1,244.5,216.1,244.5,217.2z"
                                                />
                                                <path
                                                    id="XMLID_172_"
                                                    style={{ fill: "#E4ECF0" }}
                                                    d="M194.4,218.8c0,1.2-1,2.1-2.2,2.2c-1.3,0-2.3-0.9-2.3-2c0-1.2,1-2.1,2.2-2.2
    C193.3,216.7,194.4,217.6,194.4,218.8z"
                                                />
                                                <g className="bag-b hover">
                                                    <polygon
                                                        id="XMLID_165_"
                                                        style={{ fill: "#461E56" }}
                                                        points="219.7,323.2 228.5,315.7 234.7,319.9 	"
                                                    />
                                                    <path
                                                        id="XMLID_170_"
                                                        style={{ fill: "#0D1438" }}
                                                        d="M243,217.2c0-0.1,0-0.2,0-0.4c-0.1-5.1-1.9-39.3-26.1-39.3c-5,0-9.3,1.5-12.9,4.5
c-11.7,9.6-12.4,31.5-12.4,35.8c0,0.1-0.1,0.5-0.1,0.6c0,0.3,0.3,0.5,0.7,0.5c0.3,0,0.6-0.2,0.6-0.5h0.1c0,0,0-0.2,0-0.4
c0-3.4,0.6-25.9,12.1-35.3c3.4-2.8,7.4-4.1,12-4.1c23,0,24.8,34.2,24.9,38.4c0,0.1,0,0.4,0,0.4c0.1,0.3,0.3,0.5,0.7,0.4
c0.3,0,0.5-0.2,0.6-0.4C243,217.3,243,217.2,243,217.2z"
                                                    />
                                                    <polygon
                                                        id="XMLID_169_"
                                                        style={{ fill: "#461E56" }}
                                                        points="259.2,219.5 234.7,319.9 219.7,323.2 	"
                                                    />
                                                    <polygon
                                                        id="XMLID_168_"
                                                        style={{ fill: "#582768" }}
                                                        points="219.7,323.2 134.4,293.8 171.3,190.7 259.2,219.5 	"
                                                    />
                                                    <path
                                                        id="XMLID_167_"
                                                        style={{ fill: "#E4ECF0" }}
                                                        d="M234.8,226.2c-0.4,1.1-1.7,1.7-2.9,1.2c-1.2-0.4-1.9-1.6-1.5-2.7
c0.4-1.1,1.7-1.7,2.9-1.2C234.5,223.9,235.2,225.1,234.8,226.2z"
                                                    />
                                                    <path
                                                        id="XMLID_166_"
                                                        style={{ fill: "#E4ECF0" }}
                                                        d="M187.3,210.1c-0.4,1.1-1.6,1.7-2.8,1.3s-1.8-1.6-1.5-2.7c0.4-1.1,1.6-1.7,2.8-1.3
C187.1,207.8,187.7,209,187.3,210.1z"
                                                    />
                                                    <path
                                                        id="XMLID_164_"
                                                        style={{ fill: "#0D1438" }}
                                                        d="M233.5,225.7c0-0.1,0.1-0.2,0.1-0.4c1.7-4.8,12-37.4-10.7-46
c-4.6-1.8-9.2-1.9-13.7-0.4c-14.3,4.9-22.7,25.2-24.2,29.1c0,0.1-0.3,0.5-0.3,0.5c-0.1,0.3,0.1,0.6,0.4,0.7c0.3,0.1,0.6,0,0.7-0.2
h0.1c0,0,0.1-0.2,0.2-0.4c1.2-3.2,9.7-24,23.7-28.8c4.1-1.4,8.4-1.3,12.7,0.3c21.5,8.1,11.2,40.7,9.8,44.7c0,0.1-0.1,0.3-0.1,0.4
c0,0.3,0.2,0.5,0.5,0.6s0.6,0,0.7-0.2C233.4,225.8,233.5,225.7,233.5,225.7z"
                                                    />
                                                </g>
                                                <path
                                                    id="XMLID_143_"
                                                    style={{ fill: "#2E3154" }}
                                                    d="M249.6,204.3c-0.4-0.6-1.3-2.3-1.6-2.9c0,0.7,0.1,1.2-0.1,1.3
    c0.4,0.8,0.9,1.5,1.2,1.9c0.4,0.6,0.9,1.2,1.4,1.8c0.2-0.1,0.3-0.3,0.4-0.5C250.5,205.5,250,204.9,249.6,204.3z"
                                                />
                                                <g className="bag-f hover">
                                                    <linearGradient
                                                        id="XMLID_22_n"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="223.6153"
                                                        y1="62.2222"
                                                        x2="242.7253"
                                                        y2="202.0702"
                                                        gradientTransform="matrix(1 0 0 -1 0 368)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <polygon
                                                        id="XMLID_160_"
                                                        style={{ fill: "url(#XMLID_22_n)" }}
                                                        points="282.4,301.3 193.2,313.8 179.2,205.1 270.7,191 	"
                                                    />
                                                    <polygon
                                                        id="XMLID_161_"
                                                        style={{ fill: "#582768" }}
                                                        points="270.7,191 294.4,291.6 282.4,301.3 "
                                                    />
                                                    <polygon
                                                        id="XMLID_155_"
                                                        style={{ fill: "#582768" }}
                                                        points="282.4,301.3 286.9,290.6 294.4,291.6 "
                                                    />
                                                    <ellipse
                                                        id="XMLID_158_"
                                                        transform="matrix(0.9904 -0.1383 0.1383 0.9904 -27.8799 29.7581)"
                                                        style={{ fill: "#E4ECF0" }}
                                                        cx="200.2"
                                                        cy="215.5"
                                                        rx="2.3"
                                                        ry="2.1"
                                                    />
                                                    <circle
                                                        id="XMLID_111_"
                                                        style={{ opacity: "0.3", fill: "#EF8F99", enableBackground: "new" }}
                                                        cx="231.4"
                                                        cy="254.9"
                                                        r="22.6"
                                                    />
                                                    <path
                                                        id="XMLID_159_"
                                                        style={{ fill: "#E4ECF0" }}
                                                        d="M252,208c0.2,1.2-0.7,2.2-2,2.4s-2.4-0.6-2.6-1.8c-0.2-1.2,0.7-2.2,2-2.4
C250.7,206.1,251.9,206.9,252,208z"
                                                    />
                                                    <path
                                                        id="XMLID_144_"
                                                        style={{ fill: "#0D1438" }}
                                                        d="M250.6,208.1c0-0.1,0-0.2-0.1-0.4c-0.7-5.1-6.2-38.8-30.4-36.2
c-4.9,0.5-9.1,2.5-12.3,5.9c-10.6,10.8-8.8,32.7-8.4,36.9c0,0.1,0,0.5,0,0.6c0,0.3,0.4,0.5,0.7,0.4c0.3,0,0.6-0.3,0.6-0.5h0.1
c0,0,0-0.2,0-0.4c-0.4-3.4-2.3-25.8,8.1-36.4c3-3.1,6.9-4.9,11.4-5.5c22.9-2.5,28.4,31.2,29,35.4c0,0.1,0,0.4,0.1,0.4
c0.1,0.3,0.4,0.4,0.7,0.4s0.5-0.2,0.6-0.5C250.6,208.3,250.6,208.1,250.6,208.1z"
                                                    />
                                                </g>
                                                <g className="bag-f--tag hover">
                                                    <path
                                                        id="XMLID_152_"
                                                        style={{ fill: "#C3CFCE" }}
                                                        d="M257.6,205.6l-5.9,6.2l0.2,6.3l16,15.4l6.7-7l-1.3-12l-9.3-9L257.6,205.6z
   M258,210.5c-0.5,0.5-1.3,0.5-1.8,0s-0.5-1.3,0-1.8s1.3-0.5,1.8,0C258.4,209.2,258.4,210,258,210.5z"
                                                    />
                                                    <path
                                                        id="XMLID_149_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M257.8,204.6l-5.9,6.2l0.2,6.3l16,15.4l12.1-12.6l-16-15.4L257.8,204.6z
   M257.5,210.2c-0.3,0.3-0.8,0.3-1.1,0c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0C257.8,209.4,257.8,209.9,257.5,210.2z"
                                                    />
                                                    <path
                                                        id="XMLID_146_"
                                                        style={{ fill: "#3E3A43" }}
                                                        d="M255.8,208.6c-0.6,0.6-0.6,1.6,0,2.3c0.6,0.6,1.6,0.6,2.3,0c0.6-0.6,0.6-1.6,0-2.3
  C257.4,207.9,256.4,207.9,255.8,208.6z M257.5,210.2c-0.3,0.3-0.8,0.3-1.1,0c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0
  C257.8,209.4,257.8,209.9,257.5,210.2z"
                                                    />
                                                    <path
                                                        id="XMLID_103_"
                                                        style={{ fill: "#C3CFCE" }}
                                                        d="M256.1,208.9c-0.4,0.5-0.4,1.2,0,1.6c0.4,0.4,1.2,0.4,1.6,0s0.4-1.2,0-1.6
  C257.2,208.4,256.5,208.5,256.1,208.9z M257.4,210.6c-0.3,0.3-0.8,0.3-1.1,0c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0
  S257.7,210.3,257.4,210.6z"
                                                    />
                                                    <path
                                                        id="XMLID_145_"
                                                        style={{ fill: "#2E3154" }}
                                                        d="M247.5,199.1l-0.3-0.1l-0.1,0.3c-0.6,1.4,1.2,4.2,2,5.4c1.1,1.6,2.6,3.5,4.2,4.7
  l0.5-0.6c-1.3-1-2.7-2.5-4.1-4.5c-1.3-1.9-2-3.5-2-4.4c1.8,0.9,9.8,5.4,9,9.2c-0.1,0.3-0.3,0.7-0.4,0.8c0,0.1,0,0.1,0.1,0.2
  c0.1,0.2,0.2,0.3,0.3,0.2c0.3-0.2,0.5-0.5,0.6-1.1C258.2,204.5,247.9,199.3,247.5,199.1z"
                                                    />
                                                </g>
                                                <g className="hand hover">
                                                    <path
                                                        id="XMLID_181_"
                                                        style={{ fill: "#C6966D" }}
                                                        d="M212.7,192.7c4.2-1.1,8.5-8.2,13.9-9.9c0,0-1.2-1.9-4.6-1.4
c-3.4,0.4-4.7,2.5-6.2,3.6L212.7,192.7z"
                                                    />
                                                    <path
                                                        id="XMLID_178_"
                                                        style={{ fill: "#C6966D" }}
                                                        d="M205.6,189.5c4.2-1.1,8.6-8.2,13.9-9.9c0,0-1.2-1.9-4.6-1.4
c-3.4,0.4-4.7,2.5-6.2,3.6L205.6,189.5z"
                                                    />
                                                    <path
                                                        id="XMLID_187_"
                                                        style={{ fill: "#EA9A7E" }}
                                                        d="M232.3,193.8c3.7-2,4-7,8.7-9.9c0,0-0.9-1.3-1.3-2c-3,1.3-4.2,3-5.5,4.4
L232.3,193.8z"
                                                    />
                                                    <path
                                                        id="XMLID_184_"
                                                        style={{ fill: "#EA9A7E" }}
                                                        d="M220.9,194.7c4.3-1.1,8.9-8.4,14.4-10.2c0,0-1.2-1.9-4.7-1.4
c-3.4,0.5-4.9,2.6-6.4,3.7L220.9,194.7z"
                                                    />
                                                    <path
                                                        id="XMLID_140_"
                                                        style={{ fill: "#F4B29C" }}
                                                        d="M327.6,130.5l-92.9,13.7c-7.3,2-15.4,14.5-17.2,17.8l-14,20.8c0,0-2.8,4.8,0.9,6.5
c2.8,1.2,4.9-3.9,7-6.6c2.1-2.8,7-10.8,7-10.8s-5.5,11.2-6.8,13.8c-1.4,2.6-2.3,5.5,0.2,6.7c1.6,1,3.7-0.8,5.6-3.3
c1.9-2.6,9.2-15.6,9.2-15.6s-5.6,11.4-6.3,13.9s-2,5.5-0.1,6.9s4.9-2.3,6-4.1s8-13.8,8-13.8s-2.7,8.1-3.8,11.1s-0.6,6.4,1.2,6.6
c2.7,0.2,3.5-2.2,3.5-2.2c2.8-6.2,2.1-6.8,7.3-21.7c1.1-3.1,2.3-10.8,8.2-10.9c12.8-1.5,63.2,2.7,75.9,1.6v-0.1
c0.1,0,0.2,0.1,0.4,0.1c2.6,0,4.7-6.9,4.7-15.3C331.6,137.9,329.9,131.6,327.6,130.5z"
                                                    />
                                                    <g id="XMLID_127_">
                                                        <g id="XMLID_229_">
                                                            <g id="XMLID_232_">
                                                                <path
                                                                    id="XMLID_233_"
                                                                    style={{ fill: "#EA9A7E" }}
                                                                    d="M218.2,172.5c-0.1,0.2-0.3,0.6-0.4,0.9L218.2,172.5
      C218.3,172.5,218.3,172.5,218.2,172.5z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_230_">
                                                                <path
                                                                    id="XMLID_231_"
                                                                    style={{ fill: "#EA9A7E" }}
                                                                    d="M215,175.5c-1.4,2.4-6.7,10.5-9,13.9c2.1-0.7,4.7-3.8,6.3-6.2
      c2.1-3,4.7-8.9,5.9-10.7C217.7,172.5,216.4,172.9,215,175.5z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <path
                                                        id="XMLID_124_"
                                                        style={{ fill: "#EA9A7E" }}
                                                        d="M222.5,177.6c-1.5,2.6-6.2,12.3-9.7,15.1c1.4,0,3.1-0.6,4.8-2.9
c1.7-2.2,2.8-4.4,3.5-5.5l3.8-7.7c0.5-0.9,1-1.7,1.3-2.2C225.9,174.3,224.3,174.4,222.5,177.6z"
                                                    />
                                                    <path
                                                        id="XMLID_121_"
                                                        style={{ fill: "#EA9A7E" }}
                                                        d="M225.5,191l8.4-14.3c0,0-1.7-0.2-3.7,3.3c-1.4,2.5-6,12.9-9.5,14.6
C222.3,194.9,224.4,192.7,225.5,191z"
                                                    />
                                                    <path
                                                        id="XMLID_120_"
                                                        style={{ fill: "#FBE0DC" }}
                                                        d="M216.7,178.4c2.7-5.4,1.8-5.9,1.6-5.9c-1.1,2.3-6,10.9-7.1,13.1
c-1.1,2.1-1.4,4.6-0.3,6C210.7,189.5,213.8,184.1,216.7,178.4z"
                                                    />
                                                    <path
                                                        id="XMLID_119_"
                                                        style={{ fill: "#FBE0DC" }}
                                                        d="M220,194.1c-0.1-2.3,1.9-7.5,4.3-13.2c2.5-5.8,2.1-6.4,1.9-6.4
c-2.1,3.5-5.6,10.3-6.2,12.4C219.2,189.3,218.4,192.6,220,194.1z"
                                                    />
                                                    <path
                                                        id="XMLID_113_"
                                                        style={{ fill: "#FBE0DC" }}
                                                        d="M230.7,193.6c-0.4-2,0.3-5.9,2-10.2c2.3-6,1.6-6.5,1.3-6.6
c-0.6,1.7-2.7,8.1-3.6,10.7C229.5,189.8,229.6,192.6,230.7,193.6z"
                                                    />
                                                </g>
                                                <g className="credit-card">
                                                    <linearGradient
                                                        id="XMLID_24_n"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="93.3055"
                                                        y1="243.95"
                                                        x2="174.2098"
                                                        y2="243.95"
                                                        gradientTransform="matrix(1 0 0 -1 0 368)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_101_"
                                                        style={{ fill: "url(#XMLID_24_n)" }}
                                                        d="M174.2,143c0,3-2.4,5.5-5.5,5.5h-70c-3,0-5.5-2.4-5.5-5.5v-37.9
c0-3,2.5-5.5,5.5-5.5h70c3,0,5.5,2.4,5.5,5.5V143z"
                                                    />
                                                    <rect
                                                        id="XMLID_98_"
                                                        x="99.5"
                                                        y="126.5"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width={64}
                                                        height="5.6"
                                                    />
                                                    <rect
                                                        id="XMLID_95_"
                                                        x="120.8"
                                                        y="136.5"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="42.6"
                                                        height="2.5"
                                                    />
                                                    <rect
                                                        id="XMLID_92_"
                                                        x="99.5"
                                                        y="136.5"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="13.7"
                                                        height="2.5"
                                                    />
                                                    <rect
                                                        id="XMLID_89_"
                                                        x="101.1"
                                                        y="110.3"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="14.2"
                                                        height="11.5"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_25_n"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="144.8729"
                                                        y1="253.8"
                                                        x2="158.5399"
                                                        y2="253.8"
                                                        gradientTransform="matrix(1 0 0 -1 0 368)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <circle
                                                        id="XMLID_88_"
                                                        style={{ fill: "url(#XMLID_25_n)" }}
                                                        cx="151.7"
                                                        cy="114.2"
                                                        r="6.8"
                                                    />
                                                    <circle
                                                        id="XMLID_85_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        cx={161}
                                                        cy="114.2"
                                                        r="6.8"
                                                    />
                                                </g>
                                                <g className="bubble-b hover origin-center">
                                                    <circle
                                                        id="XMLID_199_"
                                                        style={{ fill: "#7D2360" }}
                                                        cx="221.7"
                                                        cy="112.3"
                                                        r="25.6"
                                                    />
                                                    <g id="XMLID_51_">
                                                        <g id="XMLID_72_">
                                                            <g id="XMLID_83_">
                                                                <path
                                                                    id="XMLID_84_"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    d="M220.5,127.7c-8.3,0-15.1-6.8-15.1-15.1s6.8-15.1,15.1-15.1
      c4.1,0,7.8,1.5,10.7,4.3s4.4,6.5,4.4,10.6c0,0.3-0.2,0.5-0.6,0.5c-0.3,0-0.6-0.2-0.6-0.5c0-7.7-6.2-13.8-14-13.8
      c-7.7,0-14,6.3-14,14s6.3,14,14,14c2.3,0,4.5-0.6,6.5-1.6c0.3-0.1,0.6,0,0.7,0.2c0.1,0.3,0,0.6-0.2,0.7
      C225.3,127.1,222.9,127.7,220.5,127.7z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_81_">
                                                                <path
                                                                    id="XMLID_82_"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    d="M220.5,127.6c-4.5,0-8-6.6-8-15s3.5-15,8-15s8,6.5,8,14.8c0,0.3-0.2,0.6-0.5,0.6
      s-0.5-0.2-0.5-0.6c0-7.5-3.1-13.7-6.9-13.7c-3.7,0-6.9,6.4-6.9,13.9s3.1,13.9,6.9,13.9c1.2,0,2.1-0.4,3-1.5
      c0.2-0.2,0.6-0.2,0.8,0s0.2,0.5,0,0.8C223.1,127.1,222,127.6,220.5,127.6z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_78_">
                                                                <g id="XMLID_79_">
                                                                    <path
                                                                        id="XMLID_80_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M233.6,107.2h-26.4c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.5,0.6-0.5h26.4
        c0.3,0,0.5,0.2,0.5,0.5C234.2,107,234,107.2,233.6,107.2z"
                                                                    />
                                                                </g>
                                                            </g>
                                                            <g id="XMLID_75_">
                                                                <g id="XMLID_76_">
                                                                    <path
                                                                        id="XMLID_77_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M223.6,119.1h-16.4c-0.3,0-0.5-0.2-0.5-0.6c0-0.3,0.2-0.5,0.5-0.5h16.4
        c0.3,0,0.5,0.2,0.5,0.5C224.2,118.9,223.9,119.1,223.6,119.1z"
                                                                    />
                                                                </g>
                                                            </g>
                                                            <g id="XMLID_73_">
                                                                <path
                                                                    id="XMLID_74_"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    d="M220.5,127.5c-0.3,0-0.5-0.2-0.5-0.5V98.3c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5
      V127C221,127.3,220.8,127.5,220.5,127.5z"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g id="XMLID_52_">
                                                            <g id="XMLID_68_">
                                                                <path
                                                                    id="XMLID_69_"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    d="M242.2,125.9h-17.9c-0.7,0-1.2-0.6-1.2-1.2v-11.5c0-0.7,0.6-1.2,1.2-1.2h17.9
      c0.7,0,1.2,0.6,1.2,1.2v11.5C243.5,125.4,242.9,125.9,242.2,125.9z M224.3,113.1c-0.1,0-0.1,0.1-0.1,0.1v11.5
      c0,0.1,0.1,0.1,0.1,0.1h17.9c0.1,0,0.1-0.1,0.1-0.1v-11.5c0-0.1-0.1-0.1-0.1-0.1H224.3z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_64_">
                                                                <path
                                                                    id="XMLID_65_"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    d="M229.4,121.4h-3.3c-0.7,0-1.2-0.6-1.2-1.2v-2.4c0-0.7,0.6-1.2,1.2-1.2h3.3
      c0.7,0,1.2,0.6,1.2,1.2v2.4C230.7,120.9,230.1,121.4,229.4,121.4z M226.1,117.6c-0.1,0-0.1,0.1-0.1,0.1v2.4
      c0,0.1,0.1,0.1,0.1,0.1h3.3c0.1,0,0.1-0.1,0.1-0.1v-2.4c0-0.1-0.1-0.1-0.1-0.1H226.1z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_55_">
                                                                <g id="XMLID_62_">
                                                                    <path
                                                                        id="XMLID_63_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M228.1,123.7h-2.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.5,0.6-0.5h2.6
        c0.3,0,0.6,0.2,0.6,0.5C228.7,123.4,228.4,123.7,228.1,123.7z"
                                                                    />
                                                                </g>
                                                                <g id="XMLID_60_">
                                                                    <path
                                                                        id="XMLID_61_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M232.5,123.7h-2.6c-0.3,0-0.5-0.2-0.5-0.6c0-0.3,0.2-0.5,0.5-0.5h2.6
        c0.3,0,0.6,0.2,0.6,0.5S232.8,123.7,232.5,123.7z"
                                                                    />
                                                                </g>
                                                                <g id="XMLID_58_">
                                                                    <path
                                                                        id="XMLID_59_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M236.9,123.7h-2.6c-0.3,0-0.6-0.2-0.6-0.6c0-0.3,0.2-0.5,0.6-0.5h2.6
        c0.3,0,0.6,0.2,0.6,0.5S237.2,123.7,236.9,123.7z"
                                                                    />
                                                                </g>
                                                                <g id="XMLID_56_">
                                                                    <path
                                                                        id="XMLID_57_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M241.4,123.7h-2.6c-0.3,0-0.5-0.2-0.5-0.6c0-0.3,0.2-0.5,0.5-0.5h2.6
        c0.3,0,0.6,0.2,0.6,0.5C241.9,123.4,241.7,123.7,241.4,123.7z"
                                                                    />
                                                                </g>
                                                            </g>
                                                            <g id="XMLID_53_">
                                                                <path
                                                                    id="XMLID_54_"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    d="M240.3,115.5h-6.8c-0.3,0-0.5-0.2-0.5-0.6c0-0.3,0.2-0.5,0.5-0.5h6.8
      c0.3,0,0.5,0.2,0.5,0.5C240.8,115.3,240.6,115.5,240.3,115.5z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g className="bubble-m hover origin-center">
                                                    <linearGradient
                                                        id="XMLID_27_n"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="169.1953"
                                                        y1="278.6562"
                                                        x2="199.5977"
                                                        y2="325.5615"
                                                        gradientTransform="matrix(1 0 0 -1 0 368)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_198_"
                                                        style={{ fill: "url(#XMLID_27_n)" }}
                                                        d="M203.5,68.2c0,11.4-9.2,20.6-20.6,20.6c-11.4,0-20.6-9.2-20.6-20.6
s9.2-20.6,20.6-20.6S203.5,56.8,203.5,68.2z"
                                                    />
                                                    <g id="XMLID_4_">
                                                        <g id="XMLID_26_">
                                                            <g id="XMLID_31_">
                                                                <g id="XMLID_32_">
                                                                    <g id="XMLID_40_">
                                                                        <path
                                                                            id="XMLID_41_"
                                                                            style={{ fill: "#FFFFFF" }}
                                                                            d="M185,81.6h-10.7c-1.4,0-2.5-1.1-2.5-2.5V58.4c0-1.4,1.1-2.5,2.5-2.5H185
          c1.4,0,2.5,1.1,2.5,2.5v6.1c0,0.2-0.2,0.4-0.4,0.4s-0.4-0.2-0.4-0.4v-6.1c0-0.9-0.7-1.6-1.6-1.6h-10.7c-0.9,0-1.6,0.7-1.6,1.6
          v20.7c0,0.9,0.7,1.6,1.6,1.6H185c0.9,0,1.6-0.7,1.6-1.6v-4.3c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4v4.3
          C187.5,80.5,186.3,81.6,185,81.6z"
                                                                        />
                                                                    </g>
                                                                    <g id="XMLID_38_">
                                                                        <path
                                                                            id="XMLID_39_"
                                                                            style={{ fill: "#FFFFFF" }}
                                                                            d="M186.9,60h-14.6c-0.2,0-0.4-0.2-0.4-0.4s0.2-0.4,0.4-0.4h14.6
          c0.2,0,0.4,0.2,0.4,0.4C187.3,59.8,187.1,60,186.9,60z"
                                                                        />
                                                                    </g>
                                                                    <g id="XMLID_35_">
                                                                        <path
                                                                            id="XMLID_36_"
                                                                            style={{ fill: "#FFFFFF" }}
                                                                            d="M186.9,78.5h-14.6c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h14.6
          c0.2,0,0.4,0.2,0.4,0.4C187.3,78.3,187.1,78.5,186.9,78.5z"
                                                                        />
                                                                    </g>
                                                                    <g id="XMLID_33_">
                                                                        <path
                                                                            id="XMLID_34_"
                                                                            style={{ fill: "#FFFFFF" }}
                                                                            d="M181.2,79.8h-3.3c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h3.3
          c0.2,0,0.4,0.2,0.4,0.4C181.7,79.6,181.5,79.8,181.2,79.8z"
                                                                        />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="XMLID_5_">
                                                            <g id="XMLID_21_">
                                                                <path
                                                                    id="XMLID_23_"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    d="M195,74.9h-13.5c-0.5,0-1-0.4-1-1v-8.7c0-0.5,0.4-1,1-1H195c0.5,0,1,0.4,1,1v8.7
      C196,74.5,195.6,74.9,195,74.9z M181.5,65.1C181.4,65.1,181.4,65.2,181.5,65.1l-0.1,8.8c0,0.1,0,0.1,0.1,0.1H195
      c0.1,0,0.1,0,0.1-0.1v-8.7c0-0.1,0-0.1-0.1-0.1C195,65.1,181.5,65.1,181.5,65.1z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_17_">
                                                                <path
                                                                    id="XMLID_18_"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    d="M185.3,71.5h-2.5c-0.5,0-1-0.4-1-1v-1.8c0-0.5,0.4-1,1-1h2.5c0.5,0,1,0.4,1,1v1.8
      C186.3,71,185.9,71.5,185.3,71.5z M182.8,68.6C182.8,68.6,182.7,68.6,182.8,68.6l-0.1,1.9c0,0.1,0,0.1,0.1,0.1h2.5
      c0.1,0,0.1,0,0.1-0.1v-1.8c0-0.1,0-0.1-0.1-0.1H182.8z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_8_">
                                                                <g id="XMLID_15_">
                                                                    <path
                                                                        id="XMLID_16_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M184.3,73.2h-2c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h2
        c0.2,0,0.4,0.2,0.4,0.4C184.8,73,184.6,73.2,184.3,73.2z"
                                                                    />
                                                                </g>
                                                                <g id="XMLID_13_">
                                                                    <path
                                                                        id="XMLID_14_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M187.7,73.2h-2c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h2
        c0.2,0,0.4,0.2,0.4,0.4C188.1,73,187.9,73.2,187.7,73.2z"
                                                                    />
                                                                </g>
                                                                <g id="XMLID_11_">
                                                                    <path
                                                                        id="XMLID_12_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M191,73.2h-2c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h2
        c0.2,0,0.4,0.2,0.4,0.4C191.5,73,191.3,73.2,191,73.2z"
                                                                    />
                                                                </g>
                                                                <g id="XMLID_9_">
                                                                    <path
                                                                        id="XMLID_10_"
                                                                        style={{ fill: "#FFFFFF" }}
                                                                        d="M194.4,73.2h-2c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h2
        c0.2,0,0.4,0.2,0.4,0.4C194.8,73,194.6,73.2,194.4,73.2z"
                                                                    />
                                                                </g>
                                                            </g>
                                                            <g id="XMLID_6_">
                                                                <path
                                                                    id="XMLID_7_"
                                                                    style={{ fill: "#FFFFFF" }}
                                                                    d="M193.6,67h-5.1c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h5.1
      c0.2,0,0.4,0.2,0.4,0.4S193.8,67,193.6,67z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g className="bubble-t hover origin-center">
                                                    <linearGradient
                                                        id="XMLID_28_n"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="106.4"
                                                        y1="304.8"
                                                        x2="152.8658"
                                                        y2="304.8"
                                                        gradientTransform="matrix(1 0 0 -1 0 368)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_200_"
                                                        style={{ fill: "url(#XMLID_28_n)" }}
                                                        d="M152.8,63.2c0,12.8-10.4,23.2-23.2,23.2S106.4,76,106.4,63.2
S116.8,40,129.6,40S152.8,50.4,152.8,63.2z"
                                                    />
                                                    <g id="XMLID_42_">
                                                        <g id="XMLID_48_">
                                                            <path
                                                                id="XMLID_49_"
                                                                style={{ fill: "#FFFFFF" }}
                                                                d="M130.7,79.3l-0.3-3.8c-2.3,0.1-4.7-0.3-6.2-1.2l0.7-2.6c1.5,0.8,3.6,1.3,5.8,1.2
    c2.8-0.2,4.6-1.9,4.4-4.1c-0.2-2.1-1.8-3.2-4.9-4.1c-4.2-1.2-6.8-2.7-7.1-6c-0.3-3.1,1.9-5.7,5.4-6.6l-0.3-3.8l2.5-0.2l0.3,3.7
    c2.4-0.1,4.1,0.4,5.3,0.9l-0.8,2.6c-0.9-0.4-2.6-1.1-5.1-0.9c-3,0.2-4,2.1-3.9,3.6c0.2,2,1.7,2.8,5.3,3.9
    c4.2,1.3,6.5,3.1,6.8,6.4c0.3,3-1.7,6-5.7,6.9l0.4,3.9L130.7,79.3z"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                                <g className="overlay">
                                                    <linearGradient
                                                        id="overlay_1_"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="265.0511"
                                                        y1="828.6807"
                                                        x2="245.3274"
                                                        y2="752.3569"
                                                        gradientTransform="matrix(1 0 0 1 0 -424)"
                                                    >
                                                        <stop offset="0.1902" style={{ stopColor: "#EFDFED" }} />
                                                        <stop offset={1} style={{ stopColor: "#FDF0F6" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="overlay"
                                                        style={{ fill: "url(#overlay_1_)" }}
                                                        d="M267.2,462.2c0,1.9-0.6,3.4-1.2,3.4l-17.8-12.5c-0.7,0-1.2-1.5-1.2-3.4
    l-1.3-74.4c5.5-7.4,5.2-19.3,0-30.2l0.3-34.4c0-1.9,0.6-3.4,1.2-3.4l18.9-12.9c0.7,0,1.2,1.5,1.2,3.4L267.2,462.2L267.2,462.2z"
                                                    />
                                                </g>
                                            </svg>
                                            <Link to="/contact">Contact Now</Link>
                                        </div>

                                    </div>

                                    <div className='col-lg-3 col-md-12'>
                                        {/*Mobile Applications*/}
                                        <div className="card">
                                            <h2>Mobile Applications</h2>
                                            <svg className="icon-mobApps" viewBox="0 0 420 443.7">
                                                <linearGradient
                                                    id="XMLID_4_c"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="221.8951"
                                                    y1="415.5637"
                                                    x2="201.895"
                                                    y2="143.5643"
                                                    gradientTransform="matrix(1 0 0 -1 0 446)"
                                                >
                                                    <stop offset="0.1902" style={{ stopColor: "#3498db" }} />
                                                    <stop offset={1} style={{ stopColor: "#3498db" }} />
                                                </linearGradient>
                                                <path
                                                    id="XMLID_179_"
                                                    style={{ fill: "url(#XMLID_4_c)" }}
                                                    d="M94.7,336.6C63.3,294.6-3,277.8,4,216.1c5-44.8,38.4-76.7,71.7-93.2
	c50.6-25,67.7-78.6,114.7-104.5C240.6-9.3,311,4.7,358.4,41.6c50.5,39.3,67.4,96,53.3,154.4c-7.1,29.1-23.2,53.4-33.5,80.8
	c-11.5,30.5-21.5,43.8-32.1,74.4c-19.1,55.2-73,105.5-139.5,84.7C149.9,418.4,128.1,381.3,94.7,336.6z"
                                                />
                                                <path
                                                    className="star star-1 origin-center"
                                                    style={{ fill: "#FFFFFF" }}
                                                    d="M365.7,117.3v2.6H363c-0.9,0-1.6,0.7-1.6,1.6v0.1c0,0.9,0.7,1.6,1.6,1.6h2.6v2.6
	c0,0.9,0.7,1.6,1.6,1.6h0.1c0.9,0,1.6-0.7,1.6-1.6v-2.6h2.6c0.9,0,1.6-0.7,1.6-1.6v-0.1c0-0.9-0.7-1.6-1.6-1.6h-2.6v-2.6
	c0-0.9-0.7-1.6-1.6-1.6h-0.1C366.4,115.6,365.7,116.4,365.7,117.3z"
                                                />
                                                <path
                                                    className="star star-2 origin-center"
                                                    style={{ fill: "#EFDFED" }}
                                                    d="M237.9,386.9v3.9H234c-1.3,0-2.4,1.1-2.4,2.4v0.1c0,1.3,1.1,2.4,2.4,2.4h3.9v3.9
	c0,1.3,1.1,2.4,2.4,2.4h0.1c1.3,0,2.4-1.1,2.4-2.4v-3.9h3.9c1.3,0,2.4-1.1,2.4-2.4v-0.1c0-1.3-1.1-2.4-2.4-2.4h-3.9v-3.9
	c0-1.3-1.1-2.4-2.4-2.4h-0.1C239,384.4,237.9,385.5,237.9,386.9z"
                                                />
                                                <circle
                                                    id="XMLID_176_"
                                                    style={{ fill: "#FFFFFF" }}
                                                    cx={250}
                                                    cy="45.6"
                                                    r="4.7"
                                                />
                                                <circle
                                                    id="XMLID_175_"
                                                    style={{ fill: "#EFDFED" }}
                                                    cx={80}
                                                    cy="138.6"
                                                    r="4.7"
                                                />
                                                <g className="gear origin-center">
                                                    <path
                                                        id="XMLID_172_"
                                                        style={{ fill: "#582768" }}
                                                        d="M166,216.1l-1-5.2c-0.1-0.4-0.4-0.6-0.8-0.5l-4.2,0.8c-0.9-3.8-2.2-7.5-3.9-10.9
		l3.8-2.2c0.3-0.2,0.4-0.6,0.2-0.9l-2.7-4.6c-0.2-0.3-0.6-0.4-0.9-0.2l-3.7,2.2c-2.1-3.2-4.6-6.2-7.4-8.9l2.8-3.4
		c0.2-0.3,0.2-0.7-0.1-0.9L144,178c-0.3-0.2-0.7-0.2-0.9,0.1l-2.8,3.3c-3.1-2.3-6.4-4.3-10-5.9l1.5-4.1c0.1-0.3-0.1-0.7-0.4-0.8
		l-5-1.8c-0.3-0.1-0.7,0.1-0.8,0.4l-1.4,4c-3.7-1.1-7.5-1.8-11.4-2v-4.4c0-0.4-0.3-0.7-0.7-0.7h-5.3c-0.4,0-0.7,0.3-0.7,0.7v4.3
		c-3.9,0.2-7.8,0.9-11.4,1.9l-1.5-4.1c-0.1-0.3-0.5-0.5-0.9-0.4l-5,1.9c-0.3,0.1-0.5,0.5-0.4,0.8l1.5,4c-3.6,1.5-6.9,3.5-10,5.8
		l-2.9-3.4c-0.2-0.3-0.7-0.3-0.9-0.1l-4,3.4c-0.3,0.2-0.3,0.7-0.1,0.9l2.8,3.3c-2.8,2.7-5.4,5.6-7.5,8.8l-3.8-2.2
		c-0.3-0.2-0.7-0.1-0.9,0.3l-2.6,4.6c-0.2,0.3-0.1,0.7,0.2,0.9l3.8,2.1c-1.7,3.4-3.1,7.1-4,10.9l-4.4-0.7c-0.4-0.1-0.7,0.2-0.8,0.5
		l-0.9,5.2c-0.1,0.4,0.2,0.7,0.5,0.8l4.3,0.7c-0.2,2.1-0.4,4.3-0.4,6.5c0,1.7,0.1,3.4,0.3,5.1l-4.3,0.8c-0.4,0.1-0.6,0.4-0.5,0.8
		l1,5.2c0.1,0.4,0.4,0.6,0.8,0.5l4.2-0.8c0.9,3.8,2.2,7.5,3.9,10.9l-3.8,2.2c-0.3,0.2-0.4,0.6-0.2,0.9l2.7,4.6
		c0.2,0.3,0.6,0.4,0.9,0.2l3.7-2.2c2.1,3.2,4.6,6.2,7.4,8.9l-2.8,3.4c-0.2,0.3-0.2,0.7,0.1,0.9l4.1,3.4c0.3,0.2,0.7,0.2,0.9-0.1
		L78,265c3.1,2.3,6.4,4.3,10,5.9l-1.5,4.2c-0.1,0.3,0.1,0.7,0.4,0.8l5,1.8c0.3,0.1,0.7-0.1,0.8-0.4l1.4-4c3.6,1.1,7.5,1.8,11.4,2
		v4.4c0,0.4,0.3,0.7,0.7,0.7h5.3c0.4,0,0.7-0.3,0.7-0.7v-4.4c3.9-0.2,7.8-0.9,11.4-1.9l1.5,4.1c0.1,0.3,0.5,0.5,0.8,0.4l5-1.9
		c0.3-0.1,0.5-0.5,0.4-0.8l-1.5-4c3.6-1.5,6.9-3.5,10-5.8l2.9,3.4c0.2,0.3,0.7,0.3,0.9,0.1l4-3.4c0.3-0.2,0.3-0.7,0.1-0.9l-2.8-3.3
		c2.8-2.7,5.4-5.6,7.5-8.8l3.8,2.2c0.3,0.2,0.7,0.1,0.9-0.2l2.6-4.6c0.2-0.3,0.1-0.7-0.3-0.9l-3.8-2.1c1.7-3.4,3.1-7.1,4-10.9
		l4.4,0.7c0.4,0.1,0.7-0.2,0.8-0.5l0.9-5.2c0.1-0.4-0.2-0.7-0.5-0.8l-4.3-0.7c0.2-2.1,0.4-4.3,0.4-6.5c0-1.7-0.1-3.4-0.3-5.1
		l4.3-0.8C165.8,216.8,166,216.5,166,216.1z M109.3,236.1c-7.2,0.1-13-5.7-13.1-12.9s5.7-13,12.9-13.1c7.2,0,13,5.7,13.1,12.9
		C122.2,230.2,116.4,236.1,109.3,236.1z"
                                                    />
                                                    <g id="XMLID_168_">
                                                        <path
                                                            id="XMLID_169_"
                                                            style={{ fill: "#FFFFFF" }}
                                                            d="M109.1,252.3c-13.6,0-25.2-9.2-28.4-22.4c-1.8-7.6-0.6-15.4,3.5-22.1
			c4.1-6.6,10.5-11.3,18.1-13.1c2.2-0.5,4.5-0.8,6.8-0.8c13.6,0,25.2,9.2,28.4,22.4c1.8,7.6,0.6,15.4-3.5,22.1
			c-4.1,6.6-10.5,11.3-18.1,13.1C113.7,252.1,111.4,252.3,109.1,252.3L109.1,252.3z M109.2,195.7c-2.1,0-4.3,0.3-6.4,0.8
			c-7.1,1.7-13.2,6.1-17,12.3c-3.9,6.3-5,13.6-3.3,20.8c3,12.4,14,21.1,26.7,21.1c2.1,0,4.3-0.3,6.4-0.8c7.1-1.7,13.2-6.1,17-12.3
			c3.9-6.3,5-13.6,3.3-20.8C132.9,204.3,121.9,195.7,109.2,195.7L109.2,195.7z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_164_">
                                                        <path
                                                            id="XMLID_165_"
                                                            style={{ fill: "#7D2360" }}
                                                            d="M109.1,258.9c-16.6,0-30.9-11.3-34.7-27.4c-2.2-9.3-0.7-18.9,4.3-27
			s12.9-13.8,22.1-16c2.7-0.6,5.5-1,8.3-1c16.6,0,30.9,11.3,34.7,27.4c4.6,19.2-7.3,38.4-26.5,43
			C114.7,258.5,111.9,258.9,109.1,258.9L109.1,258.9z M109.2,190.8c-2.5,0-5.1,0.3-7.5,0.9c-8.4,2-15.5,7.2-20.1,14.5
			c-4.5,7.4-5.9,16-3.9,24.4c3.5,14.6,16.4,24.9,31.4,24.9c2.5,0,5-0.3,7.5-0.9c17.3-4.1,28.1-21.6,24-39
			C137.1,201,124.2,190.8,109.2,190.8L109.2,190.8z"
                                                        />
                                                    </g>
                                                    <path
                                                        id="XMLID_163_"
                                                        style={{ fill: "#5E2667" }}
                                                        d="M111.2,231.9c-4.8,1.1-9.7-1.8-10.8-6.6c-1.1-4.8,1.8-9.7,6.6-10.8
		c4.8-1.2,9.7,1.8,10.8,6.6C119,225.9,116.1,230.7,111.2,231.9z"
                                                    />
                                                </g>
                                                <g className="phone">
                                                    <g id="XMLID_161_">
                                                        <path
                                                            id="XMLID_162_"
                                                            style={{ fill: "#9E2159" }}
                                                            d="M230.2,334.9c0.1,8-6.3,14.6-14.3,14.7l-86.6,1.3c-8,0.1-14.6-6.3-14.7-14.3
			l-3.1-205.2c-0.1-8,6.3-14.6,14.3-14.7l86.6-1.3c8-0.1,14.6,6.3,14.7,14.3L230.2,334.9z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_159_">
                                                        <path
                                                            id="XMLID_160_"
                                                            style={{ fill: "#9E2159" }}
                                                            d="M131.5,348.7c-8,0.1-14.6-6.3-14.7-14.3l-3-200.8c-0.1-8,6.3-14.6,14.3-14.7
			l82.2-1.2c8-0.1,14.6,6.3,14.7,14.3l3,200.8c0.1,8-6.3,14.6-14.3,14.7L131.5,348.7z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_155_">
                                                        <path
                                                            id="XMLID_158_"
                                                            style={{ fill: "#FFFFFF" }}
                                                            d="M155.6,130.6c0,1.1-0.8,2-1.9,2c-1.1,0-2-0.8-2-1.9c0-1.1,0.9-2,1.9-2
			C154.7,128.6,155.5,129.5,155.6,130.6z"
                                                        />
                                                        <path
                                                            id="XMLID_157_"
                                                            style={{ fill: "#FFFFFF" }}
                                                            d="M170.3,123.6c0,0.7-0.5,1.3-1.2,1.3s-1.3-0.5-1.3-1.2s0.5-1.3,1.2-1.3
			C169.7,122.3,170.3,122.9,170.3,123.6z"
                                                        />
                                                        <path
                                                            id="XMLID_156_"
                                                            style={{ fill: "#FFFFFF" }}
                                                            d="M176.8,130.1c0,0.5-0.4,0.9-0.9,0.9l-13.4,0.2c-0.5,0-0.9-0.4-0.9-0.9l0,0
			c0-0.5,0.4-0.9,0.9-0.9l13.4-0.2C176.4,129.1,176.8,129.6,176.8,130.1L176.8,130.1z"
                                                        />
                                                    </g>
                                                    <path
                                                        id="XMLID_154_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M180.4,337.7c0,0.9-0.7,1.7-1.7,1.7l-12.3,0.2c-0.9,0-1.7-0.7-1.7-1.6v-3.4
		c0-0.9,0.7-1.7,1.7-1.7l12.3-0.2c0.9,0,1.7,0.7,1.7,1.7V337.7z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_5_c"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="-357.3914"
                                                        y1="-111.7233"
                                                        x2="-208.2766"
                                                        y2="-111.7233"
                                                        gradientTransform="matrix(0.9616 0.2744 0.2744 -0.9616 473.3763 202.8897)"
                                                    >
                                                        <stop offset="0.1902" style={{ stopColor: "#EFDFED" }} />
                                                        <stop offset={1} style={{ stopColor: "#FDF0F6" }} />
                                                    </linearGradient>
                                                    <polygon
                                                        id="XMLID_153_"
                                                        style={{ fill: "url(#XMLID_5_c)" }}
                                                        points="222.8,322 121.3,323.5 118.7,143.4 220.1,141.9 	"
                                                    />
                                                    <polygon
                                                        id="XMLID_152_"
                                                        style={{ opacity: "0.1", fill: "#9E2159", enableBackground: "new" }}
                                                        points="119.5,201.3 120.4,259.5
		190.1,142.3 154.3,142.9 	"
                                                    />
                                                    <polygon
                                                        id="XMLID_151_"
                                                        style={{ opacity: "0.1", fill: "#9E2159", enableBackground: "new" }}
                                                        points="120.9,291.7 209.9,142 196.3,142.2
		120.5,269.6 	"
                                                    />
                                                </g>
                                                <g className="pen">
                                                    <polygon
                                                        id="XMLID_148_"
                                                        style={{ fill: "#FDEFF5" }}
                                                        points="140.4,89.9 115.1,82.2 140.4,74.5 	"
                                                    />
                                                    <path
                                                        id="XMLID_137_"
                                                        style={{ fill: "#97215B" }}
                                                        d="M356.1,76.7c-0.9-0.9-1.9-1.5-3-1.8c0.3,0.8,0.4,1.6,0.4,2.4c0,2-0.8,3.9-2.3,5.4
		s-3.5,2.3-5.4,2.3H341v4.8h9.6c2,0,3.9-0.8,5.4-2.3s2.3-3.5,2.3-5.4C358.4,80.2,357.6,78.2,356.1,76.7z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_6_c"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="140.4"
                                                        y1="363.8"
                                                        x2="332.2"
                                                        y2="363.8"
                                                        gradientTransform="matrix(1 0 0 -1 0 446)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <rect
                                                        id="XMLID_146_"
                                                        x="140.4"
                                                        y="74.5"
                                                        style={{ fill: "url(#XMLID_6_c)" }}
                                                        width="191.8"
                                                        height="15.4"
                                                    />
                                                    <polygon
                                                        id="XMLID_147_"
                                                        style={{ fill: "#FDEFF5" }}
                                                        points="115.1,82.2 140.4,89.9 140.4,85 	"
                                                    />
                                                    <polygon
                                                        id="XMLID_143_"
                                                        style={{ fill: "#742462" }}
                                                        points="125,85.2 115.1,82.2 125,83.3 	"
                                                    />
                                                    <rect
                                                        id="XMLID_141_"
                                                        x="332.2"
                                                        y={85}
                                                        style={{ fill: "#FDEFF5" }}
                                                        width="8.9"
                                                        height="4.8"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_7_c"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="133.799"
                                                        y1="358.6"
                                                        x2="227.7426"
                                                        y2="358.6"
                                                        gradientTransform="matrix(1 0 0 -1 0 446)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <rect
                                                        id="XMLID_145_"
                                                        x="140.4"
                                                        y={85}
                                                        style={{ fill: "url(#XMLID_7_c)" }}
                                                        width="191.8"
                                                        height="4.8"
                                                    />
                                                    <polygon
                                                        id="XMLID_144_"
                                                        style={{ fill: "#742462" }}
                                                        points="125,85.2 115.1,82.2 125,79.2 	"
                                                    />
                                                    <rect
                                                        id="XMLID_142_"
                                                        x="332.2"
                                                        y="74.5"
                                                        style={{ fill: "#FDEFF5" }}
                                                        width="8.9"
                                                        height="15.4"
                                                    />
                                                    <path
                                                        id="XMLID_138_"
                                                        style={{ fill: "#A62257" }}
                                                        d="M350.7,89.9c2,0,3.9-0.8,5.4-2.3s2.3-3.5,2.3-5.4l0,0c0-2-0.8-3.9-2.3-5.4
		s-3.5-2.3-5.4-2.3h-9.6v15.4C341.1,89.9,350.7,89.9,350.7,89.9z"
                                                    />
                                                </g>
                                                <g className="ruler hover">
                                                    <linearGradient
                                                        id="XMLID_10_c"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="281.9"
                                                        y1="255.35"
                                                        x2="315.2438"
                                                        y2="255.35"
                                                        gradientTransform="matrix(1 0 0 -1 0 446)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <rect
                                                        id="XMLID_136_"
                                                        x="281.9"
                                                        y="74.5"
                                                        style={{ fill: "url(#XMLID_10_c)" }}
                                                        width="33.3"
                                                        height="232.3"
                                                    />
                                                    <g id="XMLID_121_">
                                                        <rect
                                                            id="XMLID_135_"
                                                            x="281.9"
                                                            y="298.3"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_134_"
                                                            x="281.9"
                                                            y={283}
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_133_"
                                                            x="281.9"
                                                            y="267.6"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_132_"
                                                            x="281.9"
                                                            y="252.2"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_131_"
                                                            x="281.9"
                                                            y="236.9"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_130_"
                                                            x="281.9"
                                                            y="221.5"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_129_"
                                                            x="281.9"
                                                            y="206.1"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_128_"
                                                            x="281.9"
                                                            y="190.8"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_127_"
                                                            x="281.9"
                                                            y="175.4"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_126_"
                                                            x="281.9"
                                                            y={160}
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_125_"
                                                            x="281.9"
                                                            y="144.7"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_124_"
                                                            x="281.9"
                                                            y="121.6"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.4"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_123_"
                                                            x="281.9"
                                                            y="106.2"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_122_"
                                                            x="281.9"
                                                            y="90.9"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                    </g>
                                                    <g id="XMLID_105_">
                                                        <rect
                                                            id="XMLID_120_"
                                                            x="281.9"
                                                            y="290.7"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_119_"
                                                            x="281.9"
                                                            y="275.3"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_118_"
                                                            x="281.9"
                                                            y="259.9"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_117_"
                                                            x="281.9"
                                                            y="244.5"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_116_"
                                                            x="281.9"
                                                            y="229.2"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_115_"
                                                            x="281.9"
                                                            y="213.8"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_114_"
                                                            x="281.9"
                                                            y="198.4"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_113_"
                                                            x="281.9"
                                                            y="183.1"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_112_"
                                                            x="281.9"
                                                            y="167.7"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_111_"
                                                            x="281.9"
                                                            y="152.3"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_110_"
                                                            x="281.9"
                                                            y={137}
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="4.6"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_109_"
                                                            x="281.9"
                                                            y="129.3"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_108_"
                                                            x="281.9"
                                                            y="113.9"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_107_"
                                                            x="281.9"
                                                            y="98.5"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                        <rect
                                                            id="XMLID_106_"
                                                            x="281.9"
                                                            y="83.2"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="8.8"
                                                            height="1.7"
                                                        />
                                                    </g>
                                                </g>
                                                <linearGradient
                                                    id="XMLID_11_c"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="300.9"
                                                    y1="159.4607"
                                                    x2="300.9"
                                                    y2="260.7496"
                                                    gradientTransform="matrix(1 0 0 -1 0 446)"
                                                >
                                                    <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                    <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                    <stop offset={1} style={{ stopColor: "#582768" }} />
                                                </linearGradient>
                                                <rect
                                                    id="XMLID_103_"
                                                    x="240.4"
                                                    y="174.9"
                                                    style={{ fill: "url(#XMLID_11_c)" }}
                                                    width={121}
                                                    height="156.2"
                                                />
                                                <rect
                                                    id="XMLID_90_"
                                                    x="240.4"
                                                    y="160.1"
                                                    style={{ fill: "#9E2159" }}
                                                    width={121}
                                                    height="14.8"
                                                />
                                                <g className="login">
                                                    <linearGradient
                                                        id="XMLID_12_c"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="221.4045"
                                                        y1="119.2018"
                                                        x2="226.8696"
                                                        y2="182.0505"
                                                        gradientTransform="matrix(1 0 0 -1 0 446)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <rect
                                                        id="XMLID_89_"
                                                        x="184.2"
                                                        y="281.8"
                                                        style={{ fill: "url(#XMLID_12_c)" }}
                                                        width="77.8"
                                                        height={51}
                                                    />
                                                    <rect
                                                        id="XMLID_86_"
                                                        x="184.2"
                                                        y="273.1"
                                                        style={{ fill: "#582768" }}
                                                        width="77.8"
                                                        height="8.7"
                                                    />
                                                    <rect
                                                        id="XMLID_85_"
                                                        x="216.4"
                                                        y="319.5"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="13.4"
                                                        height="2.2"
                                                    />
                                                    <rect
                                                        id="XMLID_84_"
                                                        x="238.9"
                                                        y="289.7"
                                                        style={{
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            fill: "#A62257"
                                                        }}
                                                        width="8.7"
                                                        height="8.7"
                                                    />
                                                    <g id="XMLID_81_">
                                                        <path
                                                            id="XMLID_83_"
                                                            style={{ fill: "#FFFFFF" }}
                                                            d="M244.5,293.2c0,0.8-0.6,1.5-1.3,1.5s-1.3-0.7-1.3-1.5s0.6-1.5,1.3-1.5
			S244.5,292.4,244.5,293.2z"
                                                        />
                                                        <path
                                                            id="XMLID_82_"
                                                            style={{ fill: "#FFFFFF" }}
                                                            d="M243.9,295.1c-0.2,0.1-0.4,0.2-0.7,0.2c-0.2,0-0.5-0.1-0.7-0.2
			c-0.9,0.2-1.6,0.7-1.7,1.2h4.8C245.5,295.7,244.8,295.2,243.9,295.1z"
                                                        />
                                                    </g>
                                                    <rect
                                                        id="XMLID_80_"
                                                        x="198.6"
                                                        y="289.7"
                                                        style={{
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            fill: "#FFFFFF"
                                                        }}
                                                        width="40.3"
                                                        height="8.7"
                                                    />
                                                    <rect
                                                        id="XMLID_79_"
                                                        x="206.5"
                                                        y="292.9"
                                                        style={{ fill: "#582768" }}
                                                        width="24.5"
                                                        height="2.2"
                                                    />
                                                    <rect
                                                        id="XMLID_78_"
                                                        x="238.9"
                                                        y="301.4"
                                                        style={{
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            fill: "#A62257"
                                                        }}
                                                        width="8.7"
                                                        height="8.7"
                                                    />
                                                    <path
                                                        id="XMLID_75_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M244.4,305.4v-0.7c0-0.7-0.5-1.2-1.2-1.2s-1.2,0.5-1.2,1.2v0.7h-0.4v2.7h3.3v-2.7
		H244.4z M244,305.4h-1.6v-0.7c0-0.5,0.4-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8V305.4z"
                                                    />
                                                    <rect
                                                        id="XMLID_74_"
                                                        x="198.6"
                                                        y="301.4"
                                                        style={{
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            fill: "#FFFFFF"
                                                        }}
                                                        width="40.3"
                                                        height="8.7"
                                                    />
                                                    <g id="XMLID_52_">
                                                        <g id="XMLID_56_">
                                                            <path
                                                                id="XMLID_62_"
                                                                style={{ fill: "#582768" }}
                                                                d="M207.6,304.7c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
				C208.7,305.2,208.2,304.7,207.6,304.7z"
                                                            />
                                                            <path
                                                                id="XMLID_61_"
                                                                style={{ fill: "#582768" }}
                                                                d="M212,304.7c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
				S212.7,304.7,212,304.7z"
                                                            />
                                                            <path
                                                                id="XMLID_60_"
                                                                style={{ fill: "#582768" }}
                                                                d="M216.5,304.7c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
				S217.1,304.7,216.5,304.7z"
                                                            />
                                                            <path
                                                                id="XMLID_59_"
                                                                style={{ fill: "#582768" }}
                                                                d="M221,304.7c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
				S221.6,304.7,221,304.7z"
                                                            />
                                                            <path
                                                                id="XMLID_58_"
                                                                style={{ fill: "#582768" }}
                                                                d="M225.4,304.7c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
				S226,304.7,225.4,304.7z"
                                                            />
                                                            <path
                                                                id="XMLID_57_"
                                                                style={{ fill: "#582768" }}
                                                                d="M229.9,304.7c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
				S230.5,304.7,229.9,304.7z"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                                <g className="hook hover">
                                                    <path
                                                        id="XMLID_51_"
                                                        style={{ fill: "#95235B" }}
                                                        d="M125.4,123.2c-0.3,0-0.6-0.1-0.8-0.4c-0.4-0.5-0.3-1.1,0.2-1.5l44.4-34.7
		c0.9-0.7,1.9-1.1,3-1.1c1.1-0.1,2.2,0.2,3.1,0.7l41.6,23.6c0.5,0.3,0.7,0.9,0.4,1.4s-0.9,0.7-1.4,0.4L174.3,88
		c-0.6-0.3-1.3-0.5-1.9-0.4c-0.7,0-1.3,0.3-1.9,0.7L126,123C125.8,123.2,125.6,123.2,125.4,123.2z"
                                                    />
                                                    <rect
                                                        id="XMLID_47_"
                                                        x="116.4"
                                                        y="116.4"
                                                        transform="matrix(0.9921 -0.1252 0.1252 0.9921 -14.5259 21.257)"
                                                        style={{ fill: "#F1939B" }}
                                                        width="90.9"
                                                        height="19.6"
                                                    />
                                                    <rect
                                                        id="XMLID_46_"
                                                        x="119.2"
                                                        y="120.2"
                                                        transform="matrix(0.9921 -0.1252 0.1252 0.9921 -14.527 21.2564)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="85.3"
                                                        height="11.9"
                                                    />
                                                    <rect
                                                        id="hook-line"
                                                        x="123.5"
                                                        y="128.3"
                                                        transform="matrix(0.9922 -0.125 0.125 0.9922 -15.1271 18.0227)"
                                                        style={{ fill: "#F1939B" }}
                                                        width="25.1"
                                                        height="2.5"
                                                    />
                                                    <rect
                                                        id="XMLID_42_"
                                                        x="206.9"
                                                        y="109.4"
                                                        transform="matrix(0.9921 -0.1251 0.1251 0.9921 -13.2057 28.1075)"
                                                        style={{ fill: "#F1939B" }}
                                                        width="20.6"
                                                        height="19.6"
                                                    />
                                                    <path
                                                        id="XMLID_39_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M222.5,122.3l-2.4-1.8c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.2,0.1-0.2,0.1l-0.1,0.1
		l-0.7-0.5c0.4-0.7,0.7-1.6,0.5-2.5c-0.3-2.1-2.2-3.6-4.3-3.3c-2.1,0.3-3.6,2.2-3.3,4.3c0.3,2.1,2.2,3.6,4.3,3.3
		c0.9-0.1,1.7-0.5,2.3-1.1l0.7,0.5l-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2s0.1,0.2,0.1,0.2l2.4,1.8c0.2,0.1,0.4,0.2,0.6,0.2
		c0.2,0,0.4-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.6C222.8,122.6,222.7,122.4,222.5,122.3z M216.1,121.2c-1.7,0.2-3.3-1-3.6-2.8
		c-0.2-1.7,1-3.3,2.8-3.5c1.7-0.2,3.3,1,3.6,2.8C219.1,119.4,217.8,121,216.1,121.2z"
                                                    />
                                                    <path
                                                        id="XMLID_38_"
                                                        style={{ fill: "#F2949C" }}
                                                        d="M172.1,91.3c-7.2,0-13-5.8-13-13c0-1,0.8-1.9,1.9-1.9c1,0,1.8,0.8,1.8,1.9
		c0,5.1,4.2,9.3,9.3,9.3s9.3-4.2,9.3-9.3s-4.2-9.3-9.3-9.3c-1,0-1.9-0.8-1.9-1.9V62c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9v3.5
		c6.3,0.9,11.1,6.3,11.1,12.8C185.1,85.5,179.2,91.3,172.1,91.3z"
                                                    />
                                                    <path
                                                        id="XMLID_33_"
                                                        style={{ fill: "#95235B" }}
                                                        d="M172.1,87.6c-0.6,0.1-1.2,0.3-1.7,0.7l-2.8,2.2c-0.7-0.3-1.4-0.6-2.1-1l3.2-2.5
		C169.8,87.4,170.9,87.6,172.1,87.6z"
                                                    />
                                                    <path
                                                        id="XMLID_35_"
                                                        style={{ fill: "#82245E" }}
                                                        d="M172.1,63.9c-2.8,0-5-2.3-5-5c0-2.8,2.3-5,5-5c2.8,0,5,2.3,5,5
		C177.1,61.6,174.9,63.9,172.1,63.9z M172.1,57.5c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3
		C173.4,58.1,172.8,57.5,172.1,57.5z"
                                                    />
                                                    <path
                                                        id="XMLID_34_"
                                                        style={{ fill: "#F2949C" }}
                                                        d="M172.1,59.9c-0.6,0-1-0.2-1-0.5v-26c2,0,0,0,2,0v26
		C173.1,59.6,172.7,59.9,172.1,59.9z"
                                                    />
                                                </g>
                                                <linearGradient
                                                    id="XMLID_13_c"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="291.5"
                                                    y1="138.6"
                                                    x2="367.3"
                                                    y2="138.6"
                                                    gradientTransform="matrix(1 0 0 -1 0 446)"
                                                >
                                                    <stop offset="0.1902" style={{ stopColor: "#EFDFED" }} />
                                                    <stop offset={1} style={{ stopColor: "#FDF0F6" }} />
                                                </linearGradient>
                                                <rect
                                                    id="XMLID_32_"
                                                    x="291.5"
                                                    y="283.7"
                                                    style={{ fill: "url(#XMLID_13_c)" }}
                                                    width="75.8"
                                                    height="47.4"
                                                />
                                                <g className="play-btn hover">
                                                    <path
                                                        id="XMLID_29_"
                                                        style={{ fill: "#582768" }}
                                                        d="M329.5,318.5c-6.1,0-11-5-11-11c0-6.1,5-11,11-11c6.1,0,11,5,11,11
		S335.5,318.5,329.5,318.5z M329.5,297.1c-5.7,0-10.3,4.6-10.3,10.3s4.6,10.3,10.3,10.3c5.7,0,10.3-4.6,10.3-10.3
		S335.2,297.1,329.5,297.1z"
                                                    />
                                                    <polygon
                                                        id="XMLID_28_"
                                                        className="origin-center hover"
                                                        style={{ fill: "#582768" }}
                                                        points="327.4,303.9 333.6,307.4 327.4,311 	"
                                                    />
                                                </g>
                                                <rect
                                                    id="XMLID_23_"
                                                    x="291.5"
                                                    y="331.1"
                                                    style={{ fill: "#582768" }}
                                                    width="75.8"
                                                    height="14.2"
                                                />
                                                <g className="play-bar">
                                                    <polygon
                                                        id="XMLID_19_"
                                                        style={{ fill: "#F1939B" }}
                                                        points="223,187.1 208.2,187.1 208.2,201.9 223,201.9 292,201.9 292,187.1 	"
                                                    />
                                                    <rect
                                                        id="XMLID_17_"
                                                        x="229.1"
                                                        y="193.7"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="56.8"
                                                        height="1.5"
                                                    />
                                                    <rect
                                                        id="XMLID_18_"
                                                        x={292}
                                                        y="187.1"
                                                        style={{ fill: "#E0748B" }}
                                                        width="14.8"
                                                        height="14.8"
                                                    />
                                                    <polygon
                                                        className="play-bar--play"
                                                        style={{ fill: "#FFFFFF" }}
                                                        points="213,191.5 218.1,194.5 213,197.4 	"
                                                    />
                                                    <g className="play-bar--pause">
                                                        <rect
                                                            id="XMLID_1_"
                                                            x="216.9"
                                                            y="191.2"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="1.5"
                                                            height="6.5"
                                                        />
                                                        <rect
                                                            id="XMLID_2_"
                                                            x="213.7"
                                                            y="191.2"
                                                            style={{ fill: "#FFFFFF" }}
                                                            width="1.5"
                                                            height="6.5"
                                                        />
                                                    </g>
                                                    <g id="XMLID_9_">
                                                        <g id="XMLID_24_">
                                                            <rect
                                                                id="XMLID_26_"
                                                                x={297}
                                                                y="192.8"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="2.4"
                                                                height="3.4"
                                                            />
                                                            <polygon
                                                                id="XMLID_25_"
                                                                style={{ fill: "#FFFFFF" }}
                                                                points="302,198.2 299.3,196.2 299.3,192.8 302,190.8 			"
                                                            />
                                                        </g>
                                                    </g>
                                                    <circle
                                                        id="XMLID_8_"
                                                        style={{ fill: "#9E2159" }}
                                                        cx="243.6"
                                                        cy="194.5"
                                                        r={3}
                                                    />
                                                </g>
                                                <g id="lines">
                                                    <rect
                                                        className="line-b hover origin-left"
                                                        x="261.1"
                                                        y="242.3"
                                                        style={{ fill: "#F6A0A2" }}
                                                        width="39.6"
                                                        height="3.4"
                                                    />
                                                    <rect
                                                        className="line-m hover origin-left"
                                                        x="261.1"
                                                        y="231.6"
                                                        style={{ fill: "#F6A0A2" }}
                                                        width="74.7"
                                                        height="3.4"
                                                    />
                                                    <rect
                                                        className="line-t hover origin-left"
                                                        x="261.1"
                                                        y="220.7"
                                                        style={{ fill: "#F6A0A2" }}
                                                        width="74.7"
                                                        height="3.4"
                                                    />
                                                </g>
                                            </svg>
                                            <Link to="/contact">Contact Now</Link>
                                        </div>
                                    </div>

                                    <div className='col-lg-3 col-md-12'>
                                        {/*Wordpress Websites*/}
                                        <div className="card">
                                            <h2>WordPress Websites</h2>
                                            <svg className="icon-wordpress" viewBox="0 0 413.3 382.2">
                                                <linearGradient
                                                    id="background_1_z"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="207.5188"
                                                    y1="396.9613"
                                                    x2="207.5188"
                                                    y2="129.9598"
                                                    gradientTransform="matrix(1 0 0 -1 0 384)"
                                                >
                                                    <stop offset="0.1902" style={{ stopColor: "#3498db" }} />
                                                    <stop offset={1} style={{ stopColor: "#3498db" }} />
                                                </linearGradient>
                                                <path
                                                    id="background"
                                                    style={{ fill: "url(#background_1_z)" }}
                                                    d="M401,202.8c-5.3,52.2,32,109.4-14.9,150.1
	c-34.1,29.6-80.3,30.4-115.8,20c-54.1-15.9-103,11.9-155.1-0.8c-55.7-13.7-98-71.6-107.9-130.9C-3.3,178.1,22.7,124.9,72.7,91.6
	C97.6,75,125.9,68,152.1,54.8c29.1-14.7,45.5-17.7,74-33C277.5-5.8,351.2-6.3,386.1,54C415.8,105.3,406.7,147.3,401,202.8z"
                                                />
                                                <path
                                                    className="star star-1 origin-center"
                                                    style={{ fill: "#FFFFFF" }}
                                                    d="M321.9,32.7v3.7h-3.7c-1.3,0-2.3,1-2.3,2.3v0.1c0,1.3,1,2.3,2.3,2.3h3.7v3.7
	c0,1.3,1,2.3,2.3,2.3h0.1c1.3,0,2.3-1,2.3-2.3v-3.7h3.7c1.3,0,2.3-1,2.3-2.3v-0.1c0-1.3-1-2.3-2.3-2.3h-3.7v-3.7
	c0-1.3-1-2.3-2.3-2.3h-0.1C323,30.4,321.9,31.4,321.9,32.7z"
                                                />
                                                <path
                                                    className="star star-2 origin-center"
                                                    style={{ fill: "#E5D0E6" }}
                                                    d="M56.5,213.3v2.8h-2.8c-1,0-1.8,0.8-1.8,1.8v0.1c0,1,0.8,1.8,1.8,1.8h2.8v2.8
	c0,1,0.8,1.8,1.8,1.8h0.1c1,0,1.8-0.8,1.8-1.8v-2.8H63c1,0,1.8-0.8,1.8-1.8v-0.1c0-1-0.8-1.8-1.8-1.8h-2.8v-2.8c0-1-0.8-1.8-1.8-1.8
	h-0.1C57.3,211.5,56.5,212.3,56.5,213.3z"
                                                />
                                                <g className="graph hover origin-center">
                                                    <rect
                                                        id="XMLID_269_"
                                                        x="245.7"
                                                        y="42.6"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 71.9975 332.7342)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="96.1"
                                                        height="135.9"
                                                    />
                                                    <g id="XMLID_250_">
                                                        <g id="XMLID_93_">
                                                            <rect
                                                                id="XMLID_101_"
                                                                x="311.5"
                                                                y="108.3"
                                                                transform="matrix(0.4124 -0.911 0.911 0.4124 85.7071 350.8997)"
                                                                style={{ fill: "#F6A1A3" }}
                                                                width="6.7"
                                                                height="1.5"
                                                            />
                                                            <rect
                                                                id="XMLID_100_"
                                                                x="321.2"
                                                                y="122.4"
                                                                transform="matrix(0.4119 -0.9112 0.9112 0.4119 73.6161 368.0766)"
                                                                style={{ fill: "#F6A1A3" }}
                                                                width="1.6"
                                                                height="9.3"
                                                            />
                                                            <rect
                                                                id="XMLID_99_"
                                                                x="325.8"
                                                                y="144.2"
                                                                transform="matrix(0.4123 -0.911 0.911 0.4123 61.3995 385.0619)"
                                                                style={{ fill: "#F6A1A3" }}
                                                                width="6.7"
                                                                height="1.5"
                                                            />
                                                            <rect
                                                                id="XMLID_98_"
                                                                x="300.4"
                                                                y="132.8"
                                                                transform="matrix(0.4115 -0.9114 0.9114 0.4115 57.0848 355.4563)"
                                                                style={{ fill: "#F6A1A3" }}
                                                                width="6.7"
                                                                height="1.5"
                                                            />
                                                            <rect
                                                                id="XMLID_97_"
                                                                x="277.4"
                                                                y="92.9"
                                                                transform="matrix(0.4121 -0.9111 0.9111 0.4121 79.7722 310.8366)"
                                                                style={{ fill: "#F6A1A3" }}
                                                                width="6.7"
                                                                height="1.5"
                                                            />
                                                            <rect
                                                                id="XMLID_96_"
                                                                x="266.3"
                                                                y={73}
                                                                transform="matrix(0.4113 -0.9115 0.9115 0.4113 91.4917 289.1801)"
                                                                style={{ fill: "#F6A1A3" }}
                                                                width="6.7"
                                                                height="1.5"
                                                            />
                                                            <rect
                                                                id="XMLID_95_"
                                                                x="269.1"
                                                                y="111.2"
                                                                transform="matrix(0.4116 -0.9114 0.9114 0.4116 58.2186 314.1616)"
                                                                style={{ fill: "#F6A1A3" }}
                                                                width="6.7"
                                                                height="1.5"
                                                            />
                                                            <rect
                                                                id="XMLID_94_"
                                                                x="253.6"
                                                                y="114.1"
                                                                transform="matrix(0.4107 -0.9118 0.9118 0.4107 41.698 301.7926)"
                                                                style={{ fill: "#F6A1A3" }}
                                                                width="1.5"
                                                                height={9}
                                                            />
                                                        </g>
                                                    </g>
                                                    <rect
                                                        id="XMLID_249_"
                                                        x="297.3"
                                                        y="48.8"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 90.0528 329.9779)"
                                                        style={{ fill: "#F6A1A3" }}
                                                        width="6.7"
                                                        height="92.9"
                                                    />
                                                    <rect
                                                        id="XMLID_248_"
                                                        x="333.9"
                                                        y="103.5"
                                                        transform="matrix(0.4121 -0.9111 0.9111 0.4121 96.0389 369.8342)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="1.5"
                                                        height="13.9"
                                                    />
                                                    <rect
                                                        id="XMLID_247_"
                                                        x="314.3"
                                                        y="93.6"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 93.0986 349.969)"
                                                        style={{ fill: "#A62257" }}
                                                        width="6.7"
                                                        height="18.6"
                                                    />
                                                    <rect
                                                        id="XMLID_246_"
                                                        x="316.9"
                                                        y="95.9"
                                                        transform="matrix(0.4123 -0.911 0.911 0.4123 92.9673 349.8214)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="1.5"
                                                        height="13.9"
                                                    />
                                                    <rect
                                                        id="XMLID_245_"
                                                        x={300}
                                                        y="88.2"
                                                        transform="matrix(0.4128 -0.9108 0.9108 0.4128 89.9377 329.8427)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="1.5"
                                                        height="13.9"
                                                    />
                                                    <rect
                                                        id="XMLID_244_"
                                                        x={283}
                                                        y="80.6"
                                                        transform="matrix(0.412 -0.9112 0.9112 0.412 87.1145 310.0597)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="1.5"
                                                        height="13.9"
                                                    />
                                                    <rect
                                                        id="XMLID_243_"
                                                        x="266.2"
                                                        y={73}
                                                        transform="matrix(0.4125 -0.9109 0.9109 0.4125 84.0239 290.0887)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="1.5"
                                                        height="13.9"
                                                    />
                                                    <rect
                                                        id="XMLID_242_"
                                                        x="299.3"
                                                        y="111.9"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 71.4553 353.1837)"
                                                        style={{ fill: "#F6A1A3" }}
                                                        width="20.2"
                                                        height="18.6"
                                                    />
                                                    <rect
                                                        id="XMLID_241_"
                                                        x="269.8"
                                                        y="93.5"
                                                        transform="matrix(0.4118 -0.9113 0.9113 0.4118 68.9978 312.4995)"
                                                        style={{ fill: "#F6A1A3" }}
                                                        width="13.5"
                                                        height="18.6"
                                                    />
                                                    <rect
                                                        id="XMLID_240_"
                                                        x="238.4"
                                                        y="103.6"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 39.249 286.6585)"
                                                        style={{ fill: "#F6A1A3" }}
                                                        width="6.7"
                                                        height="18.6"
                                                    />
                                                    <rect
                                                        id="XMLID_239_"
                                                        x="318.3"
                                                        y="144.9"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 50.6249 386.8267)"
                                                        style={{ fill: "#F6A1A3" }}
                                                        width="13.5"
                                                        height="18.6"
                                                    />
                                                    <rect
                                                        id="XMLID_238_"
                                                        x="324.6"
                                                        y="123.5"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 75.8324 383.0611)"
                                                        style={{ fill: "#A62257" }}
                                                        width="20.2"
                                                        height="18.6"
                                                    />
                                                    <rect
                                                        id="XMLID_237_"
                                                        x="297.6"
                                                        y="130.4"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 49.7324 356.418)"
                                                        style={{ fill: "#F6A1A3" }}
                                                        width="6.7"
                                                        height="18.6"
                                                    />
                                                    <rect
                                                        id="XMLID_236_"
                                                        x="269.1"
                                                        y="58.3"
                                                        transform="matrix(0.4118 -0.9113 0.9113 0.4118 98.628 288.0096)"
                                                        style={{ fill: "#A62257" }}
                                                        width="6.7"
                                                        height="18.6"
                                                    />
                                                    <rect
                                                        id="XMLID_235_"
                                                        x="256.8"
                                                        y="114.9"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 43.7887 316.2596)"
                                                        style={{ fill: "#A62257" }}
                                                        width="20.2"
                                                        height="18.6"
                                                    />
                                                    <rect
                                                        id="XMLID_234_"
                                                        x="271.7"
                                                        y="60.7"
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 98.6263 288.0601)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="1.5"
                                                        height="13.9"
                                                    />
                                                    <rect
                                                        id="XMLID_233_"
                                                        x={241}
                                                        y={106}
                                                        transform="matrix(0.4119 -0.9112 0.9112 0.4119 39.2577 286.7132)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="1.5"
                                                        height="13.9"
                                                    />
                                                    <g id="XMLID_226_">
                                                        <g id="XMLID_28_">
                                                            <rect
                                                                id="XMLID_30_"
                                                                x="277.2"
                                                                y="92.8"
                                                                transform="matrix(0.412 -0.9112 0.9112 0.412 72.5628 311.9624)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="13.9"
                                                            />
                                                            <rect
                                                                id="XMLID_29_"
                                                                x="274.5"
                                                                y="102.5"
                                                                transform="matrix(0.4119 -0.9112 0.9112 0.4119 65.4119 313.0918)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="6.7"
                                                            />
                                                        </g>
                                                    </g>
                                                    <g id="XMLID_219_">
                                                        <g id="XMLID_24_">
                                                            <rect
                                                                id="XMLID_26_"
                                                                x="325.7"
                                                                y="144.2"
                                                                transform="matrix(0.4118 -0.9113 0.9113 0.4118 54.2547 386.349)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="13.9"
                                                            />
                                                            <rect
                                                                id="XMLID_25_"
                                                                x="320.3"
                                                                y="152.1"
                                                                transform="matrix(0.4117 -0.9113 0.9113 0.4117 46.5129 384.4148)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="8.2"
                                                            />
                                                        </g>
                                                    </g>
                                                    <g id="XMLID_206_">
                                                        <g id="XMLID_57_">
                                                            <rect
                                                                id="XMLID_62_"
                                                                x="268.9"
                                                                y="111.2"
                                                                transform="matrix(0.4118 -0.9113 0.9113 0.4118 50.9099 315.2299)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="13.9"
                                                            />
                                                            <rect
                                                                id="XMLID_61_"
                                                                x={269}
                                                                y="121.7"
                                                                transform="matrix(0.4119 -0.9112 0.9112 0.4119 44.2502 319.6504)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="7.7"
                                                            />
                                                            <rect
                                                                id="XMLID_60_"
                                                                x="261.5"
                                                                y="120.3"
                                                                transform="matrix(0.4116 -0.9114 0.9114 0.4116 42.9271 310.9171)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="3.9"
                                                            />
                                                            <rect
                                                                id="XMLID_59_"
                                                                x="264.6"
                                                                y="129.1"
                                                                transform="matrix(0.4116 -0.9114 0.9114 0.4116 36.8031 318.8437)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="3.6"
                                                            />
                                                            <rect
                                                                id="XMLID_58_"
                                                                x="259.5"
                                                                y="125.9"
                                                                transform="matrix(0.4121 -0.9111 0.9111 0.4121 35.7766 312.8042)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="5.5"
                                                            />
                                                        </g>
                                                    </g>
                                                    <rect
                                                        id="XMLID_205_"
                                                        x="300.3"
                                                        y="132.8"
                                                        transform="matrix(0.4118 -0.9113 0.9113 0.4118 49.75 356.48)"
                                                        style={{ fill: "#FFFFFF" }}
                                                        width="1.5"
                                                        height="13.9"
                                                    />
                                                    <g id="XMLID_194_">
                                                        <g id="XMLID_44_">
                                                            <rect
                                                                id="XMLID_48_"
                                                                x="314.5"
                                                                y={113}
                                                                transform="matrix(0.412 -0.9112 0.9112 0.412 79.1662 355.7488)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height={7}
                                                            />
                                                            <rect
                                                                id="XMLID_47_"
                                                                x="307.2"
                                                                y="110.8"
                                                                transform="matrix(0.4117 -0.9113 0.9113 0.4117 77.9332 347.2859)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="4.9"
                                                            />
                                                            <rect
                                                                id="XMLID_46_"
                                                                x="308.5"
                                                                y="114.3"
                                                                transform="matrix(0.4119 -0.9112 0.9112 0.4119 71.4062 353.1403)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="13.9"
                                                            />
                                                            <rect
                                                                id="XMLID_45_"
                                                                x="303.9"
                                                                y="121.7"
                                                                transform="matrix(0.4119 -0.9112 0.9112 0.4119 63.8432 352.0443)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="9.8"
                                                            />
                                                        </g>
                                                    </g>
                                                    <g id="XMLID_183_">
                                                        <g id="XMLID_38_">
                                                            <rect
                                                                id="XMLID_42_"
                                                                x="336.7"
                                                                y="119.7"
                                                                transform="matrix(0.4119 -0.9112 0.9112 0.4119 83.111 382.0013)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.6"
                                                                height="13.9"
                                                            />
                                                            <rect
                                                                id="XMLID_41_"
                                                                x="331.4"
                                                                y="127.4"
                                                                transform="matrix(0.4118 -0.9113 0.9113 0.4118 75.4512 380.1302)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.6"
                                                                height="8.5"
                                                            />
                                                            <rect
                                                                id="XMLID_40_"
                                                                x="338.6"
                                                                y="133.1"
                                                                transform="matrix(0.4116 -0.9114 0.9114 0.4116 76.7817 388.6273)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="3.6"
                                                            />
                                                            <rect
                                                                id="XMLID_39_"
                                                                x="327.7"
                                                                y="134.2"
                                                                transform="matrix(0.4119 -0.9112 0.9112 0.4119 68.0068 379.9977)"
                                                                style={{ fill: "#FFFFFF" }}
                                                                width="1.5"
                                                                height="6.2"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                                <g className="laptop">
                                                    <linearGradient
                                                        id="XMLID_2_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="217.9163"
                                                        y1="18.9847"
                                                        x2="204.7229"
                                                        y2="196.4352"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_181_"
                                                        style={{ fill: "url(#XMLID_2_z)" }}
                                                        d="M106.5,213.5v112.6c0,2.5,1,5,2.9,6.9s4.4,2.9,6.9,2.9h189.1
		c2.5,0,5-1,6.9-2.9s2.9-4.4,2.9-6.9V213.5H106.5z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_3_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="213.9662"
                                                        y1="56.6688"
                                                        x2="206.7098"
                                                        y2="90.9716"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_180_"
                                                        style={{ fill: "url(#XMLID_3_z)" }}
                                                        d="M236.8,327.5c0,0.4-0.4,0.8-0.8,0.8h-50.3c-0.4,0-0.8-0.4-0.8-0.8v-29.8
		c0-0.4,0.3-0.8,0.8-0.8H236c0.4,0,0.8,0.4,0.8,0.8V327.5z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_4_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="210.7405"
                                                        y1="243.8982"
                                                        x2="211.4002"
                                                        y2="140.9877"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_112_"
                                                        style={{ fill: "url(#XMLID_4_z)" }}
                                                        d="M116.3,91.1c-2.5,0-5,1-6.9,2.9s-2.9,4.4-2.9,6.9v112.6h208.7V100.9
		c0-2.5-1-5-2.9-6.9s-4.4-2.9-6.9-2.9H116.3z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_5_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="208.4907"
                                                        y1="287.45"
                                                        x2="213.1743"
                                                        y2="287.45"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_111_"
                                                        style={{ fill: "url(#XMLID_5_z)" }}
                                                        d="M213.2,96.5c0,1.3-1,2.4-2.3,2.4s-2.3-1.1-2.3-2.4s1-2.3,2.3-2.3
		C212.1,94.2,213.2,95.2,213.2,96.5z"
                                                    />
                                                    <path
                                                        id="XMLID_110_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M211.8,96.5c0,0.5-0.4,1-1,1c-0.5,0-1-0.4-1-1c0-0.5,0.4-0.9,1-0.9
		C211.4,95.6,211.8,96,211.8,96.5z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_9_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="295.9"
                                                        y1="170.5"
                                                        x2="309.6139"
                                                        y2="170.5"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <rect
                                                        id="XMLID_109_"
                                                        x="295.9"
                                                        y="209.1"
                                                        style={{ fill: "url(#XMLID_9_z)" }}
                                                        width="13.7"
                                                        height="8.8"
                                                    />
                                                    <rect
                                                        id="XMLID_108_"
                                                        x="295.9"
                                                        y="213.5"
                                                        style={{ fill: "#7F245F" }}
                                                        width="13.7"
                                                        height="4.4"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_10_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="112.0454"
                                                        y1="170.5"
                                                        x2="125.7454"
                                                        y2="170.5"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <rect
                                                        id="XMLID_107_"
                                                        x={112}
                                                        y="209.1"
                                                        style={{ fill: "url(#XMLID_10_z)" }}
                                                        width="13.7"
                                                        height="8.8"
                                                    />
                                                    <rect
                                                        id="XMLID_106_"
                                                        x={112}
                                                        y="213.5"
                                                        style={{ fill: "#7F245F" }}
                                                        width="13.7"
                                                        height="4.4"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_12_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="118.9"
                                                        y1="231.7"
                                                        x2="302.8"
                                                        y2="231.7"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="0.1902" style={{ stopColor: "#EFDFED" }} />
                                                        <stop offset={1} style={{ stopColor: "#FDF0F6" }} />
                                                    </linearGradient>
                                                    <polygon
                                                        id="XMLID_105_"
                                                        style={{ fill: "url(#XMLID_12_z)" }}
                                                        points="210.8,103.3 210.8,103.3 118.9,103.3 118.9,201.3 210.8,201.3
		210.8,201.3 302.8,201.3 302.8,103.3 	"
                                                    />
                                                </g>
                                                <g className="keyboard">
                                                    <path
                                                        id="XMLID_179_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M129.4,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_178_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M148.7,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        className="key-a key-11"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M151.8,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        id="XMLID_176_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M145.5,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        id="XMLID_175_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M129.4,288.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-10.9
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V288.6z"
                                                    />
                                                    <path
                                                        id="XMLID_174_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M142.2,288.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-10.9
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V288.6z"
                                                    />
                                                    <path
                                                        id="XMLID_173_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M155,288.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-10.9
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V288.6z"
                                                    />
                                                    <path
                                                        id="XMLID_172_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M264.3,288.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-10.9
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V288.6z"
                                                    />
                                                    <path
                                                        id="XMLID_171_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M277.1,288.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-4.9
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V288.6z"
                                                    />
                                                    <path
                                                        id="XMLID_170_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M302.8,288.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-4.9
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V288.6z"
                                                    />
                                                    <path
                                                        id="XMLID_169_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M171.1,288.6c0,0.3-0.3,0.6-0.6,0.6h-12.7c-0.3,0-0.6-0.3-0.6-0.6v-10.9
		c0-0.3,0.3-0.6,0.6-0.6h12.7c0.3,0,0.6,0.3,0.6,0.6V288.6z"
                                                    />
                                                    <path
                                                        id="XMLID_168_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M251.5,288.6c0,0.3-0.3,0.6-0.6,0.6h-12.7c-0.3,0-0.6-0.3-0.6-0.6v-10.9
		c0-0.3,0.3-0.6,0.6-0.6h12.7c0.3,0,0.6,0.3,0.6,0.6V288.6z"
                                                    />
                                                    <path
                                                        className="key-space key-12"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M235.3,288.6c0,0.3-0.3,0.6-0.6,0.6h-60.6c-0.3,0-0.6-0.3-0.6-0.6v-10.9
		c0-0.3,0.3-0.6,0.6-0.6h60.6c0.3,0,0.6,0.3,0.6,0.6L235.3,288.6L235.3,288.6z"
                                                    />
                                                    <path
                                                        id="XMLID_166_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M158.3,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        className="key-x key-8"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M171.1,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M184,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M196.8,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        className="key-b key-3"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M209.6,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M222.5,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M235.3,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        id="XMLID_159_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M248.1,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        id="XMLID_158_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M260.9,274.1c0,0.3-0.3,0.6-0.6,0.6H251c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        id="XMLID_157_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M273.8,274.1c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        id="XMLID_156_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M302.8,274.1c0,0.3-0.3,0.6-0.6,0.6h-25.4c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h25.4c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M164.6,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        className="key-d key-5"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M177.4,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M190.3,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        className="key-g key-2"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M203.1,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M215.9,261.3c0,0.3-0.3,0.6-0.6,0.6H206c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6L215.9,261.3L215.9,261.3z"
                                                    />
                                                    <path
                                                        className="key-j key-9"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M228.7,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M241.6,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        className="key-l key-6"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M254.4,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        id="XMLID_147_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M267.2,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        id="XMLID_146_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M280,261.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        id="XMLID_145_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M292.9,261.3c0,0.3-0.3,0.6-0.6,0.6H283c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        className="key-w key-1"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M161.6,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M174.4,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        className="key-r key-4"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M187.2,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M200,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        id="XMLID_140_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M212.9,248.5c0,0.3-0.3,0.6-0.6,0.6H203c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M225.7,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        className="key-i key-7"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M238.5,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M251.4,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M264.2,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        id="XMLID_135_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M277,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        id="XMLID_134_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M289.8,248.5c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        id="XMLID_133_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M135.9,248.5c0,0.3-0.3,0.6-0.6,0.6h-15.8c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h15.8c0.3,0,0.6,0.3,0.6,0.6V248.5z"
                                                    />
                                                    <path
                                                        id="XMLID_132_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M302.8,235.6c0,0.3-0.3,0.6-0.6,0.6h-15.8c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h15.8c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_131_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M139,261.3c0,0.3-0.3,0.6-0.6,0.6h-18.8c-0.3,0-0.6-0.3-0.6-0.6V252
		c0-0.3,0.3-0.6,0.6-0.6h18.8c0.3,0,0.6,0.3,0.6,0.6V261.3z"
                                                    />
                                                    <path
                                                        id="XMLID_130_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M132.7,274.1c0,0.3-0.3,0.6-0.6,0.6h-12.6c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h12.6c0.3,0,0.6,0.3,0.6,0.6V274.1z"
                                                    />
                                                    <path
                                                        id="XMLID_129_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M142.3,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_128_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M155.1,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_127_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M167.9,235.6c0,0.3-0.3,0.6-0.6,0.6H158c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6L167.9,235.6L167.9,235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_126_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M180.7,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_125_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M193.6,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_124_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M206.4,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_123_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M219.2,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_122_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M232,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_121_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M244.9,235.6c0,0.3-0.3,0.6-0.6,0.6H235c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6L244.9,235.6L244.9,235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_120_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M257.7,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_119_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M270.5,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_118_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M283.4,235.6c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6-0.3-0.6-0.6v-9.3
		c0-0.3,0.3-0.6,0.6-0.6h9.3c0.3,0,0.6,0.3,0.6,0.6V235.6z"
                                                    />
                                                    <path
                                                        id="XMLID_117_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M279.4,283.4v5.1c0,0.2,0.1,0.3,0.2,0.4s0.3,0.2,0.4,0.2h9.3c0.2,0,0.3-0.1,0.4-0.2
		s0.2-0.3,0.2-0.4v-5.1H279.4z"
                                                    />
                                                    <path
                                                        id="XMLID_116_"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M289.9,282.8v-5.1c0-0.1-0.1-0.3-0.2-0.4s-0.3-0.2-0.4-0.2H280
		c-0.2,0-0.3,0.1-0.4,0.2s-0.2,0.3-0.2,0.4v5.1H289.9z"
                                                    />
                                                    <path
                                                        className="key-enter key-10"
                                                        style={{ fill: "#FFFFFF" }}
                                                        d="M292.8,238.5c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.4v9.3
		c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.4,0.2h2.4v12.2c0,0.2,0.1,0.3,0.2,0.4s0.3,0.2,0.4,0.2h6.3c0.2,0,0.3-0.1,0.4-0.2
		s0.2-0.3,0.2-0.4V239c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.2-0.4-0.2h-9.3V238.5z"
                                                    />
                                                </g>
                                                <g className="coffee">
                                                    <path
                                                        id="XMLID_103_"
                                                        style={{ fill: "#E6E5E5" }}
                                                        d="M399,257.4c-0.3-0.5-0.7-0.9-1.1-1.3c-0.2-0.3-0.5-0.5-0.7-0.7
		c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7
		c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7
		c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7
		c-0.2-0.3-0.5-0.5-0.7-0.7c-0.2-0.3-0.4-0.5-0.7-0.7c-1.2-4.7-3.7-8.8-7.1-12.1c-0.2-0.3-12.4-12.4-12.7-12.7
		c-4.7-4.9-11.4-8-18.7-8c-14.4,0-26,11.6-26,26c0,7.4,3.1,14,8,18.7c0.2,0.3,12.4,12.4,12.7,12.7c4.7,4.9,11.4,8,18.7,8
		c10.5,0,19.6-6.2,23.7-15.2l3.4,0.9l0,0l7.5,2.1c1,0.3,2.2,0.2,3.2-0.4s1.7-1.5,1.9-2.5C399.6,259.5,399.5,258.4,399,257.4z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_13_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="368.8364"
                                                        y1="139.5681"
                                                        x2="386.1292"
                                                        y2="139.5681"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="0.1902" style={{ stopColor: "#EFDFED" }} />
                                                        <stop offset={1} style={{ stopColor: "#FDF0F6" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_102_"
                                                        style={{ fill: "url(#XMLID_13_z)" }}
                                                        d="M386,247.1c-0.3,1-1,1.9-2,2.5s-2.1,0.7-3.2,0.4l-12-3.3l2.2-8l12,3.3
		c1,0.3,1.9,1,2.5,2C386.2,245,386.3,246.1,386,247.1z"
                                                    />
                                                    <path
                                                        id="XMLID_92_"
                                                        style={{ fill: "#D9D8D7" }}
                                                        d="M371,238.7l-2.2,8l4.5,1.2c1.1-2.5,1.8-5.2,2.2-8L371,238.7z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_16_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="320.3"
                                                        y1="147.7"
                                                        x2="372.3"
                                                        y2="147.7"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="0.1902" style={{ stopColor: "#EFDFED" }} />
                                                        <stop offset={1} style={{ stopColor: "#FDF0F6" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_91_"
                                                        style={{ fill: "url(#XMLID_16_z)" }}
                                                        d="M372.3,236.3c0,14.4-11.6,26-26,26s-26-11.6-26-26s11.6-26,26-26
		C360.6,210.3,372.3,221.9,372.3,236.3z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_17_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="324.4409"
                                                        y1="147.7"
                                                        x2="368.1098"
                                                        y2="147.7"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_90_"
                                                        style={{ fill: "url(#XMLID_17_z)" }}
                                                        d="M368.1,236.3c0,12.1-9.8,21.8-21.8,21.8c-12.1,0-21.8-9.8-21.8-21.8
		c0-12.1,9.8-21.8,21.8-21.8C358.3,214.5,368.1,224.2,368.1,236.3z"
                                                    />
                                                    <path
                                                        id="XMLID_89_"
                                                        style={{ fill: "#CE5C59" }}
                                                        d="M330.7,242.5c0-12.1,9.8-21.8,21.8-21.8c4.4,0,8.6,1.3,12,3.6
		c-3.9-5.9-10.6-9.8-18.2-9.8c-12.1,0-21.8,9.8-21.8,21.8c0,7.6,3.9,14.3,9.8,18.2C332,251.1,330.7,247,330.7,242.5z"
                                                    />
                                                </g>
                                                <g className="mouse hover origin-center">
                                                    <linearGradient
                                                        id="XMLID_20_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="86.2436"
                                                        y1="78.5"
                                                        x2="126.6436"
                                                        y2="78.5"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_87_"
                                                        style={{ fill: "url(#XMLID_20_z)" }}
                                                        d="M126.7,326.7c0,8.2-6.7,14.8-14.8,14.8h-10.8c-8.2,0-14.8-6.7-14.8-14.8
		v-42.4c0-8.2,6.7-14.8,14.8-14.8h10.8c8.2,0,14.8,6.7,14.8,14.8V326.7z"
                                                    />
                                                    <path
                                                        id="XMLID_86_"
                                                        style={{ fill: "#CE5C59" }}
                                                        d="M119.9,271.8c0.1,0.8,0.2,1.7,0.2,2.6v32.2c0,6.4-2.4,12.8-7.3,17.7
		c-4.9,4.9-11.3,7.4-17.7,7.4h-0.5c-2.9,0-5.7-0.9-8-2.4c1.2,6.9,7.3,12.3,14.6,12.3H112c8.2,0,14.8-6.7,14.8-14.8v-42.4
		C126.7,279.1,123.9,274.5,119.9,271.8z"
                                                    />
                                                    <path
                                                        id="XMLID_85_"
                                                        style={{ fill: "#582768" }}
                                                        d="M109.8,285c0,1.9-1.5,3.4-3.4,3.4s-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4
		S109.8,283.1,109.8,285z"
                                                    />
                                                </g>
                                                <g className="wp-logo origin-center">
                                                    <linearGradient
                                                        id="wp-logo--outline_1_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="173.1"
                                                        y1="230.9"
                                                        x2="246.7875"
                                                        y2="230.9"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="wp-logo--outline"
                                                        style={{ fill: "url(#wp-logo--outline_1_z)" }}
                                                        d="M209.9,118.5c4.7,0,9.2,0.9,13.5,2.7
		c2.1,0.9,4,1.9,5.9,3.2c1.8,1.2,3.6,2.7,5.1,4.2c1.6,1.6,3,3.3,4.2,5.1c1.3,1.9,2.3,3.8,3.2,5.9c1.8,4.3,2.7,8.8,2.7,13.5
		s-0.9,9.2-2.7,13.5c-0.9,2.1-1.9,4-3.2,5.9c-1.2,1.8-2.7,3.6-4.2,5.1c-1.6,1.6-3.3,3-5.1,4.2c-1.9,1.3-3.8,2.3-5.9,3.2
		c-4.3,1.8-8.8,2.7-13.5,2.7s-9.2-0.9-13.5-2.7c-2.1-0.9-4-1.9-5.9-3.2c-1.8-1.2-3.6-2.7-5.1-4.2c-1.6-1.6-3-3.3-4.2-5.1
		c-1.3-1.9-2.3-3.8-3.2-5.9c-1.8-4.3-2.7-8.8-2.7-13.5s0.9-9.2,2.7-13.5c0.9-2.1,1.9-4,3.2-5.9c1.2-1.8,2.7-3.6,4.2-5.1
		c1.6-1.6,3.3-3,5.1-4.2c1.9-1.3,3.8-2.3,5.9-3.2C200.7,119.4,205.2,118.5,209.9,118.5 M209.9,116.3c-20.3,0-36.8,16.5-36.8,36.8
		s16.5,36.8,36.8,36.8s36.8-16.5,36.8-36.8S230.2,116.3,209.9,116.3"
                                                    />
                                                    <linearGradient
                                                        id="wp-logo--logo_1_"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="179.2"
                                                        y1="230.85"
                                                        x2="240.6"
                                                        y2="230.85"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="wp-logo--logo"
                                                        style={{ fill: "url(#wp-logo--logo_1_)" }}
                                                        d="M179.2,153.1c0,12.2,7.1,22.7,17.3,27.6l-14.6-40.1
		C180.1,144.4,179.2,148.6,179.2,153.1 M230.6,151.6c0-3.8-1.4-6.4-2.5-8.5c-1.6-2.5-3-4.7-3-7.2c0-2.8,2.1-5.4,5.2-5.4
		c0.1,0,0.3,0,0.4,0c-5.5-5-12.7-8.1-20.7-8.1c-10.7,0-20.2,5.5-25.7,13.8c0.7,0,1.4,0,2,0c3.2,0,8.2-0.4,8.2-0.4
		c1.7-0.1,1.9,2.3,0.2,2.5c0,0-1.7,0.2-3.5,0.3l11.2,33.3l6.7-20.2l-4.8-13.1c-1.7-0.1-3.2-0.3-3.2-0.3c-1.7-0.1-1.5-2.6,0.2-2.5
		c0,0,5.1,0.4,8.1,0.4c3.2,0,8.2-0.4,8.2-0.4c1.7-0.1,1.9,2.3,0.2,2.5c0,0-1.7,0.2-3.5,0.3l11.1,33l3.2-10
		C229.8,157.3,230.6,154.2,230.6,151.6 M210.4,155.8l-9.2,26.8c2.8,0.8,5.7,1.3,8.7,1.3c3.6,0,7-0.6,10.2-1.7
		c-0.1-0.1-0.2-0.3-0.2-0.4L210.4,155.8z M236.8,138.4c0.1,1,0.2,2,0.2,3.2c0,3.1-0.6,6.6-2.3,11l-9.4,27.1
		c9.1-5.3,15.3-15.2,15.3-26.5C240.6,147.8,239.2,142.7,236.8,138.4"
                                                    />
                                                </g>
                                                <g className="code">
                                                    <linearGradient
                                                        id="XMLID_21_z"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="129.2212"
                                                        y1="313.3991"
                                                        x2="129.7788"
                                                        y2="226.4009"
                                                        gradientTransform="matrix(1 0 0 -1 0 384)"
                                                    >
                                                        <stop offset="9.016399e-02" style={{ stopColor: "#A62257" }} />
                                                        <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                        <stop offset={1} style={{ stopColor: "#582768" }} />
                                                    </linearGradient>
                                                    <circle
                                                        id="XMLID_104_"
                                                        style={{ fill: "url(#XMLID_21_z)" }}
                                                        cx="129.5"
                                                        cy="114.1"
                                                        r="43.5"
                                                    />
                                                    <g className="circle-bg">
                                                        <defs>
                                                            <circle id="SVGID_1_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_2_">
                                                            <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <linearGradient
                                                            id="XMLID_23_z"
                                                            gradientUnits="userSpaceOnUse"
                                                            x1="112.1025"
                                                            y1="313.3938"
                                                            x2="155.6416"
                                                            y2="204.546"
                                                            gradientTransform="matrix(1 0 0 -1 0 384)"
                                                        >
                                                            <stop offset="6.016400e-02" style={{ stopColor: "#DB6B86" }} />
                                                            <stop offset="8.596202e-02" style={{ stopColor: "#DC6D87" }} />
                                                            <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                        </linearGradient>
                                                        <circle
                                                            id="XMLID_74_"
                                                            style={{ clipPath: "url(#SVGID_2_)", fill: "url(#XMLID_23_z)" }}
                                                            cx="129.5"
                                                            cy="114.1"
                                                            r="36.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_3_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_4_">
                                                            <use xlinkHref="#SVGID_3_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_71_"
                                                            x={96}
                                                            y="77.4"
                                                            style={{ clipPath: "url(#SVGID_4_)", fill: "#F58360" }}
                                                            width="5.7"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_5_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_6_">
                                                            <use xlinkHref="#SVGID_5_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_70_"
                                                            x={96}
                                                            y="93.5"
                                                            style={{ clipPath: "url(#SVGID_6_)", fill: "#F6A1A3" }}
                                                            width="5.7"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_7_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_8_">
                                                            <use xlinkHref="#SVGID_7_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_67_"
                                                            x="103.3"
                                                            y="77.4"
                                                            style={{ clipPath: "url(#SVGID_8_)", fill: "#582768" }}
                                                            width={27}
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_9_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_10_">
                                                            <use xlinkHref="#SVGID_9_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_66_"
                                                            x="103.3"
                                                            y="93.5"
                                                            style={{ clipPath: "url(#SVGID_10_)", fill: "#F6A1A3" }}
                                                            width="20.7"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_11_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_12_">
                                                            <use xlinkHref="#SVGID_11_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_65_"
                                                            x="101.8"
                                                            y="83.5"
                                                            style={{ clipPath: "url(#SVGID_12_)", fill: "#FFFFFF" }}
                                                            width="9.1"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_13_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_14_">
                                                            <use xlinkHref="#SVGID_13_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_64_"
                                                            x="101.8"
                                                            y="111.9"
                                                            style={{ clipPath: "url(#SVGID_14_)", fill: "#FFFFFF" }}
                                                            width="9.1"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_15_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_16_">
                                                            <use xlinkHref="#SVGID_15_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            className="code-line hover code-line5 origin-left"
                                                            id="XMLID_63_"
                                                            x={113}
                                                            y="111.9"
                                                            style={{ clipPath: "url(#SVGID_16_)", fill: "#FFFFFF" }}
                                                            width="23.8"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_17_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_18_">
                                                            <use xlinkHref="#SVGID_17_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_54_"
                                                            x="106.9"
                                                            y={124}
                                                            style={{ clipPath: "url(#SVGID_18_)", fill: "#582768" }}
                                                            width="7.5"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_19_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_20_">
                                                            <use xlinkHref="#SVGID_19_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_53_"
                                                            x="118.4"
                                                            y="148.6"
                                                            style={{ clipPath: "url(#SVGID_20_)", fill: "#F6A1A3" }}
                                                            width="13.2"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_21_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_22_">
                                                            <use xlinkHref="#SVGID_21_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_52_"
                                                            x="159.1"
                                                            y="136.3"
                                                            style={{ clipPath: "url(#SVGID_22_)", fill: "#F6A1A3" }}
                                                            width="9.8"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_23_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_24_">
                                                            <use xlinkHref="#SVGID_23_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_51_"
                                                            x="139.5"
                                                            y="111.9"
                                                            style={{ clipPath: "url(#SVGID_24_)", fill: "#F6A1A3" }}
                                                            width="17.1"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_25_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_26_">
                                                            <use xlinkHref="#SVGID_25_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_49_"
                                                            x="160.1"
                                                            y="111.9"
                                                            style={{ clipPath: "url(#SVGID_26_)", fill: "#FFFFFF" }}
                                                            width="10.5"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_27_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_28_">
                                                            <use xlinkHref="#SVGID_27_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            className="code-line hover code-line1 origin-left"
                                                            id="XMLID_43_"
                                                            x="101.8"
                                                            y="99.7"
                                                            style={{ clipPath: "url(#SVGID_28_)", fill: "#FFFFFF" }}
                                                            width="13.6"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_29_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_30_">
                                                            <use xlinkHref="#SVGID_29_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            className="code-line hover code-line3 origin-left"
                                                            id="XMLID_37_"
                                                            x="101.8"
                                                            y="105.8"
                                                            style={{ clipPath: "url(#SVGID_30_)", fill: "#FFFFFF" }}
                                                            width="19.3"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_31_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_32_">
                                                            <use xlinkHref="#SVGID_31_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            className="code-line hover code-line6 origin-left"
                                                            id="XMLID_36_"
                                                            x="106.9"
                                                            y="130.2"
                                                            style={{ clipPath: "url(#SVGID_32_)", fill: "#FFFFFF" }}
                                                            width="22.1"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_33_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_34_">
                                                            <use xlinkHref="#SVGID_33_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_35_"
                                                            x="106.9"
                                                            y="136.3"
                                                            style={{ clipPath: "url(#SVGID_34_)", fill: "#FFFFFF" }}
                                                            width="20.3"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_35_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_36_">
                                                            <use xlinkHref="#SVGID_35_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            className="code-line hover code-line8 origin-left"
                                                            id="XMLID_34_"
                                                            x="133.8"
                                                            y="136.3"
                                                            style={{ clipPath: "url(#SVGID_36_)", fill: "#FFFFFF" }}
                                                            width={21}
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_37_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_38_">
                                                            <use xlinkHref="#SVGID_37_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_31_"
                                                            x="133.8"
                                                            y="148.6"
                                                            style={{ clipPath: "url(#SVGID_38_)", fill: "#F6A1A3" }}
                                                            width={21}
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_39_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_40_">
                                                            <use xlinkHref="#SVGID_39_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_22_"
                                                            x={96}
                                                            y={124}
                                                            style={{ clipPath: "url(#SVGID_40_)", fill: "#582768" }}
                                                            width="7.8"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_41_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_42_">
                                                            <use xlinkHref="#SVGID_41_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_19_"
                                                            x="106.9"
                                                            y="148.6"
                                                            style={{ clipPath: "url(#SVGID_42_)", fill: "#FFFFFF" }}
                                                            width={9}
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_43_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_44_">
                                                            <use xlinkHref="#SVGID_43_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_18_"
                                                            x="111.5"
                                                            y="142.4"
                                                            style={{ clipPath: "url(#SVGID_44_)", fill: "#F6A1A3" }}
                                                            width="13.8"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_45_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_46_">
                                                            <use xlinkHref="#SVGID_45_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            className="code-line hover code-line7 origin-left"
                                                            id="XMLID_15_"
                                                            x="127.3"
                                                            y="142.4"
                                                            style={{ clipPath: "url(#SVGID_46_)", fill: "#FFFFFF" }}
                                                            width="35.7"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_47_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_48_">
                                                            <use xlinkHref="#SVGID_47_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            className="code-line hover code-line4 origin-left"
                                                            id="XMLID_14_"
                                                            x="123.1"
                                                            y="105.8"
                                                            style={{ clipPath: "url(#SVGID_48_)", fill: "#FFFFFF" }}
                                                            width="19.3"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_49_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_50_">
                                                            <use xlinkHref="#SVGID_49_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_11_"
                                                            x="162.7"
                                                            y="105.8"
                                                            style={{ clipPath: "url(#SVGID_50_)", fill: "#582768" }}
                                                            width="11.3"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_51_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_52_">
                                                            <use xlinkHref="#SVGID_51_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_8_"
                                                            x="143.7"
                                                            y="105.8"
                                                            style={{ clipPath: "url(#SVGID_52_)", fill: "#FFFFFF" }}
                                                            width={12}
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_53_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_54_">
                                                            <use xlinkHref="#SVGID_53_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            className="code-line hover code-line2 origin-left"
                                                            id="XMLID_7_"
                                                            x="119.8"
                                                            y="99.7"
                                                            style={{ clipPath: "url(#SVGID_54_)", fill: "#FFFFFF" }}
                                                            width="20.9"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                    <g>
                                                        <defs>
                                                            <circle id="SVGID_55_" cx="129.5" cy="114.5" r="36.3" />
                                                        </defs>
                                                        <clipPath id="SVGID_56_">
                                                            <use xlinkHref="#SVGID_55_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <rect
                                                            id="XMLID_6_"
                                                            x="116.6"
                                                            y="83.5"
                                                            style={{ clipPath: "url(#SVGID_56_)", fill: "#FFFFFF" }}
                                                            width="8.4"
                                                            height="2.3"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                            <Link to="/contact">Contact Now</Link>
                                        </div>
                                    </div>


                                    <div className='col-lg-3 col-md-12'>
                                        {/*Support & Maintenance*/}
                                        <div className="card">
                                            <h2>Support &amp; Maintenance</h2>
                                            <svg className="icon-support" viewBox="0 0 297.8 338.3">
                                                <g id="XMLID_2_">
                                                    <linearGradient
                                                        id="XMLID_152_ccc"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="306.8558"
                                                        y1="121.1685"
                                                        x2="473.9469"
                                                        y2="288.2596"
                                                        gradientTransform="matrix(1.2556 -8.690000e-002 -8.690000e-002 1.3971 -298.7608 -66.8389)"
                                                    >
                                                        <stop offset="0.1902" style={{ stopColor: "#3498db" }} />
                                                        <stop offset={1} style={{ stopColor: "#3498db" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_103_"
                                                        fill="url(#XMLID_152_ccc)"
                                                        d="M101.1,289.7c-34.4-24.1-93.1-10-98.9-63.8C-3.6,171.5,43.5,110,79,72.7
			c82.9-87,156.4-99.9,206.4,1.3c9.7,19.6,18,53.7,1.4,82.8c-9.7,16.9-36.5,21.1-40.2,41.2c-6.8,36.3,34.5,60.9,11.2,107.9
			C223.2,375.4,129.7,309.7,101.1,289.7z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_153_cc"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="49.8059"
                                                        y1="126.9058"
                                                        x2="168.7503"
                                                        y2="126.9058"
                                                    >
                                                        <stop offset="6.016400e-002" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-002" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_100_"
                                                        className="gear-m hover origin-center"
                                                        fill="url(#XMLID_153_cc)"
                                                        d="M168.7,119.5l-1-5.4c-0.1-0.4-0.4-0.6-0.8-0.6l-4.4,0.8c-0.9-4-2.3-7.8-4.1-11.4l4-2.3
			c0.3-0.2,0.4-0.6,0.3-0.9l-2.8-4.8c-0.2-0.3-0.6-0.4-0.9-0.3l-3.9,2.3c-2.2-3.4-4.8-6.5-7.7-9.3l2.9-3.5c0.2-0.3,0.2-0.7-0.1-1
			l-4.3-3.5c-0.3-0.2-0.7-0.2-1,0.1l-2.9,3.5c-3.2-2.4-6.7-4.5-10.5-6.1l1.5-4.3c0.1-0.4-0.1-0.8-0.4-0.9l-5.2-1.9
			c-0.4-0.1-0.8,0.1-0.9,0.4l-1.5,4.2c-3.8-1.1-7.8-1.8-11.9-2.1l0-4.6c0-0.4-0.3-0.7-0.7-0.7l-5.5,0c-0.4,0-0.7,0.3-0.7,0.7l0,4.6
			c-4.1,0.2-8.1,0.9-12,2L92.6,70c-0.1-0.4-0.5-0.5-0.9-0.4l-5.2,1.9c-0.4,0.1-0.5,0.5-0.4,0.9l1.6,4.2c-3.8,1.6-7.2,3.7-10.5,6.1
			l-3-3.5c-0.2-0.3-0.7-0.3-1-0.1l-4.2,3.6c-0.3,0.2-0.3,0.7-0.1,1l2.9,3.5c-2.9,2.8-5.6,5.8-7.9,9.2l-4-2.3
			c-0.3-0.2-0.8-0.1-0.9,0.3l-2.7,4.8c-0.2,0.3-0.1,0.8,0.3,0.9l3.9,2.2c-1.8,3.6-3.2,7.4-4.2,11.4l-4.6-0.8
			c-0.4-0.1-0.7,0.2-0.8,0.6L50,119c-0.1,0.4,0.2,0.7,0.6,0.8l4.5,0.8c-0.3,2.2-0.4,4.5-0.4,6.8c0,1.8,0.1,3.6,0.3,5.3l-4.5,0.8
			c-0.4,0.1-0.6,0.4-0.6,0.8l1,5.4c0.1,0.4,0.4,0.6,0.8,0.6l4.4-0.8c0.9,4,2.3,7.8,4.1,11.4l-4,2.3c-0.3,0.2-0.4,0.6-0.2,1l2.8,4.8
			c0.2,0.3,0.6,0.4,0.9,0.2l3.9-2.3c2.2,3.4,4.8,6.5,7.7,9.3l-2.9,3.5c-0.2,0.3-0.2,0.7,0.1,1l4.3,3.5c0.3,0.2,0.7,0.2,1-0.1l2.9-3.5
			c3.2,2.4,6.7,4.5,10.4,6.1l-1.5,4.3c-0.1,0.4,0.1,0.8,0.4,0.9l5.2,1.9c0.4,0.1,0.8-0.1,0.9-0.4l1.5-4.2c3.8,1.1,7.8,1.8,11.9,2.1
			l0,4.6c0,0.4,0.3,0.7,0.7,0.7l5.5-0.1c0.4,0,0.7-0.3,0.7-0.7l0-4.6c4.1-0.2,8.1-0.9,11.9-2l1.6,4.3c0.1,0.4,0.5,0.5,0.9,0.4
			l5.2-1.9c0.4-0.1,0.5-0.5,0.4-0.9l-1.6-4.2c3.7-1.6,7.3-3.7,10.5-6.1l3,3.5c0.2,0.3,0.7,0.3,1,0.1l4.2-3.6c0.3-0.3,0.3-0.7,0.1-1
			l-2.9-3.5c2.9-2.8,5.6-5.8,7.9-9.2l4,2.3c0.3,0.2,0.8,0.1,1-0.3l2.7-4.8c0.2-0.3,0.1-0.8-0.3-0.9l-3.9-2.2
			c1.8-3.6,3.2-7.4,4.2-11.4l4.6,0.8c0.4,0.1,0.7-0.2,0.8-0.6l0.9-5.5c0.1-0.4-0.2-0.7-0.6-0.8l-4.5-0.8c0.3-2.2,0.4-4.5,0.4-6.8
			c0-1.8-0.1-3.6-0.3-5.3l4.5-0.8C168.6,120.3,168.8,119.9,168.7,119.5z M109.4,140.5c-7.5,0.1-13.6-6-13.7-13.5
			c-0.1-7.5,6-13.6,13.5-13.7c7.5-0.1,13.6,6,13.7,13.5C122.9,134.3,116.9,140.4,109.4,140.5z"
                                                    />
                                                    <g id="XMLID_96_">
                                                        <path
                                                            id="XMLID_97_"
                                                            fill="#7D2360"
                                                            d="M109.3,157.5c-14.2,0-26.4-9.7-29.7-23.5c-1.9-7.9-0.6-16.1,3.7-23.1
				c4.3-6.9,11-11.8,18.9-13.7c2.3-0.6,4.7-0.8,7.1-0.8c14.2,0,26.4,9.7,29.7,23.5c1.9,7.9,0.6,16.1-3.7,23.1
				c-4.3,7-11,11.8-18.9,13.7C114,157.2,111.6,157.5,109.3,157.5L109.3,157.5z M109.3,98.1c-2.2,0-4.5,0.3-6.7,0.8
				c-7.5,1.8-13.8,6.4-17.8,12.9c-4,6.5-5.3,14.3-3.5,21.7c3.1,13,14.6,22.1,28,22.1c2.2,0,4.5-0.3,6.7-0.8
				c7.5-1.8,13.8-6.4,17.8-12.9c4-6.5,5.3-14.3,3.5-21.7C134.2,107.2,122.7,98.1,109.3,98.1L109.3,98.1z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_92_">
                                                        <path
                                                            id="XMLID_93_"
                                                            fill="#7D2360"
                                                            d="M109.3,164.3c-17.4,0-32.3-11.8-36.3-28.7c-2.3-9.7-0.7-19.7,4.5-28.2
				c5.2-8.5,13.5-14.5,23.2-16.8c2.9-0.7,5.8-1,8.7-1c17.4,0,32.3,11.8,36.3,28.7c4.8,20-7.6,40.2-27.7,45
				C115.1,164,112.2,164.3,109.3,164.3L109.3,164.3z M109.3,93c-2.6,0-5.3,0.3-7.9,0.9c-8.8,2.1-16.3,7.5-21,15.2
				c-4.7,7.7-6.2,16.8-4.1,25.6c3.6,15.3,17.2,26,32.9,26c2.6,0,5.3-0.3,7.9-0.9c18.2-4.3,29.4-22.6,25.1-40.8
				C138.6,103.7,125,93,109.3,93L109.3,93z"
                                                        />
                                                    </g>
                                                    <path
                                                        id="XMLID_89_"
                                                        className="gear-s hover origin-center"
                                                        fill="#5F2566"
                                                        d="M257,35.1l-3.9,0.9c-0.6-1.3-1.3-2.5-2.1-3.7l2.8-2.6c0.7-0.6,0.7-1.7,0.1-2.3l-4.6-4.8
			c-0.6-0.7-1.7-0.7-2.3-0.1l-2.9,2.7c-1.1-0.8-2.4-1.5-3.6-2.2l1.1-3.7c0.3-0.9-0.2-1.8-1.1-2.1l-6.4-1.9c-0.9-0.3-1.8,0.2-2.1,1.1
			l-1.1,3.8c-1.4-0.1-2.8-0.2-4.2-0.1l-0.9-3.7c-0.2-0.9-1.1-1.4-2-1.2l-6.5,1.5c-0.9,0.2-1.4,1.1-1.2,2l0.9,3.9
			c-1.3,0.6-2.5,1.3-3.7,2.1l-2.6-2.8c-0.6-0.7-1.7-0.7-2.4-0.1l-4.8,4.6c-0.7,0.6-0.7,1.7-0.1,2.3l2.7,2.9c-0.8,1.1-1.5,2.4-2.2,3.6
			l-3.7-1.1c-0.9-0.3-1.8,0.2-2.1,1.1l-1.9,6.4c-0.3,0.9,0.2,1.8,1.1,2.1l3.8,1.1c-0.1,1.4-0.1,2.8-0.1,4.2l-3.7,0.9
			c-0.9,0.2-1.5,1.1-1.2,2l1.5,6.5c0.2,0.9,1.1,1.5,2,1.2l3.9-0.9c0.6,1.3,1.3,2.5,2.1,3.7l-2.8,2.6c-0.7,0.6-0.7,1.7-0.1,2.3
			l4.6,4.8c0.6,0.7,1.7,0.7,2.3,0.1l2.9-2.7c1.2,0.8,2.4,1.5,3.6,2.2l-1.1,3.7c-0.3,0.9,0.2,1.8,1.1,2.1l6.4,1.9
			c0.9,0.3,1.8-0.2,2.1-1.1l1.1-3.8c1.4,0.1,2.8,0.2,4.2,0.1l0.9,3.7c0.2,0.9,1.1,1.4,2,1.2l6.5-1.5c0.9-0.2,1.4-1.1,1.2-2l-0.9-3.9
			c1.3-0.6,2.5-1.3,3.7-2l2.6,2.8c0.6,0.7,1.7,0.7,2.3,0.1l4.8-4.6c0.7-0.6,0.7-1.7,0.1-2.3l-2.7-2.9c0.8-1.1,1.5-2.4,2.2-3.6
			l3.7,1.1c0.9,0.3,1.8-0.2,2.1-1.1l1.9-6.4c0.3-0.9-0.2-1.8-1.1-2.1l-3.8-1.1c0.1-1.4,0.1-2.8,0.1-4.2l3.7-0.9
			c0.9-0.2,1.4-1.1,1.2-2l-1.5-6.5C258.8,35.4,257.9,34.9,257,35.1z M231.1,58.8c-6.3,1.5-12.6-2.4-14.1-8.7
			c-1.5-6.3,2.4-12.6,8.7-14.1c6.3-1.5,12.6,2.4,14.1,8.7C241.3,51,237.4,57.3,231.1,58.8z"
                                                    />
                                                    <g id="XMLID_82_">
                                                        <linearGradient
                                                            id="XMLID_154_c"
                                                            gradientUnits="userSpaceOnUse"
                                                            x1="121.1049"
                                                            y1="291.4615"
                                                            x2="185.4546"
                                                            y2="179.1774"
                                                        >
                                                            <stop offset="9.016400e-002" style={{ stopColor: "#A62257" }} />
                                                            <stop offset="0.4541" style={{ stopColor: "#86245E" }} />
                                                            <stop offset={1} style={{ stopColor: "#582768" }} />
                                                        </linearGradient>
                                                        <path
                                                            id="XMLID_18_"
                                                            className="gear-b hover origin-center"
                                                            fill="url(#XMLID_154_c)"
                                                            d="M227.6,235.6L219,233c0.3-3.1,0.3-6.3,0.1-9.5l8.4-2c2-0.5,3.2-2.5,2.8-4.5l-3.5-14.6
				c-0.5-2-2.5-3.3-4.5-2.8l-8.7,2.1c-1.4-2.9-2.9-5.7-4.6-8.3l6.3-5.9c1.5-1.4,1.6-3.8,0.1-5.3l-10.3-10.9c-1.4-1.5-3.8-1.6-5.3-0.1
				l-6.5,6.2c-2.6-1.8-5.3-3.5-8.2-4.9l2.5-8.3c0.6-2-0.5-4.1-2.5-4.7l-14.4-4.3c-2-0.6-4.1,0.5-4.7,2.5l-2.6,8.6
				c-3.1-0.3-6.3-0.3-9.5-0.1l-2-8.4c-0.5-2-2.5-3.3-4.5-2.8l-7.8,1.9l0,0l-6.8,1.6c-2,0.5-3.3,2.5-2.8,4.5l2.1,8.7
				c-2.9,1.3-5.7,2.9-8.3,4.6l-5.9-6.3c-1.4-1.5-3.8-1.6-5.3-0.1l-10.9,10.3c-1.5,1.4-1.6,3.8-0.1,5.3l6.2,6.5
				c-1.8,2.6-3.5,5.3-4.9,8.2l-8.3-2.5c-2-0.6-4.1,0.6-4.7,2.5l-4.3,14.4c-0.6,2,0.5,4.1,2.5,4.7l8.6,2.6c-0.3,3.1-0.3,6.3-0.1,9.5
				l-8.4,2c-2,0.5-3.3,2.5-2.8,4.5l3.5,14.6c0.5,2,2.5,3.3,4.5,2.8l8.7-2.1c1.3,2.9,2.9,5.7,4.6,8.3l-6.3,5.9
				c-1.5,1.4-1.6,3.8-0.1,5.3l10.3,10.9c1.4,1.5,3.8,1.6,5.3,0.1l6.5-6.2c2.6,1.8,5.3,3.5,8.2,4.9l-2.5,8.3c-0.6,2,0.5,4.1,2.5,4.7
				l14.4,4.3c2,0.6,4.1-0.5,4.7-2.5l2.6-8.6c3.1,0.3,6.3,0.3,9.5,0.1l2,8.4c0.5,2,2.5,3.3,4.5,2.8l5.2-1.2v0l9.4-2.2
				c2-0.5,3.3-2.5,2.8-4.5l-2.1-8.7c2.9-1.3,5.7-2.9,8.3-4.6l5.9,6.3c1.4,1.5,3.8,1.6,5.3,0.1l10.9-10.3c1.5-1.4,1.6-3.8,0.1-5.3
				l-6.2-6.5c1.8-2.6,3.5-5.3,4.9-8.2l8.3,2.5c2,0.6,4.1-0.5,4.7-2.5l4.3-14.4C230.7,238.3,229.6,236.2,227.6,235.6z M163.9,253.1
				c-14.2,3.4-28.4-5.4-31.8-19.6c-3.4-14.2,5.4-28.4,19.6-31.8c14.2-3.4,28.4,5.4,31.8,19.6C186.9,235.5,178.1,249.7,163.9,253.1z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_78_">
                                                        <path
                                                            id="XMLID_79_"
                                                            fill="#A52257"
                                                            d="M72.2,192.8l-1.8,0.4c-0.4,0.1-0.9-0.1-1.2-0.5l-0.5-0.7c-0.3-0.3-0.3-0.9-0.1-1.3l1-1.6
				c0.2-0.4,0.1-0.8-0.2-1.1l-2.4-1.5c-0.4-0.2-0.9-0.1-1.1,0.3l-1,1.6c-0.2,0.4-0.7,0.6-1.2,0.5l-0.9-0.1c-0.4,0-0.9-0.4-1-0.8
				l-0.4-1.8c-0.1-0.4-0.5-0.7-0.9-0.6l-2.8,0.7c-0.4,0.1-0.7,0.5-0.6,0.9l0.4,1.8c0.1,0.4-0.1,0.9-0.5,1.2l-0.7,0.5
				c-0.3,0.3-0.9,0.3-1.3,0.1l-1.6-1c-0.4-0.2-0.8-0.1-1.1,0.3l-1.5,2.4c-0.2,0.4-0.1,0.8,0.3,1.1l1.6,1c0.4,0.2,0.6,0.8,0.5,1.2
				l-0.1,0.9c0,0.4-0.4,0.9-0.8,1l-1.8,0.4c-0.4,0.1-0.7,0.5-0.6,0.9l0.7,2.8c0.1,0.4,0.5,0.7,0.9,0.6l1.8-0.4
				c0.4-0.1,0.9,0.1,1.2,0.5l0.5,0.7c0.3,0.3,0.3,0.9,0.1,1.3l-1,1.6c-0.2,0.4-0.1,0.8,0.3,1.1l2.4,1.5c0.4,0.2,0.8,0.1,1.1-0.3
				l1-1.6c0.2-0.4,0.8-0.6,1.2-0.5l0.9,0.1c0.4,0,0.9,0.4,1,0.8l0.4,1.8c0.1,0.4,0.5,0.7,0.9,0.6l2.8-0.7c0.4-0.1,0.7-0.5,0.6-0.9
				l-0.4-1.8c-0.1-0.4,0.1-0.9,0.5-1.2l0.7-0.5c0.3-0.3,0.9-0.3,1.3-0.1l1.6,1c0.4,0.2,0.8,0.1,1.1-0.3l1.5-2.4
				c0.2-0.4,0.1-0.8-0.3-1.1l-1.6-1c-0.4-0.2-0.6-0.8-0.5-1.2l0.1-0.9c0-0.4,0.4-0.9,0.8-1l1.8-0.4c0.4-0.1,0.7-0.5,0.6-0.9l-0.7-2.8
				C73,193,72.6,192.7,72.2,192.8z M62.7,201.2c-2,0.5-4.1-0.8-4.5-2.8c-0.5-2,0.8-4.1,2.8-4.5c2-0.5,4.1,0.8,4.5,2.8
				C65.9,198.7,64.7,200.7,62.7,201.2z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_74_">
                                                        <path
                                                            id="XMLID_75_"
                                                            fill="#FFFFFF"
                                                            d="M157.8,276.2c-22.7,0-42.1-15.4-47.4-37.5c-6.2-26.2,10-52.5,36.1-58.8
				c3.7-0.9,7.5-1.3,11.3-1.3c22.7,0,42.1,15.4,47.4,37.5c6.2,26.2-10,52.5-36.1,58.7C165.4,275.7,161.6,276.2,157.8,276.2
				L157.8,276.2z M157.8,180.4c-3.7,0-7.3,0.4-10.9,1.3c-25.2,6-40.8,31.4-34.8,56.6c5.1,21.3,23.8,36.1,45.7,36.1
				c3.7,0,7.3-0.4,10.9-1.3c25.2-6,40.8-31.4,34.8-56.6C198.4,195.3,179.7,180.4,157.8,180.4L157.8,180.4z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_72_">
                                                        <path
                                                            id="XMLID_73_"
                                                            fill="#FFFFFF"
                                                            d="M169.1,274.8l-0.4-1.7c25.2-6,40.8-31.4,34.8-56.6c-6-25.2-31.4-40.8-56.6-34.8l-0.4-1.7
				c26.2-6.2,52.5,10,58.8,36.1C211.5,242.3,195.3,268.6,169.1,274.8L169.1,274.8z"
                                                        />
                                                    </g>
                                                    <path
                                                        id="XMLID_71_"
                                                        fill="#5E2667"
                                                        d="M111.5,136c-5,1.2-10.1-1.9-11.3-7c-1.2-5,1.9-10.1,7-11.3c5-1.2,10.1,1.9,11.3,7
			C119.6,129.8,116.5,134.8,111.5,136z"
                                                    />
                                                    <path
                                                        id="XMLID_70_"
                                                        fill="#582768"
                                                        d="M149,190.4l2.7,11.3c14.2-3.4,28.4,5.4,31.8,19.6c3.4,14.2-5.4,28.4-19.6,31.8l2.7,11.3
			c20.4-4.9,33.1-25.4,28.2-45.8C189.9,198.2,169.4,185.5,149,190.4z"
                                                    />
                                                    <path
                                                        id="XMLID_69_"
                                                        fill="#582768"
                                                        d="M149.5,190.3l2.5,11.3c-14,4-22.7,18.9-18.7,32.9c4,14,18.6,22.2,32.7,18.2l3.2,11.2
			c-20.2,5.8-42-6.6-47.8-26.8C115.7,216.8,129.3,196.1,149.5,190.3z"
                                                    />
                                                    <g id="XMLID_65_">
                                                        <path
                                                            id="XMLID_66_"
                                                            fill="#FFFFFF"
                                                            d="M228.4,64.5c-7.9,0-14.7-5.4-16.6-13.1c-2.2-9.2,3.5-18.4,12.6-20.5c1.3-0.3,2.6-0.5,4-0.5
				c7.9,0,14.7,5.4,16.6,13.1c2.2,9.1-3.5,18.4-12.6,20.5C231.1,64.3,229.8,64.5,228.4,64.5L228.4,64.5z M228.4,32.1
				c-1.2,0-2.4,0.1-3.5,0.4c-8.2,2-13.3,10.2-11.3,18.4c1.6,6.9,7.7,11.7,14.8,11.7c1.2,0,2.4-0.1,3.6-0.4c8.2-2,13.3-10.2,11.3-18.4
				C241.6,37,235.5,32.1,228.4,32.1L228.4,32.1z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_63_">
                                                        <path
                                                            id="XMLID_64_"
                                                            fill="#FFFFFF"
                                                            d="M97.6,109c-0.3,0-0.6-0.2-0.8-0.4c-0.3-0.4-0.1-1,0.3-1.2l121.8-74.1c0.4-0.3,1-0.1,1.2,0.3
				c0.3,0.4,0.1,1-0.3,1.2L98.1,108.9C97.9,108.9,97.7,109,97.6,109L97.6,109z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_61_">
                                                        <path
                                                            id="XMLID_62_"
                                                            fill="#FFFFFF"
                                                            d="M120.1,146.8c-0.3,0-0.5-0.1-0.7-0.4c-0.3-0.4-0.2-1,0.2-1.2l120-87c0.4-0.3,1-0.2,1.3,0.2
				c0.3,0.4,0.2,1-0.2,1.2l-120,87C120.5,146.8,120.3,146.8,120.1,146.8L120.1,146.8z"
                                                        />
                                                    </g>
                                                    <linearGradient
                                                        id="XMLID_155_cc"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="99.2893"
                                                        y1="101.8832"
                                                        x2="174.2109"
                                                        y2="262.5436"
                                                    >
                                                        <stop offset="6.016400e-002" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-002" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_56_"
                                                        fill="url(#XMLID_155_cc)"
                                                        d="M195.7,218.4c-1.4-5.8-4-11-7.5-15.4l-57.6-84.8c-3.5-8.6-11.8-14.3-21.3-14.3
			c-1.8,0-3.6,0.2-5.4,0.6c-6,1.4-11.1,5.1-14.3,10.3c-3.2,5.2-4.2,11.4-2.8,17.4c0.1,0.4,0.2,0.7,0.3,1.1c0,0.1-0.1,0.2,0,0.3
			l33.4,105.2c0.1,0.4,0.3,0.9,0.4,1.3l0.3,0.8c0,0.1,0.1,0.1,0.1,0.1c5.6,15,20,25.2,36.4,25.2c3,0,6.1-0.4,9.1-1.1
			C187.7,260.3,200.7,239.3,195.7,218.4z M91.6,116c2.9-4.7,7.5-8,12.9-9.3c1.6-0.4,3.2-0.6,4.8-0.6c9.7,0,18,6.6,20.2,16
			c1.3,5.4,0.4,11-2.5,15.7c-2.9,4.7-7.5,8-12.9,9.3c-1.6,0.4-3.2,0.6-4.8,0.6c-9.7,0-18-6.6-20.2-16C87.8,126.3,88.7,120.7,91.6,116
			z M109.3,149.9c1.8,0,3.6-0.2,5.4-0.6c6-1.4,11.1-5.1,14.3-10.3c2.9-4.7,4-10,3.2-15.4l49.6,73c-6.6-5.1-14.9-8.1-23.8-8.1
			c-3,0-6.1,0.4-9.1,1.1c-17.9,4.3-29.9,20.4-29.9,38l-27.3-85.9C95.9,146.8,102.2,149.9,109.3,149.9z M166.4,263.5
			c-2.8,0.7-5.8,1-8.6,1c-16,0-29.9-10.1-35.1-25l-0.4-1.2c-0.2-0.8-0.5-1.5-0.7-2.3c-4.7-19.9,7.6-40,27.5-44.8c2.8-0.7,5.7-1,8.6-1
			c11.6,0,22,5.3,28.9,13.8l2.3,3.4c0.1,0.1,0.2,0.2,0.3,0.2c2.1,3.3,3.7,7,4.6,11.1C198.7,238.7,186.3,258.8,166.4,263.5z"
                                                    />
                                                    <linearGradient
                                                        id="XMLID_156_c"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="193.4497"
                                                        y1="132.6568"
                                                        x2="254.0015"
                                                        y2="132.6568"
                                                    >
                                                        <stop offset="6.016400e-002" style={{ stopColor: "#DB6B86" }} />
                                                        <stop offset="8.596202e-002" style={{ stopColor: "#DC6D87" }} />
                                                        <stop offset={1} style={{ stopColor: "#F7A6A5" }} />
                                                    </linearGradient>
                                                    <path
                                                        id="XMLID_55_"
                                                        fill="url(#XMLID_156_c)"
                                                        d="M253.4,138.3l-3.5-1.1c0.2-1.5,0.4-3,0.4-4.5c0-1.6-0.2-3.2-0.4-4.7l3.5-1.1
			c0.4-0.1,0.7-0.6,0.5-1.1l-1.8-5.5c-0.1-0.4-0.6-0.7-1.1-0.5l-3.5,1.1c-1.4-2.8-3.2-5.3-5.4-7.4l2.2-3c0.3-0.4,0.2-0.9-0.2-1.2
			l-4.6-3.4c-0.4-0.3-0.9-0.2-1.2,0.2l-2.2,3c-2.7-1.4-5.6-2.4-8.7-2.8v-3.7c0-0.5-0.4-0.8-0.8-0.8h-5.7c-0.5,0-0.8,0.4-0.8,0.8v3.7
			c-3.1,0.5-6.1,1.4-8.7,2.9l-2.1-3c-0.3-0.4-0.8-0.5-1.2-0.2l-4.6,3.4c-0.4,0.3-0.5,0.8-0.2,1.2l2.2,3c-2.2,2.1-4,4.7-5.4,7.4
			l-3.5-1.1c-0.4-0.1-0.9,0.1-1.1,0.5l-1.8,5.5c-0.1,0.4,0.1,0.9,0.5,1.1l3.5,1.1c-0.2,1.5-0.4,3-0.4,4.5c0,1.6,0.2,3.2,0.4,4.7
			l-3.5,1.1c-0.4,0.1-0.7,0.6-0.5,1.1l1.8,5.5c0.1,0.4,0.6,0.7,1.1,0.5l3.5-1.1c1.4,2.8,3.2,5.3,5.4,7.4l-2.2,3
			c-0.3,0.4-0.2,0.9,0.2,1.2l4.6,3.4c0.4,0.3,0.9,0.2,1.2-0.2l2.2-3c2.7,1.4,5.6,2.4,8.7,2.8v3.7c0,0.5,0.4,0.8,0.8,0.8h5.7
			c0.5,0,0.8-0.4,0.8-0.8v-3.7c3.1-0.5,6.1-1.4,8.7-2.9l2.2,3c0.3,0.4,0.8,0.5,1.2,0.2l4.6-3.4c0.4-0.3,0.5-0.8,0.2-1.2l-2.2-3
			c2.2-2.1,4-4.7,5.4-7.4l3.5,1.1c0.4,0.1,0.9-0.1,1.1-0.5l1.8-5.5C254.1,138.9,253.9,138.4,253.4,138.3z"
                                                    />
                                                    <circle
                                                        id="XMLID_54_"
                                                        fill="#FFFFFF"
                                                        cx="223.7"
                                                        cy="132.7"
                                                        r="19.4"
                                                    />
                                                    <path
                                                        id="XMLID_53_"
                                                        opacity="0.4"
                                                        fill="#582768"
                                                        d="M206.4,134c0-10.7,8.7-19.4,19.4-19.4c3.5,0,6.8,0.9,9.7,2.6c-3.3-2.5-7.3-4-11.8-4
			c-10.7,0-19.4,8.7-19.4,19.4c0,7.2,3.9,13.4,9.7,16.8C209.4,145.9,206.4,140.3,206.4,134z"
                                                    />
                                                    <circle id="XMLID_52_" fill="#8C235D" cx="223.7" cy="132.7" r="3.5" />
                                                    <g id="XMLID_50_">
                                                        <path
                                                            id="XMLID_51_"
                                                            fill="#8C235D"
                                                            d="M223.7,133.6c-0.5,0-0.9-0.4-0.9-0.9v-13.7c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9
				v13.7C224.7,133.2,224.2,133.6,223.7,133.6L223.7,133.6z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_22_">
                                                        <g id="XMLID_41_">
                                                            <g id="XMLID_48_">
                                                                <path
                                                                    id="XMLID_49_"
                                                                    fill="#582768"
                                                                    d="M232,118.9c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-0.3-0.4-0.2-0.6l0.5-0.9c0.1-0.2,0.4-0.3,0.6-0.2
						c0.2,0.1,0.3,0.4,0.2,0.6l-0.5,0.9C232.3,118.8,232.1,118.9,232,118.9L232,118.9z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_46_">
                                                                <path
                                                                    id="XMLID_47_"
                                                                    fill="#582768"
                                                                    d="M215,148.3c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-0.3-0.4-0.2-0.6l0.5-0.9c0.1-0.2,0.4-0.3,0.6-0.2
						c0.2,0.1,0.3,0.4,0.2,0.6l-0.5,0.9C215.3,148.2,215.1,148.3,215,148.3L215,148.3z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_44_">
                                                                <path
                                                                    id="XMLID_45_"
                                                                    fill="#582768"
                                                                    d="M238.9,141.9c-0.1,0-0.2,0-0.2-0.1l-0.9-0.5c-0.2-0.1-0.3-0.4-0.2-0.6
						c0.1-0.2,0.4-0.3,0.6-0.2l0.9,0.5c0.2,0.1,0.3,0.4,0.2,0.6C239.2,141.8,239.1,141.9,238.9,141.9L238.9,141.9z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_42_">
                                                                <path
                                                                    id="XMLID_43_"
                                                                    fill="#582768"
                                                                    d="M209.5,124.9c-0.1,0-0.2,0-0.2-0.1l-0.9-0.5c-0.2-0.1-0.3-0.4-0.2-0.6
						c0.1-0.2,0.4-0.3,0.6-0.2l0.9,0.5c0.2,0.1,0.3,0.4,0.2,0.6C209.8,124.8,209.6,124.9,209.5,124.9L209.5,124.9z"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g id="XMLID_32_">
                                                            <g id="XMLID_39_">
                                                                <path
                                                                    id="XMLID_40_"
                                                                    fill="#582768"
                                                                    d="M215.5,118.9c-0.2,0-0.3-0.1-0.4-0.2l-0.5-0.9c-0.1-0.2-0.1-0.5,0.2-0.6
						c0.2-0.1,0.5,0,0.6,0.2l0.5,0.9c0.1,0.2,0,0.5-0.2,0.6C215.6,118.8,215.6,118.9,215.5,118.9L215.5,118.9z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_37_">
                                                                <path
                                                                    id="XMLID_38_"
                                                                    fill="#582768"
                                                                    d="M232.5,148.3c-0.2,0-0.3-0.1-0.4-0.2l-0.5-0.9c-0.1-0.2,0-0.5,0.2-0.6
						c0.2-0.1,0.5-0.1,0.6,0.2l0.5,0.9c0.1,0.2,0,0.5-0.2,0.6C232.7,148.3,232.6,148.3,232.5,148.3L232.5,148.3z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_35_">
                                                                <path
                                                                    id="XMLID_36_"
                                                                    fill="#582768"
                                                                    d="M208.5,141.9c-0.2,0-0.3-0.1-0.4-0.2c-0.1-0.2-0.1-0.5,0.2-0.6l0.9-0.5
						c0.2-0.1,0.5-0.1,0.6,0.2c0.1,0.2,0.1,0.5-0.2,0.6l-0.9,0.5C208.7,141.9,208.6,141.9,208.5,141.9L208.5,141.9z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_33_">
                                                                <path
                                                                    id="XMLID_34_"
                                                                    fill="#582768"
                                                                    d="M238,124.9c-0.2,0-0.3-0.1-0.4-0.2c-0.1-0.2-0.1-0.5,0.2-0.6l0.9-0.5
						c0.2-0.1,0.5-0.1,0.6,0.2c0.1,0.2,0,0.5-0.2,0.6l-0.9,0.5C238.2,124.9,238.1,124.9,238,124.9L238,124.9z"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g id="XMLID_23_">
                                                            <g id="XMLID_30_">
                                                                <path
                                                                    id="XMLID_31_"
                                                                    fill="#582768"
                                                                    d="M207.3,133.1L207.3,133.1h-1.1c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5l0,0l1.1,0
						c0.3,0,0.5,0.2,0.5,0.5S207.5,133.1,207.3,133.1L207.3,133.1z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_28_">
                                                                <path
                                                                    id="XMLID_29_"
                                                                    fill="#582768"
                                                                    d="M240.2,133.1c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5l1.1,0l0,0
						c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.2,0.5-0.5,0.5L240.2,133.1L240.2,133.1L240.2,133.1z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_26_">
                                                                <path
                                                                    id="XMLID_27_"
                                                                    fill="#582768"
                                                                    d="M223.7,150.7C223.7,150.7,223.7,150.7,223.7,150.7c-0.3,0-0.5-0.2-0.5-0.5l0-1.1
						c0-0.3,0.2-0.5,0.5-0.5c0,0,0,0,0,0c0.3,0,0.5,0.2,0.5,0.5v1.1C224.2,150.4,224,150.7,223.7,150.7L223.7,150.7z"
                                                                />
                                                            </g>
                                                            <g id="XMLID_24_">
                                                                <path
                                                                    id="XMLID_25_"
                                                                    fill="#582768"
                                                                    d="M223.7,116.6c-0.3,0-0.5-0.2-0.5-0.5v-1.1c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5v1.1
						C224.2,116.4,224,116.6,223.7,116.6L223.7,116.6z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g id="XMLID_17_">
                                                        <path
                                                            id="XMLID_21_"
                                                            fill="#8C235D"
                                                            d="M217.7,139.6c-0.2,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-0.9,0-1.3l5.8-5.8c0.4-0.4,0.9-0.4,1.3,0
				c0.4,0.4,0.4,0.9,0,1.3l-5.8,5.8C218.2,139.5,218,139.6,217.7,139.6L217.7,139.6z"
                                                        />
                                                    </g>
                                                    <circle id="XMLID_16_" fill="#FFFFFF" cx="223.7" cy="132.7" r="2.1" />
                                                    <path
                                                        id="XMLID_15_"
                                                        fill="#602666"
                                                        d="M224.8,132.7c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1
			C224.3,131.6,224.8,132.1,224.8,132.7z"
                                                    />
                                                    <g id="XMLID_12_">
                                                        <path
                                                            id="XMLID_13_"
                                                            className="clock"
                                                            fill="#F1939B"
                                                            d="M223.7,133.1c-0.2,0-0.4-0.1-0.4-0.3c-0.1-0.2,0.1-0.5,0.3-0.6l12-3.6
				c0.2-0.1,0.5,0.1,0.6,0.3c0.1,0.2-0.1,0.5-0.3,0.6l-12,3.6C223.8,133.1,223.8,133.1,223.7,133.1L223.7,133.1z"
                                                        />
                                                    </g>
                                                    <g id="XMLID_6_">
                                                        <defs>
                                                            <rect
                                                                id="XMLID_7_"
                                                                x="62.2"
                                                                y="165.5"
                                                                transform="matrix(0.9653 -0.261 0.261 0.9653 -48.2874 26.8127)"
                                                                width="29.2"
                                                                height="59.4"
                                                            />
                                                        </defs>
                                                        <clipPath id="XMLID_157_c">
                                                            <use xlinkHref="#XMLID_7_" style={{ overflow: "visible" }} />
                                                        </clipPath>
                                                        <g id="XMLID_8_" clipPath="url(#XMLID_157_c)">
                                                            <path
                                                                id="XMLID_9_"
                                                                fill="#7F245F"
                                                                d="M72.2,192.8l-1.8,0.4c-0.4,0.1-0.9-0.1-1.2-0.5l-0.5-0.7c-0.3-0.3-0.3-0.9-0.1-1.3l1-1.6
					c0.2-0.4,0.1-0.8-0.2-1.1l-2.4-1.5c-0.4-0.2-0.9-0.1-1.1,0.3l-1,1.6c-0.2,0.4-0.7,0.6-1.2,0.5l-0.9-0.1c-0.4,0-0.9-0.4-1-0.8
					l-0.4-1.8c-0.1-0.4-0.5-0.7-0.9-0.6l-2.8,0.7c-0.4,0.1-0.7,0.5-0.6,0.9l0.4,1.8c0.1,0.4-0.1,0.9-0.5,1.2l-0.7,0.5
					c-0.3,0.3-0.9,0.3-1.3,0.1l-1.6-1c-0.4-0.2-0.8-0.1-1.1,0.3l-1.5,2.4c-0.2,0.4-0.1,0.8,0.3,1.1l1.6,1c0.4,0.2,0.6,0.8,0.5,1.2
					l-0.1,0.9c0,0.4-0.4,0.9-0.8,1l-1.8,0.4c-0.4,0.1-0.7,0.5-0.6,0.9l0.7,2.8c0.1,0.4,0.5,0.7,0.9,0.6l1.8-0.4
					c0.4-0.1,0.9,0.1,1.2,0.5l0.5,0.7c0.3,0.3,0.3,0.9,0.1,1.3l-1,1.6c-0.2,0.4-0.1,0.8,0.3,1.1l2.4,1.5c0.4,0.2,0.8,0.1,1.1-0.3
					l1-1.6c0.2-0.4,0.8-0.6,1.2-0.5l0.9,0.1c0.4,0,0.9,0.4,1,0.8l0.4,1.8c0.1,0.4,0.5,0.7,0.9,0.6l2.8-0.7c0.4-0.1,0.7-0.5,0.6-0.9
					l-0.4-1.8c-0.1-0.4,0.1-0.9,0.5-1.2l0.7-0.5c0.3-0.3,0.9-0.3,1.3-0.1l1.6,1c0.4,0.2,0.8,0.1,1.1-0.3l1.5-2.4
					c0.2-0.4,0.1-0.8-0.3-1.1l-1.6-1c-0.4-0.2-0.6-0.8-0.5-1.2l0.1-0.9c0-0.4,0.4-0.9,0.8-1l1.8-0.4c0.4-0.1,0.7-0.5,0.6-0.9
					l-0.7-2.8C73,193,72.6,192.7,72.2,192.8z M62.7,201.2c-2,0.5-4.1-0.8-4.5-2.8c-0.5-2,0.8-4.1,2.8-4.5c2-0.5,4.1,0.8,4.5,2.8
					C65.9,198.7,64.7,200.7,62.7,201.2z"
                                                            />
                                                        </g>
                                                    </g>
                                                    <path
                                                        id="XMLID_5_"
                                                        className="star star-2 origin-center"
                                                        fill="#FFFFFF"
                                                        d="M219.8,296.8v2.7h-2.7c-0.9,0-1.7,0.8-1.7,1.7v0.1c0,0.9,0.8,1.7,1.7,1.7h2.7v2.7
			c0,0.9,0.8,1.7,1.7,1.7h0.1c0.9,0,1.7-0.8,1.7-1.7v-2.7h2.7c0.9,0,1.7-0.8,1.7-1.7v-0.1c0-0.9-0.8-1.7-1.7-1.7h-2.7v-2.7
			c0-0.9-0.8-1.7-1.7-1.7h-0.1C220.6,295.1,219.8,295.9,219.8,296.8z"
                                                    />
                                                    <path
                                                        id="XMLID_4_"
                                                        className="star star-1 origin-center"
                                                        fill="#FFFFFF"
                                                        d="M160.2,32.1v3h-3c-1,0-1.8,0.8-1.8,1.8V37c0,1,0.8,1.8,1.8,1.8h3v3c0,1,0.8,1.8,1.8,1.8h0.1
			c1,0,1.8-0.8,1.8-1.8v-3h3c1,0,1.8-0.8,1.8-1.8v-0.1c0-1-0.8-1.8-1.8-1.8h-3v-3c0-1-0.8-1.8-1.8-1.8H162
			C161,30.2,160.2,31.1,160.2,32.1z"
                                                    />
                                                    <circle id="XMLID_3_" fill="#FFFFFF" cx="39.7" cy="231.5" r="3.4" />
                                                </g>
                                            </svg>
                                            <Link to="/contact">Contact Now</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </main>
                    </div>

                    {/* End More Services Section */}

                    {/* ======= Features Section ======= */}
                    <section id="features" className="features">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Features</h2>
                                <p> Robust features tailored to meet your digital needs, ensuring seamless user experiences and optimized performance.</p>
                            </div>
                            <div className="row" data-aos="fade-up" data-aos-delay={300}>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                        <i className="fas fa-mobile-alt" style={{ color: "#ffbb2c" }} />
                                        <h3>
                                            <Link to="">Responsive Design</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-compass"
                                            style={{ color: "#5578ff" }}
                                        />
                                        <h3>
                                            <Link to="">User-friendly Navigation</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-stopwatch"
                                            style={{ color: "#e80368" }}
                                        />
                                        <h3>
                                            <Link to="">Fast Loading Speed</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                    <div className="icon-box">
                                        <i className="fas fa-search" style={{ color: "#e361ff" }} />
                                        <h3>
                                            <Link to="">SEO Integration</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-puzzle-piece" style={{ color: "#47aeff" }} />
                                        <h3>
                                            <Link to="">Customizable Templates</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-shield-alt" style={{ color: "#ffa76e" }} />
                                        <h3>
                                            <Link to="">Secure Hosting</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-pencil-alt" style={{ color: "#11dbcf" }} />
                                        <h3>
                                            <Link to="">Content Management System (CMS)</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fab fa-internet-explorer" style={{ color: "#4233ff" }} />
                                        <h3>
                                            <Link to="">Cross-browser Compatibility</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-chart-line" style={{ color: "#b2904f" }} />
                                        <h3>
                                            <Link to="">Scalability</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-file-image" style={{ color: "#b20969" }} />
                                        <h3>
                                            <Link to="">Multimedia Integration</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-shopping-cart"
                                            style={{ color: "#ff5828" }}
                                        />
                                        <h3>
                                            <Link to="">E-commerce Functionality</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-chart-bar" style={{ color: "#29cc61" }} />
                                        <h3>
                                            <Link to="">Analytics and Reporting</Link>
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
                                            We begin by analyzing your brand identity, audience, and goals, ensuring your website design aligns with your vision and business objectives.
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
                                        <h3>Design and Development</h3>
                                        <p>
                                            Our team crafts visually stunning, user-friendly websites using the latest design trends and technologies, enhancing your brand's online presence.
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
                                        <h3>Launch and Maintenance</h3>
                                        <p>
                                            We provide post-launch support, regular updates, and enhancements to ensure your website remains dynamic, secure, and optimized for growth.
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

export default WebDesigningAndDevelopment