import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Assets/CSS/footerPage.css'
import CCSLogo from '../Assets/img/ccs-logo.png';
import { FaArrowUp } from 'react-icons/fa';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import Chat from '../ChatBox/Chat'

const Footer = () => {

  // ye script back to top ke liye hai
  const [isVisible, setIsVisible] = useState(false);

  // Function to control button visibility based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // yaha par back to top ka script end ho rha hai
  return (
    <>

      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta for-mobile-responsive">
                  <ScrollAnimation >
                    <i className="fas fa-map-marker-alt" />
                    <div className="cta-text for-mobile-responsive">
                      <h4>Find us</h4>
                      <span><Link to="https://maps.app.goo.gl/knKjwkQabXRVdUus5" target='blank'>Court St, opposite Directorate of Agriculture,<br />D Sector, Naharlagun, Arunachal Pradesh 791110</Link></span>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <ScrollAnimation >
                    <i className="fas fa-phone" />
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span><Link to="tel:+919233495319" className="">+91 92334 95319</Link></span>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <ScrollAnimation >
                    <i className="far fa-envelope-open" />
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span><Link to="mailto:info@ccscorporate.com">
                        info@ccscorporate.com
                      </Link></span>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50 pe-5">
                <div className="footer-widget">
                  <ScrollAnimation >
                    <div className="footer-logo">
                      <Link to="/">
                        <img
                          src={CCSLogo}
                          className="img-fluid"
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </ScrollAnimation>
                  <div className="footer-text">
                    <ScrollAnimation >
                      <p>

                        We are the best world Information Technology Company. Providing the highest quality in hardware & Network solutions. About more than 10 years of experience and 1000 of innovative achievements.
                      </p>
                    </ScrollAnimation>
                  </div>
                  <ScrollAnimation >
                    <div className="footer-social-icon">
                      <span>Follow us</span>
                      <Link to="https://www.facebook.com/CrewCaptivatorsSolutions" target='blank'>
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link to="https://www.instagram.com/crewcaptivatorssolutions/" target='blank'>
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link to="https://twitter.com/" target='blank'>
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                      <Link to="https://in.linkedin.com/" target='blank'>
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>

                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <ScrollAnimation >
                      <h3>Useful Links</h3>
                    </ScrollAnimation>
                  </div>
                  <ScrollAnimation >
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/services/web-desinging-and-development">Web Development</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/services/graphic-designing">Graphic Design</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/services/app-development">App Development</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/services/tender-bidding-services">Tender Bidding</Link>
                      </li>
                      <li>
                        <Link to="/career">Career</Link>
                      </li>
                      <li>
                        <Link to="/services/interior-design">Interior Design</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/services/admission-assistance">Admission Assistance</Link>
                      </li>
                    </ul>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <ScrollAnimation >
                      <h3>Location</h3>
                    </ScrollAnimation>
                  </div>
                  <div className="footer-text mb-25">
                    <ScrollAnimation >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14207.191363722173!2d93.690343!3d27.0996695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744010497797201%3A0x4e693bdbb17e370b!2sCrew%20Captivators%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1712990797914!5m2!1sen!2sin"
                        width="100%"
                        height="220"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="CCS Location Map"
                      />
                    </ScrollAnimation>
                  </div>
                  {/* <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane" />
                      </button>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6  text-lg-left">
                <div className="copyright-text">
                  <p>
                    © <Link to="https://www.ccscorporate.com/">Crew Captivators Solutions Pvt. Ltd.</Link> , All Right Reserved.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="https://www.facebook.com/CrewCaptivatorsSolutions" className="bg-light nav-fill btn btn-sm-square rounded-circle" target='blank'><i className="fab fa-facebook-f top-bar-icon-style"></i></Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/" className="bg-light nav-fill btn btn-sm-square rounded-circle" target='blank'><i className="fab fa-twitter top-bar-icon-style"></i></Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/crewcaptivatorssolutions/" className="bg-light nav-fill btn btn-sm-square rounded-circle" target='blank'><i className="fab fa-instagram top-bar-icon-style"></i></Link>
                    </li>
                    <li>
                      <Link to="https://in.linkedin.com/" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0" target='blank'><i className="fab fa-linkedin-in top-bar-icon-style"></i></Link>
                    </li>
                    <li>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Box */}
      <Chat />
      {/* Chat Box */}

      {/* <!-- Back to Top --> */}
      <button
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>

    </>
  );
};

export default Footer;
