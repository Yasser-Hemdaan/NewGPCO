// import React from "react";

import { useTranslation } from "react-i18next";

// css
import styles from "./Products.module.css";

// images
import image from "../../assets/images/pages/products/image.png";

// components
import Consultation from "./../../Components/Consultation/Consultation";
import { NavLink } from "react-router-dom";

const Products = () => {
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
            <span>products</span>
          </div>
          <h2 className={`${styles.mainTitle}`}>products</h2>
        </div>
      </div>
      <div className={`${styles.products} px-3 py-5 mb-5`}>
        <div className="container-lg">
          <div className="sectionTitle mb-2">
            <div className="preIconBlue">
              <span></span>
              <span></span>
            </div>
            <h4 className="mainColorTitle">Our products</h4>
          </div>
          <h3 className={`${styles.subTitle} mb-5`}>
            products and consulting at GPCO
          </h3>
          <div className={`${styles.productsItemsWrapper} g-5 row`}>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.item}  py-5 px-4`}>
                <picture className={`${styles.image}`}>
                  <img src={image} className="w-100 mb-5" alt="" />
                </picture>
                <h3 className="text-center">Health Insurance</h3>
                <div className={`${styles.itemBodyHidden} p-4`}>
                  <picture className={`${styles.image}`}>
                    <img src={image} className="w-100 mb-4" alt="" />
                  </picture>
                  <h4 className={`${styles.title}`}>Health Insurance</h4>
                  <div className={`${styles.link}`}>
                    <NavLink
                      to="/products/LiabilityPublicInsurance"
                      className={``}
                    >
                      <span>GPCO Product</span>
                      <i
                        className={
                          i18n.language === "ar"
                            ? "fa-solid fa-arrow-left-long"
                            : "fa-solid fa-arrow-right-long"
                        }
                      ></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.item}  py-5 px-4`}>
                <picture className={`${styles.image}`}>
                  <img src={image} className="w-100 mb-5" alt="" />
                </picture>
                <h3 className="text-center">Health Insurance</h3>
                <div className={`${styles.itemBodyHidden} p-4`}>
                  <picture className={`${styles.image}`}>
                    <img src={image} className="w-100 mb-4" alt="" />
                  </picture>
                  <h4 className={`${styles.title}`}>Health Insurance</h4>
                  <div className={`${styles.link}`}>
                    <NavLink
                      to="/products/LiabilityPublicInsurance"
                      className={``}
                    >
                      <span>GPCO Product</span>
                      <i
                        className={
                          i18n.language === "ar"
                            ? "fa-solid fa-arrow-left-long"
                            : "fa-solid fa-arrow-right-long"
                        }
                      ></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.item}  py-5 px-4`}>
                <picture className={`${styles.image}`}>
                  <img src={image} className="w-100 mb-5" alt="" />
                </picture>
                <h3 className="text-center">Health Insurance</h3>
                <div className={`${styles.itemBodyHidden} p-4`}>
                  <picture className={`${styles.image}`}>
                    <img src={image} className="w-100 mb-4" alt="" />
                  </picture>
                  <h4 className={`${styles.title}`}>Health Insurance</h4>
                  <div className={`${styles.link}`}>
                    <NavLink
                      to="/products/LiabilityPublicInsurance"
                      className={``}
                    >
                      <span>GPCO Product</span>
                      <i
                        className={
                          i18n.language === "ar"
                            ? "fa-solid fa-arrow-left-long"
                            : "fa-solid fa-arrow-right-long"
                        }
                      ></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.item}  py-5 px-4`}>
                <picture className={`${styles.image}`}>
                  <img src={image} className="w-100 mb-5" alt="" />
                </picture>
                <h3 className="text-center">Health Insurance</h3>
                <div className={`${styles.itemBodyHidden} p-4`}>
                  <picture className={`${styles.image}`}>
                    <img src={image} className="w-100 mb-4" alt="" />
                  </picture>
                  <h4 className={`${styles.title}`}>Health Insurance</h4>
                  <div className={`${styles.link}`}>
                    <NavLink
                      to="/products/LiabilityPublicInsurance"
                      className={``}
                    >
                      <span>GPCO Product</span>
                      <i
                        className={
                          i18n.language === "ar"
                            ? "fa-solid fa-arrow-left-long"
                            : "fa-solid fa-arrow-right-long"
                        }
                      ></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.item}  py-5 px-4`}>
                <picture className={`${styles.image}`}>
                  <img src={image} className="w-100 mb-5" alt="" />
                </picture>
                <h3 className="text-center">Health Insurance</h3>
                <div className={`${styles.itemBodyHidden} p-4`}>
                  <picture className={`${styles.image}`}>
                    <img src={image} className="w-100 mb-4" alt="" />
                  </picture>
                  <h4 className={`${styles.title}`}>Health Insurance</h4>
                  <div className={`${styles.link}`}>
                    <NavLink
                      to="/products/LiabilityPublicInsurance"
                      className={``}
                    >
                      <span>GPCO Product</span>
                      <i
                        className={
                          i18n.language === "ar"
                            ? "fa-solid fa-arrow-left-long"
                            : "fa-solid fa-arrow-right-long"
                        }
                      ></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.item}  py-5 px-4`}>
                <picture className={`${styles.image}`}>
                  <img src={image} className="w-100 mb-5" alt="" />
                </picture>
                <h3 className="text-center">Health Insurance</h3>
                <div className={`${styles.itemBodyHidden} p-4`}>
                  <picture className={`${styles.image}`}>
                    <img src={image} className="w-100 mb-4" alt="" />
                  </picture>
                  <h4 className={`${styles.title}`}>Health Insurance</h4>
                  <div className={`${styles.link}`}>
                    <NavLink
                      to="/products/LiabilityPublicInsurance"
                      className={``}
                    >
                      <span>GPCO Product</span>
                      <i
                        className={
                          i18n.language === "ar"
                            ? "fa-solid fa-arrow-left-long"
                            : "fa-solid fa-arrow-right-long"
                        }
                      ></i>
                    </NavLink>
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

export default Products;
