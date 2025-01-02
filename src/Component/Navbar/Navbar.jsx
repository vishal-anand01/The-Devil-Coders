import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import "../Assets/CSS/navbar.css";
import "../Assets/lib/animate/animate.min.css";
import tdclogo from "../Assets/img/logo/TheDevilCodersJpg.jpg";

const CustomNavbar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State to track if navbar is sticky
  const [subMenuOpen, setSubMenuOpen] = useState(false); // State to track submenu visibility
  const [subMenuOpen1, setSubMenuOpen1] = useState(false); // State to track submenu visibility

  const handleNavClose = () => {
    setExpanded(false);
    setShowCloseIcon(false);
  };

  const toggleIcon = () => {
    setExpanded(!expanded);
    setShowCloseIcon(!showCloseIcon);
  };

  const handleSubMenuToggle = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const handleSubMenuToggle1 = () => {
    setSubMenuOpen1(!subMenuOpen1);
  };

  // Function to handle scroll event and detect if the navbar becomes sticky
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid navbar-bg py-2 d-none d-md-flex">
        <div className="container-fluid ps-5 pe-5">
          <div className="d-flex justify-content-between topbar">
            <div className="top-info">
              <small className="me-3 top-test">
                <Link
                  to="https://maps.app.goo.gl/k5Xx3RYuDzcYxDEk7"
                  target="blank"
                >
                  <i className="fas fa-map-marker-alt me-2 top-bar-icon"></i>
                  Naugachia, Bhagalpur, Bihar
                </Link>
              </small>
              <small className="me-3 top-test">
                <Link to="mailto:codersthedevil@gmail.com">
                  <i className="fas fa-envelope me-2 top-bar-icon"></i>
                  codersthedevil@gmail.com
                </Link>
              </small>
            </div>

            <div id="note" className="d-none d-xl-flex">
              <small>Note : We help you to Grow your Business</small>
            </div>
            <div className="top-link">
              <Link
                to="https://www.facebook.com/CrewCaptivatorsSolutions"
                className="nav-fill btn btn-sm-square rounded-circle"
                target="blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link
                to="https://twitter.com/"
                className=" nav-fill btn btn-sm-square rounded-circle"
                target="blank"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
              <Link
                to="https://www.instagram.com/the_devil_author_of_all_sins/"
                className=" nav-fill btn btn-sm-square rounded-circle"
                target="blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/vishal-kr-anand/"
                className=" nav-fill btn btn-sm-square rounded-circle me-0"
                target="blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}

      <div
        className={`sticky-navbar ${
          isSticky ? "navbar-shadow navbar-animate" : ""
        }`}
        style={{ top: "-10px", zIndex: 1000 }}
      >
        <Navbar
          expanded={expanded}
          expand="lg"
          variant="dark"
          className="navbar-style ps-lg-5 pe-lg-5 ps-2 pe-2"
        >
          <Container fluid className="p-0">
            <Navbar.Brand as={Link} to="/" onClick={handleNavClose}>
              <img src={tdclogo} alt="Logo" className="TheDevilCoderslogo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" onClick={toggleIcon}>
              {showCloseIcon ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fa-solid fa-bars-staggered"></i>
              )}
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarCollapse">
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <Link
                  to="/"
                  className={`nav-item nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  onClick={handleNavClose}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`nav-item nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  onClick={handleNavClose}
                >
                  About
                </Link>

                <NavDropdown
                  title="Services"
                  id="basic-nav-dropdown"
                  show={subMenuOpen}
                  onMouseEnter={handleSubMenuToggle}
                  onMouseLeave={handleSubMenuToggle}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/services"
                    onClick={handleNavClose}
                  >
                    All Services
                  </NavDropdown.Item>
                  <hr />
                  <NavDropdown.Item
                    as={Link}
                    to="/services/tax-and-accounts-consultant"
                    onClick={handleNavClose}
                  >
                    Tax and Accounting Consultant
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/tender-bidding-services"
                    onClick={handleNavClose}
                  >
                    Tender Bidding Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/online-affiliation-services"
                    onClick={handleNavClose}
                  >
                    Online Affiliation Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/it-solution"
                    onClick={handleNavClose}
                  >
                    IT Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/media-production"
                    onClick={handleNavClose}
                  >
                    Media Production
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/nefa-cabs"
                    onClick={handleNavClose}
                  >
                    NEFA Cab Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/web-desinging-and-development"
                    onClick={handleNavClose}
                  >
                    Website Designing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/admission-assistance"
                    onClick={handleNavClose}
                  >
                    Admission Assistance
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/graphic-designing"
                    onClick={handleNavClose}
                  >
                    Graphic Designing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/lead-generation"
                    onClick={handleNavClose}
                  >
                    Lead Generation Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/tele-callers"
                    onClick={handleNavClose}
                  >
                    Telemarketing (BPO Services)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/social-media-promotion"
                    onClick={handleNavClose}
                  >
                    Social Media Promotion
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/app-development"
                    onClick={handleNavClose}
                  >
                    App Development (Android & iOS)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/interior-design"
                    onClick={handleNavClose}
                  >
                    Interior Designer
                  </NavDropdown.Item>

                  {/* Add more NavDropdown.Items for each submenu item */}
                </NavDropdown>

                <Link
                  to="/blog"
                  className={`nav-item nav-link ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                  onClick={handleNavClose}
                >
                  Blog
                </Link>

                <NavDropdown
                  title="Associates"
                  id="Associates"
                  show={subMenuOpen1}
                  onMouseEnter={handleSubMenuToggle1}
                  onMouseLeave={handleSubMenuToggle1}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/partners"
                    onClick={handleNavClose}
                  >
                    Partners
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/co-partners"
                    onClick={handleNavClose}
                  >
                    Co-Partners
                  </NavDropdown.Item>

                  {/* Add more NavDropdown.Items for each submenu item */}
                </NavDropdown>

                <Link
                  to="/team"
                  className={`nav-item nav-link ${
                    location.pathname === "/team" ? "active" : ""
                  }`}
                  onClick={handleNavClose}
                >
                  Team
                </Link>
                <Link
                  to="/career"
                  className={`nav-item nav-link ${
                    location.pathname === "/career" ? "active" : ""
                  }`}
                  onClick={handleNavClose}
                >
                  Career
                </Link>
                <Link
                  to="/contact"
                  className={`nav-item nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  onClick={handleNavClose}
                >
                  Contact Us
                </Link>
              </div>
            </Navbar.Collapse>
            <div className="d-none d-xl-flex flex-shirink-0">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center me-4"
              >
                <Link
                  to=""
                  className="position-relative animated tada infinite style-for-color-navbar-call-icon"
                >
                  <i
                    className="fa-solid fa-phone fa-2x"
                    style={{ color: "#00b2d6 " }}
                  ></i>
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: "20px" }}
                  >
                    <span>
                      <i className="fa fa-comment-dots navbar-icon-style"></i>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="d-flex flex-column">
                <span className="text-white-50">Have any questions?</span>
                <Link to="tel:+919233495319" className="navbar-number-style">
                  +91 92334 95319
                </Link>
              </div>
              {/* <div className="d-flex align-items-center justify-content-center ms-4 ">
              <Link to="#"><i className="bi bi-search text-white fa-2x"></i> </Link>
            </div> */}
            </div>
          </Container>
        </Navbar>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default CustomNavbar;
