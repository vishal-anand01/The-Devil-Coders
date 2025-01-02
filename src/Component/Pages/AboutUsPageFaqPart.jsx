import React, { useState } from 'react';
import '../Assets/CSS/FaqSection.css';
import FaqAnimation from '../Assets/Json/AboutUsPageFaqSection.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

const AboutUsPageFaqSection = () => {
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
            question: 'Passion',
            answer: 'At Crew Captivators Solutions Pvt. Ltd., passion drives everything we do. Our team is fueled by a deep commitment to innovation and excellence, ensuring that every project we undertake is executed with enthusiasm and dedication. We believe that passion is the key to creating impactful solutions that resonate with users and deliver exceptional results.',
        },
        {
            question: 'Team',
            answer: 'We have a team of dedicated employees who take care of different aspects other than just creating websites. Our web designers, graphic designers, web developers, application developers, content writers, and digital marketers work together on your brand to make it present online.'
        },
        {
            question: 'Development',
            answer: 'At Crew Captivators Solutions Pvt. Ltd., our development services encompass a wide range of expertise, including app development, website creation, and graphics design. Our skilled team is adept at building intuitive and robust applications, crafting engaging and responsive websites, and designing compelling graphics that enhance user experience. We are dedicated to delivering high-quality, purpose-built solutions that meet the unique needs of our clients and drive their success.',
        },
        {
            question: 'Quality',
            answer: 'Crew Captivators Solutions Pvt. Ltd. doesn’t just promise. We believe in providing quality services, especially post-delivery services to our valuable clients and maintain lasting relationships with them.',
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <div className='FAQ-Section'>

            <section className="read-more-content py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="read-more-txt">
                                <ScrollAnimation >
                                    <h2>We Are A Leading Website Design Company </h2>
                                </ScrollAnimation>
                                <ScrollAnimation >
                                    <p>
                                        The business that strives to stand out must have a website that
                                        caters to a great user experience. Undoubtedly, a great user
                                        experience takes a lot of effort. So, if you are looking for a
                                        well-reputed website designing company in Arunachal Pradesh that can help
                                        establish digital footprints across India, then you are on the right
                                        page. Crew Captivators Solutions Pvt. Ltd. works hard to satisfy every client's needs.
                                        Our mission is to build aesthetic websites that sell. As the best
                                        website designing company in Arunachal Pradesh, our professional experts
                                        implement strategies to help you grow online and quickly gain web
                                        traffic. We promise excellence that can assist you in accomplishing
                                        your business goals with ease.{" "}
                                    </p>
                                </ScrollAnimation>
                                <div className={showMore ? "mybox1 show" : "mybox1 hide"} id="mybox1id" style={{ display: 'none' }}>
                                    <p>
                                        Crew Captivators Solutions Pvt. Ltd. harnesses analytical approaches to deliver
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
                                    <h2>Tailored Website Designing Services For Diverse Needs</h2>
                                    <p>
                                        We are the leading website designing company that is committed to
                                        creating websites that bespoke your brand's vision. We not only
                                        create websites that look great but also work to drive great
                                        results. Please take a look at our solutions below. We are experts
                                        in establishing a commendable web presence.
                                    </p>
                                    <h3>Cutting-Edge Technology</h3>
                                    <p>
                                        Every business is unique, and so are their goals. We have expert
                                        designers and developers who work closely to create something
                                        beautiful. Our expert team members create a website that resembles
                                        your brand's ethos and meets your ultimate goals. As the best
                                        website designing company in India, we ensure that our experts use
                                        the latest technologies to create exceptional web experiences. We
                                        guarantee your website is updated with the industry trends to stay
                                        ahead of the competitive edge.{" "}
                                    </p>
                                    <h3>Responsive Website Design</h3>
                                    <p>
                                        Crew Captivators Solutions Pvt. Ltd. understands that most of the customers are mobile
                                        users. They spend half of their day scrolling websites and social
                                        media platforms to stay updated with the trends. Keeping their
                                        concerns in mind, our designers and developers create a responsive
                                        website. It is highly compatible and offers seamless user
                                        experiences on various devices like mobile phones, laptops, or
                                        desktops.
                                    </p>
                                    <h3>E-commerce Website Design</h3>
                                    <p>
                                        With the growing digitization, the demand for online shopping
                                        websites is increasing. Thus increasing the need for a website
                                        design company that can help you tap into this online market. If
                                        you are looking for a company that guarantees visually appealing
                                        e-commerce website designs that are optimized for conversions,
                                        connect with Crew Captivators Solutions Pvt. Ltd..
                                    </p>
                                    <h3>SEO-Optimized Websites</h3>
                                    <p>
                                        It is highly said that you are out of the business if your
                                        business is not online. Crew Captivators Solutions Pvt. Ltd. is the leading website
                                        designing company in Arunachal Pradesh that ensures your business can be found
                                        on Google. Our experts harness the latest SEO tactics to create a
                                        website. We don't just use copy-and-pasted SEO strategies to
                                        increase higher visibility and organic traffic; instead, we craft
                                        tailored solutions for better results.
                                    </p>
                                    <h3>Continuous Maintenance </h3>
                                    <p>
                                        To stay on top of the competitive edge, it is mandatory to have a
                                        website that is updated and armed with all the necessary elements.
                                        Keeping the current trends in mind, Crew Captivators Solutions Pvt. Ltd., the leading
                                        website designing company, offers website maintenance services to
                                        clients. We work with an aim to improve the online presence of the
                                        businesses. Our team will upkeep your website, updating its
                                        content and design as and when required to keep pace with the
                                        changing trends.
                                    </p>
                                    <h2>How Choosing Us Would Benefit Your Business?</h2>
                                    <p>
                                        Businesses in this digital era want to outshine with a
                                        revenue-driving website. Therefore, it is important to have a
                                        website that leaves a lasting impression on their potential
                                        customers. Well, a website is the key to get a strong grip on the
                                        online world. If you are a business owner and strive to be part of
                                        that mainstream, get assistance from a top-class website designing
                                        company in Arunachal Pradesh.{" "}
                                    </p>
                                    <p>
                                        A well-designed website is paramount for businesses of all sizes.
                                        That’s why if you are also looking for website designing services
                                        in Arunachal Pradesh, Crew Captivators Solutions Pvt. Ltd. is right there for you. Our experts
                                        understand that a website is an essential tool for businesses to
                                        grow exponentially in the market. Also, we know that to gain
                                        visibility, you need a good website that can drive genuine leads.
                                        Henceforth, our team works together to create a website that
                                        guarantees scalable results. Now, let us know why you should
                                        choose this best website designing company in Arunachal Pradesh, India.{" "}
                                    </p>
                                    <h2>
                                        Why To Choose Crew Captivators Solutions Pvt. Ltd. As Your Best Website Designing
                                        Company In India?
                                    </h2>
                                    <p>
                                        Crew Captivators Solutions Pvt. Ltd. is a leading website design company in Arunachal Pradesh
                                        established to provide high-performing web services in the
                                        industry. Our experts create visually appealing and user-friendly
                                        websites. Our experts ensure that your website reaps the maximum
                                        benefits for your business. Crew Captivators Solutions Pvt. Ltd. boasts a renowned
                                        reputation in the competitive market for delivering website
                                        designing services in Arunachal Pradesh at reasonable prices within the said
                                        time frame.{" "}
                                    </p>
                                    <p>
                                        For Crew Captivators Solutions Pvt. Ltd., our customers are our priority. We don't
                                        just deliver them scalable results; we ensure they are delighted
                                        with our high-end services. Crew Captivators Solutions Pvt. Ltd. is the best website
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
                                <ScrollAnimation >
                                    <button id="mybuttonid" onClick={changeReadMore} name="readmorebtn">
                                        Read More
                                    </button>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mb-sm-4">
                            <ScrollAnimation >
                                <div className='Faq-Animation-Size'>
                                    <Lottie animationData={FaqAnimation} />
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-7">
                            <div className="section-title-faq text-left wow fadeInUp ms-0 me-0" data-wow-delay="0.2s" style={{ visibility: "visible" }}>
                                <ScrollAnimation >
                                    <span>CORE VALUES</span>
                                </ScrollAnimation>
                                <ScrollAnimation >
                                    <h2>What Makes Us Different From The Others?</h2>
                                </ScrollAnimation>
                                <ScrollAnimation >
                                    <p>Crew Captivators Solutions Pvt. Ltd. boasts a skilled team dedicated to developing user-friendly interfaces and crafting bespoke solutions. Our goal is to empower clients to confidently compete and achieve long-term success.</p>
                                </ScrollAnimation>
                            </div>
                            <div className="faq-accordion faq-home wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: "visible" }}>
                                <ul className="accordion">
                                    {faqs.map((faq, index) => (
                                        <li className="accordion-item" key={index}>
                                            <ScrollAnimation >
                                                <Link
                                                    className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                                                    to="#"
                                                    onClick={(e) => { e.preventDefault(); toggleAccordion(index); }}
                                                >
                                                    <i className={`fa-solid fa-circle-${activeIndex === index ? 'up' : 'down'}`}></i>
                                                    {faq.question}
                                                </Link>
                                            </ScrollAnimation>
                                            {activeIndex === index && (

                                                <div className="accordion-content">
                                                    <p>{faq.answer}</p>
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
        </div>
    );
};



export default AboutUsPageFaqSection;
