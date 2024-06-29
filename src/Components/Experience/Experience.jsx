import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap/";
import { NavLink } from "react-router-dom";

const Experience = () => {
  const [activeKey, setActiveKey] = useState("0");
  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? "" : key);
  };

  return (
    <div className={`experience px-3 py-5`}>
      <div className="container-lg">
        <div className="sectionTitle mb-2">
          <div className="preIconBlue">
            <span></span>
            <span></span>
          </div>
          <h4 className="mainColorTitle">New Experience</h4>
        </div>
        <h3 className={`subTitle mb-5`}>
          Our mission is to provide insurance and risk management services
        </h3>
        <p className={`description mb-5`}>
          We aim to simplify and facilitate Prudently managing risks and
          providing innovative insurance solutions that meet the needs of Their
          financing, consolidation and prosperity.
        </p>
        <Accordion className="mb-4" activeKey={activeKey} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header
              onClick={() => handleToggle("0")}
              className={`accordionTitle ${activeKey === "0" ? "active" : ""}`}
            >
              Our Mission
              <i
                className={`fa-solid ${
                  activeKey === "0" ? "fa-circle-up" : "fa-circle-down"
                }`}
              ></i>
            </Accordion.Header>
            <Accordion.Body className={`accordionDescription`}>
              We are dedicated to providing insurance services and risk
              management at the highest level of quality and professionalism. We
              aim to simplify and facilitate risk management processes, offering
              innovative insurance solutions that meet the needs of our clients
              and enhance their stability and prosperity.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header
              onClick={() => handleToggle("1")}
              className={`accordionTitle ${activeKey === "1" ? "active" : ""}`}
            >
              Our Vision
              <i
                className={`fa-solid ${
                  activeKey === "1" ? "fa-circle-up" : "fa-circle-down"
                }`}
              ></i>
            </Accordion.Header>
            <Accordion.Body className={`accordionDescription`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header
              onClick={() => handleToggle("2")}
              className={`accordionTitle ${activeKey === "2" ? "active" : ""}`}
            >
              Our Value
              <i
                className={`fa-solid ${
                  activeKey === "2" ? "fa-circle-up" : "fa-circle-down"
                }`}
              ></i>
            </Accordion.Header>
            <Accordion.Body className={`accordionDescription`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="link">
          <NavLink className={`btn py-2 px-3 whiteButton`}>
            Get Consulting
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Experience;
