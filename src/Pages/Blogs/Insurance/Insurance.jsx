/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./Insurance.module.css";

// images
import mainImage from "../../../assets/images/pages/blogs/main.png";
import image1 from "../../../assets/images/pages/blogs/image1.png";
import image2 from "../../../assets/images/pages/blogs/image2.png";
import b1 from "../../../assets/images/pages/blogs/b1.png";
import b2 from "../../../assets/images/pages/blogs/b2.png";
import b3 from "../../../assets/images/pages/blogs/b3.png";

// Components
import Consultation from "../../../Components/Consultation/Consultation";
import { NavLink } from "react-router-dom";

const Insurance = () => {
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
            <span>blog</span>
          </div>
          <h2 className={`${styles.mainTitle}`}>Moments that need insurance</h2>
        </div>
      </div>
      <div
        className={`${styles.singleBlogBody} row container-lg mx-auto my-5 g-5`}
      >
        <div className={`${styles.mainBlock} mt-0 col-xl-9`}>
          <div className={`${styles.dateAuther} mb-2`}>
            <div className={`${styles.date} px-2 py-2`}>
              <span className="px-2">30</span>
              <span className="px-2">sep</span>
            </div>
            <div className={`${styles.auther}`}>
              <i className="fa-regular fa-user"></i>
              <span>By-Admin</span>
            </div>
          </div>
          <h3 className={`${styles.title} mb-4`}>
            Moments that need insurance
          </h3>
          <div className={`${styles.image}  w-100 mx-auto mb-3`}>
            <picture>
              <img src={mainImage} alt="" className="w-100" />
            </picture>
          </div>
          <p className="mb-3">
            In conclusion, the importance of insurance becomes clear when we
            understand the moments that may require additional protection. By
            taking steps to ensure these moments, we can live with greater peace
            of mind and face challenges with confidence
          </p>

          <div className={`${styles.content} mb-5`}>
            <div className={`${styles.subBlock} my-5`}>
              <div className={`${styles.images} row mb-4 g-4`}>
                <div className="col-md-6">
                  <picture>
                    <img src={image1} className="w-100" alt="" />
                  </picture>
                </div>
                <div className="col-md-6">
                  <picture>
                    <img src={image2} className="w-100" alt="" />
                  </picture>
                </div>
              </div>
              <h4 className={`${styles.title} mb-3`}>
                Let's take a closer look at some of these moments:
              </h4>
              <ul className={`${styles.mainList} mb-3 row`}>
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
              <p>
                In conclusion, the importance of insurance becomes clear when we
                understand the moments that may require additional protection.
                By taking steps to ensure these moments, we can live with
                greater peace of mind and face challenges with confidence
              </p>
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
            <div className={`${styles.recentBlogs} py-4 px-4`}>
              <h4 className={`${styles.title} mb-4`}>Recent Blog</h4>
              <div className={`${styles.blogsWrapper}`}>
                <div className={`${styles.item} pb-3`}>
                  <div className={`${styles.image}`}>
                    <picture>
                      <img src={b1} alt="" />
                    </picture>
                  </div>
                  <div className={`${styles.data}`}>
                    <h4 className={`${styles.title}`}>
                      How to Become a Successful Consultant
                    </h4>
                    <div className={`${styles.date}`}>
                      <i className="fa-regular fa-calendar-days"></i>
                      <span>29 Sep. 2022</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.item} pb-3`}>
                  <div className={`${styles.image}`}>
                    <picture>
                      <img src={b2} alt="" />
                    </picture>
                  </div>
                  <div className={`${styles.data}`}>
                    <h4 className={`${styles.title}`}>
                      How to Become a Successful Consultant
                    </h4>
                    <div className={`${styles.date}`}>
                      <i className="fa-regular fa-calendar-days"></i>
                      <span>29 Sep. 2022</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.item} pb-3`}>
                  <div className={`${styles.image}`}>
                    <picture>
                      <img src={b3} alt="" />
                    </picture>
                  </div>
                  <div className={`${styles.data}`}>
                    <h4 className={`${styles.title}`}>
                      How to Become a Successful Consultant
                    </h4>
                    <div className={`${styles.date}`}>
                      <i className="fa-regular fa-calendar-days"></i>
                      <span>29 Sep. 2022</span>
                    </div>
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

export default Insurance;
