import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import TeamAnimation from '../Assets/Json/Team.json'
import Faq from './FaqSection'
import initializeTypewriter from '../TypewriterEffect/TypewriterEffect';
import '../Assets/CSS/Team.css'

import Baikuntha from '../Assets/img/Team/Baikuntha.png'
import Rinu from '../Assets/img/Team/Rinu1.png'
import Bk from '../Assets/img/Team/bk1.png'
import Vishal from '../Assets/img/Team/Vishal.png'
import Gabriel from '../Assets/img/Team/Gabriel.png'
import Amit from '../Assets/img/Team/Amit.png'
import Hemant from '../Assets/img/Team/Hemant.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {

    useEffect(() => {
        initializeTypewriter([
            { elementId: 'app', text: 'Meet Our Inspiring Team' },
            // Add more configurations for other elements if needed
        ]);
    }, []);


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <>

            {/* Add Helmet component to manage document head */}
            <Helmet>
                {/* Title */}
                <title>Team | Crew Captivators Solutions Pvt. Ltd.</title>
                {/* Meta description */}
                <meta name="description" content="Explore our partners and their projects with Crew Captivators Solutions Pvt. Ltd. We are a leading solution provider dedicated to taking your business to the next level." />
                {/* Other meta tags */}
                {/* Add any other necessary meta tags here */}
            </Helmet>

            {/* hero section start */}

            <div className='team-hero-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex align-items-center'>
                            <div className='team-hero-content'>
                                <p className='team-left-part-first-paragraph' data-aos="fade-up">We are Creators..</p>
                                <div id="app" className='team-left-part-headind' data-aos="fade-up"></div>
                                <p className='team-left-part-second-paragraph ' data-aos="fade-up">At <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Crew Captivators Solutions Pvt. Ltd.</span> , our team of seasoned professionals brings unmatched expertise and innovation to every project, ensuring exceptional results and client satisfaction.
                                </p>

                                <Link
                                    to="/contact"
                                    className="btn home-about-section-button rounded-pill mt-3" data-aos="fade-up"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>

                        <div className='col-sm-6 display-flex align-items-center justify-content-center'>
                            <div className='hero-right-part'>
                                <div className='Team-animation' data-aos="fade-up">
                                    <Lottie animationData={TeamAnimation} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='team-page-content'>
                <div className="container py-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-up">
                        <div className="col">
                            <div className="card card-blue h-100 overflow-hidden shadow bg-white border-0 px-0">
                                <div className="card-shape">
                                    <img
                                        src={Amit}
                                        className="card-img-top"
                                        alt="Amit"
                                    />
                                    <div className="custom-shape-divider-bottom-1634717805">
                                        <svg
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1200 120"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                                opacity=".25"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                                opacity=".5"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                                className="shape-fill"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <blockquote>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 475.082 475.081"
                                            x="0px"
                                            y="0px"
                                            width="25px"
                                            height="25px"

                                            xmlSpace="preserve"
                                            version="1.1"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                                    <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <p className="font-italic mt-2 mb-6">
                                            Amit Kumar Sahu is a Team Leader with 6+ years of experience, adept at guiding and motivating teams to achieve their goals. He excels in fostering collaboration, managing projects, and driving successful outcomes through effective leadership.
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="card-footer">
                                    <p className="mb-0 font-weight-bolder">Amit Kumar Sahu</p>
                                    <small className="text-muted">Team Leader & Trainer</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-pink h-100 overflow-hidden shadow bg-white border-0 px-0">
                                <div className="card-shape">
                                    <img
                                        src={Vishal}
                                        className="card-img-top"
                                        alt="Vishal"
                                    />
                                    <div className="custom-shape-divider-bottom-1634717805">
                                        <svg
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1200 120"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                                opacity=".25"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                                opacity=".5"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                                className="shape-fill"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <blockquote>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 475.082 475.081"
                                            x="0px"
                                            y="0px"
                                            width="25px"
                                            height="25px"

                                            xmlSpace="preserve"
                                            version="1.1"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                                    <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <p className="font-italic mt-2 mb-6">
                                            Vishal Kumar Anand is a Full Stack Developer with 2.5+ years of experience, skilled in both front-end and back-end technologies like React and Node.js. He is focused on building efficient applications and delivering quality solutions.
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="card-footer">
                                    <p className="mb-0 font-weight-bolder">Vishal Kumar Anand</p>
                                    <small className="text-muted">
                                        Full Stack Developer
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-pink h-100 overflow-hidden shadow bg-white border-0 px-0">
                                <div className="card-shape">
                                    <img
                                        src={Baikuntha}
                                        className="card-img-top"
                                        alt="Baikuntha"
                                    />
                                    <div className="custom-shape-divider-bottom-1634717805">
                                        <svg
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1200 120"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                                opacity=".25"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                                opacity=".5"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                                className="shape-fill"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <blockquote>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 475.082 475.081"
                                            x="0px"
                                            y="0px"
                                            width="25px"
                                            height="25px"

                                            xmlSpace="preserve"
                                            version="1.1"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                                    <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <p className="font-italic mt-2 mb-6">
                                            Baikuntha Gogoi is a seasoned Senior Sales Expert with over 5.3 years of experience, excelling in driving sales growth and nurturing client relationships with strategic leadership.
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="card-footer">
                                    <p className="mb-0 font-weight-bolder">Baikuntha Gogoi</p>
                                    <small className="text-muted">Senior Sales Expert</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-1" data-aos="fade-up">
                        <div className="col">
                            <div className="card card-blue h-100 overflow-hidden shadow bg-white border-0 px-0">
                                <div className="card-shape">
                                    <img
                                        src={Gabriel}
                                        className="card-img-top"
                                        alt="Gabriel"
                                    />
                                    <div className="custom-shape-divider-bottom-1634717805">
                                        <svg
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1200 120"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                                opacity=".25"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                                opacity=".5"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                                className="shape-fill"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <blockquote>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 475.082 475.081"
                                            x="0px"
                                            y="0px"
                                            width="25px"
                                            height="25px"

                                            xmlSpace="preserve"
                                            version="1.1"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                                    <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <p className="font-italic mt-2 mb-6">
                                            Gabriel Tallang is a Manager at Nefa Cabs with 3.5 years of experience. He specializes in overseeing daily operations, enhancing service efficiency, and leading teams to deliver exceptional customer experiences in the ride-hailing sector.
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="card-footer">
                                    <p className="mb-0 font-weight-bolder">Gabriel Tallang</p>
                                    <small className="text-muted">Nefa Cabs - Manager</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-blue h-100 overflow-hidden shadow bg-white border-0 px-0">
                                <div className="card-shape">
                                    <img
                                        src={Bk}
                                        className="card-img-top"
                                        alt="Bk"
                                    />
                                    <div className="custom-shape-divider-bottom-1634717805">
                                        <svg
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1200 120"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                                opacity=".25"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                                opacity=".5"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                                className="shape-fill"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <blockquote>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 475.082 475.081"
                                            x="0px"
                                            y="0px"
                                            width="25px"
                                            height="25px"

                                            xmlSpace="preserve"
                                            version="1.1"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                                    <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <p className="font-italic mt-2 mb-6">
                                            Abubakkar Siddique is an Accounts Executive with 3 years of experience, proficient in managing financial records and ensuring accurate reporting. He is dedicated to maintaining financial accuracy and supporting efficient accounting processes.
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="card-footer">
                                    <p className="mb-0 font-weight-bolder">Abubakkar Siddique</p>
                                    <small className="text-muted">Accounts Executive</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-pink h-100 overflow-hidden shadow bg-white border-0 px-0">
                                <div className="card-shape">
                                    <img
                                        src={Rinu}
                                        className="card-img-top"
                                        alt="Rinu"
                                    />
                                    <div className="custom-shape-divider-bottom-1634717805">
                                        <svg
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1200 120"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                                opacity=".25"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                                opacity=".5"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                                className="shape-fill"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <blockquote>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 475.082 475.081"
                                            x="0px"
                                            y="0px"
                                            width="25px"
                                            height="25px"

                                            xmlSpace="preserve"
                                            version="1.1"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                                    <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <p className="font-italic mt-2 mb-6">
                                            Nabam Rinu is a dedicated Telecaller with 1.9 years of experience, skilled in effective communication and customer service. She consistently provides excellent support to clients, helping to drive successful outcomes in her role.
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="card-footer">
                                    <p className="mb-0 font-weight-bolder">Nabam Rinu</p>
                                    <small className="text-muted">
                                        Tallecaller Executive
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-1" data-aos="fade-up">
                        <div className="col">
                            <div className="card card-blue h-100 overflow-hidden shadow bg-white border-0 px-0">
                                <div className="card-shape">
                                    <img
                                        src={Hemant}
                                        className="card-img-top"
                                        alt="Hemant"
                                    />
                                    <div className="custom-shape-divider-bottom-1634717805">
                                        <svg
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1200 120"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                                opacity=".25"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                                opacity=".5"
                                                className="shape-fill"
                                            />
                                            <path
                                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                                className="shape-fill"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <blockquote>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 475.082 475.081"
                                            x="0px"
                                            y="0px"
                                            width="25px"
                                            height="25px"

                                            xmlSpace="preserve"
                                            version="1.1"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                                    <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <p className="font-italic mt-2 mb-6">
                                            Hemant Kumar Singh is an Office Executive with 1.9 years of experience, skilled in managing administrative tasks, coordinating office operations, and supporting team functions. He ensures smooth day-to-day operations and contributes to organizational efficiency.
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="card-footer">
                                    <p className="mb-0 font-weight-bolder">Hemant Kumar Singh</p>
                                    <small className="text-muted">Office Executive</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <Faq />
        </>
    )
}

export default Team
