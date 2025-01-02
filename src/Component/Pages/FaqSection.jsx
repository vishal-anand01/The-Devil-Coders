import React, { useState, useEffect } from 'react'
import '../Assets/CSS/FaqSection.css'
import FaqAnimation from '../Assets/Json/FaqAnimation.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


const FaqSection = () => {
    const [showMore] = useState(false);

    const changeReadMore = () => {
        const mycontent = document.getElementById('mybox1id');
        const mybutton = document.getElementById('mybuttonid');

        if (mycontent.style.display === 'none' || mycontent.style.display === '') {
            mycontent.style.display = 'block';
            mybutton.textContent = 'Read Less';
        } else {
            mycontent.style.display = 'none';
            mybutton.textContent = 'Read More';
        }
    };

    const faqs = [
        {
            question: 'Which is the Best Website Designing and Other Services Company in Arunachal Pradesh ?',
            answer: 'Crew Captivators Solutions Pvt. Ltd. is recognized as a leading website designing and digital services company in Arunachal Pradesh. They specialize in creating visually appealing and user-friendly websites tailored to meet diverse business needs. In addition to website design, they offer comprehensive digital marketing, graphic design, and application development services. Their commitment to quality and customer satisfaction makes them a preferred choice for businesses looking to establish a strong online presence in Arunachal Pradesh.',
        },
        {
            question: 'Why Choose Crew Captivators Solutions Pvt. Ltd.?',
            answer: 'Crew Captivators Solutions Pvt. Ltd. excels as a top-tier choice by offering superior website design and digital solutions. Specializing not only in website design but also in application development, digital marketing, graphic design services and many more, Crew Captivators Solutions Pvt. Ltd. ensures comprehensive support for all your digital requirements. Their proven track record of client satisfaction and a diverse portfolio highlights their capability to deliver customized solutions that drive tangible results. Whether you are a startup or a large enterprise, opting for Crew Captivators Solutions Pvt. Ltd. guarantees expertise, innovation, and measurable success in the digital landscape.'
        },
        {
            question: 'Do you provide website redesigning services?',
            answer: 'Yes, Crew Captivators Solutions Pvt. Ltd. provides website redesigning services in Arunachal Pradesh and helps rebuild your online presence by revamping them.',
        },
        {
            question: 'Which industries has Crew Captivators Solutions Pvt. Ltd. served?',
            answer: 'Crew Captivators Solutions Pvt. Ltd. has a robust track record across a wide array of industries, encompassing Tax and Accounting Consulting, Tender Bidding Services, Online Affiliation Services, IT Solutions, Media Production, NEFA Cab Services, Website Designing, Admission Assistance, Graphic Designing, Lead Generation Services, Telemarketing (BPO Services), Social Media Promotion, App Development (Android & iOS), and Interior Designing. This diverse experience enables us to deliver tailored solutions that cater to the specific needs and challenges of each industry we serve.',
        },
        {
            question: 'How much does it cost for any services ?',
            answer: 'We design and develop attractive based on our clients’ preferences. Therefore, we assess the costs based on their requirements. If you want to know about the total costs, you can connect with us.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='FAQ-Section'>

            <section className="read-more-content py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="read-more-txt">
                                <div data-aos="fade-up">
                                    <h2>We Are A Leading Website Design Company </h2>
                                </div>
                                <div data-aos="fade-up">
                                    <p>
                                        The business that strives to stand out must have a website that
                                        caters to a great user experience. Undoubtedly, a great user
                                        experience takes a lot of effort. So, if you are looking for a
                                        well-reputed website designing company in Arunachal Pradesh that can help
                                        establish digital footprints across India, then you are on the right
                                        page.<span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> works hard to satisfy every client's needs.
                                        Our mission is to build aesthetic websites that sell. As the best
                                        website designing company in Arunachal Pradesh, our professional experts
                                        implement strategies to help you grow online and quickly gain web
                                        traffic. We promise excellence that can assist you in accomplishing
                                        your business goals with ease.{" "}
                                    </p>
                                </div>
                                <div className={showMore ? "mybox1 show" : "mybox1 hide"} id="mybox1id" style={{ display: 'none' }}>
                                    <div>
                                        <p data-aos="fade-up">
                                            <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> harnesses analytical approaches to deliver
                                            tailored solutions. As a performance-driven website designing
                                            company in India, we provide various web services. They are
                                            Website designing, Website Development, App Development, Graphic
                                            Designing, and Digital Marketing. Our top-notch digital solutions
                                            are designed to provide 100% customer satisfaction to the clients.
                                            We understand the intricacies of each business and its unique
                                            requirements. Henceforth, we disseminate website designing
                                            services in Arunachal Pradesh after analyzing your budget, expectations, and
                                            competitor's USP and fine-tuning the market. Our experts ensure
                                            that the strategies we craft work for you, ensuring the best
                                            output for your business.
                                        </p>
                                        <h2 data-aos="fade-up">Tailored Website Designing Services For Diverse Needs</h2>
                                        <p>
                                            We are the leading website designing company that is committed to
                                            creating websites that bespoke your brand's vision. We not only
                                            create websites that look great but also work to drive great
                                            results. Please take a look at our solutions below. We are experts
                                            in establishing a commendable web presence.
                                        </p>
                                        <h3 data-aos="fade-up">Cutting-Edge Technology</h3>
                                        <p data-aos="fade-up">
                                            Every business is unique, and so are their goals. We have expert
                                            designers and developers who work closely to create something
                                            beautiful. Our expert team members create a website that resembles
                                            your brand's ethos and meets your ultimate goals. As the best
                                            website designing company in India, we ensure that our experts use
                                            the latest technologies to create exceptional web experiences. We
                                            guarantee your website is updated with the industry trends to stay
                                            ahead of the competitive edge.{" "}
                                        </p>
                                        <h3 data-aos="fade-up">Responsive Website Design</h3>
                                        <p>
                                            <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> understands that most of the customers are mobile
                                            users. They spend half of their day scrolling websites and social
                                            media platforms to stay updated with the trends. Keeping their
                                            concerns in mind, our designers and developers create a responsive
                                            website. It is highly compatible and offers seamless user
                                            experiences on various devices like mobile phones, laptops, or
                                            desktops.
                                        </p>
                                        <h3 data-aos="fade-up">E-commerce Website Design</h3>
                                        <p>
                                            With the growing digitization, the demand for online shopping
                                            websites is increasing. Thus increasing the need for a website
                                            design company that can help you tap into this online market. If
                                            you are looking for a company that guarantees visually appealing
                                            e-commerce website designs that are optimized for conversions,
                                            connect with <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span>
                                        </p>
                                        <h3 data-aos="fade-up">SEO-Optimized Websites</h3>
                                        <p>
                                            It is highly said that you are out of the business if your
                                            business is not online. <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> is the leading website
                                            designing company in Arunachal Pradesh that ensures your business can be found
                                            on Google. Our experts harness the latest SEO tactics to create a
                                            website. We don't just use copy-and-pasted SEO strategies to
                                            increase higher visibility and organic traffic; instead, we craft
                                            tailored solutions for better results.
                                        </p>
                                        <h3 data-aos="fade-up">Continuous Maintenance </h3>
                                        <p>
                                            To stay on top of the competitive edge, it is mandatory to have a
                                            website that is updated and armed with all the necessary elements.
                                            Keeping the current trends in mind, <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span>, the leading
                                            website designing company, offers website maintenance services to
                                            clients. We work with an aim to improve the online presence of the
                                            businesses. Our team will upkeep your website, updating its
                                            content and design as and when required to keep pace with the
                                            changing trends.
                                        </p>
                                        <h2 data-aos="fade-up">How Choosing Us Would Benefit Your Business?</h2>
                                        <p data-aos="fade-up">
                                            Businesses in this digital era want to outshine with a
                                            revenue-driving website. Therefore, it is important to have a
                                            website that leaves a lasting impression on their potential
                                            customers. Well, a website is the key to get a strong grip on the
                                            online world. If you are a business owner and strive to be part of
                                            that mainstream, get assistance from a top-class website designing
                                            company in Arunachal Pradesh.{" "}
                                        </p>
                                        <p data-aos="fade-up">
                                            A well-designed website is paramount for businesses of all sizes.
                                            That’s why if you are also looking for website designing services
                                            in Arunachal Pradesh, <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> is right there for you. Our experts
                                            understand that a website is an essential tool for businesses to
                                            grow exponentially in the market. Also, we know that to gain
                                            visibility, you need a good website that can drive genuine leads.
                                            Henceforth, our team works together to create a website that
                                            guarantees scalable results. Now, let us know why you should
                                            choose this best website designing company in Arunachal Pradesh, India.{" "}
                                        </p>
                                        <h2 data-aos="fade-up">
                                            Why To Choose <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> As Your Best Website Designing
                                            Company In India?
                                        </h2>
                                        <p data-aos="fade-up">
                                            <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> is a leading website design company in Arunachal Pradesh
                                            established to provide high-performing web services in the
                                            industry. Our experts create visually appealing and user-friendly
                                            websites. Our experts ensure that your website reaps the maximum
                                            benefits for your business. <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> boasts a renowned
                                            reputation in the competitive market for delivering website
                                            designing services in Arunachal Pradesh at reasonable prices within the said
                                            time frame.{" "}
                                        </p>
                                        <p data-aos="fade-up">
                                            For <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span>, our customers are our priority. We don't
                                            just deliver them scalable results; we ensure they are delighted
                                            with our high-end services. <span style={{ fontWeight: '500' }}>Crew Captivators Solutions Pvt. Ltd.</span> is the best website
                                            designing company in Arunachal Pradesh that works, considering clients'
                                            opinions to guarantee you are on the right page for all
                                            website-related solutions. Our experts add customized features and
                                            necessary elements to the website based on our customer
                                            preferences. All you have to do is share your goals, priorities,
                                            and objectives with our experts. From then and there, we will take
                                            care of everything. Besides this, being an emerging website
                                            designing company, our professional designers and developers
                                            ensure you stay updated with our post-delivery services. We keep
                                            checking your website to ensure it is functioning smoothly. So, if
                                            you want to improve your business's presence, contact Cotgin
                                            Analytics, the leading website designing company in India.
                                        </p>
                                    </div>
                                </div>
                                <div data-aos="fade-up">
                                    <button id="mybuttonid" onClick={changeReadMore} name="readmorebtn">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mb-sm-4">
                            <div data-aos="fade-up">
                                <div className='Faq-Animation-Size'>
                                    <Lottie animationData={FaqAnimation} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="section-title-faq text-left wow fadeInUp ms-0 me-0" data-wow-delay="0.2s" style={{ visibility: "visible" }}>
                                <div data-aos="fade-up">
                                    <span>General Inquiries</span>
                                </div>
                                <div data-aos="fade-up">
                                    <h2>Frequently Asked Questions (FAQs)</h2>
                                </div>
                            </div>
                            <div className="faq-accordion faq-home" data-wow-delay="0.3s" style={{ visibility: "visible" }} data-aos="fade-up" >
                                <ul className="accordion" data-aos="fade-up">
                                    {faqs.map((faq, index) => (
                                        <li className="accordion-item" key={index} data-aos="fade-up">
                                            <div data-aos="fade-up">
                                                <Link
                                                    className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                                                    to="#"
                                                    onClick={(e) => { e.preventDefault(); toggleAccordion(index); }} data-aos="fade-up"
                                                >
                                                    <i className={`fa-solid fa-circle-${activeIndex === index ? 'up' : 'down'}`}></i>
                                                    {faq.question}
                                                </Link>
                                            </div>
                                            {activeIndex === index && (
                                                <div className="accordion-content" data-aos="fade-up">
                                                    <p data-aos="fade-up">{faq.answer}</p>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cursor"></div>
        </div>
    );
};



export default FaqSection;
