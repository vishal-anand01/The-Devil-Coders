// router.js
import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CustomNavbar from '../Navbar/Navbar.jsx'
import Home from '../Pages/home.jsx'
import About from '../Pages/about.jsx'
import Service from '../Pages/service.jsx'
import Features from '../Pages/features.jsx'
import WorkHere from '../Pages/workHere.jsx'
import Team from '../Pages/Team.jsx'
import Contact from '../Pages/contact.jsx'
import Footer from '../Footer/footer.jsx'
import AdmissionCounsellor from '../Pages/Career/AdmissionCounsellor.jsx'
import BpoJob from '../Pages/Career/BpoJob.jsx'
import DigitalMarketingJob from '../Pages/Career/DigitalMarketingJob.jsx'
import FieldSalesJob from '../Pages/Career/FieldSales.jsx'
import GraphicsDesignerJob from '../Pages/Career/GraphicsDesignerJob.jsx'
import HRDepartmentJob from '../Pages/Career/HRDepartment.jsx'
import ReceptionistJob from '../Pages/Career/Receptionist.jsx'
import NotFound from '../Pages/NotFound.jsx'
import ScrollToTop from '../ScrollToTop.jsx'
import TaxAndAccountPage from '../Pages/taxAndConsultant.jsx'
import TenderBiddingServicePage from '../Pages/TenderBiddingServicesPage.jsx'
import OnlineAffiliationServices from '../Pages/OnlineAffiliationServicesPage.jsx'
import ItSolution from '../Pages/ItSolution.jsx'
import MediaProductionPage from '../Pages/MediaProductionPage.jsx'
import NefaCabServices from '../Pages/NefaCabService.jsx'
import WebDesingingAnandDevelopment from '../Pages/WebDesigning.jsx'
import AdmissionAssistancePage from '../Pages/AdmissionAssistancePage.jsx'
import GraphicsDesignPage from '../Pages/GraphicsDesignPage.jsx'
import LeadGenerationServices from '../Pages/LeadGenerationServices.jsx'
import TaleCallersServices from '../Pages/TaleCallersServices.jsx'
import SocialMediaPromotion from '../Pages/SocialMediaPromotion.jsx'
import InteriorDesignServies from '../Pages/InteriorDesignServices.jsx'
import DroneTechnologyServices from '../Pages/DroneTechnologyServices.jsx'
import AppDevelopmentServices from '../Pages/AppDevelopmentService.jsx'
import StudentDetails from '../Pages/StudentDocument.jsx'

import BlogPage from '../Pages/Blog/MainBlogPage.jsx'
import BlogTaxAccountingConsultantPage from '../Pages/Blog/TaxAndAccountingConsultant.jsx'
import BlogTenderBiddingPage from '../Pages/Blog/TenderBiddingServices.jsx'
import BlogOnlineAffiliationServices from '../Pages/Blog/OnlineAffiliationServices.jsx'
import BlogITSolutions from '../Pages/Blog/ITSolutions.jsx'
import BlogMediaProduction from '../Pages/Blog/MediaProduction.jsx'
import BlogNEFACabServices from '../Pages/Blog/NEFACabServices.jsx'
import BlogWebsiteDesigning from '../Pages/Blog/WebsiteDesigning.jsx'
import BlogAdmissionAssistance from '../Pages/Blog/AdmissionAssistance.jsx'
import BlogGraphicDesigning from '../Pages/Blog/GraphicDesigning.jsx'
import BlogLeadGenerationServices from '../Pages/Blog/LeadGenerationServices.jsx'
import BlogTelemarketingfrom from '../Pages/Blog/Telemarketing.jsx'
import BlogSocialMediaPromotion from '../Pages/Blog/SocialMediaPromotion.jsx'
import BlogAppDevelopment from '../Pages/Blog/AppDevelopment.jsx'
import BlogInteriorDesigner from '../Pages/Blog/InteriorDesigner.jsx'

import BlogPostDetail from '../Pages/Blog/BlogPostDetails.jsx'
import BlogPosts from '../Pages/Blog/BlogPosts.jsx';
import Partners from '../Pages/Associates/Partners.jsx'
import CoPartners from '../Pages/Associates/CoPartners.jsx'


import Try from '../Pages/Try.jsx'

import Preloader from '../Preloader/Preloader.jsx'


const AppRouter = () => {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        // Simulate loading time with setTimeout
        const timer = setTimeout(() => {
            setShowPreloader(false); // After 3 seconds, hide the preloader
        }, 2000); // Adjust the duration as needed (e.g., 3000ms = 3 seconds)

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
      <BrowserRouter>
        <ScrollToTop />
        {showPreloader ? (
          <Preloader /> // Show preloader until loading is complete
        ) : (
          <>
            <CustomNavbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Service />} />
              <Route path="/features" element={<Features />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/co-partners" element={<CoPartners />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/career" element={<WorkHere />} />
              <Route
                path="/career/admission-counsellor"
                element={<AdmissionCounsellor />}
              />
              <Route path="/career/bpo" element={<BpoJob />} />
              <Route
                path="/career/digital-marketing"
                element={<DigitalMarketingJob />}
              />
              <Route path="/career/field-sales" element={<FieldSalesJob />} />
              <Route
                path="/career/graphics-designer"
                element={<GraphicsDesignerJob />}
              />
              <Route
                path="/career/hr-department"
                element={<HRDepartmentJob />}
              />
              <Route
                path="/career/receptionist"
                element={<ReceptionistJob />}
              />

              <Route
                path="/services/tax-and-accounts-consultant"
                element={<TaxAndAccountPage />}
              />
              <Route
                path="/services/tender-bidding-services"
                element={<TenderBiddingServicePage />}
              />
              <Route
                path="/services/online-affiliation-services"
                element={<OnlineAffiliationServices />}
              />
              <Route path="/services/it-solution" element={<ItSolution />} />
              <Route
                path="/services/media-production"
                element={<MediaProductionPage />}
              />
              <Route path="/services/nefa-cabs" element={<NefaCabServices />} />
              <Route
                path="/services/web-desinging-and-development"
                element={<WebDesingingAnandDevelopment />}
              />
              <Route
                path="/services/admission-assistance"
                element={<AdmissionAssistancePage />}
              />
              <Route
                path="/services/graphic-designing"
                element={<GraphicsDesignPage />}
              />
              <Route
                path="/services/lead-generation"
                element={<LeadGenerationServices />}
              />
              <Route
                path="/services/tele-callers"
                element={<TaleCallersServices />}
              />
              <Route
                path="/services/social-media-promotion"
                element={<SocialMediaPromotion />}
              />
              <Route
                path="/services/interior-design"
                element={<InteriorDesignServies />}
              />
              <Route
                path="/services/drone-technology"
                element={<DroneTechnologyServices />}
              />
              <Route
                path="/services/app-development"
                element={<AppDevelopmentServices />}
              />

              <Route
                path="/student-documentation"
                element={<StudentDetails />}
              />

              <Route path="/blog" element={<BlogPage />} />
              <Route
                path="/blog/tax-and-accounting-consultant"
                element={<BlogTaxAccountingConsultantPage />}
              />
              <Route
                path="/blog/tender-bidding-services"
                element={<BlogTenderBiddingPage />}
              />
              <Route
                path="/blog/online-affiliation-services"
                element={<BlogOnlineAffiliationServices />}
              />
              <Route path="/blog/it-solutions" element={<BlogITSolutions />} />
              <Route
                path="/blog/media-production"
                element={<BlogMediaProduction />}
              />
              <Route
                path="/blog/nefa-cab-services"
                element={<BlogNEFACabServices />}
              />
              <Route
                path="/blog/website-designing"
                element={<BlogWebsiteDesigning />}
              />
              <Route
                path="/blog/admission-assistance"
                element={<BlogAdmissionAssistance />}
              />
              <Route
                path="/blog/graphic-designing"
                element={<BlogGraphicDesigning />}
              />
              <Route
                path="/blog/lead-generation-services"
                element={<BlogLeadGenerationServices />}
              />
              <Route
                path="/blog/telemarketing-(bpo-services)"
                element={<BlogTelemarketingfrom />}
              />
              <Route
                path="/blog/social-media-promotion"
                element={<BlogSocialMediaPromotion />}
              />
              <Route
                path="/blog/app-development-(android-&-ios)"
                element={<BlogAppDevelopment />}
              />
              <Route
                path="/blog/interior-designer"
                element={<BlogInteriorDesigner />}
              />

              <Route path="/blog/post/:id" element={<BlogPostDetail />} />
              <Route path="/" element={<BlogPosts />} />

              <Route path="/try" element={<Try />} />

              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    );
};

export default AppRouter;
