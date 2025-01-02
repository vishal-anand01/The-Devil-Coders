import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import initializeTypewriter from '../Assets/JavacsriptFile/AboutPageName';
import '../Assets/CSS/servicePage.css';

import { Helmet } from 'react-helmet';
import Faq from './FaqSection'
// import ccslogoIcon from '../Assets/img/ccs-logo-icon.png'
import ServicesWhyChhosseUs from '../Assets/Json/ServicesWhyChhooseUs.json'
import ServicesWorkTogether from '../Assets/Json/ServicesWorkTogether.json'
import ServicesWorkTogether2 from '../Assets/Json/ServicesWorkTogether2.json'
import Lottie from 'lottie-react';

import TaxAnimation from '../Assets/Service/Tax.json'
import TenderBidding from '../Assets/Service/Tender.json'
import OnlineAnimation from '../Assets/Service/OnlineAffiliation.json'
import ItSolution from '../Assets/Service/It.json'
import MediaProduction from '../Assets/Service/SocialMedia.json'
import NEFACabServices from '../Assets/Service/Nefa.json'
import WebsiteDesigningDevelopment from '../Assets/Service/Website.json'
import AdmissionAssistance from '../Assets/Service/Admission.json'
import GraphicDesigning from '../Assets/Service/Graphics.json'
import LeadGeneration from '../Assets/Service/LeadGenerationAnimated.json'
import TeleCallers from '../Assets/Service/Talecaller.json'
import InteriorDesign from '../Assets/Service/Interior.json'
import DroneTechnology from '../Assets/Service/Dron.json'
import AppDevelopment from '../Assets/Service/App.json'
import ScoialMedia from '../Assets/Service/SocialMedia.json'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Service = () => {

  // ye script counter ke liye hai 
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {

    initializeTypewriter([
      { elementId: 'app', text: 'Services' }
      // Add more configurations for other elements if needed
    ]);


    let counter = 0;
    const interval = setInterval(() => {
      if (counter < 321 && inView) {
        setCount(counter);
        counter += 5; // Increase by 5 instead of 1 to speed up the counting
      } else {
        clearInterval(interval);
      }
    }, 0.1);

    return () => clearInterval(interval);
  }, [inView]);

  // yahan counter ka logic end ho rha hai 


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>

      {/* Add Helmet component to manage document head */}
      <Helmet>
        {/* Title */}
        <title>Services - Crew Captivators Solutions Pvt. Ltd.</title>
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




      {/* Why Choose us */}
      <section className="why-choose-us-section greybg py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-us-text">
                <div className="finix-text">
                  <div data-aos="fade-up">
                    <h1>Why Choose Us?</h1>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      We build a personalized digital marketing solution for businesses of all sizes with the main motive to achieve their visions and goals.
                    </p>
                  </div>
                </div>
                <div className="choose-us-img">
                  <div className='service-page-why-chhosse-us'>
                    <div data-aos="fade-up">
                      <Lottie animationData={ServicesWhyChhosseUs} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="choose-us-items text-center">
                    <div data-aos="fade-up">
                      <div className="choose-us-item">
                        <span>
                          <i className="fa-solid fa-phone-volume"></i>

                        </span>
                        <h1>24/7 Customer Support</h1>
                        <p>

                          24/7 Customer Support: Providing continuous assistance and resolution for customer inquiries across all channels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="choose-us-items text-center">
                    <div data-aos="fade-up">
                      <div className="choose-us-item">
                        <span>
                          <i className="fa-solid fa-shield-halved"></i>
                        </span>
                        <h1>Build Brand Reputation</h1>
                        <p>
                          Build Brand Reputation: Crafting strategies to enhance and safeguard a brand's image, credibility, and trust among its audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="choose-us-items text-center">
                    <div data-aos="fade-up">
                      <div className="choose-us-item">
                        <span>
                          <i className="fa-solid fa-business-time"></i>
                        </span>
                        <h1>Experienced Experts</h1>
                        <p>
                          Experienced Experts: Seasoned professionals with deep knowledge and proven track records in their respective fields.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="choose-us-items text-center">
                    <div data-aos="fade-up">
                      <div className="choose-us-item">
                        <span>
                          <i className="fa-solid fa-chart-line"></i>
                        </span>
                        <h1>Updated Trend and Technology</h1>
                        <p>
                          Updated Trend and Technology: Keeping pace with the latest industry advancements to provide innovative solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START SECTION SERVICES */}
      <section className="section-services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <div data-aos="fade-up">
                  <h2 className="title">Exclusive Services</h2>
                </div>
                <div data-aos="fade-up">
                  <p className="description">
                    At Crew Captivators Solutions Pvt Ltd, we offer a range of business development services to help you succeed in today's digital world. Our team of experts will work with you to create a customized plan that meets your unique needs and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={TaxAnimation} />
                      </div>
                    </span>
                    <h3 className="title">Tax & Accounts Consultant</h3>
                    <p className="description">
                      Tax & Accounts Consultant: Skilled professional offering comprehensive financial guidance, specializing in tax optimization and compliance solutions.
                    </p>
                    <Link to="/services/tax-and-accounts-consultant" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={TenderBidding} />
                      </div>
                    </span>
                    <h3 className="title">Tender Bidding Services</h3>
                    <p className="description">

                      Tender Bidding Services: Expert support for navigating and succeeding in competitive bidding processes, ensuring clients secure contracts and ...
                    </p>
                    <Link to="/services/tender-bidding-services" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={OnlineAnimation} />
                      </div>
                    </span>
                    <h3 className="title">Online Affiliation Services</h3>
                    <p className="description">
                      Online Affiliation Services: Streamlining the process of establishing and managing online partnerships to expand clients' reach and revenue streams effectively.
                    </p>
                    <Link to="/services/online-affiliation-services" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={ItSolution} />
                      </div>
                    </span>
                    <h3 className="title">IT Solutions</h3>
                    <p className="description">
                      IT Solutions: Providing tailored technological innovations and support to optimize business processes and enhance efficiency.
                    </p>
                    <Link to="/services/it-solution" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={MediaProduction} />
                      </div>
                    </span>
                    <h3 className="title">Media Production</h3>
                    <p className="description">

                      Media Production: Crafting compelling content across various mediums to captivate audiences and convey impactful messages effectively.
                    </p>
                    <Link to="/services/media-production" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={NEFACabServices} />
                      </div>
                    </span>
                    <h3 className="title">NEFA Cab Services</h3>
                    <p className="description">
                      NEFA Cab Services: Offering reliable transportation solutions with a focus on safety, comfort, and efficiency for passengers' convenience.
                    </p>
                    <Link to="/services/nefa-cabs" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}


            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={WebsiteDesigningDevelopment} />
                      </div>
                    </span>
                    <h3 className="title">Website Designing & Development</h3>
                    <p className="description">
                      Website Designing: Creating visually appealing and user-friendly online platforms tailored to clients' needs and preferences.
                    </p>
                    <Link to="/services/web-desinging-and-development" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={AdmissionAssistance} />
                      </div>
                    </span>
                    <h3 className="title">Admission Assistance</h3>
                    <p className="description">

                      Admission Assistance: Guiding individuals through the complex process of securing admission to educational institutions, ensuring a seamless and ..
                    </p>
                    <Link to="/services/admission-assistance" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={GraphicDesigning} />
                      </div>
                    </span>
                    <h3 className="title">Graphic Designing</h3>
                    <p className="description">

                      Graphic Designing: Crafting visually captivating and impactful designs to effectively convey messages and enhance brand identities.
                    </p>
                    <Link to="/services/graphic-designing" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={LeadGeneration} />
                      </div>
                    </span>
                    <h3 className="title">Lead Generation</h3>
                    <p className="description">
                      Lead Generation: Implementing strategies to attract and convert potential customers into qualified leads, driving business growth and profitability.
                    </p>
                    <Link to="/services/lead-generation" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={TeleCallers} />
                      </div>
                    </span>
                    <h3 className="title">Tele Callers (BPO Services)</h3>
                    <p className="description">
                      Tele Callers (BPO Services): Professional communication specialists adept at delivering high-quality customer service and sales support ...
                    </p>
                    <Link to="/services/tele-callers" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={ScoialMedia} />
                      </div>
                    </span>
                    <h3 className="title">Social Media Promotion</h3>
                    <p className="description">
                      Social Media Promotion: Strategically amplifying brand presence and engagement across various social media platforms to reach and connect with ..
                    </p>
                    <Link to="/services/social-media-promotion" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}


            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={InteriorDesign} />
                      </div>
                    </span>
                    <h3 className="title">Interior Design</h3>
                    <p className="description">

                      Interior Design: Crafting aesthetically pleasing and functional spaces that reflect clients' personalities and meet their practical needs, enhancing ...
                    </p>
                    <Link to="/services/interior-design" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={DroneTechnology} />
                      </div>
                    </span>
                    <h3 className="title">Drone Technology</h3>
                    <p className="description">
                      Drone Technology: Revolutionizing industries through unmanned aerial vehicles, facilitating efficient data collection and innovative perspectives.
                    </p>
                    <Link to="/services/drone-technology" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div data-aos="fade-up">
                <div className="single-service">
                  <div className="content">
                    <span className="icon">
                      <div className='servicesAnimation'>
                        <Lottie animationData={AppDevelopment} />
                      </div>
                    </span>
                    <h3 className="title">App Development (Android & IOS)</h3>
                    <p className="description">

                      App Development (Android & iOS): Crafting intuitive and feature-rich mobile applications tailored to meet client needs and enhance user experiences ...
                    </p>
                    <Link to="/services/app-development" className="learn-more">
                      Learn More
                    </Link>
                  </div>
                  <span className="circle-before" />
                </div>
              </div>
            </div>
            {/* / End Single Service */}
          </div>
        </div>
      </section>
      {/* / END SECTION SERVICES */}



      <div className='features-lets-work-together mt-5 mb-5' >
        <section _ngcontent-ifq-c34="" className="wrapper bg-light angled upper-end">
          <div _ngcontent-ifq-c34="" className="container py-12 py-md-12">
            <div
              _ngcontent-ifq-c34=""
              className="row align-items-center"
            >
              <div _ngcontent-ifq-c34="" className="col-lg-7 position-relative">
                <div data-aos="fade-up">
                  <div
                    _ngcontent-ifq-c34=""
                    data-rellax-speed={1}
                    className="shape bg-dot primary rellax w-18 h-18"
                    style={{ top: 0, left: "-1.4rem", zIndex: 0 }}
                  />
                </div>
                <div _ngcontent-ifq-c34="" className="row gx-md-5 gy-5">
                  <div _ngcontent-ifq-c34="" className="col-md-6">
                    <figure
                      _ngcontent-ifq-c34=""
                      className="rounded mt-md-10 position-relative"
                    >
                      <div data-aos="fade-up">
                        <div className='service-page-animation1'>
                          <Lottie animationData={ServicesWorkTogether} />
                        </div>
                      </div>
                    </figure>
                  </div>
                  <div _ngcontent-ifq-c34="" className="col-md-6">
                    <div _ngcontent-ifq-c34="" className="row gx-md-5 gy-5">
                      <div _ngcontent-ifq-c34="" className="col-md-12 order-md-2">
                        <figure _ngcontent-ifq-c34="" className="rounded">
                          <div data-aos="fade-up">
                            <div className='service-page-animation1'>
                              <Lottie animationData={ServicesWorkTogether2} />
                            </div>
                          </div>
                        </figure>
                      </div>
                      <div _ngcontent-ifq-c34="" className="col-md-10">
                        <div data-aos="fade-up">
                          <div
                            _ngcontent-ifq-c34=""
                            className="card bg-pale-primary text-center" ref={ref}
                          >

                            <div
                              _ngcontent-ifq-c34=""
                              className="card-body py-11 counter-wrapper"
                            >
                              <h3 className="counter text-nowrap">{count}+</h3>
                              <p _ngcontent-ifq-c34="" className="mb-0">
                                Clients Who Love CCS Pvt. Ltd.
                              </p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div _ngcontent-ifq-c34="" className="col-lg-5">
                <div data-aos="fade-up">
                  <h2 _ngcontent-ifq-c34="" className="display-4 mb-3">
                    Let’s work together!!{" "}
                  </h2>
                </div>
                <div data-aos="fade-up">
                  <div _ngcontent-ifq-c34="" className="lets-line" />
                </div>

                <div data-aos="fade-up">
                  <p _ngcontent-ifq-c34="" className="lead fs-lg">
                    Let's make something great together. We are{" "}
                    <span _ngcontent-ifq-c34="" className="underline">
                      trusted by
                    </span>{" "}
                    over 500+ clients. Join them by using our services and grow your
                    business.
                  </p>
                </div>
                <div data-aos="fade-up">
                  <p _ngcontent-ifq-c34="">
                    Our highly qualified experts provide your business with the most
                    suitable solutions and help your business achieve its goals and
                    visions. We will help you in engaging more potential audiences, rank
                    high on the search results and improve your conversion rates.{" "}
                  </p>
                </div>
                <div data-aos="fade-up">
                  <Link to="/contact" className="btn  .rounded-pill core-team-member-button-features" style={{ padding: '10px 30px', borderRadius: '50px' }}>Join Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section >

      </div >


      <Faq />


    </>

  )
}

export default Service
