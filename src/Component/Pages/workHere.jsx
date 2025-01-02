import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import initializeTypewriter from "../Assets/JavacsriptFile/AboutPageName";
import "../Assets/CSS/workHerePage.css";

import AdmissionCounsellor from "../Assets/img/admission-counslor-job.webp";
import BPO from "../Assets/img/BPO-management-job.webp";
import DigitalMarketing from "../Assets/img/Digital-Marketing-job.webp";
import FieldSales from "../Assets/img/Field-Sales-job.webp";
import GraphicsDesigner from "../Assets/img/graphicjob.jpg";
import HRDepartment from "../Assets/img/hr-department-job.webp";
import Receptionist from "../Assets/img/receptionist-job.webp";
import { Helmet } from "react-helmet";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const WorkHere = () => {
  useEffect(() => {
    initializeTypewriter([
      { elementId: "app", text: "Work With Us" },
      // Add more configurations for other elements if needed
    ]);
  }, []);

  return (
    <>
      {/* Add Helmet component to manage document head */}
      <Helmet>
        {/* Title */}
        <title>Career - Crew Captivators Solutions Pvt. Ltd.</title>
        {/* Meta description */}
        <meta
          name="description"
          content="Explore rewarding career opportunities with our diverse range of jobs. From entry-level positions to executive roles, discover roles tailored to your skills and aspirations, and take the next step in your professional journey with us..."
        />
        {/* Other meta tags */}
        {/* Add any other necessary meta tags here */}
      </Helmet>

      <div className="about-us-container">
        <div id="app" className="about-us-text"></div>
      </div>

      <>
        {/* Jobs Start */}
        <div className="container-xxl py-5 career-section">
          <div className="container">
            <ScrollAnimation>
              <h1
                className="text-center mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Job Listing
              </h1>
            </ScrollAnimation>
            <div id="tab-1" className="tab-pane fade show p-0">
              <ScrollAnimation>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={AdmissionCounsellor}
                        alt="Admission Counsellor"
                        style={{ width: 80, height: 80, objectFit: "cover" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Admission Counsellor</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Naharlagun, Arunachal Pradesh
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-primary me-2" />
                          Full Time
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-primary me-2" />
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          123 -{" "}
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <Link
                          className="btn btn-primary"
                          to="/career/admission-counsellor"
                        >
                          Apply Now
                        </Link>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary me-2" />
                        Date Line: 01 July, 2024
                      </small>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={BPO}
                        alt="BPO"
                        style={{ width: 80, height: 80, objectFit: "cover" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">BPO</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Naharlagun, Arunachal Pradesh
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-primary me-2" />
                          Full Time
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-primary me-2" />
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          123 -{" "}
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <Link className="btn btn-primary" to="/career/bpo">
                          Apply Now
                        </Link>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary me-2" />
                        Date Line: 01 July, 2024
                      </small>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={DigitalMarketing}
                        alt=""
                        style={{ width: 80, height: 80, objectFit: "cover" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Digital Marketing</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Naharlagun, Arunachal Pradesh
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-primary me-2" />
                          Full Time
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-primary me-2" />
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          123 -{" "}
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <Link
                          className="btn btn-primary"
                          to="/career/digital-marketing"
                        >
                          Apply Now
                        </Link>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary me-2" />
                        Date Line: 01 July, 2024
                      </small>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={FieldSales}
                        alt=""
                        style={{ width: 80, height: 80, objectFit: "cover" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Field Sales</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Naharlagun, Arunachal Pradesh
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-primary me-2" />
                          Full Time
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-primary me-2" />
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          123 -{" "}
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <Link
                          className="btn btn-primary"
                          to="/career/field-sales"
                        >
                          Apply Now
                        </Link>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary me-2" />
                        Date Line: 01 July, 2024
                      </small>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={GraphicsDesigner}
                        alt=""
                        style={{ width: 80, height: 80, objectFit: "cover" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Graphics Designer</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Naharlagun, Arunachal Pradesh
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-primary me-2" />
                          Full Time
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-primary me-2" />
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          123 -{" "}
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <Link
                          className="btn btn-primary"
                          to="/career/graphics-designer"
                        >
                          Apply Now
                        </Link>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary me-2" />
                        Date Line: 01 July, 2024
                      </small>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={HRDepartment}
                        alt=""
                        style={{ width: 80, height: 80, objectFit: "cover" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">HR Department</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Naharlagun, Arunachal Pradesh
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-primary me-2" />
                          Full Time
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-primary me-2" />
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          123 -{" "}
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <Link
                          className="btn btn-primary"
                          to="/career/hr-department"
                        >
                          Apply Now
                        </Link>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary me-2" />
                        Date Line: 01 July, 2024
                      </small>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Receptionist}
                        alt=""
                        style={{ width: 80, height: 80, objectFit: "cover" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Receptionist</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Naharlagun, Arunachal Pradesh
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-primary me-2" />
                          Full Time
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-primary me-2" />
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          123 -{" "}
                          <span style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </span>
                          456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <Link
                          className="btn btn-primary"
                          to="/career/receptionist"
                        >
                          Apply Now
                        </Link>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary me-2" />
                        Date Line: 01 July, 2024
                      </small>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        {/* Jobs End */}
      </>
    </>
  );
};

export default WorkHere;
