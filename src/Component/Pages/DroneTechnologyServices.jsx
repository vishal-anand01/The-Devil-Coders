import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import '../Assets/CSS/AllSubPagesOfServices.css'
import Tenderbg from '../Assets/img/tenderservicesbg.png'
import Tenderbg2 from '../Assets/img/tenderbiddingservicebg2.jpg'
import initializeTypewriter from '../Assets/JavacsriptFile/AboutPageName';
import bg1 from '../Assets/img/tender-biding-services-bg1.jpg'
import bg2 from '../Assets/img/tender-biding-services-bg2.jpg'
import bg3 from '../Assets/img/tender-biding-services-bg3.jpg'
import bg4 from '../Assets/img/tender-biding-services-bg4.jpg'
import testimonialRating1 from '../Assets/img/testimonial-rating1.png'
import testimonialRating2 from '../Assets/img/testimonial-rating2.png'
import testimonialRating3 from '../Assets/img/testimonial-rating3.png'
import Faq from './FaqSection'

const DroneTechnologyServices = () => {
    const countsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounting();
                }
            });
        }, { threshold: 0.2 });

        observer.observe(countsRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const startCounting = () => {
        const counters = document.querySelectorAll('.purecounter');
        counters.forEach(counter => {
            const startCount = parseInt(counter.getAttribute('data-purecounter-start'));
            const endCount = parseInt(counter.getAttribute('data-purecounter-end'));
            const duration = parseInt(counter.getAttribute('data-purecounter-duration'));
            const range = endCount - startCount;
            const step = Math.ceil(duration * 1000 / range);
            let currentCount = startCount;

            const counterInterval = setInterval(() => {
                counter.textContent = currentCount;
                currentCount++;
                if (currentCount > endCount) {
                    clearInterval(counterInterval);
                }
            }, step);
        });
    };

    useEffect(() => {
        initializeTypewriter([
            { elementId: 'app', text: 'Drone Technology' }
            // Add more configurations for other elements if needed
        ]);
    }, []);

    // ye script testimonial ke liye hai
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3 seconds)
        pauseOnHover: false, // Disable pausing on hover
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    // yahan ye script end ho rha hai testimonial ka 

    return (
        <>

            {/* Add Helmet component to manage document head */}
            <Helmet>
                {/* Title */}
                <title>Drone Technology - Crew Captivators Solutions Pvt. Ltd.</title>
                {/* Meta description */}
                <meta
                    name="description"
                    content="Drone technology heralds a new era of innovation, enabling diverse applications from aerial imaging to surveillance, revolutionizing industries with its efficiency and versatility."
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
                                        Pioneering advancements in aerial capabilities, drone technology opens new horizons for industries, offering unprecedented perspectives and efficiencies.

                                    </p>
                                    <ul>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Aerial Innovation
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Industry Revolution
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-check-double"></i>Versatile Applications
                                        </li>


                                    </ul>
                                </div>
                                <div
                                    className="col-lg-6 pt-4 pt-lg-0"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <p>
                                        Harnessing the boundless potential of unmanned aerial vehicles (UAVs), drone technology is reshaping industries worldwide with its unparalleled versatility, facilitating applications ranging from precision agriculture and environmental monitoring to infrastructure inspection and disaster response.
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
                                <div
                                    className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                                    data-aos="fade-right"
                                    data-aos-delay={150}
                                >
                                    <img src={Tenderbg2} alt="" className="img-fluid" />
                                </div>
                                <div
                                    className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                                    data-aos="fade-left"
                                    data-aos-delay={300}
                                >
                                    <div className="content d-flex flex-column justify-content-center">
                                        <div className="row">
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i class="fa-regular fa-face-smile"></i>
                                                    <span
                                                        data-purecounter-start={0}
                                                        data-purecounter-end={65}
                                                        data-purecounter-duration={1}
                                                        className="purecounter"
                                                    />
                                                    <p>
                                                        <strong>Happy Clients</strong> Exceptional satisfaction, diverse clientele.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i class="fa-solid fa-book-journal-whills"></i>
                                                    <span
                                                        data-purecounter-start={0}
                                                        data-purecounter-end={85}
                                                        data-purecounter-duration={1}
                                                        className="purecounter"
                                                    />
                                                    <p>
                                                        <strong>Projects</strong> Extensive experience, successful execution.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i class="fa-regular fa-clock"></i>
                                                    <span
                                                        data-purecounter-start={0}
                                                        data-purecounter-end={18}
                                                        data-purecounter-duration={1}
                                                        className="purecounter"
                                                    />
                                                    <p>
                                                        <strong>Years of experience</strong> Seasoned expertise, meticulous attention.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i class="fa-solid fa-award"></i>
                                                    <span
                                                        data-purecounter-start={0}
                                                        data-purecounter-end={15}
                                                        data-purecounter-duration={1}
                                                        className="purecounter"
                                                    />
                                                    <p>
                                                        <strong>Awards</strong> Prestigious recognition, excellence acknowledged.
                                                    </p>
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
                                    Tailored services designed to meet diverse needs, providing innovative solutions for your every requirement.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="icon">
                                            <i class="fas fa-camera"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Aerial Imaging</Link>
                                        </h4>
                                        <p className="description">
                                            Capture high-resolution images and videos for various applications such as mapping, surveying, and inspection.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="icon">
                                            <i class="fas fa-map"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Surveying and Mapping</Link>
                                        </h4>
                                        <p className="description">
                                            Utilize drones for precise mapping and surveying tasks, providing accurate data for construction, urban planning, and land management.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon">
                                            <i class="fas fa-video"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Aerial Surveillance and Monitoring</Link>
                                        </h4>
                                        <p className="description">
                                            Enhance security and surveillance operations with drone technology, enabling real-time monitoring and threat detection.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="icon">
                                            <i class="fas fa-tractor"></i>
                                        </div>
                                        <h4 className="title">
                                            <Link to="">Precision Agriculture</Link>
                                        </h4>
                                        <p className="description">
                                            Optimize agricultural practices with drones equipped with sensors to monitor crop health, manage irrigation, and enhance yield.
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
                                                <Link to="">Infrastructure Inspection</Link>
                                            </h5>
                                            <p className="card-text">
                                                Conduct efficient and thorough inspections of infrastructure such as bridges, pipelines, and buildings, reducing risks and costs.
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
                                                <Link to="">Search and Rescue Operations</Link>
                                            </h5>
                                            <p className="card-text">
                                                Support search and rescue missions in remote or hazardous areas with drones equipped with thermal imaging and GPS capabilities.
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
                                                <Link to="">Environmental Monitoring</Link>
                                            </h5>
                                            <p className="card-text">
                                                Monitor environmental conditions and changes, such as deforestation and pollution, using drones equipped with sensors.
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
                                                <Link to="">Filmmaking and Cinematography</Link>
                                            </h5>
                                            <p className="card-text">
                                                Capture breathtaking aerial footage for film, television, and advertising projects, adding cinematic flair to productions.
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
                                <p>Cutting-edge features engineered to enhance drone technology, empowering diverse industries with advanced capabilities and efficiencies.</p>
                            </div>
                            <div className="row" data-aos="fade-up" data-aos-delay={300}>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                        <i className="fas fa-camera" style={{ color: "#ffbb2c" }} />
                                        <h3>
                                            <Link to="">Aerial Imaging</Link>
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
                                            <Link to="">Autonomous Navigation</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-video"
                                            style={{ color: "#e80368" }}
                                        />
                                        <h3>
                                            <Link to="">Real-time Video Streaming</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                    <div className="icon-box">
                                        <i className="fas fa-map-pin" style={{ color: "#e361ff" }} />
                                        <h3>
                                            <Link to="">GPS Positioning</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-ban" style={{ color: "#47aeff" }} />
                                        <h3>
                                            <Link to="">Obstacle Avoidance</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-weight-hanging" style={{ color: "#ffa76e" }} />
                                        <h3>
                                            <Link to="">Payload Capacity</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-stopwatch" style={{ color: "#11dbcf" }} />
                                        <h3>
                                            <Link to="">Long Flight Time</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-microscope" style={{ color: "#4233ff" }} />
                                        <h3>
                                            <Link to="">High-resolution Sensors</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-thermometer-full" style={{ color: "#b2904f" }} />
                                        <h3>
                                            <Link to="">Thermal Imaging</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-gamepad" style={{ color: "#b20969" }} />
                                        <h3>
                                            <Link to="">Remote Control Capabilities</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i
                                            className="fas fa-lock"
                                            style={{ color: "#ff5828" }}
                                        />
                                        <h3>
                                            <Link to="">Data Encryption</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="fas fa-cloud-sun" style={{ color: "#29cc61" }} />
                                        <h3>
                                            <Link to="">Weather Resistance</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Features Section */}



                    {/* ======= Testimonials Section ======= */}
                    <section id="testimonials" className="testimonials section-bg">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Testimonials</h2>
                                <p>Client accolades commend our global presence and industry expertise.</p>
                            </div>
                            <div className="gtco-testimonials container ">
                                <Slider {...settings} ref={sliderRef}>
                                    {/* User 1 */}
                                    <div>
                                        <div className="card text-center">
                                            <img
                                                className="card-img-top"
                                                src={testimonialRating1}
                                                alt="Raj Bhattacharjee"
                                            />
                                            <div className="card-body">
                                                <h5>
                                                    Raj Bhattacharjee <br />
                                                    {/* <span>Project Manager</span> */}
                                                </h5>
                                                <p className="card-text">
                                                    “I couldn't be more thrilled with the outstanding services provided by Crew Captivators Solutions! As a  ..”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* User 2 */}
                                    <div>
                                        <div className="card text-center">
                                            <img
                                                className="card-img-top"
                                                src={testimonialRating2}
                                                alt="NAMGEE TAJO"
                                            />
                                            <div className="card-body">
                                                <h5>
                                                    NAMGEE TAJO <br />
                                                    {/* <span>Engineer</span> */}
                                                </h5>
                                                <p className="card-text">
                                                    “One of the most helping crew to grow and thank u for suggesting best colleges for me I am sure u won’t regret ..”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* User 3 */}
                                    <div>
                                        <div className="card text-center">
                                            <img
                                                className="card-img-top"
                                                src={testimonialRating3}
                                                alt="Sabri Nguso"
                                            />
                                            <div className="card-body">
                                                <h5>
                                                    Sabri Nguso <br />
                                                    {/* <span>Project Manager</span> */}
                                                </h5>
                                                <p className="card-text">
                                                    “It was an great experience , very professional, <br />and responsive”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add more users as needed */}
                                </Slider>
                                <button className="prev-btn" onClick={() => sliderRef.current.slickPrev()}>
                                    <i className="fa fa-chevron-left"></i>
                                </button>
                                <button className="next-btn" onClick={() => sliderRef.current.slickNext()}>
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </section>
                    {/* End Testimonials Section */}

                    <Faq />

                </main>
                {/* End #main */}

            </div>


        </>

    )
}

export default DroneTechnologyServices
