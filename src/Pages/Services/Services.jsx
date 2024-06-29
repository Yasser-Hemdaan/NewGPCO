// import React from "react";

import { useTranslation } from "react-i18next";

// css
import styles from "./Services.module.css";

// images

// components
import ServicesItems from "../../Components/ServicesItems/ServicesItems";
import Implement from "../../Components/Implement/Implement";
import Products from "../../Components/Products/Products";
import Testmonials from "../../Components/Testmonials/Testmonials";
import Consultation from "../../Components/Consultation/Consultation";

const Services = () => {
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
            <span>services</span>
          </div>
          <h2 className={`${styles.mainTitle}`}>services</h2>
        </div>
      </div>
      <div className={`${styles.services} px-3 py-5`}>
        <div className="container-lg">
          <div className="sectionTitle mb-2">
            <div className="preIconBurgundy">
              <span></span>
              <span></span>
            </div>
            <h4 className="mainColorTitle">Our Solutions</h4>
          </div>
          <h3 className={`${styles.subTitle} mb-5`}>
            GPCO Consulting Services
          </h3>
          <ServicesItems />
        </div>
      </div>
      <Implement />
      <Products />
      <Testmonials />
      <Consultation />
    </div>
  );
};

export default Services;
