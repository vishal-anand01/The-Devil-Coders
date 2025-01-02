import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../Assets/CSS/homePage.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import HomePageAboutAnimated from '../Assets/Json/Home-About-Animation.json'
import WebsiteDevelopmentAnimted from '../Assets/Json/WebsiteDevelopment.json'
import DigitalMarketingAnimted from '../Assets/Json/DigitalMarketingAnimated.json'
import WebsiteDesigningAnimted from '../Assets/Json/WebsiteDesigning.json'
import GraphicDesigningAnimted from '../Assets/Json/GraphicDesigningAnimated.json'
import AppDevelopmentAnimted from '../Assets/Json/AppDevelopmentAnimation.json'
import HomeCtaAnimated from '../Assets/Json/HomeCtaAnimation.json'
import WhyChooseUsAnimation from '../Assets/Json/WhyChooseUsAnimation.json'
import CTA2 from '../Assets/Json/Cta2Animated.json'
import Step1 from '../Assets/Json/Step1.json'
import Step2 from '../Assets/Json/Step2.json'
import Step3 from '../Assets/Json/Step3.json'
import Step4 from '../Assets/Json/Step4.json'
import Lottie from 'lottie-react'

import Number1 from '../Assets/img/Number/01.webp'
import Number2 from '../Assets/img/Number/02.webp'
import Number3 from '../Assets/img/Number/03.webp'
import Number4 from '../Assets/img/Number/04.webp'
import Number5 from '../Assets/img/Number/05.webp'
import Number6 from '../Assets/img/Number/06.webp'

// import LiveChatApp from '../LiveChatApp/LiveChatApp'

import Faq from './FaqSection.jsx'

import 'animate.css'; // Import animate.css for animations

import Education from '../Assets/marquee/1.webp'
import Hospital from '../Assets/marquee/2.webp'
import Fitness from '../Assets/marquee/3.webp'
import Delivery from '../Assets/marquee/4.webp'
import Health from '../Assets/marquee/5.webp'
import Law from '../Assets/marquee/6.webp'
import RetailStore from '../Assets/marquee/7.webp'
import Entertainment from '../Assets/marquee/8.webp'
import Construction from '../Assets/marquee/9.webp'
import Travel from '../Assets/marquee/10.webp'
import Food from '../Assets/marquee/11.webp'
import Finance from '../Assets/marquee/12.webp'
import Logistic from '../Assets/marquee/13.webp'
import Ecommerce from '../Assets/marquee/14.webp'
import Resturant from '../Assets/marquee/15.webp'
import Banking from '../Assets/marquee/16.webp'
import Insurance from '../Assets/marquee/17.webp'
import Goverment from '../Assets/marquee/18.webp'
import { useInView } from 'react-intersection-observer';

// import HeroRightPartImg from '../Assets/img/hero-right-side-bg.png'

import HeroRightPartImg from '../Assets/Json/HeroSectionAnimated.json'

import initializeTypewriter from '../Assets/JavacsriptFile/AboutPageName';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HomePageReview from '../Assets/Json/Home-page-clients-animation.json'

import JimmiSonam from '../Assets/img/Review/JimmySonam.png'
import ayumdakme from '../Assets/img/Review/unnamed (1).png'
import SabriNguso from '../Assets/img/Review/SabriNguso.png'
// counter logic start
const Counter = ({ start, end, duration, suffix }) => {
  const [count, setCount] = useState(start);
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const newCount = start + progress * (end - start);
        setCount(newCount);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    } else {
      setCount(start);
    }
  }, [inView, start, end, duration]);

  // Function to format number with or without decimals
  const formatNumber = (value) => {
    return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);
  };


  return (
    <div ref={ref}>
      {formatNumber(count)} {suffix}
    </div>
  );
};

// Counter logic end


const Home = () => {


  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-fade-in-up');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          element.classList.add('show');
        }
      });

      const circles = document.querySelectorAll('.road-map-circle');
      circles.forEach((circle) => {
        const rect = circle.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          circle.classList.add('show-fill');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // ye script hero section company name word by word show hone ke liye hai

  useEffect(() => {
    initializeTypewriter([
      { elementId: 'app', text: 'Crew Captivators Solutions Pvt. Ltd.' },
      // Add more configurations for other elements if needed
    ]);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
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
    navText: ['<span className="arrow-left"></span>', '<span className="arrow-right"></span>'],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      800: { items: 1 },
      1024: { items: 1 },
    }
  };


  return (
    <>

      <div className='HomeMainPage'>
        {/* Add Helmet component to manage document head */}
        <Helmet>
          {/* Title */}
          <title>Crew Captivators Solutions Pvt. Ltd. | Home</title>
          {/* Meta description */}
          <meta
            name="description"
            content="One Stop Solutions for your business and discover top-notch services including tax and accounting consultation, tender bidding, online affiliation, IT solutions, NEFA cab services, media production, graphic designing, admission assistance, lead generation, BPO services, social media promotion, app development for Android & iOS, interior designing and many more... "
          />
          {/* Other meta tags */}
          {/* Add any other necessary meta tags here */}
        </Helmet>


        {/* hero section start */}

        <div className='hero-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6 d-flex justify-content-center align-item-center'>
                <div className='hero-left-part'>
                  <div data-aos="fade-up">
                    <p className='hero-left-part-first-paragraph'>WE’RE PROVIDE THE BEST SERVICES</p>
                  </div>
                  <div data-aos="fade-up">
                    <div id="app" className='hero-left-part-headind'></div>
                  </div>
                  <div data-aos="fade-up">
                    <p className='hero-left-part-second-paragraph'>One Stop Solutions for your business and discover top-notch services. We offer a wide range of exceptional services designed to meet all your business needs, ensuring efficiency and success at every step.</p>
                  </div>
                  <div data-aos="fade-up">
                    <Link
                      to="/contact"
                      className="btn home-about-section-button rounded-pill mt-3"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='hero-right-part'>
                  <div className='hero-right-part-animation'>
                    <div data-aos="fade-up">
                      <Lottie animationData={HeroRightPartImg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hero section end */}



        {/* Fact Start */}
        <div className="section2-fact">
          <div data-aos="fade-up">
            <div className="container">
              <div className="row text-center">

                <div className="col-3">
                  <div className='Home-counter-css'><Counter start={0} end={95} duration={2000} suffix=" %" /></div>
                  <p>Happy Customers</p>
                </div>
                <div className="col-3 ">
                  <div className='Home-counter-css'><Counter start={0} end={90} duration={2000} suffix=" %" /></div>
                  <p>Successful Business</p>
                </div>
                <div className="col-3 ">
                  <div className='Home-counter-css'><Counter start={0} end={320} duration={2000} suffix="+" /></div>
                  <p>Clients Who Love CCS Pvt. Ltd.</p>
                </div>
                <div className="col-3 ">
                  <div className='Home-counter-css'>
                    <Counter start={0} end={4.7} duration={2000} suffix={<i className='fa-regular fa-star'></i>} />
                  </div>

                  <p>Reviews Given by Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fact End */}

        {/* <!-- About Start --> */}

        <div className='home-about-section-main'>
          <div className="container-fluid">
            <div className="row g-5">
              <div
                className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
                data-wow-delay=".3s"
              >
                <div data-aos="zoom-in">
                  <div className='homeAboutAnimatedCss'>
                    <Lottie animationData={HomePageAboutAnimated} />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
                data-wow-delay=".5s"
              >
                <div data-aos="fade-up">
                  <h5 className="about-home">About Us</h5>
                </div>
                <div data-aos="fade-up">
                  <h2 className="mb-4">
                    About <span style={{ color: '#00b2d6 ' }}>Crew Captivators Solutions Pvt. Ltd. </span>and It's Innovative IT Solutions
                  </h2>
                </div>
                <div data-aos="fade-up">
                  <p>
                    <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> is a dynamic organization offering a comprehensive range of services to cater to the diverse needs of businesses and individuals. With a dedicated team of professionals, we specialize in providing top-notch solutions across various domains, ensuring unparalleled quality and customer satisfaction.
                  </p>
                </div>
                <div data-aos="fade-up">
                  <p className="mb-4">
                    From tax and Accounting Consultancy to Tender Bidding Services, Online Affiliation likes -  Amazon Associates,Google AdSense,PartnerStack etc , and IT Solutions, we offer strategic guidance and support to help our clients achieve their goals effectively. Our expertise extends to Media Production, Cab services, Website and Graphic Designing, Admission Assistance, and Lead Generation Services. Moreover, we excel in providing Telemarketing Solutions, Social Media Promotion, and App Development for both Android and IOS platforms. With a commitment to innovation and excellence, <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd. </span>stands as a trusted partner for all your business needs, empowering you to thrive in today's competitive landscape.
                  </p>
                </div>
                <div className="container service-list">
                  <div className="row">
                    <div className="col-md-6">
                      <div data-aos="fade-up">
                        <ul>
                          <li>Tax and Accounting Consultant</li>
                          <li>Tender Bidding Services</li>
                          <li>Online Affiliation Services</li>
                          <li>IT Solutions</li>
                          <li>Media Production</li>
                          <li>NEFA Cab Services</li>
                          <li>Website Designing</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div data-aos="fade-up">
                        <ul>
                          <li>Admission Assistance</li>
                          <li>Graphic Designing</li>
                          <li>Lead Generation Services</li>
                          <li>Telemarketing (BPO Services)</li>
                          <li>Social Media Promotion</li>
                          <li>App Development (Android & iOS)</li>
                          <li>Interior Designing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up">
                  <Link
                    to="/about"
                    className="btn home-about-section-button rounded-pill px-3 py-2 mt-3"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- About End --> */}

        {/* SERVICE SECTION start */}

        <section className="services-area">
          <div className="container">

            <div className="section-title">
              <div data-aos="fade-up">
                <span>Services We Offer</span>
              </div>
              <div data-aos="fade-up">
                <h2>Our Cutting-Edge All In One Solutions For Your Business</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6">

                <div className="single-services">
                  <div data-aos="fade-up">
                    <div className='lottie-file'>
                      <Lottie animationData={WebsiteDesigningAnimted} />
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <h3>
                      <Link to="/services/web-desinging-and-development">
                        Website Development
                      </Link>
                    </h3>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      Website is a brand’s face. We work on that “face” and allow you to
                      market your business online. We develop dynamic, static, and
                      responsive websites catering all your needs.{" "}
                    </p>
                  </div> <div data-aos="fade-up">
                    <a
                      href="/services/web-desinging-and-development"
                      className="default-btn"
                    >
                      Explore Service
                    </a>
                  </div>
                </div>

              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-services">
                  <div data-aos="fade-up">
                    <div className='lottie-file'>
                      <Lottie animationData={DigitalMarketingAnimted} />
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <h3>
                      <a href="/career/digital-marketing">
                        Digital Marketing
                      </a>
                    </h3>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      In today’s era, building a brand is a difficult task. You need
                      creative minds to build your essence and enhance your audience. We
                      are the marketing experts who know better and are wild enough to
                      think bigger.
                    </p>
                  </div>
                  <div data-aos="fade-up">
                    <a
                      href="/career/digital-marketing"
                      className="default-btn"
                    >
                      Explore Service
                    </a>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6">

                <div className="single-services serv1">
                  <div data-aos="fade-up">
                    <div className='lottie-file'>
                      <Lottie animationData={WebsiteDevelopmentAnimted} />
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <h3>
                      <a href="/services/web-desinging-and-development">
                        Website Designing
                      </a>
                    </h3>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      We just don’t design a website. We incorporate your story and craft
                      eye-catching designs for your website based on your potential
                      customers.{" "}
                    </p>
                  </div>
                  <div data-aos="fade-up">
                    <a
                      href="/services/web-desinging-and-development"
                      className="default-btn"
                    >
                      Explore Service
                    </a>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6">

                <div className="single-services wow fadeInUp">
                  <div data-aos="fade-up">
                    <div className='lottie-file'>
                      <Lottie animationData={GraphicDesigningAnimted} />
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <h3>
                      <a href="/services/graphic-designing">
                        Graphic Designing
                      </a>
                    </h3>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      We believe designs evoke your emotions. So, our graphic designers
                      know how to convert your story into the finest visually appealing
                      graphics.
                    </p>
                  </div>
                  <div data-aos="fade-up">
                    <a
                      href="/services/graphic-designing"
                      className="default-btn"
                    >
                      Explore Service
                    </a>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6">

                <div className="single-services">
                  <div data-aos="fade-up">
                    <div className='lottie-file'>
                      <Lottie animationData={AppDevelopmentAnimted} />
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <h3>
                      <a href="/services/app-development">
                        App Development
                      </a>
                    </h3>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      We are a leading app development company in Naharlagun, aiming to build
                      your brand accessible through applications with quality performance.
                    </p>
                  </div>
                  <div data-aos="fade-up">
                    <a
                      href="/services/app-development"
                      className="default-btn"
                    >
                      Explore Service
                    </a>
                  </div>
                </div>

              </div>

              <div className='col-lg-12 text-center'>
                <div data-aos="fade-up">
                  <Link
                    to="/services"
                    className="btn home-about-section-button rounded-pill px-3 py-2 mt-3"
                  >
                    Explore More Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* SERVICES SECTION END  */}


        {/* home cta section */}
        <section className="home-cta cta1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-3">
                <div className="cta-1st-img">
                  <div data-aos="fade-up">
                    <div className='lottie-file'>
                      <Lottie animationData={HomeCtaAnimated} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-9">
                <div data-aos="fade-up">
                  <div className="cta-1st-sec-titles">
                    <span>Have business ideas in mind?</span>
                    <h2>
                      Build Your Brand With The Best <br /> Industry Experts!
                    </h2>
                    <Link
                      to="/contact"
                      className="default-btn"

                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* home cta section end */}


        {/* why chhose use start */}

        <section className="choose-us pt-70 pb-70">
          <div className="container">
            <div className="section-title pb-5">
              <div data-aos="fade-up">
                <span>WHY CHOOSE US?</span>
                <h2>How Crew Captivators Solutions Pvt. Ltd. Helps You?</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="choose-number">
                  <div data-aos="fade-up">
                    <div className="choose-1 mb-4">
                      <div className="choose-img">
                        <img
                          src={Number1}
                          alt="1 Digital Experience"
                          title="1 Digital Experience"
                        />
                      </div>
                      <div className="choose-text">
                        <h3>Digital Experience</h3>
                        <p>
                          We create super-rich digital experiences with measurable
                          results. We not only deliver performance driven solutions but
                          also creative and unique.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <div
                      className="choose-1 mb-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp"
                      }}
                    >
                      <div className="choose-img">
                        <img
                          src={Number2}
                          alt="Integrated Solutions"
                          title="Integrated Solutions"
                        />
                      </div>
                      <div className="choose-text">
                        <h3>Integrated Solutions</h3>
                        <p>
                          As you know everything is connected now-a-days, we render
                          integrated solutions which include technology and creativity -
                          all under one roof.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <div
                      className="choose-1 wow fadeInUp"
                      data-wow-delay="0.4s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.4s",
                        animationName: "fadeInUp"
                      }}
                    >
                      <div className="choose-img">
                        <img
                          src={Number3}
                          alt="Methodology"
                          title="Methodology"
                        />
                      </div>
                      <div className="choose-text">
                        <h3>Methodology</h3>
                        <p>
                          We understand what you need.<span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> works in a way
                          that draft methodology at the heart of the experience from the
                          start.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <div className="choose-us-img">
                  <div data-aos="slide-up">
                    <div className='lottie-file why-chhoose-us-lottiefile'>
                      <Lottie animationData={WhyChooseUsAnimation} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="choose-number">
                  <div data-aos="fade-up">
                    <div
                      className="choose-1 mb-4 wow fadeInUp"
                      data-wow-delay="0.6s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.6s",
                        animationName: "fadeInUp"
                      }}
                    >
                      <div className="choose-img">
                        <img
                          src={Number4}
                          alt="Fast And Reliable"
                          title="Fast And Reliable"
                        />
                      </div>
                      <div className="choose-text">
                        <h3>Fast And Reliable</h3>
                        <p>
                          Your needs are our priority! We treat your projects as ours and
                          deliver effective solutions on time. We use a customer-centric
                          approach to deliver the projects.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <div
                      className="choose-1 mb-4 wow fadeInUp"
                      data-wow-delay="0.7s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.7s",
                        animationName: "fadeInUp"
                      }}
                    >
                      <div className="choose-img">
                        <img
                          src={Number5}
                          alt="Better Branding"
                          title="Better Branding"
                        />
                      </div>
                      <div className="choose-text">
                        <h3>Better Branding</h3>
                        <p>
                          <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> doesn't build just a website, but a brand. Yes,
                          we try to build the best user experience for your websites,
                          improvising your online presence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <div
                      className="choose-1 wow fadeInUp"
                      data-wow-delay="0.8s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.8s",
                        animationName: "fadeInUp"
                      }}
                    >
                      <div className="choose-img">
                        <img
                          src={Number6}
                          alt="Increase Visibility"
                          title="Increase Visibility"
                        />
                      </div>
                      <div className="choose-text">
                        <h3>Increase Visibility</h3>
                        <p>
                          With <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span>, improve your site's search engine
                          rankings, making it more. We strive to increase traffic and
                          generate more leads and sales for your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why choose us-section end */}


        {/* <!-- INDUSTRIES WE SERVE start --> */}

        <section className="industries-serve">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 order-1 order-lg-0">

                <div className="marquee-wrapper">
                  <div className="industries-logo">

                    <div className="marquee-block">

                      <div className="marquee-inner to-left">
                        <span>
                          <div className="marquee-item">
                            <img
                              src={Education}
                              alt="education"
                              title="education"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Hospital}
                              alt="hospitality"
                              title="hospitality"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Fitness}
                              alt="fitness"
                              title="fitness"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Delivery}
                              alt="delivery"
                              title="delivery"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Health}
                              alt="health"
                              title="health"
                            />
                          </div>
                        </span>
                        <span>
                          <div className="marquee-item">
                            <img
                              src={Law}
                              alt="law"
                              title="law"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Delivery}
                              alt="delivery"
                              title="delivery"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Health}
                              alt="health"
                              title="health"
                            />
                          </div>
                        </span>
                      </div>

                    </div>

                    <div className="marquee-block">

                      <div className="marquee-inner to-right">
                        <span>
                          <div className="marquee-item">
                            <img
                              src={RetailStore}
                              alt="retail store"
                              title="retail store"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Entertainment}
                              alt="entertainment"
                              title="entertainment"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Construction}
                              alt="Construction"
                              title="Construction"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Travel}
                              alt="travel"
                              title="travel"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Food}
                              alt="food"
                              title="food"
                            />
                          </div>
                        </span>
                        <span>
                          <div className="marquee-item">
                            <img
                              src={Finance}
                              alt="finance"
                              title="finance"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={RetailStore}
                              alt="retail store"
                              title="retail store"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Entertainment}
                              alt="entertainment"
                              title="entertainment"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Construction}
                              alt="Construction"
                              title="Construction"
                            />
                          </div>
                        </span>
                      </div>

                    </div>

                    <div className="marquee-block">

                      <div className="marquee-inner to-left">
                        <span>
                          <div className="marquee-item">
                            <img
                              src={Logistic}
                              alt="logistics"
                              title="logistics"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Ecommerce}
                              alt="ecommerce"
                              title="ecommerce"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Resturant}
                              alt="resturants"
                              title="resturants"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Banking}
                              alt="banking"
                              title="banking"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Insurance}
                              alt="insurance"
                              title="insurance"
                            />
                          </div>
                        </span>
                        <span>
                          <div className="marquee-item">
                            <img
                              src={Goverment}
                              alt="goverment"
                              title="goverment"
                            />
                          </div>
                          <div className="marquee-item">
                            <img
                              src={Logistic}
                              alt="logistics"
                              title="logistics"
                            />
                          </div>
                        </span>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
              <div
                className="col-lg-7 d-flex align-items-center wow fadeInUp order-0 order-lg-1"

              >
                <div className="industries-float-txt py-5 py-lg-0">
                  <div data-aos="fade-up">
                    <span>INDUSTRIES WE SERVE</span>
                  </div>
                  <div data-aos="fade-up">
                    <span className="heading-span">
                      Get Success in Your Industry With Our Website Designing Services
                    </span>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      With years of experience and knowledge,<span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> reassures
                      that we work for your brand as our property and think proactively.
                      We take pride in delivering services to various sectors with the
                      best industry experts team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- INDUSTRIES WE SERVE end --> */}


        {/* <!-- cta 2st start --> */}

        <section className="home-cta cta1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-9">
                <div
                  className="cta-1st-sec-titles float-right-sec"

                >
                  <div data-aos="fade-up">
                    <span>Made up your mind?</span>
                  </div>
                  <div data-aos="fade-up">
                    <span className="heading-span">
                      Strengthen Your Business With Crew Captivators Solutions Pvt. Ltd. !
                    </span>
                  </div>
                  <div data-aos="fade-up">
                    <Link
                      to="#"
                      className="/contact"

                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-3">
                <div className="cta-1st-img-1 text-center">
                  <div data-aos="fade-up">
                    <div className=''>
                      <Lottie animationData={CTA2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- cta 2nd End --> */}

        {/* <!-- process START --> */}

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="road-map-main">
                <div className='Heading-for-steps'>
                  <div data-aos="fade-up">
                    <p>FROM IDEATION TO OPTIMIZATION</p>
                  </div>
                  <div data-aos="fade-up">
                    <h2>Our Seamless & Streamlined Work Process</h2>
                  </div>
                </div>

                <div className="road-map-wrapper" data-aos="fade-up">
                  <div className="road-map-circle" data-aos="fade-up">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">

                      <div className='process-step-lottie-size'>
                        <Lottie animationData={Step1} />
                      </div>

                    </span>
                  </div>

                  <div className="road-map-card">

                    <p className='step-name'>Step 1</p>


                    <h4 className="card-head">Discovery & Strategizing</h4>


                    <p className="card-text">
                      Collaborate with the client to understand their goals, audience, and functional needs.
                    </p>

                  </div>

                </div>

                <div className="road-map-wrapper" data-aos="fade-up">
                  <div className="road-map-circle" data-aos="fade-up">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">

                      <div className='process-step-lottie-size'>
                        <Lottie animationData={Step2} />
                      </div>

                    </span>
                  </div>

                  <div className="road-map-card">

                    <p className='step-name'>Step 2</p>


                    <h4 className="card-head">Design and Development</h4>


                    <p className="card-text">
                      Create the website's look and functionality based on approved designs and client feedback.
                    </p>

                  </div>

                </div>

                <div className="road-map-wrapper" data-aos="fade-up">
                  <div className="road-map-circle" data-aos="fade-up">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">

                      <div className='process-step-lottie-size'>
                        <Lottie animationData={Step3} />
                      </div>

                    </span>
                  </div>

                  <div className="road-map-card">

                    <p className='step-name'>Step 3</p>


                    <h4 className="card-head">Testing and Quality Assurance</h4>


                    <p className="card-text">
                      Thoroughly test the website for usability and issues across devices and browsers.
                    </p>

                  </div>

                </div>

                <div className="road-map-wrapper" data-aos="fade-up">
                  <div className="road-map-circle" data-aos="fade-up">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">

                      <div className='process-step-lottie-size'>
                        <Lottie animationData={Step4} />
                      </div>

                    </span>
                  </div>

                  <div className="road-map-card">

                    <p className='step-name'>Step 4</p>


                    <h4 className="card-head">Launch and Maintenance</h4>


                    <p className="card-text">
                      Launch the website after client approval and provide ongoing updates and support for its optimal performance.
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <!-- process END --> */}

        {/* <!-- Clients section start --> */}


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



        {/* FAQ Section Start */}
        <Faq />
        {/* FAQ Section Start */}

        {/* <LiveChatApp /> */}

      </div >
    </>
  );
};

export default Home;
