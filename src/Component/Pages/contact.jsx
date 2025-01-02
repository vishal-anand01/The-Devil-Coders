import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/contactUsPage.css'
import initializeTypewriter from '../Assets/JavacsriptFile/AboutPageName';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import EmailAnimation from '../Assets/Json/ContactUsPageEmailAnimation.json';
import ContactPageBackground from '../Assets/Json/ConatctPageBackground.json'
// import conatcImageAnimate from '../Assets/img/contact-animated-image.png'
import ContactPhone from '../Assets/Json/ContactPhone.json'
import ContactEmail from '../Assets/Json/ContactEmail.json'
import ContactAddress from '../Assets/Json/ContactAddress.json'

import ContactUsFprmBg from '../Assets/Json/ContactUsPageFormRightSideAnimation.json'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Add this line

  useEffect(() => {
    initializeTypewriter([
      { elementId: 'app', text: 'Contact Us' },
      // Add more configurations for other elements if needed
    ]);
  }, []);


  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [emailError, setEmailError] = useState('');


  // Handler to update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Email validation
    if (name === 'email') {
      if (!isValidEmail(value)) {
        setEmailError('Invalid email address');
      } else {
        setEmailError('');
      }
    }
  };

  // Handler to submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is valid before submitting the form
    if (!isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    try {
      setLoading(true); // Show loading indicator
      // Send form data to backend API
      const response = await axios.post('http://localhost:5000/submit', formData);
      console.log(response.data); // Log response from backend
      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Show success message
      setSubmitMessage('Form submitted successfully!');
      // Clear error message
      setErrorMessage('');
      setIsSubmitted(true); // Update the submission status

    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message
      setErrorMessage('An error occurred while submitting the form. Please try again.');
      // Clear success message
      setSubmitMessage('');
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    // Email validation using regular expression
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email) && email.endsWith('.com');
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>

      {/* Add Helmet component to manage document head */}
      <Helmet>
        {/* Title */}
        <title>Contact Us - Crew Captivators Solutions Pvt. Ltd.</title>
        {/* Meta description */}
        <meta
          name="description"
          content="Get in touch with us at our consultancy office in Naharlagun, Arunachal Pradesh. Call +91 92334 95319 or email info@ccscorporate.com to drop us a line... "
        />
        {/* Other meta tags */}
        {/* Add any other necessary meta tags here */}
      </Helmet>

      <div className="about-us-container">
        <div id="app" className="about-us-text"></div>
      </div>

      <div className="page-title-area bg-1" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }}>
          <div data-aos="fade-up">
            <Lottie animationData={ContactPageBackground} height={'100%'} width={'100%'} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="page-title-content">
                <div data-aos="fade-up">
                  <h2>Contact Us</h2>
                </div>
                <div data-aos="fade-up">
                  <ul>
                    <li>
                      <Link to="/">Home </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right"></i>
                    </li>
                    <li className="active">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bnr-img-main">
                <div className='contact-us-page-email-animation'>
                  <div data-aos="fade-up">
                    <Lottie animationData={EmailAnimation} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Contact Start */}
      <div className="container-fluid py-5 mb-5 contact-us-page">
        <div className="container">

          <div className="contact-detail position-relative p-5">
            <div className="row g-5">
              <div className='col-sm-4 '>
                <div className='contact-details-number-email-address'>
                  <div className='contact-phone'>
                    <div data-aos="fade-up">
                      <Lottie animationData={ContactPhone} />
                    </div>
                  </div>
                  <div className="ms-3">
                    <div data-aos="fade-up">
                      <div>Phone:</div>
                    </div>
                    <div data-aos="fade-up">
                      <div><Link to="tel:+919233495319">+91 92334 95319</Link></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='contact-details-number-email-address'>
                  <div className='contact-email'>
                    <div data-aos="fade-up">
                      <Lottie animationData={ContactEmail} />
                    </div>
                  </div>
                  <div className="ms-3">
                    <div data-aos="fade-up">
                      <div>Email:</div>
                    </div>
                    <div data-aos="fade-up">
                      <div><Link to="mailto:info@ccscorporate.com">info@ccscorporate.com</Link></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='contact-details-number-email-address'>
                  <div className='contact-address'>
                    <div data-aos="fade-up">
                      <Lottie animationData={ContactAddress} />
                    </div>
                  </div>
                  <div className="ms-3">
                    <div data-aos="fade-up">
                      <div>Address:</div>
                    </div>
                    <div data-aos="fade-up">
                      <Link
                        to="https://maps.app.goo.gl/3rNJpsbhBxdC92zH8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        D-Sector, Opp. Directorate of Agriculture office,
                        Naharlagun - 791110 A.P.
                      </Link>
                    </div>

                  </div>
                </div>
              </div>


              <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">

                <div className="rounded contact-form">
                  <div data-aos="fade-up">
                    <h1>Drop us a message</h1>
                  </div>
                  <form onSubmit={handleSubmit} method='POST'>
                    <div className="mb-4">
                      <div data-aos="fade-up">
                        <input
                          type="text"
                          className="form-control border-0 py-3"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <div data-aos="fade-up">
                        <input
                          type="email"
                          className="form-control border-0 py-3"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      {emailError && <p className="text-danger">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                      <div data-aos="fade-up">
                        <input
                          type="text"
                          className="form-control border-0 py-3"
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <div data-aos="fade-up">
                        <textarea
                          className="w-100 form-control border-0 py-3"
                          rows={6}
                          placeholder="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="text-start">
                      <div data-aos="fade-up">
                        <button
                          className="btn contact-us-button-send text-white py-3 px-5"
                          type="submit"
                          disabled={loading || isSubmitted} // Disable button during submission or after submission
                        >
                          {loading ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Send Message'}
                        </button>
                      </div>
                      {/* Success and Error Messages */}
                      <div data-aos="fade-up">
                        {submitMessage && <p className=" for-submit-message">{submitMessage}</p>}
                      </div>
                      <div data-aos="fade-up">
                        {errorMessage && <p className="text-danger">{errorMessage}</p>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                <div className='conatct-img-animated'>
                  <div data-aos="fade-up">
                    <Lottie animationData={ContactUsFprmBg} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 p-0 m-0' >
            <div data-aos="fade-up">
              <div className='contact-map'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.797690187952!2d93.68776807609873!3d27.099674252029768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744010497797201%3A0x4e693bdbb17e370b!2sCrew%20Captivators%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718697864258!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Crew Captivators Solutions Pvt. Ltd. Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

    </>




  );
};

export default Contact;
