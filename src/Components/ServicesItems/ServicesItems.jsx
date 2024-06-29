// import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

// images
import BrokerageInsurance from "../../assets/images/components/services/BrokerageInsurance.png";
import BrokerageInsurancewhite from "../../assets/images/components/services/BrokerageInsurancewhite.png";
import RiskManagement from "../../assets/images/components/services/RiskManagement.png";
import RiskManagementwhite from "../../assets/images/components/services/RiskManagementwhite.png";
import Claimsmanagement from "../../assets/images/components/services/Claimsmanagement.png";
import Claimsmanagementwhite from "../../assets/images/components/services/Claimsmanagementwhite.png";

const ServicesItems = () => {
  const { i18n } = useTranslation();
  return (
    <div className="services">
      <div className={`items row g-4 justify-content-center`}>
        <div className={`col-lg-4 col-md-6 item`}>
          <div className={`itemBody rounded rounded-4 px-4 py-5`}>
            <div
              className={`circle`}
              style={
                i18n.language === "en" ? { right: "-5%" } : { left: "-5%" }
              }
            ></div>
            <div className={`icon mb-3`}>
              <picture>
                <img src={BrokerageInsurance} alt="" />
                <img src={BrokerageInsurancewhite} alt="" />
              </picture>
            </div>
            <div className={`title`}>
              <h3>Brokerage Insurance</h3>
            </div>
            <div className={`description`}>
              <p>
                Business insurance protects your interests and ensure that
                everything will continue to work, even if there is a unexpected.
              </p>
            </div>
            <NavLink to={"/services/RiskManagement"}>read more</NavLink>
          </div>
        </div>
        <div className={`col-lg-4 col-md-6 item`}>
          <div className={`itemBody rounded rounded-4 px-4 py-5`}>
            <div
              className={`circle`}
              style={
                i18n.language === "en" ? { right: "-5%" } : { left: "-5%" }
              }
            ></div>
            <div className={`icon mb-3`}>
              <picture>
                <img src={RiskManagement} alt="" />
                <img src={RiskManagementwhite} alt="" />
              </picture>
            </div>
            <div className={`title`}>
              <h3>Risk Management</h3>
            </div>
            <div className={`description`}>
              <p>
                We focus on comprehensively supporting and advising companies on
                issues related to Security and Health at Work.
              </p>
            </div>
            <NavLink to={"/services/RiskManagement"}>read more</NavLink>
          </div>
        </div>
        <div className={`col-lg-4 col-md-6 item`}>
          <div className={`itemBody rounded rounded-4 px-4 py-5`}>
            <div
              className={`circle`}
              style={
                i18n.language === "en" ? { right: "-5%" } : { left: "-5%" }
              }
            ></div>
            <div className={`icon mb-3`}>
              <picture>
                <img src={Claimsmanagement} alt="" />
                <img src={Claimsmanagementwhite} alt="" />
              </picture>
            </div>
            <div className={`title`}>
              <h3>Claims management</h3>
            </div>
            <div className={`description`}>
              <p>
                We offer you an accompaniment permanent in the claim process.
              </p>
            </div>
            <NavLink to={"/services/RiskManagement"}>read more</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItems;
