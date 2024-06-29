/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import { useTranslation } from "react-i18next";
import { Accordion } from "react-bootstrap";
import { useState } from "react";

// css
import styles from "./RiskManagement.module.css";

// images
import mainImage from "../../../assets/images/pages/services/RiskManagement.png";

// files
import profile from "../../../../public/Profile.pdf";

// Components
import Consultation from "../../../Components/Consultation/Consultation";
import { NavLink } from "react-router-dom";

const RiskManagement = () => {
  const { i18n } = useTranslation();
  const [activeKey, setActiveKey] = useState("0");
  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? "" : key);
  };
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
            <span>services</span>
          </div>
          <h2 className={`${styles.mainTitle}`}>Risk Management</h2>
        </div>
      </div>
      <div
        className={`${styles.singleServiceBody} row container-lg mx-auto my-5 g-5`}
      >
        <div className={`${styles.mainBlock} mt-0 col-xl-9`}>
          <div className={`${styles.image} w-100 mx-auto`}>
            <picture>
              <img src={mainImage} alt="" className="w-100" />
            </picture>
          </div>
          <div className={`${styles.content} mb-5`}>
            <div className={`${styles.subBlock} my-5`}>
              <h3 className={`${styles.title} mb-4`}>Risk Management</h3>
              <p className="mb-3">
                GPCO includes the processes of analyzing and evaluating
                potential risks that may impact business operations and
                insurance activities. The aim of risk management is to identify
                and assess potential risks, develop strategies to deal with
                them, and reduce their negative impact on the company
              </p>
              <ul className={`${styles.mainList} pb-4`}>
                <li className={`${styles.listItem} mb-2`}>
                  <i className="fa-solid fa-check"></i>
                  <span>
                    It’s essential to work with business consultants who have
                  </span>
                </li>
                <li className={`${styles.listItem} mb-2`}>
                  <i className="fa-solid fa-check"></i>
                  <span>
                    Business consultants may charge by the project or hour, or
                    you may need to pay daily or monthly retainers.
                  </span>
                </li>
                <li className={`${styles.listItem} mb-2`}>
                  <i className="fa-solid fa-check"></i>
                  <span>Meet with the board of directors and employees.</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.subBlock} my-5`}>
              <h3 className={`${styles.title} mb-4`}>Working challenge</h3>
              <p className="mb-3">
                GPCO includes the processes of analyzing and evaluating
                potential risks that may impact business operations and
                insurance activities. The aim of risk management is to identify
                and assess potential risks, develop strategies to deal with
                them, and reduce their negative impact on the company
              </p>
              <ul className={`${styles.mainList} pb-4 row`}>
                <div className="col-md-6">
                  <li className={`${styles.listItem} mb-2`}>
                    <i className="fa-solid fa-check"></i>
                    <span>Accounting consulting.</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li className={`${styles.listItem} mb-2`}>
                    <i className="fa-solid fa-check"></i>
                    <span>Read all company materials</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li className={`${styles.listItem} mb-2`}>
                    <i className="fa-solid fa-check"></i>
                    <span>Financial consultants</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li className={`${styles.listItem} mb-2`}>
                    <i className="fa-solid fa-check"></i>
                    <span>Marketing consultants.</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li className={`${styles.listItem} mb-2`}>
                    <i className="fa-solid fa-check"></i>
                    <span>Operations consultants</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li className={`${styles.listItem} mb-2`}>
                    <i className="fa-solid fa-check"></i>
                    <span>Implementation</span>
                  </li>
                </div>
              </ul>
            </div>
            <div className={`${styles.faq}`}>
              <h3 className={`${styles.title} mb-4`}>
                frequently asked questions
              </h3>
              <Accordion className="mb-4" activeKey={activeKey} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    onClick={() => handleToggle("0")}
                    className={`accordionTitle ${
                      activeKey === "0" ? "active" : ""
                    }`}
                  >
                    <span>
                      <i className="fa-regular fa-circle-question me-2"></i>
                      How do you manage consulting effectively?
                    </span>
                    <i
                      className={`fa-solid ${
                        activeKey === "0" ? "fa-circle-up" : "fa-circle-down"
                      }`}
                    ></i>
                  </Accordion.Header>
                  <Accordion.Body className={`accordionDescription`}>
                    Manages the image of the agency and clients by ensuring
                    consistency, internally and externally, of messages and
                    procedures, as well as intervening for clients in sensitive
                    circumstances.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header
                    onClick={() => handleToggle("1")}
                    className={`accordionTitle ${
                      activeKey === "1" ? "active" : ""
                    }`}
                  >
                    <span>
                      <i className="fa-regular fa-circle-question me-2"></i>
                      How do consultants solve problems?
                    </span>
                    <i
                      className={`fa-solid ${
                        activeKey === "1" ? "fa-circle-up" : "fa-circle-down"
                      }`}
                    ></i>
                  </Accordion.Header>
                  <Accordion.Body className={`accordionDescription`}>
                    Manages the image of the agency and clients by ensuring
                    consistency, internally and externally, of messages and
                    procedures, as well as intervening for clients in sensitive
                    circumstances.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={() => handleToggle("2")}
                    className={`accordionTitle ${
                      activeKey === "2" ? "active" : ""
                    }`}
                  >
                    <span>
                      <i className="fa-regular fa-circle-question me-2"></i>
                      What is required of a consultant?
                    </span>
                    <i
                      className={`fa-solid ${
                        activeKey === "2" ? "fa-circle-up" : "fa-circle-down"
                      }`}
                    ></i>
                  </Accordion.Header>
                  <Accordion.Body className={`accordionDescription`}>
                    Manages the image of the agency and clients by ensuring
                    consistency, internally and externally, of messages and
                    procedures, as well as intervening for clients in sensitive
                    circumstances.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className={`${styles.aside} row g-3 mt-0 col-xl-3`}>
          <div className="col-md-6 col-xl-12 mt-0">
            <div className={`${styles.products} py-4 px-4`}>
              <h4 className={`${styles.title} mb-4`}>Our products</h4>
              <ul className={`${styles.list}`}>
                <li className={`${styles.item} p-2`}>
                  <NavLink>Insurance Property</NavLink>
                </li>
                <li className={`${styles.item} p-2`}>
                  <NavLink>Insurance Motor</NavLink>
                </li>
                <li className={`${styles.item} p-2`}>
                  <NavLink>Insurance Life</NavLink>
                </li>
                <li className={`${styles.item} p-2`}>
                  <NavLink>Insurance Property</NavLink>
                </li>
                <li className={`${styles.item} p-2`}>
                  <NavLink>Insurance Liability Public</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xl-12 mt-xl-3 mt-lg-0">
            <div className={`${styles.download} py-4 px-4`}>
              <h4 className={`${styles.title} mb-4`}>download</h4>
              <div className={`${styles.link} py-3 px-3`}>
                <i className="fa-regular fa-file-pdf me-2"></i>
                <span className="ps-3">GPCO profile</span>
                <a
                  href={profile}
                  download="Company Profile"
                  target="_blank"
                  rel="noreferrer"
                  title="GPCO profile"
                >
                  <i className="fa-solid fa-download"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="d-xl-block d-none">
            <div className={`${styles.help} p-4`}>
              <div className={`${styles.back}`}></div>
              <div className={`${styles.content} p-4`}>
                <h4 className="mb-3">We’re Always ready for help You</h4>
                <NavLink className={`btn mx-auto py-2 px-4 burgundyButton`}>
                  Need Help
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Consultation />
    </div>
  );
};

export default RiskManagement;
