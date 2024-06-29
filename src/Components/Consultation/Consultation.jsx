// import React from "react";

// css
import styles from "./Consultation.module.css";

import { NavLink } from "react-router-dom";

const Consultation = () => {
  return (
    <div>
      <div className={`${styles.consultationWrapper} mx-auto `}>
        <div className="container-lg">
          <div className={`${styles.consultationBody} p-5`}>
            <h2 className={`${styles.title}`}>Free Consultation</h2>
            <NavLink className={`btn mx-auto py-2 px-4 burgundyButton`}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
