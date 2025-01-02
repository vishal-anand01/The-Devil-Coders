import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import HeroRightPartImg from '../../Assets/Json/Blog/HeroSectionAnimation.json'
import BlogHospital from '../../Assets/Json/Blog/Hospital.json'
import Faq from '../FaqSection'
import initializeTypewriter from '../../Assets/JavacsriptFile/AboutPageName';
import PartnshipAnimation from '../../Assets/Json/Blog/PartnershipAnimation.json'
import '../../Assets/CSS/Partner.css'

import Alience from '../../Assets/img/logo/Alliance.jpg'
import Impact from '../../Assets/img/logo/Impact.png'
import Koshys from '../../Assets/img/logo/Koshys.png'
import Ebenezer from '../../Assets/img/logo/Ebenezer.png'
import Banglore from '../../Assets/img/logo/banglore.png'

const CoPartners = () => {

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
              className={`events__tab ${activeTab === 'tab-1' ? '-active' : ''}`}
              data-tabcontent="tab-1"
              role="button"
              onClick={() => handleTabClick('tab-1')}
            >
              Medical
            </Link>

            <Link
              className={`events__tab ${activeTab === 'tab-2' ? '-active' : ''}`}
              data-tabcontent="tab-2"
              role="button"
              onClick={() => handleTabClick('tab-2')}
            >
              Education
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
                <div className='blog-partnership-civil'>
                  <Lottie animationData={BlogHospital} />
                </div>
              </div>
              <div className="events__content">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-sm-3 d-flex align-items-center'>
                      <h2 className="events__title">SS Med</h2>
                    </div>
                    <div className='col-sm-3 d-flex align-items-center'>
                      <address className="events__address">
                        Court St, opposite Directorate of Agriculture, D Sector
                        <br />
                        Naharlagun, Arunachal Pradesh 791110
                      </address>
                    </div>
                    <div className='col-sm-3 text-center d-flex align-items-center justify-content-center'> <time className="events__time" dateTime="2019-08-23">
                      <Link to="https://www.ssmedworld.com/" target='blank' className='partners-link'>Visit Us</Link>
                    </time></div>
                    <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                      Contact Now
                    </Link></div>
                  </div>
                </div>
              </div>
            </div>


            {/* Repeat for other events in tab-1 */}
          </div>

          <div id="tab-2" className={`events__list ${activeTab === 'tab-2' ? '-active' : ''}`}>
            <div className="events__row">
              <div className="events__img">
                <div className='college-logo'>
                  <img src={Alience} alt='Alience Logo' />
                </div>
              </div>
              <div className="events__content">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-sm-3 d-flex align-items-center'>
                      <h2 className="events__title">Alliance University</h2>
                    </div>
                    <div className='col-sm-3 d-flex align-items-center'>
                      <address className="events__address">
                        Alliance University - Central Campus, Chikkahadage Cross Chandapura-Anekal
                        <br />
                        Main Road, Bengaluru, Karnataka 562106
                      </address>
                    </div>
                    <div className='col-sm-3 text-center d-flex align-items-center justify-content-center'> <time className="events__time" dateTime="2019-08-23">
                      <Link to="https://www.alliance.edu.in/" target='blank' className='partners-link'>Visit Us</Link>
                    </time></div>
                    <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                      Contact Now
                    </Link></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="events__row">
              <div className="events__img">
                <div className='college-logo'>
                  <img src={Impact} alt='Impact Group of Institutions Logo' />
                </div>
              </div>
              <div className="events__content">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-sm-3 d-flex align-items-center'> <h2 className="events__title">Impact Group of Institutions</h2></div>
                    <div className='col-sm-3 d-flex align-items-center'> <address className="events__address">
                      Amco layout, Koti Hosahalli, Kodigehalli, South,
                      <br />
                      Sahakar Nagar, Bengaluru, Karnataka 560092
                    </address></div>
                    <div className='col-sm-3 text-center d-flex align-items-center justify-content-center'> <time className="events__time" dateTime="2019-08-23">
                      <Link to="https://impact.ac.in/" target='blank' className='partners-link'>Visit Us</Link>
                    </time></div>
                    <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                      Contact Now
                    </Link></div>
                  </div>
                </div>




              </div>
            </div>

            <div className="events__row">
              <div className="events__img">
                <div className='college-logo'>
                  <img src={Koshys} alt='Koshys Group of Institutions Logo' />
                </div>
              </div>
              <div className="events__content">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-sm-3 d-flex align-items-center'>
                      <h2 className="events__title">Koshys Group of Institutions</h2>
                    </div>
                    <div className='col-sm-3 d-flex align-items-center'>
                      <address className="events__address">
                        No.31/1, Kannur P.O, Hennur-Bagalur Road, Mitganahalli,
                        <br />
                        Kadusonnapanahalli, Bengaluru, Karnataka 562149
                      </address>
                    </div>
                    <div className='col-sm-3 text-center d-flex align-items-center justify-content-center'> <time className="events__time" dateTime="2019-08-23">
                      <Link to="https://www.kgi.edu.in/" target='blank' className='partners-link'>Visit Us</Link>
                    </time></div>
                    <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                      Contact Now
                    </Link></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="events__row">
              <div className="events__img">
                <div className='college-logo'>
                  <img src={Ebenezer} alt='Ebenezer Group of Institution Logo' />
                </div>
              </div>
              <div className="events__content">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-sm-3 d-flex align-items-center'> <h2 className="events__title">Ebenezer Group of Institution</h2></div>
                    <div className='col-sm-3 d-flex align-items-center'> <address className="events__address">
                      Ebenezer Nagar, 19, Hennur Bagalur Main Rd, Post, Kothanur
                      <br />
                      Bengaluru, Karnataka 560077
                    </address></div>
                    <div className='col-sm-3 text-center d-flex align-items-center justify-content-center'> <time className="events__time" dateTime="2019-08-23">
                    <Link to="https://www.ebenezercollege.edu.in/" target='blank' className='partners-link'>Visit Us</Link>
                    </time></div>
                    <div className='col-sm-3 d-flex align-items-center justify-content-center'> <Link to="/contact" className="events__btn">
                      Contact Now
                    </Link></div>
                  </div>
                </div>




              </div>
            </div>

            <div className="events__row">
              <div className="events__img">
                <div className='college-logo'>
                  <img src={Banglore} alt='Banglore Group of Institutions Logo' />
                </div>
              </div>
              <div className="events__content">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-sm-3 d-flex align-items-center'> <h2 className="events__title">Banglore Group of Institutions</h2></div>
                    <div className='col-sm-3 d-flex align-items-center'> <address className="events__address">
                      No 54, Admavidya Nagar Dodda Gubbi Road Near SAIACS CEO Center,
                      <br />
                      Kothannur P O Bangalore 560077
                    </address></div>
                    <div className='col-sm-3 text-center d-flex align-items-center justify-content-center'> <time className="events__time" dateTime="2019-08-23">
                    <Link to="https://bgiedu.in/" target='blank' className='partners-link'>Visit Us</Link>
                    </time></div>
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

export default CoPartners
