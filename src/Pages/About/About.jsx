/* eslint-disable react/no-unescaped-entities */
// import React from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// css
import styles from "./About.module.css";

// images
import CEO from "../../assets/images/pages/home/skilledTeam/CEO.png";
import backSkilledTeam from "../../assets/images/pages/home/skilledTeam/skilledTeamBackground.png";
import people from "../../assets/images/pages/about/peaple.png";
import CompanyOpening from "../../assets/images/pages/about/CompanyOpening.png";
import Branch from "../../assets/images/pages/about/Branch.png";
import InsuranceAuthoritylicense from "../../assets/images/pages/about/InsuranceAuthoritylicense.png";
import Vision2030 from "../../assets/images/pages/about/Vision2030.png";

// components
import Implement from "../../Components/Implement/Implement";
import Experience from "../../Components/Experience/Experience";
import Statistics from "../../Components/Statistics/Statistics";
import Consultation from "../../Components/Consultation/Consultation";

const About = () => {
  const { i18n } = useTranslation();
  return (
    <div dir={i18n.language === "en" ? "ltr" : "rtl"}>
      <div className={`${styles.hero}`}>
        <div
          className={`${styles.shape}`}
          style={
            i18n.language === "ar"
              ? { left: "-10vw", transform: "rotate(150deg)" }
              : { right: "-10vw", transform: "rotate(-150deg)" }
          }
        >
          <picture>
            <img src="" alt="" />
          </picture>
        </div>
        <div className={`${styles.content} container-lg`}>
          <div className={`${styles.path}`}>
            <span>home</span>
            <span>|</span>
            <span>about us</span>
          </div>
          <h2 className={`${styles.mainTitle}`}>About US</h2>
        </div>
      </div>
      <div className={`${styles.skilledTeam} px-3 mt-0 py-5`}>
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
            </div>
            <div className={`${styles.content}`}>
              <p className={`${styles.title}`}>Message from Chairman</p>
              <p className={`${styles.description}`}>
                Since 2013, when Grand Policy Insurance Company (GPCO) was
                established. Our goal has been and continues to be to provide
                real value to our customers.
              </p>
              <p className={`${styles.description}`}>
                As a pioneering company, we have always been committed to
                providing outstanding insurance services that meet the needs of
                our esteemed clients. We have developed innovative strategies
                that positively impact the experience of beneficiaries.
              </p>
              <p className={`${styles.description}`}>
                Our proactive vision and commitment to quality reflect the
                strength of the excellence we have achieved. In this context, we
                have diligently sought to employ the latest technologies and
                innovations in the field of insurance, enabling us to deliver
                effective and valuable services to our customers.
              </p>
              <div className={`${styles.data}`}>
                <p className={`${styles.jobTitle} mb-0`}>
                  chief executive officer
                </p>
                <p className={`${styles.name} mb-0`}>Mr. Nawaf Al-Abdullatif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.Who} px-3 mt-0 py-5`}>
        <div className="container-lg">
          <div className="sectionTitle mb-4">
            <div className="preIconBlue">
              <span></span>
              <span></span>
            </div>
            <h4 className="mainColorTitle">Who We are</h4>
          </div>

          <div className={`${styles.whoBody}`}>
            <div className={`${styles.content} order-2 order-xl-1`}>
              <h2 className={`${styles.subTitle} mb-4`}>
                Grand Policy Co Insurance Brokerage (GPCO)
              </h2>
              <p className={`${styles.description} mb-4`}>
                Since 2013, "Comprehensive Insurance Document" (GPCO) has
                emerged as a leading company in the field of insurance
                brokerage. The company takes pride in obtaining a license from
                the Insurance Authority with the number 20136/67, confirming its
                commitment to the highest standards of credibility and
                professionalism.
              </p>
              <div
                className={`${styles.data} row col-xl-10 col-lg-12 col-md-8 mb-4`}
              >
                <div className="col-6 ">
                  <div className={`${styles.numberData}`}>
                    <p>152K</p>
                    <div className={`${styles.text}`}>
                      <p>Project Complated</p>
                      <p>Last 5 Years</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={`${styles.numberData}`}>
                    <p>148k</p>
                    <div className={`${styles.text}`}>
                      <p>happy customar</p>
                      <p>worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.link} link`}>
                <NavLink className={`btn py-2 px-3 whiteButton`}>
                  Get Consulting
                </NavLink>
              </div>
            </div>
            <div className={`${styles.image} order-1 order-xl-2`}>
              <picture>
                <img src={people} className="w-100" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <Implement />
      <Experience />
      <Statistics />
      <div className={`${styles.about} px-3 mt-0 mb-5 py-5`}>
        <div className="container-lg">
          <div className={`${styles.sectionTitle} sectionTitle mb-4`}>
            <div className="preIconBlue">
              <span></span>
              <span></span>
            </div>
            <h4 className="mainColorTitle">About GPCO</h4>
          </div>

          <div className={`${styles.aboutBody}`}>
            <div className={`${styles.content} order-2 order-xl-1`}>
              <h2 className={`${styles.subTitle} mb-5`}>you need to know</h2>
              <div className={`${styles.itemsWrapper} g-5 row`}>
                <div className="col-lg-4 col-md-6">
                  <div className={`${styles.item}`}>
                    <picture className={`${styles.images} `}>
                      <img src={CompanyOpening} className="p-2 mb-5" alt="" />
                    </picture>
                    <div className={`${styles.text} px-5 py-3 `}>
                      <div
                        className={`${styles.arrow}`}
                        style={
                          i18n.language === "ar"
                            ? {
                                borderInlineEndWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                            : {
                                borderInlineStartWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                        }
                      ></div>
                      <h5
                        className={`${styles.title} ${
                          i18n.language === "ar" ? "text-end" : "text-start"
                        } py-2 px-3 mt-2 mb-3`}
                      >
                        <div
                          className={`${styles.triangle}`}
                          style={
                            i18n.language === "ar"
                              ? { left: "-25px" }
                              : { right: "-25px" }
                          }
                        ></div>
                        Company Opening
                      </h5>
                      <p className={`${styles.description} mb-0`}>
                        GPCO was officially launched in 2013 as a leading
                        insurance brokerage company.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className={`${styles.item}`}>
                    <picture className={`${styles.images}`}>
                      <img src={Branch} className="p-2 mb-5" alt="" />
                    </picture>
                    <div className={`${styles.text} px-5 py-3 `}>
                      <div
                        className={`${styles.arrow}`}
                        style={
                          i18n.language === "ar"
                            ? {
                                borderInlineEndWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                            : {
                                borderInlineStartWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                        }
                      ></div>
                      <h5
                        className={`${styles.title} ${
                          i18n.language === "ar" ? "text-end" : "text-start"
                        } py-2 px-3 mt-2 mb-3`}
                      >
                        <div
                          className={`${styles.triangle}`}
                          style={
                            i18n.language === "ar"
                              ? { left: "-25px" }
                              : { right: "-25px" }
                          }
                        ></div>
                        Company Opening
                      </h5>
                      <p className={`${styles.description} mb-0`}>
                        GPCO was officially launched in 2013 as a leading
                        insurance brokerage company.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className={`${styles.item}`}>
                    <picture className={`${styles.images}`}>
                      <img src={Branch} className="p-2 mb-5" alt="" />
                    </picture>
                    <div className={`${styles.text} px-5 py-3 `}>
                      <div
                        className={`${styles.arrow}`}
                        style={
                          i18n.language === "ar"
                            ? {
                                borderInlineEndWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                            : {
                                borderInlineStartWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                        }
                      ></div>
                      <h5
                        className={`${styles.title} ${
                          i18n.language === "ar" ? "text-end" : "text-start"
                        } py-2 px-3 mt-2 mb-3`}
                      >
                        <div
                          className={`${styles.triangle}`}
                          style={
                            i18n.language === "ar"
                              ? { left: "-25px" }
                              : { right: "-25px" }
                          }
                        ></div>
                        Company Opening
                      </h5>
                      <p className={`${styles.description} mb-0`}>
                        GPCO was officially launched in 2013 as a leading
                        insurance brokerage company.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className={`${styles.item}`}>
                    <picture className={`${styles.images}`}>
                      <img
                        src={InsuranceAuthoritylicense}
                        className="p-2 mb-5"
                        alt=""
                      />
                    </picture>
                    <div className={`${styles.text} px-5 py-3 `}>
                      <div
                        className={`${styles.arrow}`}
                        style={
                          i18n.language === "ar"
                            ? {
                                borderInlineEndWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                            : {
                                borderInlineStartWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                        }
                      ></div>
                      <h5
                        className={`${styles.title} ${
                          i18n.language === "ar" ? "text-end" : "text-start"
                        } py-2 px-3 mt-2 mb-3`}
                      >
                        <div
                          className={`${styles.triangle}`}
                          style={
                            i18n.language === "ar"
                              ? { left: "-25px" }
                              : { right: "-25px" }
                          }
                        ></div>
                        Company Opening
                      </h5>
                      <p className={`${styles.description} mb-0`}>
                        GPCO was officially launched in 2013 as a leading
                        insurance brokerage company.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className={`${styles.item}`}>
                    <picture className={`${styles.images}`}>
                      <img src={Vision2030} className="p-2 mb-5" alt="" />
                    </picture>
                    <div className={`${styles.text} px-5 py-3 `}>
                      <div
                        className={`${styles.arrow}`}
                        style={
                          i18n.language === "ar"
                            ? {
                                borderInlineEndWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                            : {
                                borderInlineStartWidth: "0.5px",
                                borderBlockStartWidth: "0.5px",
                              }
                        }
                      ></div>
                      <h5
                        className={`${styles.title} ${
                          i18n.language === "ar" ? "text-end" : "text-start"
                        } py-2 px-3 mt-2 mb-3`}
                      >
                        <div
                          className={`${styles.triangle}`}
                          style={
                            i18n.language === "ar"
                              ? { left: "-25px" }
                              : { right: "-25px" }
                          }
                        ></div>
                        Company Opening
                      </h5>
                      <p className={`${styles.description} mb-0`}>
                        GPCO was officially launched in 2013 as a leading
                        insurance brokerage company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Consultation />
    </div>
  );
};

export default About;
