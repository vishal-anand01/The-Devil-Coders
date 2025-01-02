import React, { useState, useEffect } from "react";
import "../Assets/CSS/Preloader.css";
import CompanyLogo from "../Assets/img/CompanyLogo.png"; // Adjust path as necessary
import { Helmet } from "react-helmet";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, set loading to false to hide the preloader
    }, 3000); // Adjust the duration as needed (e.g., 3000ms = 3 seconds)

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {/* Add Helmet component to manage document head */}
      <Helmet>
        {/* Title */}
        <title>Crew Captivators Solutions Pvt. Ltd.</title>
        {/* Meta description */}
        <meta
          name="description"
          content="One Stop Solutions for your business and discover top-notch services including tax and accounting consultation, tender bidding, online affiliation, IT solutions, NEFA cab services, media production, graphic designing, admission assistance, lead generation, BPO services, social media promotion, app development for Android & iOS, interior designing and many more... "
        />
        {/* Other meta tags */}
        {/* Add any other necessary meta tags here */}
      </Helmet>
      <div className={`preloader ${loading ? "active" : ""}`}>
        <div className="loader-container">
          <div id="preloader">
            <div id="loader">
              <img
                className="company-logo"
                src={CompanyLogo}
                alt="Crew Captivators Solutions Pvt. Ltd. logo"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
