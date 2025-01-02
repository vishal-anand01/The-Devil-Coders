import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import initializeTypewriter from '../Assets/JavacsriptFile/AboutPageName';
import '../Assets/CSS/aboutUsPage.css';
import AboutUsBg01 from '../Assets/img/about-us-bg-01.png'
import AboutUsBg02 from '../Assets/img/about-us-bg-02.png'
import AboutUsBg03 from '../Assets/img/about-us-bg-03.png'
import AboutUsBg04 from '../Assets/img/about-us-bg-04.png'
import aboutUsPageBg1 from '../Assets/img/tenderservicesbg.png'
// import OurMission from '../Assets/img/about-us-our-mission.jpg'
// import OurPurpose from '../Assets/img/about-us-our-Purpose.jpg'
// import OurStory from '../Assets/img/about-us-our-story.jpg'
// import OurValues from '../Assets/img/about-us-our-values.jpg'

import KumarTajo from '../Assets/img/chairman21.jpg'
// import ErGungteYangfo from '../Assets/img/Er-Gungte-Yangfo.webp'
import SwapanChakraborty from '../Assets/img/Swapan-Chakraborty.webp'
import SouvikSir from '../Assets/img/Team/Souvik1.jpeg'
import RishiSir from '../Assets/img/Team/Rishi1.jpeg'
// import AboutUsBg1 from '../Assets/img/about-us-bg1.png'
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';
import AboutFaq from './AboutUsPageFaqPart'


import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  const countsRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    initializeTypewriter([
      { elementId: 'app', text: 'About Us' },
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

  useEffect(() => {
    $('.js-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.js-ag-carousel-arrow_prev',
      nextArrow: '.js-ag-carousel-arrow_next',
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (

    <>
      <div className='AboutPageMain '>
        {/* Add Helmet component to manage document head */}
        <Helmet>
          {/* Title */}
          <title>About - Crew Captivators Solutions Pvt. Ltd.</title>
          {/* Meta description */}
          <meta
            name="description"
            content="One Stop Solutions for your business and discover top-notch services including tax and accounting consultation, tender bidding, online affiliation, IT solutions, NEFA cab services, media production, graphic designing, admission assistance, lead generation, BPO services, social media promotion, app development for Android & iOS, interior designing and many more... "
          />
          {/* Other meta tags */}
          {/* Add any other necessary meta tags here */}
        </Helmet>

        <div className="about-us-container">
          <div id="app" className="about-us-text"></div>
        </div>

        {/* <div className="main-first-section">
        <div id="app"></div>
      </div> */}



        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-xl-5 col-lg-6 background-box d-flex align-items-center justify-content-center mainbg1animated"
                  data-aos="fade-right"
                >
                  <div data-aos="fade-up">
                    <img src={aboutUsPageBg1} alt='About Us Background' className='img-fluid'></img>
                  </div>
                </div>

                <div
                  className="col-xl-7 col-lg-6 icon-boxes py-5 px-lg-5"
                  data-aos="fade-left"
                >
                  <div data-aos="fade-up">
                    <h3>About Crew Captivators Solutions Pvt. Ltd.</h3>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      At Crew Captivators Solutions Pvt. Ltd. , we believe in the power of innovation and collaboration. Since our inception, we have been dedicated to providing top-notch solutions that meet the evolving needs of our clients. With a commitment to excellence and a passion for progress, we strive to make a positive impact in every industry we serve.
                    </p>
                  </div>
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
                      <div className="icon">
                        <i className="fas fa-lightbulb"></i>
                      </div>
                      <h4 className="title">
                        <Link to="">Our Values</Link>
                      </h4>
                      <p className="description">
                        Innovation: Fostering creativity and forward-thinking to drive progress.<br />
                        Integrity: Upholding honesty, transparency, and ethical conduct in all endeavors.<br />
                        Excellence: Striving for perfection and unparalleled quality in everything we do.<br />
                      </p>
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
                      <div className="icon">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <h4 className="title">
                        <Link to="">Our Team</Link>
                      </h4>
                      <p className="description">
                        Collaborative: Working together seamlessly, leveraging diverse strengths for collective success.<br />
                        Expert: Comprising skilled professionals dedicated to delivering outstanding results.<br />
                        Dedicated: Passionate individuals committed to exceeding expectations and achieving excellence.<br />
                      </p>
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                      <div className="icon">
                        <i className="fas fa-trophy"></i>
                      </div>
                      <h4 className="title">
                        <Link to="">Our Achievements</Link>
                      </h4>
                      <p className="description">
                        Customer Satisfaction: Continuously delivering exceptional service and exceeding client expectations.<br />
                        Industry Recognition: Earning accolades and awards for innovation, quality, and leadership.<br />
                        Growth: Achieving significant milestones and expanding our impact globally.<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}
          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <div data-aos="fade-up">
                  <h2>Features</h2>
                </div>
                <div data-aos="fade-up">
                  <p>Check The Features</p>
                </div>
              </div>
              <div className="row" data-aos="fade-left">
                <div className="col-lg-3 col-md-4">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={50}>
                      <i className="fas fa-money-check-alt" style={{ color: "#ffbb2c" }} />
                      <h3>
                        <Link to="/services/tax-and-accounts-consultant">Tax & Accounts Consultant</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
                      <i
                        className="fas fa-gavel"
                        style={{ color: "#5578ff" }}
                      />
                      <h3>
                        <Link to="/services/tender-bidding-services">Tender Bidding Services</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={150}>
                      <i
                        className="fas fa-link"
                        style={{ color: "#e80368" }}
                      />
                      <h3>
                        <Link to="/services/online-affiliation-services">Online Affiliation Services</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
                      <i className="fas fa-laptop-code" style={{ color: "#e361ff" }} />
                      <h3>
                        <Link to="/services/it-solution">IT Solutions</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={250}>
                      <i className="fas fa-film" style={{ color: "#47aeff" }} />
                      <h3>
                        <Link to="/services/media-production">Media Production</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                      <i className="fas fa-taxi" style={{ color: "#ffa76e" }} />
                      <h3>
                        <Link to="/services/nefa-cabs">NEFA Cab Services</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={350}>
                      <i className="fas fa-desktop" style={{ color: "#11dbcf" }} />
                      <h3>
                        <Link to="/services/web-desinging-and-development">Website Designing & Development</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={400}>
                      <i className="fas fa-graduation-cap" style={{ color: "#4233ff" }} />
                      <h3>
                        <Link to="/services/admission-assistance">Admission Assistance</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={450}>
                      <i className="fas fa-paint-brush" style={{ color: "#b2904f" }} />
                      <h3>
                        <Link to="/services/graphic-designing">Graphic Designing</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={500}>
                      <i className="fas fa-chart-line" style={{ color: "#b20969" }} />
                      <h3>
                        <Link to="/services/lead-generation">Lead Generation</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={550}>
                      <i
                        className="fas fa-phone"
                        style={{ color: "#ff5828" }}
                      />
                      <h3>
                        <Link to="/services/tele-callers">Tele Callers (BPO Services)</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div data-aos="fade-up">
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={600}>
                      <i className="fas fa-info-circle" style={{ color: "#29cc61" }} />
                      <h3>
                        <Link to="/services">Know More...</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Features Section */}

          {/* ======= Counts Section ======= */}
          <section id="counts" className="counts" ref={countsRef}>
            <div className="container">
              <div className="row" data-aos="fade-up">
                <div className="col-lg-3 col-md-6 col-3">
                  <div data-aos="fade-up">
                    <div className="count-box">
                      <i className="fas fa-smile"></i>
                      {startCounting && (
                        <CountUp end={95} duration={3} suffix="%" />
                      )}
                      <p>Happy Customer</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-3">
                  <div data-aos="fade-up">
                    <div className="count-box">
                      <i className="fas fa-tasks"></i>
                      {startCounting && (
                        <CountUp end={90} duration={3} suffix="%" />
                      )}
                      <p>Successful Business</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-3">
                  <div data-aos="fade-up">
                    <div className="count-box">
                      <i className="fas fa-clock"></i>
                      {startCounting && (
                        <CountUp end={320} duration={3} suffix="+" />
                      )}
                      <p>Clients Who Love CCS PVT LTD</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-3">
                  <div data-aos="fade-up">
                    <div className="count-box">
                      <i className="fas fa-users"></i>
                      {startCounting && (
                        <CountUp end={4.8} duration={3} suffix="*" decimals={1} />
                      )}
                      <p>Review Given By Satisfied Clients</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          {/* End Counts Section */}

          {/* ======= Details Section ======= */}
          <section id="details" className="details">
            <div className="container">
              <div className="row content">
                <div className="col-md-4" data-aos="fade-right">
                  <div data-aos="fade-up">
                    <img src={AboutUsBg01} className="img-fluid animatedimg" alt="" />
                  </div>
                </div>
                <div className="col-md-8 pt-4 ">
                  <div data-aos="fade-up">
                    <h3>
                      Company Overview
                    </h3>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <p className="fst-italic">
                      At Crew Captivators Solutions Pvt. Ltd., we are dedicated to driving innovation and excellence in everything we do. With a focus on delivering exceptional products/services and creating meaningful relationships with our clients, we strive to make a positive impact in the industry.
                    </p>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <ul>
                      <li>
                        <i className="fa-solid fa-check"></i> Our Journey & Milestones
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Recognition & Awards
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Trusted Partnerships & Clients
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Strategic Growth & Expansion Plans
                      </li>
                    </ul>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      Founded on a commitment to integrity and customer satisfaction, Crew Captivators Solutions Pvt. Ltd. is a trusted leader in [industry/niche]. Our team of experts combines industry experience with cutting-edge technology to deliver solutions that exceed expectations and drive success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row content">
                <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
                  <div data-aos="fade-up">
                    <img src={AboutUsBg02} className="img-fluid animatedimg" alt="" />
                  </div>
                </div>
                <div className="col-md-8 pt-5 order-2 order-md-1 " data-aos="fade-up">
                  <div data-aos="fade-up">
                    <h3>Vision & Mission</h3>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <p className="fst-italic">
                      Empowering communities through innovation and sustainable solutions. Mission: To transform lives by providing cutting-edge technology and exceptional services.
                    </p>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <p>
                      Striving to create a world where technology enhances human potential and fosters inclusivity. Mission: Our mission is to lead by example, driving positive change through innovation, integrity, and collaboration.
                    </p>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <p>
                      Our vision is to be a catalyst for global progress, shaping a future where every individual has the opportunity to thrive. Mission: At the core of our mission is a commitment to excellence, ethical conduct, and social responsibility, as we work tirelessly to create value for all stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row content ">
                <div className="col-md-4" data-aos="fade-right">
                  <div data-aos="fade-up">
                    <img src={AboutUsBg03} className="img-fluid animatedimg" alt="" />
                  </div>
                </div>
                <div className="col-md-8 pt-5" data-aos="fade-up">
                  <div data-aos="fade-up">
                    <h3>
                      Leadership Team
                    </h3>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <p>
                      Our leadership team comprises seasoned professionals with diverse backgrounds and expertise, united by a shared commitment to driving the company's vision forward.
                    </p>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <ul>
                      <li>
                        <i className="fa-solid fa-check"></i> Executive Leadership Committee
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Advisory Board Members
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Departmental Heads and Managers
                      </li>
                    </ul>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      Each member of our leadership team brings a wealth of experience and a unique perspective, guiding our organization with strategic vision and operational excellence.
                    </p>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <p>
                      Committed to fostering a culture of innovation and collaboration, our leadership team empowers employees to thrive and achieve their full potential.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row content">
                <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
                  <div data-aos="fade-up">
                    <img src={AboutUsBg04} className="img-fluid animatedimg" alt="" />
                  </div>
                </div>
                <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
                  <div data-aos="fade-up">
                    <h3>
                      Core Values
                    </h3>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <p className="fst-italic">
                      Our core values define who we are as an organization, guiding our decisions and actions to ensure integrity, excellence, and customer satisfaction.
                    </p>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <p>
                      At the heart of our operations lie our core values, which encompass honesty, innovation, and a dedication to continuous improvement in all aspects of our work.
                    </p>
                  </div>
                  <br />
                  <div data-aos="fade-up">
                    <ul>
                      <li>
                        <i className="fa-solid fa-check"></i> Pillars of Integrity, Transparency & Accountability
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Embracing Innovation, Creativity & Ingenuity
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Commitment to Continuous Improvement & Excellence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Details Section */}

          {/* ======= Testimonials Section ======= */}

          {/* End Testimonials Section */}
          {/* ======= Team Section ======= */}
          <section id="team" className="team px-5">
            <div className="container-fluid">
              <div className="section-title" data-aos="fade-up">
                <div data-aos="fade-up">
                  <h2>Team</h2>
                </div>
                <div data-aos="fade-up">
                  <p>Our Great Team</p>
                </div>
              </div>
              <div className="row p-0 m-0" data-aos="fade-left">
                <div className="col-lg-2 col-md-6">
                  <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                    <div data-aos="fade-up">
                      <div className="pic">
                        <img
                          src={KumarTajo}
                          className="img-fluid"
                          alt="Kumar Tajo"
                        />
                      </div>
                    </div>
                    <div data-aos="fade-up">
                      <div className="member-info">
                        <h4>Kumar Tajo</h4>
                        <span>Chairman</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 mt-5 mt-lg-0">
                  <div className="member" data-aos="zoom-in" data-aos-delay={300}>
                    <div data-aos="fade-up">
                      <div className="pic">
                        <img
                          src={SwapanChakraborty}
                          className="img-fluid"
                          alt="Swapan Chakraborty"
                        />
                      </div>
                    </div>
                    <div data-aos="fade-up">
                      <div className="member-info">
                        <h4>Swapan Chakraborty</h4>
                        <span>Executive Director</span>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 mt-5 mt-lg-0">
                  <div className='member-message'>
                    <div data-aos="fade-up">
                      <h3>Board of Directors</h3>
                    </div>
                    <div data-aos="fade-up">
                      <p>
                        Board of Directors
                        With experience of 35+ years our company focuses on Research and Development right from its inception. We understand that a steadfast focus and commitment in R&D is the key in achieving our business ambitions. Our years of effort in Research and Development have helped us achieve several breakthroughs, and be a pioneer in this field. We have revolutionized the way technology can be used so that our customers gain the crucial competitive edge they need in this demanding business environment.
                        <br />
                        <br />

                        At CREW CAPTIVATORS SOLUTIONS PVT. LTD. we bring the best people and the best ideas together to deliver value to our customers. We believe that companies can innovate and deliver outstanding service only if they tap the commitment, energy, and imagination of their employees. Value must therefore be created for those employees in order to motivate and enable them. Value for employees includes being treated respectfully and being involved in decision making.</p>
                    </div>
                    <br />

                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
                      <div data-aos="fade-up">
                        <Link to='https://www.facebook.com/CrewCaptivatorsSolutions' target='blank' >
                          <div className="icon">
                            <i className="fa-brands fa-facebook-f"></i>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
                      <div data-aos="fade-up">
                        <Link to='https://www.instagram.com/crewcaptivatorssolutions/' target='blank'>
                          <div className="icon">
                            <i className="fa-brands fa-instagram"></i>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                      <div data-aos="fade-up">
                        <Link to='https://il.linkedin.com/' target='blank'>
                          <div className="icon">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                      <div data-aos="fade-up">
                        <Link to='https://twitter.com/' target='blank'>
                          <div className="icon">
                            <i className="fa-brands fa-twitter"></i>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <br />
                    <br />
                    <div data-aos="fade-up">
                      <Link className="btn about-section-button rounded-pill px-5 py-3 mt-3" to="/contact">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='core-team-member'>

                <div className="row p-0 m-0" data-aos="fade-left">
                  <div className="col-lg-8 col-md-6 mt-5 mt-lg-0">
                    <div className='member-message'>
                      <div data-aos="fade-up">
                        <h3>Core Team Members</h3>
                      </div>
                      <div data-aos="fade-up">
                        <p>
                          We are a proficiently managed web based company strategically located in Naharlagun, the Green City of India.
                          We are serving clients from February 2019 with the Vision of creating a Digital Environment for small businesses to a big firm. Over the last nearly 4 years of successful existence, We are been successful in delivering with dedicated, efficient and competent team of Professionals.
                          <br />
                          <br />

                          Not just that, there is passion at work that has always allowed.
                          CREW CAPTIVATORS SOLUTIONS PVT. LTD.  to make Technology affordable and available to common man. This has helped the customers a great deal to be successful, competent, streamline business operations & establish progressive communication channels making website to work as a virtual office.</p>
                      </div>
                      <br />

                      <div className='row'>
                        <div className='col-12'>
                          <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
                            <div data-aos="fade-up">
                              <Link to='https://www.facebook.com/CrewCaptivatorsSolutions' target='blank' >
                                <div className="icon">
                                  <i className="fa-brands fa-facebook-f"></i>
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
                            <div data-aos="fade-up">
                              <Link to='https://www.instagram.com/crewcaptivatorssolutions/' target='blank'>
                                <div className="icon">
                                  <i className="fa-brands fa-instagram"></i>
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                            <div data-aos="fade-up">
                              <Link to='https://il.linkedin.com/' target='blank'>
                                <div className="icon">
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                            <div data-aos="fade-up">
                              <Link to='https://twitter.com/' target='blank' >
                                <div className="icon">
                                  <i className="fa-brands fa-twitter"></i>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>

                      </div>

                      <br />
                      <div data-aos="fade-up">
                        <Link className="btn about-section-button rounded-pill px-5 py-3 mt-3" to="/contact">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                      <div data-aos="fade-up">
                        <div className="pic">
                          <img
                            src={SouvikSir}
                            className="img-fluid"
                            alt="Sauvik Chakraborty"
                          />
                        </div>
                      </div>
                      <div className="member-info">
                        <div data-aos="fade-up">
                          <h4>Sauvik Chakraborty</h4>
                        </div>
                        <div data-aos="fade-up">
                          <span>CEO ( FOUNDER )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 mt-5 mt-md-0">
                    <div className="member" data-aos="zoom-in" data-aos-delay={200}>
                      <div data-aos="fade-up">
                        <div className="pic">
                          <img
                            src={RishiSir}
                            className="img-fluid"
                            alt="Hrishikesh Laha"
                          />
                        </div>
                      </div>
                      <div className="member-info">
                        <div data-aos="fade-up">
                          <h4>Hrishikesh Laha</h4>
                        </div>
                        <div data-aos="fade-up">
                          <span>Chief operating officer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
          {/* End Team Section */}


        </main>
        {/* End #main */}


        {/* ======= F.A.Q Section ======= */}
        <AboutFaq />

        {/* End F.A.Q Section */}

      </div>
    </>


  );
};

export default About;
