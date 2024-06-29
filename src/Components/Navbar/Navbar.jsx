// import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// images
import logo from "../../assets/images/components/navbar/logo.png";

const Navbar = () => {
  // Initializations
  const [menuActive, setMenuActive] = useState(false);
  const { t, i18n } = useTranslation();

  // Functions
  const switchLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    handleMenuClick();
  };

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };
  return (
    <div>
      <div
        className="navbarWrapper py-4"
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
        <div className="container-lg">
          <div className="navbarBody">
            <div className="logo">
              <NavLink to="/">
                <picture>
                  <img src={logo} alt="" />
                </picture>
              </NavLink>
            </div>
            <div className={`navList ${menuActive ? "active" : ""}`}>
              <ul className="mainList m-0 p-0">
                <li>
                  <NavLink onClick={handleMenuClick} to={"/"}>
                    {t("navbar.home")}
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenuClick} to={"/about"}>
                    {t("navbar.about")}
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenuClick} to={"/services"}>
                    {t("navbar.services")}
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenuClick} to={"/products"}>
                    {t("navbar.products")}
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenuClick} to={"/blogs"}>
                    {t("navbar.blogs")}
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenuClick} to={"/contact"}>
                    {t("navbar.contact")}
                  </NavLink>
                </li>
              </ul>
              <div className="switchLanguage">
                <NavLink onClick={switchLanguage}>
                  {t("navbar.language")}
                </NavLink>
              </div>
              <ul className="sciList m-0 mt-2 p-0">
                <li>
                  <a href="" target="blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="blank">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="blank">
                    <i className="fa-brands fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="burger">
              <label className="container">
                <input
                  id="checkbox"
                  onChange={handleMenuClick}
                  type="checkbox"
                  checked={menuActive}
                />
                <div className="checkmark">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
