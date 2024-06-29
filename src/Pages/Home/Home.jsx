// import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// css
import styles from "./Home.module.css";

// images
import backHeroImage from "../../assets/images/pages/home/hero/heroBackground.png";
import mainHeroImage from "../../assets/images/pages/home/hero/main.png";
import backSkilledTeam from "../../assets/images/pages/home/skilledTeam/skilledTeamBackground.png";
import CEO from "../../assets/images/pages/home/skilledTeam/CEO.png";
import ServicesItems from "../../Components/ServicesItems/ServicesItems";

import users from "../../assets/images/pages/home/serving/User.png";
import shape from "../../assets/images/pages/home/serving/Shape.png";

// clients
import image1 from "../../assets/images/pages/home/partners/1.png";
import image2 from "../../assets/images/pages/home/partners/2.png";
import image3 from "../../assets/images/pages/home/partners/3.png";
import image4 from "../../assets/images/pages/home/partners/4.png";
import image5 from "../../assets/images/pages/home/partners/5.png";
import image6 from "../../assets/images/pages/home/partners/6.png";

const clientImages = [image1, image2, image3, image4, image5, image6];

// Components
import Experience from "../../Components/Experience/Experience";
import Statistics from "../../Components/Statistics/Statistics";
import Products from "../../Components/Products/Products";
import Testmonials from "../../Components/Testmonials/Testmonials";

const Home = () => {
  const { i18n } = useTranslation();
  return (
    <div dir={i18n.language === "en" ? "ltr" : "rtl"}>
      <div className={`${styles.hero} px-3`}>
        <div className={`${styles.backImage}`}>
          <picture>
            <img
              src={backHeroImage}
              alt=""
              style={
                i18n.language === "en"
                  ? { right: "-100px" }
                  : { left: "-100px" }
              }
            />
          </picture>
        </div>
        <div className="container-lg">
          <div className={`${styles.heroBody}`}>
            <div className={`${styles.content}`}>
              <h3 className={`${styles.welcome} mb-0`}>Welcome To GPCO</h3>
              <div className={`${styles.mainTitles} my-3`}>
                <span>GPCO Help</span>
                <span> You To Success</span>
              </div>
              <p className={`${styles.description}`}>
                We work diligently to provide services and management of burnout
                With the highest level of new friendliness.
              </p>
              <div className={`${styles.buttons} d-flex gap-3`}>
                <NavLink
                  className={`${styles.recentWork} btn py-2 px-3 burgundyButton`}
                >
                  Recent Work
                </NavLink>
                <NavLink className={`btn py-2 px-3 whiteButton`}>
                  Read More
                </NavLink>
              </div>
            </div>
            <div className={`${styles.mainHeroImage}`}>
              <picture>
                <img src={mainHeroImage} alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.skilledTeam} px-3 py-5`}>
        <div className={`${styles.backImage}`}>
          <picture>
            <img
              src={backSkilledTeam}
              alt=""
              style={
                i18n.language === "en"
                  ? { left: "-500px", transform: "scaleX(1)" }
                  : { right: "-500px", transform: "scaleX(-1)" }
              }
            />
          </picture>
        </div>
        <div className="container-lg">
          <div className="sectionTitle">
            <div className="preIconGreen">
              <span></span>
              <span></span>
            </div>
            <h4 className="whiteColorTitle">About Our Company</h4>
          </div>

          <div className={`${styles.skilledTeamBody} mt-5`}>
            <div className={`${styles.CEO}`}>
              <picture>
                <img src={CEO} alt="" />
              </picture>
              <div className={`${styles.data}`}>
                <p className={`${styles.jobTitle} mb-0`}>
                  chief executive officer
                </p>
                <p className={`${styles.name} mb-0`}>Mr. Nawaf Al-Abdullatif</p>
              </div>
            </div>
            <div className={`${styles.content}`}>
              <p className={`${styles.title}`}>
                our skilled Team grow your business.
              </p>
              <p className={`${styles.description}`}>
                Aliquam volutpat diam a orci euismod ornare. Suspendisse quis
                massa justo. Suspendisse tortor lacus, tincidunt ut ex a,
                pretium lobortis sapien. Vestibulum rutrum pharetra ex,
              </p>
              <ul className={`${styles.list} g-3 p-0 row`}>
                <li className="col-md-6 col-lg-12">
                  <span></span>
                  <span>provide innovative insurance solutions</span>
                </li>
                <li className="col-md-6 col-lg-12">
                  <span></span>
                  <span>Simplifying risk management processes</span>
                </li>
                <li className="col-md-6 col-lg-12">
                  <span></span>
                  <span>Meet the needs of our customers</span>
                </li>
              </ul>
              <div className={`${styles.numbers} mb-4`}>
                <div className={`${styles.item} px-3 py-3`}>
                  <p className={`${styles.digit} m-0`}>+150</p>
                  <p className={`${styles.title} m-0`}>Expert Team members</p>
                </div>
                <div className={`${styles.item} px-3 py-3`}>
                  <p className={`${styles.digit} m-0`}>+10</p>
                  <p className={`${styles.title} m-0`}>
                    Years Experience Our Company
                  </p>
                </div>
              </div>
              <NavLink to={""} className={"py-2 px-3 btn"}>
                Discover More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.services} px-3 py-5`}>
        <div className="container-lg">
          <div className="sectionTitle mb-2">
            <div className="preIconGreen">
              <span></span>
              <span></span>
            </div>
            <h4 className="whiteColorTitle">Our Solutions</h4>
          </div>
          <h3 className={`${styles.subTitle} mb-5`}>
            GPCO Consulting Services
          </h3>
          <ServicesItems />
        </div>
      </div>
      <Experience />
      <Statistics />
      <Products />
      <div className={`${styles.partners} px-3 py-5`}>
        <div className="container-lg">
          <h2 className="fw-bold text-capitalize">Our Partners</h2>
          <div className={`${styles.clientsGroup}`}>
            {clientImages.map((image, index) => (
              <picture key={index}>
                <img src={image} width={"150px"} alt={`Company ${index + 1}`} />
              </picture>
            ))}
          </div>
        </div>
      </div>
      <Testmonials />
      <div className={`${styles.servingWrapper} py-4`}>
        <div
          className={`${styles.shape}`}
          style={
            i18n.language === "ar"
              ? { left: 0, transform: "rotateY(135deg)" }
              : { right: 0, transform: "rotateY(45deg)" }
          }
        >
          <picture>
            <img src={shape} alt="" />
          </picture>
        </div>
        <div className="container-lg">
          <div
            className={`${styles.servingBody} py-5 justify-content-between row`}
          >
            <div className="col-md-6 d-flex justify-content-center z-1 order-md-1 order-2 mt-5 mt-md-0">
              <div
                className={`${styles.form} col-12 col-sm-9 col-md-12 col-xl-10 p-5`}
              >
                <div className="sectionTitle mb-3">
                  <div className="preIconBlue">
                    <span></span>
                    <span></span>
                  </div>
                  <h4 className="mainColorTitle">Get In Touch</h4>
                </div>
                <h2 className="mb-4 fw-bold">Free Consultation</h2>
                <form action="">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Subject"
                  />
                  <input
                    type="submit"
                    className="btn py-2 px-3 burgundyButton form-control"
                    value="Free Consulting"
                  />
                </form>
              </div>
            </div>
            <div className="col-md-6 z-1 order-md-2 order-1">
              <div className={`${styles.content}`}>
                <h3 className={`${styles.title} mb-2`}>We Serving 30% Of</h3>
                <h3 className={`${styles.title} mb-4`}>Global 600 Companies</h3>
                <p className={`${styles.description} mb-5`}>
                  We work diligently to provide multiple health insurance
                  services with the highest level of quality.
                </p>
                <div className={`${styles.clientsSatisfication}`}>
                  <div className={`${styles.text}`}>
                    <h4 className="mb-1 text-capitalize">
                      client satisfaction
                    </h4>
                    <h4 className="mb-1 text-capitalize">in the globaly</h4>
                  </div>
                  <picture className={`${styles.image}`}>
                    <img src={users} alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
