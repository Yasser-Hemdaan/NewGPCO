// import React from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

// images
import logo from "../../assets/images/components/footer/logo.png";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${styles.footerWrapper} pt-4 text-white`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container-lg">
        <div className={styles.footerBody}>
          <div className="container-lg">
            <div className={`${styles.upper} row gy-4 py-4`}>
              <div className="col-sm-6 col-lg-3">
                <div className={`${styles.logo} mb-4`}>
                  <picture>
                    <img src={logo} alt="" />
                  </picture>
                </div>
                <p className={`${styles.description} mb-4`}>
                  {t("footer.about")}
                </p>
                <div className={`${styles.platforms}`}>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 order-lg-4">
                <h4 className={`${styles.columnTitle} mb-3`}>
                  {t("footer.getInTouch.title")}
                </h4>
                <form className={`${styles.form}`}>
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
                    className=" whiteButton w-100 border-0 fw-bold py-2"
                    value={t("footer.getInTouch.send")}
                  />
                </form>
              </div>
              <div className="col-sm-6 col-lg-2">
                <h4 className={`${styles.columnTitle} mb-3`}>
                  {t("footer.quickLinks.title")}
                </h4>
                <ul className={`${styles.links}`}>
                  <li>
                    <NavLink to="/">{t("footer.quickLinks.home")}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      {t("footer.quickLinks.about")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">
                      {t("footer.quickLinks.services")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">
                      {t("footer.quickLinks.solution")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs">
                      {t("footer.quickLinks.blogs")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">
                      {t("footer.quickLinks.contact")}
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-4">
                <h4 className={`${styles.columnTitle} mb-3`}>
                  {t("footer.contact.title")}
                </h4>
                <ul className={`${styles.contacts}`}>
                  <li className={`${styles.item}`}>
                    <div className={`${styles.icon}`}>
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className={`${styles.text}`}>
                      <p className="m-0">+966 11 292 55 99 </p>
                      <p className="m-0">+966 11 292 55 88</p>
                    </div>
                  </li>
                  <li className={`${styles.item}`}>
                    <div className={`${styles.icon}`}>
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className={`${styles.text}`}>
                      <p className="m-0">info@gpco.com.sa</p>
                    </div>
                  </li>
                  <li className={`${styles.item}`}>
                    <div className={`${styles.icon}`}>
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className={`${styles.text}`}>
                      <p className={`${styles.location} m-0`}>
                        {t("footer.contact.location")}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.lower} py-3`}>
              <p className="mb-0">{t("footer.lower")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
