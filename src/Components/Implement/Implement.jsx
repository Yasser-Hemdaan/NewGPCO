// import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// css
import styles from "./Implement.module.css";

// images
import shape from "../../assets/images/pages/home/serving/Shape.png";

const Implement = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <div className={`${styles.implementWrapper} p-5`}>
        <div
          className={`${styles.shape}`}
          style={
            i18n.language === "ar"
              ? { left: "10%", transform: "rotateY(115deg)" }
              : { right: "10%", transform: "rotateY(65deg)" }
          }
        >
          <picture>
            <img src={shape} alt="" />
          </picture>
        </div>
        <div className="container-lg">
          <div className={`${styles.implementBody}`}>
            <h3>implement solutions & achieve goals.</h3>
            <NavLink to={""} className={"py-2 px-3 btn"}>
              Discover More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implement;
