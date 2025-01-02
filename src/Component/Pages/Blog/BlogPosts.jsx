import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';


import ComprehensiveTaxPlanning from '../../Assets/img/Blog/Comprehensive-Tax-Planning.jpg'
import ExpertAccountingServices from '../../Assets/img/Blog/Expert-Accounting-Services.jpg'
import HassleFreeTaxFiling from '../../Assets/img/Blog/Hassle-Free-Tax-Filing.jpg'

import ComprehensiveTenderPreparation from '../../Assets/img/Blog/Comprehensive-Tender-Preparation.jpg'
import StrategicBidManagement from '../../Assets/img/Blog/Strategic-Bid-Management.jpg'
import PostSubmissionSupport from '../../Assets/img/Blog/Post-Submission-Support.jpg'

import SimplifyingtheAffiliationProcessOnline from '../../Assets/img/Blog/SimplifyingtheAffiliationProcessOnline.jpg'
import ExpertGuidanceforAccreditationSuccess from '../../Assets/img/Blog/ExpertGuidanceforAccreditationSuccess.jpg'
import ContinuousSupportPostAffiliation from '../../Assets/img/Blog/ContinuousSupportPostAffiliation.jpg'

import TailoredITSolutions from '../../Assets/img/Blog/AdvancedNetworandInfrastructurManagement.jpg'
import NetworkandInfrastructureManagement from '../../Assets/img/Blog/ComprehensiveITSolutionsforEveryBusinessNeed.jpg'
import ScalableITSupportandMaintenance from '../../Assets/img/Blog/ScalableITSupportandMaintenance.jpg'

import ProfessionalVideoProduction from '../../Assets/img/Blog/ProfessionalVideoProduction.jpg'
import CreativeContentCreation from '../../Assets/img/Blog/CreativeContentCreation.jpg'
import PostProductionServices from '../../Assets/img/Blog/PostProductionServices.jpg'

import ReliableTransportationSolutions from '../../Assets/img/Blog/ReliableTransportationSolutions.jpg'
import AffordablePricing from '../../Assets/img/Blog/AffordablePricing.jpg'
import CustomerSupport from '../../Assets/img/Blog/CustomerSupport.jpg'

import CustomWebsiteDesign from '../../Assets/img/Blog/CustomWebsiteDesign.jpg'
import Responsive from '../../Assets/img/Blog/Responsive.jpg'
import SEOOptimizedDesign from '../../Assets/img/Blog/SEOOptimizedDesign.jpg'

import StrategicAdmissionPlanning from '../../Assets/img/Blog/Strategic-Bid-Management.jpg'
import HolisticApplicationEnhancement from '../../Assets/img/Blog/HolisticApplicationEnhancement.jpg'
import PostAcceptanceGuidance from '../../Assets/img/Blog/Post-AcceptanceGuidance.jpg'

import CustomGraphicDesignSolutions from '../../Assets/img/Blog/CustomGraphicDesignSolutions.jpg'
import CreativeVisualContent from '../../Assets/img/Blog/CreativeVisualContent.jpg'
import ProfessionalPrintDesign from '../../Assets/img/Blog/ProfessionalPrintDesign.jpg'

import TargetedLeadGenerationStrategies from '../../Assets/img/Blog/TargetedLeadGenerationStrategies.jpg'
import MultiChannelLeadAcquisition from '../../Assets/img/Blog/Multi-ChannelLeadAcquisition.jpg'
import ComprehensiveLeadNurturing from '../../Assets/img/Blog/ComprehensiveLeadNurturing.jpg'

import OutboundTelemarketingCampaigns from '../../Assets/img/Blog/OutboundTelemarketingCampaigns.jpg'
import InboundCustomerSupportServices from '../../Assets/img/Blog/InboundCustomerupportServices.jpg'
import AppointmentSettingandLeadQualification from '../../Assets/img/Blog/AppointmentSettingandLeadQualification.jpg'

import TargetedSocialMediaCampaigns from '../../Assets/img/Blog/TargetedSocialMediaCampaigns.jpg'
import EngagingContentCreation from '../../Assets/img/Blog/EngagingContentCreation.jpg'
import SocialMediaAnalyticsandOptimization6 from '../../Assets/img/Blog/SocialMediaAnalyticsandOptimization6.jpg'

import CustomAppDevelopment from '../../Assets/img/Blog/CustomAppDevelopment.jpg'
import CrossPlatformCompatibility from '../../Assets/img/Blog/Cross-PlatformCompatibility.jpg'
import MaintenanceandSupport from '../../Assets/img/Blog/MaintenanceandSupport.jpg'

import CustomizedInteriorDesignSolutions from '../../Assets/img/Blog/CustomizedInteriorDesignSolutions.jpg'
import SpacePlanningandOptimization from '../../Assets/img/Blog/SpacePlanningandOptimization.jpg'
import ComprehensiveProjectManagement from '../../Assets/img/Blog/ComprehensiveProjectManagement.jpg'




const BlogPosts = () => {

    const [posts] = useState([
        {
            id: 1,
            category: 'Tax and Accounting Consultant',
            title: 'Comprehensive Tax Planning',
            content: 'Effective tax planning is essential for both individuals and businesses to minimize tax liabilities and maximize savings. Our comprehensive tax planning services ensure that you are taking full advantage of all available tax benefits and deductions. We provide tailored strategies that align with your financial goals and comply with the latest tax regulations. Whether you are an individual looking to reduce your tax burden or a business aiming to optimize your tax strategy, our experts are here to help.',
            image: ComprehensiveTaxPlanning
        },

        {
            id: 2,
            category: 'Tax and Accounting Consultant',
            title: 'Expert Accounting Services',
            content: 'Accurate and efficient accounting is crucial for the financial health of any business. Our expert accounting services provide you with reliable financial records, insightful analysis, and actionable recommendations. From bookkeeping to financial statement preparation, we handle all aspects of your accounting needs. Our team ensures compliance with accounting standards and helps you make informed financial decisions. Let us take care of your accounting, so you can focus on growing your business.',
            image: ExpertAccountingServices
        },

        {
            id: 3,
            category: 'Tax and Accounting Consultant',
            title: 'Hassle-Free Tax Filing',
            content: 'Filing taxes can be a complex and time-consuming process. Our hassle-free tax filing services make sure that your tax returns are filed accurately and on time. We handle all the paperwork, calculations, and submissions, ensuring that you remain compliant with tax laws. Our team stays updated with the latest tax code changes and uses advanced software to streamline the filing process. Trust us to manage your tax filings, so you can avoid penalties and focus on what matters most.',
            image: HassleFreeTaxFiling
        },

        { id: 4, category: 'Tender Bidding Services', title: 'Comprehensive Tender Preparation', content: "Our Tender Bidding Services ensure that your business can submit competitive and successful tenders tailored to specific industry requirements. Our experienced team of professionals excels at understanding your business's capabilities and specifications, preparing tender documents, adhering to submission guidelines, and ensuring timely submission. This comprehensive approach maximizes your chances of winning contracts.", image: ComprehensiveTenderPreparation },

        { id: 5, category: 'Tender Bidding Services', title: 'Strategic Bid Management', content: "Strategic Bid Management is at the core of our Tender Bidding Services. We analyze the market, assess competitors, and create strategic bids that highlight your business's unique strengths. By leveraging our expertise, we ensure that your bids are not only compliant with all necessary regulations but also stand out to evaluators, giving you a competitive edge.", image: StrategicBidManagement },

        { id: 6, category: 'Tender Bidding Services', title: 'Post-Submission Support', content: "Our services don't end with the submission of your tender. We provide post-submission support to address any queries or requests for additional information from the evaluators. We also offer guidance on improving future bids based on feedback and outcomes, ensuring continuous improvement and increased success rates in future tender opportunities.", image: PostSubmissionSupport },

        { id: 7, category: 'Online Affiliation Services', title: 'Simplifying the Affiliation Process Online', content: "Our Online Affiliation Services are designed to simplify and expedite the process of gaining affiliations for educational institutions. We offer comprehensive assistance in preparing and submitting affiliation applications online, ensuring all required documentation is accurately compiled and submitted on time. Our goal is to streamline the administrative burden and optimize the chances of successful affiliation approval.", image: SimplifyingtheAffiliationProcessOnline },

        { id: 8, category: 'Online Affiliation Services', title: 'Expert Guidance for Accreditation Success', content: "We provide expert guidance and consultation throughout the accreditation journey. Our team of professionals offers strategic advice on meeting accreditation standards and requirements, helping institutions navigate the complexities of compliance effectively. With our support, educational institutions can enhance their credibility and reputation within their respective fields.", image: ExpertGuidanceforAccreditationSuccess },

        { id: 9, category: 'Online Affiliation Services', title: 'Continuous Support Post-Affiliation', content: "Beyond the initial affiliation approval, our services extend to continuous support post-affiliation. We assist institutions in maintaining compliance with regulatory standards, handling audits, and addressing any challenges that may arise. Our commitment is to ensure sustained growth and success for educational institutions within their affiliated networks.", image: ContinuousSupportPostAffiliation },

        { id: 10, category: 'IT Solutions', title: ' Tailored IT Solutions', content: `Our IT Solutions are customized to meet the unique needs of businesses across various industries. From custom software development and system integration to IT consulting and project management, we provide end-to-end solutions that enhance operational efficiency and drive growth. Our team of experts works closely with you to understand your requirements and deliver innovative, technology-driven solutions.`, image: TailoredITSolutions },

        { id: 11, category: 'IT Solutions', title: ' Network and Infrastructure Management', content: `Effective network and infrastructure management is crucial for business continuity and performance. Our IT Solutions include comprehensive network design, implementation, and management services. We ensure your IT infrastructure is robust, scalable, and secure, capable of supporting your business's current needs and future growth. Our proactive monitoring and maintenance services minimize downtime and optimize network performance.`, image: NetworkandInfrastructureManagement },

        { id: 12, category: 'IT Solutions', title: 'Scalable IT Support and Maintenance', content: `Effective network and infrastructure management is crucial for business continuity and performance. Our IT Solutions include comprehensive network design, implementation, and management services. We ensure your IT infrastructure is robust, scalable, and secure, capable of supporting your business's current needs and future growth. Our proactive monitoring and maintenance services minimize downtime and optimize network performance.`, image: ScalableITSupportandMaintenance },

        { id: 13, category: 'Media Production', title: 'Professional Video Production', content: `Our Media Production services include professional video production tailored to your specific needs. From concept development and scriptwriting to filming and post-production, we handle every aspect of the process. Whether you need promotional videos, corporate presentations, or event coverage, our team ensures high-quality results that engage and captivate your audience.`, image: ProfessionalVideoProduction },

        { id: 14, category: 'Media Production', title: 'Creative Content Creation', content: `We specialize in creative content creation that effectively communicates your brand’s message. Our team of skilled writers, designers, and producers work together to create compelling content, including commercials, social media videos, and educational materials. We focus on storytelling and visual appeal to make your content stand out and resonate with your target audience.`, image: CreativeContentCreation },

        { id: 15, category: 'Media Production', title: 'Post-Production Services', content: `Our comprehensive post-production services ensure that your media content is polished and professional. We offer video editing, color correction, sound design, and special effects to enhance the quality of your productions. Our experienced editors and technicians use state-of-the-art software to deliver a final product that meets your expectations and exceeds industry standards.`, image: PostProductionServices },

        { id: 16, category: 'NEFA Cab Services', title: 'Reliable Transportation Solutions', content: `NEFA Cab Services offers reliable transportation solutions for all your travel needs. Whether you require airport transfers, city tours, or long-distance travel, our fleet of well-maintained vehicles and professional drivers ensure a safe and comfortable journey. Our commitment to punctuality and customer satisfaction makes us the preferred choice for dependable transportation.`, image: ReliableTransportationSolutions },

        { id: 17, category: 'NEFA Cab Services', title: 'Affordable Pricing', content: `At NEFA Cab Services, we believe in providing quality transportation at affordable prices. Our transparent pricing structure ensures there are no hidden charges, and we offer competitive rates for all our services. With a variety of vehicles to choose from, you can find the perfect option to suit your budget without compromising on comfort or reliability.`, image: AffordablePricing },

        { id: 18, category: 'NEFA Cab Services', title: '24/7 Customer Support', content: `Our 24/7 customer support ensures you have access to assistance whenever you need it. Whether you need to make a booking, modify your travel plans, or have any queries, our dedicated support team is always available to help. At NEFA Cab Services, we prioritize your convenience and satisfaction, making your travel experience seamless and enjoyable.`, image: CustomerSupport },

        { id: 19, category: 'Website Designing', title: 'Custom Website Design', content: `Our Website Designing services focus on creating custom websites that reflect your brand's unique identity. We design visually appealing and user-friendly websites tailored to your specific needs and goals. From initial concept to final launch, we ensure your website stands out and provides an exceptional user experience.`, image: CustomWebsiteDesign },

        { id: 20, category: 'Website Designing', title: 'Responsive and Mobile-Friendly', content: `We specialize in designing responsive and mobile-friendly websites that look great on any device. Our designs ensure seamless navigation and optimal performance across desktops, tablets, and smartphones. With our expertise, your website will provide a consistent and engaging experience for users, no matter how they access it.`, image: Responsive },

        { id: 21, category: 'Website Designing', title: 'SEO-Optimized Design', content: 'Our Website Designing services include SEO optimization to help your site rank higher in search engine results. We implement best practices for on-page SEO, ensuring your website is easily discoverable by your target audience. With our focus on search engine visibility, you can attract more visitors and grow your online presence effectively.', image: SEOOptimizedDesign },

        { id: 22, category: 'Admission Assistance', title: 'Strategic Admission Planning', content: 'Our Admission Assistance services provide strategic planning to help students navigate the admission process effectively. We develop personalized timelines, set achievable milestones, and offer continuous support throughout the application journey. Our structured approach ensures that every aspect of the application is handled with care and precision, increasing the likelihood of acceptance.', image: StrategicAdmissionPlanning },

        { id: 23, category: 'Admission Assistance', title: 'Holistic Application Enhancement', content: `We focus on enhancing every component of a student's application to present a well-rounded profile to admissions committees. Our services include crafting compelling personal statements, optimizing extracurricular activity lists, and highlighting unique strengths and achievements. By showcasing a student's full potential, we help them stand out in a competitive admission landscape.`, image: HolisticApplicationEnhancement },

        { id: 24, category: 'Admission Assistance', title: 'Post-Acceptance Guidance', content: `Our support doesn't end with acceptance letters. We provide post-acceptance guidance to help students transition smoothly into their new academic environments. This includes assistance with enrollment procedures, housing arrangements, and orientation preparation. Our goal is to ensure students are well-prepared and confident as they embark on their new educational journey.`, image: PostAcceptanceGuidance },

        { id: 25, category: 'Graphic Designing', title: 'Custom Graphic Design Solutions', content: 'Our Graphic Designing services offer custom solutions tailored to your unique brand identity and business needs. We create visually stunning designs that effectively communicate your message and captivate your audience. From logos and branding materials to marketing collateral and digital assets, our custom designs help your brand stand out and leave a lasting impression.', image: CustomGraphicDesignSolutions },

        { id: 26, category: 'Graphic Designing', title: 'Creative Visual Content', content: 'We specialize in creating engaging and creative visual content that enhances your brand’s presence across various platforms. Our services include designing social media graphics, infographics, advertisements, and promotional materials. By combining artistic creativity with strategic thinking, we produce visuals that not only look great but also drive engagement and conversions.', image: CreativeVisualContent },

        { id: 27, category: 'Graphic Designing', title: 'Professional Print Design', content: 'Our Graphic Designing services extend to professional print design, ensuring your printed materials are of the highest quality. We design brochures, flyers, posters, business cards, and more, with a focus on clarity, aesthetic appeal, and brand consistency. With our expertise in print design, your marketing materials will effectively convey your message and enhance your brand’s image.', image: ProfessionalPrintDesign },

        { id: 28, category: 'Lead Generation Services', title: 'Targeted Lead Generation Strategies', content: 'Our Lead Generation Services utilize targeted strategies to identify and attract potential customers who are genuinely interested in your products or services. By leveraging advanced data analytics and market research, we create customized campaigns that reach the right audience at the right time, increasing the chances of conversion and boosting your sales pipeline.', image: TargetedLeadGenerationStrategies },

        { id: 29, category: 'Lead Generation Services', title: 'Multi-Channel Lead Acquisition', content: 'We implement multi-channel lead acquisition techniques to maximize your reach and generate high-quality leads. Our approach includes a combination of email marketing, social media campaigns, content marketing, SEO, and PPC advertising. By using diverse channels, we ensure a steady flow of leads from various sources, enhancing your overall lead generation efforts.', image: MultiChannelLeadAcquisition },

        { id: 30, category: 'Lead Generation Services', title: 'Comprehensive Lead Nurturing', content: 'Our services go beyond just generating leads; we also focus on nurturing them through the sales funnel. We provide comprehensive lead nurturing strategies, including personalized follow-ups, targeted content, and automated workflows. By maintaining consistent and meaningful engagement with potential customers, we help you build strong relationships and convert leads into loyal customers.', image: ComprehensiveLeadNurturing },

        { id: 31, category: 'Telemarketing (BPO Services)', title: 'Outbound Telemarketing Campaigns', content: `Our Telemarketing services include executing outbound telemarketing campaigns designed to reach potential customers and generate high-quality leads. Our team of experienced telemarketers conducts market research, performs cold calls, and engages prospects with compelling communication strategies. By understanding your business's unique value proposition, we create campaigns that effectively drive sales and expand your customer base.`, image: OutboundTelemarketingCampaigns },

        { id: 32, category: 'Telemarketing (BPO Services)', title: 'Inbound Customer Support Services   ', content: `We offer comprehensive inbound customer support services to ensure your customers receive prompt and professional assistance. Our dedicated support team manages incoming calls, emails, and live chat inquiries, addressing customer concerns, providing product information, and resolving issues efficiently. By delivering exceptional customer service, we help improve customer satisfaction and retention rates.`, image: InboundCustomerSupportServices },

        { id: 33, category: 'Telemarketing (BPO Services)', title: 'Appointment Setting and Lead Qualification', content: `Our telemarketing services extend to appointment setting and lead qualification, streamlining your sales process and enhancing productivity. We qualify leads based on your criteria and schedule appointments for your sales team, ensuring they focus on high-potential prospects. With our expertise, we help you optimize your sales efforts, improve conversion rates, and achieve your business goals.`, image: AppointmentSettingandLeadQualification },

        { id: 34, category: 'Social Media Promotion', title: 'Targeted Social Media Campaigns', content: 'Our Social Media Promotion services include creating targeted campaigns to reach and engage your ideal audience. We analyze your market and audience demographics to develop customized content and advertisements that resonate with your followers. By leveraging platforms like Facebook, Instagram, Twitter, and LinkedIn, we ensure your brand gains visibility and attracts potential customers.', image: TargetedSocialMediaCampaigns },

        { id: 35, category: 'Social Media Promotion', title: 'Engaging Content Creation', content: 'We specialize in crafting engaging content that captivates your audience and encourages interaction. Our team creates a variety of content, including posts, stories, videos, and graphics, tailored to each social media platform. By consistently delivering high-quality, relevant content, we help build your brand’s online presence and foster a loyal community of followers.', image: EngagingContentCreation },

        { id: 36, category: 'Social Media Promotion', title: 'Social Media Analytics and Optimization6', content: 'Our services include detailed social media analytics and optimization to ensure your campaigns are effective and deliver results. We monitor key performance indicators, track engagement metrics, and analyze the success of each campaign. Using these insights, we continuously refine our strategies to improve reach, engagement, and conversion rates, maximizing your return on investment.', image: SocialMediaAnalyticsandOptimization6 },

        { id: 37, category: 'App Development (Android & iOS)', title: 'Custom App Development', content: 'Our App Development services offer custom solutions for both Android and iOS platforms. We design and develop apps tailored to your specific business needs, ensuring a seamless user experience and intuitive interface. From initial concept to final deployment, our team works closely with you to create a unique app that aligns with your brand and goals.', image: CustomAppDevelopment },

        { id: 38, category: 'App Development (Android & iOS)', title: 'Cross-Platform Compatibility', content: 'We specialize in developing apps that offer cross-platform compatibility, allowing you to reach a broader audience. Using advanced frameworks and technologies, we ensure that your app performs flawlessly on both Android and iOS devices. This approach not only saves time and resources but also provides a consistent experience for all users.', image: CrossPlatformCompatibility },

        { id: 39, category: 'App Development (Android & iOS)', title: 'Maintenance and Support', content: 'Our commitment to your app doesn’t end at launch. We provide ongoing maintenance and support to ensure your app remains up-to-date and functions smoothly. Our services include regular updates, bug fixes, and feature enhancements. With our continuous support, you can be confident that your app will evolve with your business and stay relevant in the competitive market.', image: MaintenanceandSupport },

        { id: 40, category: 'Interior Designer', title: 'Customized Interior Design Solutions', content: 'Our Interior Design services offer customized solutions tailored to your unique style and needs. We work closely with you to understand your vision and preferences, creating personalized designs that reflect your personality and lifestyle. From residential to commercial spaces, our goal is to transform your environment into a stunning and functional space that meets your specific requirements.', image: CustomizedInteriorDesignSolutions },

        { id: 41, category: 'Interior Designer', title: 'Space Planning and Optimization', content: 'Effective space planning and optimization are at the core of our Interior Design services. We analyze your space to create layouts that maximize functionality and flow while maintaining aesthetic appeal. Our expert designers ensure that every square foot is utilized efficiently, providing practical solutions that enhance the overall experience of your space.', image: SpacePlanningandOptimization },

        { id: 42, category: 'Interior Designer', title: 'Comprehensive Project Management', content: 'Our Interior Design services include comprehensive project management to ensure a seamless and stress-free experience. We handle every aspect of the design process, from initial concept development to final installation. Our team coordinates with contractors, suppliers, and craftsmen to ensure your project is completed on time and within budget, delivering exceptional results that exceed your expectations.', image: ComprehensiveProjectManagement }

    ]);

    const groupedPosts = posts.reduce((acc, post) => {
        acc[post.category] = acc[post.category] || [];
        acc[post.category].push(post);
        return acc;
    }, {});

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <>
            {Object.keys(groupedPosts).map(category => (
                <div key={category}>
                    <div className="d-flex justify-content-between align-items-center mb-3 category-heading">
                        <h2 id={category.replace(/\s+/g, '-').toLowerCase()} data-aos="fade-up">{category}</h2>
                        <Link variant="link" to={`/blog/${category.replace(/\s+/g, '-').toLowerCase()}`} data-aos="fade-up">
                            View All
                        </Link>
                    </div>
                    <Row>
                        {groupedPosts[category].map(post => (
                            <Col md={4} key={post.id} className="mb-5">

                                <Card data-aos="fade-up">
                                    <Card.Img variant="top" src={post.image} data-aos="fade-up" />
                                    <Card.Body>
                                        <Card.Title data-aos="fade-up">{post.title}</Card.Title>
                                        <Card.Text data-aos="fade-up">{post.content.substring(0, 100)}...</Card.Text>
                                        <Link to={`/blog/post/${post.id}`} data-aos="fade-up">
                                            <Button className='blog-read-more-button' data-aos="fade-up">Read More</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </>
    );
};

export default BlogPosts;
