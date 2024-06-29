// import React from "react";

// import React from 'react'
// import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// css
import styles from "./Contact.module.css";

// images
import map from "../../assets/images/pages/contact/map.png";

const Contact = () => {
  const { t, i18n } = useTranslation();
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
            <span>Contact</span>
          </div>
          <h2 className={`${styles.mainTitle}`}>Contact</h2>
        </div>
      </div>
      <div className={`${styles.contactWrapper} my-5`}>
        <div className="container-lg">
          <div className={`${styles.contactBody} row g-5`}>
            <div className="col-lg-4">
              <div className={`${styles.form} px-5 py-5`}>
                <h3 className={`${styles.title} mb-3`}>conatct us</h3>
                <form>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={name}
                    placeholder={t("footer.getInTouch.name")}
                    className="form-control bg-transparent mb-3 text-white"
                    autoComplete="off"
                    // onChange={(e) => setName(e.target.value)}
                    pattern="^([a-zA-Z]{3,}\s?)+$"
                    title="Please enter a valid name (more than 3 letters) (only letters)"
                    required
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    value={""}
                    placeholder={t("footer.getInTouch.email")}
                    className="form-control bg-transparent mb-3 text-white"
                    autoComplete="off"
                    // onChange={(e) => setEmail(e.target.value)}
                    pattern="^(\w{3,}[.-])@([a-z]{3,})((\.[a-z]{2,})+)$"
                    title="Please enter a valid email address"
                    required
                  />
                  <textarea
                    name=""
                    id=""
                    value={""}
                    cols="30"
                    rows="2"
                    className="form-control bg-transparent mb-3 text-white"
                    placeholder={t("footer.getInTouch.message")}
                    autoComplete="off"
                    // onChange={(e) => setMessage(e.target.value)}
                    minLength={10}
                    maxLength={350}
                    required
                  ></textarea>
                  <input
                    type="submit"
                    className=" burgundyButton w-100 border-0 fw-bold py-2"
                    value={t("footer.getInTouch.send")}
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-7">
              <div className={`${styles.getInTouch}`}>
                <h3 className={`${styles.title} mb-5`}>Get In Touch</h3>
                <div className={`${styles.info}`}>
                  <div className={`${styles.data} row`}>
                    <span className={`${styles.title} col-4 col-md-3`}>
                      Office Address
                    </span>
                    <span className={`${styles.title} col-1`}>:</span>
                    <div
                      className={`${styles.dataDetails} ${styles.locations} row col-md-8 `}
                    >
                      <p className={`col-md-6`}>
                        Al Umam Commercial Center 3rd Floor Unit : 331 Salah Ad
                        Din Al Ayyubi RoadP.O. Box 27663 Riyadh 11427Kingdom of
                        Saudi Arabia{" "}
                      </p>
                      <p className={`col-md-6`}>
                        Amir Mansour Street - Mohammed bin Saud District,
                        Al-Waha Commercial Complex - Unit No. 41
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.data} row`}>
                    <span className={`${styles.title} col-4 col-md-3`}>
                      email Address
                    </span>
                    <span className={`${styles.title} col-1`}>:</span>
                    <div className={`${styles.dataDetails} col-md-8`}>
                      <p>info@gpco.com.sa</p>
                    </div>
                  </div>
                  <div className={`${styles.data} row`}>
                    <span className={`${styles.title} col-4 col-md-3`}>
                      phone Address
                    </span>
                    <span className={`${styles.title} col-1`}>:</span>
                    <div className={`${styles.dataDetails} col-md-8`}>
                      <p>+966 1129 255 99</p>
                      <p>+966 1129 255 88</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.map}`}>
        <picture>
          <img src={map} className="w-100" alt="" />
        </picture>
      </div>
    </div>
  );
};

export default Contact;
