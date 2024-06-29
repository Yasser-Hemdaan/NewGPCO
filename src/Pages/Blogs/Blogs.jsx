// import React from 'react'
// import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// css
import styles from "./Blogs.module.css";

// images
import main from "../../assets/images/pages/blogs/Image.png";

// components
import Consultation from "../../Components/Consultation/Consultation";
import { NavLink } from "react-router-dom";

const Blogs = () => {
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
            <span>Blog</span>
          </div>
          <h2 className={`${styles.mainTitle}`}>Blog</h2>
        </div>
      </div>
      <div className={`${styles.blogsWrapper} my-5`}>
        <div className="container-lg">
          <div className={`${styles.blogsBody} row g-4`}>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.blog}`}>
                <div className={`${styles.images}`}>
                  <picture>
                    <img src={main} className="w-100" alt="" />
                  </picture>
                  <div className={`${styles.date} px-2 py-2`}>
                    <span className="px-2">30</span>
                    <span className="px-2">sep</span>
                  </div>
                </div>
                <div className={`${styles.info} py-3 mx-4`}>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-user"></i>
                    <span>By-Admin</span>
                  </div>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-comments"></i>
                    <span>Comments (3)</span>
                  </div>
                </div>
                <div className={`${styles.body} pb-5 pt-4 px-4`}>
                  <h3 className="mb-5">
                    How does insurance brokerage at JCO benefit you?
                  </h3>
                  <NavLink to="/blogs/insurance" className="px-4 py-2">read more</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.blog}`}>
                <div className={`${styles.images}`}>
                  <picture>
                    <img src={main} className="w-100" alt="" />
                  </picture>
                  <div className={`${styles.date} px-2 py-2`}>
                    <span className="px-2">30</span>
                    <span className="px-2">sep</span>
                  </div>
                </div>
                <div className={`${styles.info} py-3 mx-4`}>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-user"></i>
                    <span>By-Admin</span>
                  </div>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-comments"></i>
                    <span>Comments (3)</span>
                  </div>
                </div>
                <div className={`${styles.body} pb-5 pt-4 px-4`}>
                  <h3 className="mb-5">Moments that need insurance</h3>
                  <NavLink to="/blogs/insurance" className="px-4 py-2">read more</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.blog}`}>
                <div className={`${styles.images}`}>
                  <picture>
                    <img src={main} className="w-100" alt="" />
                  </picture>
                  <div className={`${styles.date} px-2 py-2`}>
                    <span className="px-2">30</span>
                    <span className="px-2">sep</span>
                  </div>
                </div>
                <div className={`${styles.info} py-3 mx-4`}>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-user"></i>
                    <span>By-Admin</span>
                  </div>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-comments"></i>
                    <span>Comments (3)</span>
                  </div>
                </div>
                <div className={`${styles.body} pb-5 pt-4 px-4`}>
                  <h3 className="mb-5">Problems you may encounter</h3>
                  <NavLink to="/blogs/insurance" className="px-4 py-2">read more</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.blog}`}>
                <div className={`${styles.images}`}>
                  <picture>
                    <img src={main} className="w-100" alt="" />
                  </picture>
                  <div className={`${styles.date} px-2 py-2`}>
                    <span className="px-2">30</span>
                    <span className="px-2">sep</span>
                  </div>
                </div>
                <div className={`${styles.info} py-3 mx-4`}>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-user"></i>
                    <span>By-Admin</span>
                  </div>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-comments"></i>
                    <span>Comments (3)</span>
                  </div>
                </div>
                <div className={`${styles.body} pb-5 pt-4 px-4`}>
                  <h3 className="mb-5">
                    How does insurance brokerage at JCO benefit you?
                  </h3>
                  <NavLink to="/blogs/insurance" className="px-4 py-2">read more</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.blog}`}>
                <div className={`${styles.images}`}>
                  <picture>
                    <img src={main} className="w-100" alt="" />
                  </picture>
                  <div className={`${styles.date} px-2 py-2`}>
                    <span className="px-2">30</span>
                    <span className="px-2">sep</span>
                  </div>
                </div>
                <div className={`${styles.info} py-3 mx-4`}>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-user"></i>
                    <span>By-Admin</span>
                  </div>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-comments"></i>
                    <span>Comments (3)</span>
                  </div>
                </div>
                <div className={`${styles.body} pb-5 pt-4 px-4`}>
                  <h3 className="mb-5">Moments that need insurance</h3>
                  <NavLink to="/blogs/insurance" className="px-4 py-2">read more</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.blog}`}>
                <div className={`${styles.images}`}>
                  <picture>
                    <img src={main} className="w-100" alt="" />
                  </picture>
                  <div className={`${styles.date} px-2 py-2`}>
                    <span className="px-2">30</span>
                    <span className="px-2">sep</span>
                  </div>
                </div>
                <div className={`${styles.info} py-3 mx-4`}>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-user"></i>
                    <span>By-Admin</span>
                  </div>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-comments"></i>
                    <span>Comments (3)</span>
                  </div>
                </div>
                <div className={`${styles.body} pb-5 pt-4 px-4`}>
                  <h3 className="mb-5">Problems you may encounter</h3>
                  <NavLink to="/blogs/insurance" className="px-4 py-2">read more</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.blog}`}>
                <div className={`${styles.images}`}>
                  <picture>
                    <img src={main} className="w-100" alt="" />
                  </picture>
                  <div className={`${styles.date} px-2 py-2`}>
                    <span className="px-2">30</span>
                    <span className="px-2">sep</span>
                  </div>
                </div>
                <div className={`${styles.info} py-3 mx-4`}>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-user"></i>
                    <span>By-Admin</span>
                  </div>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-comments"></i>
                    <span>Comments (3)</span>
                  </div>
                </div>
                <div className={`${styles.body} pb-5 pt-4 px-4`}>
                  <h3 className="mb-5">
                    How does insurance brokerage at JCO benefit you?
                  </h3>
                  <NavLink to="/blogs/insurance" className="px-4 py-2">read more</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.blog}`}>
                <div className={`${styles.images}`}>
                  <picture>
                    <img src={main} className="w-100" alt="" />
                  </picture>
                  <div className={`${styles.date} px-2 py-2`}>
                    <span className="px-2">30</span>
                    <span className="px-2">sep</span>
                  </div>
                </div>
                <div className={`${styles.info} py-3 mx-4`}>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-user"></i>
                    <span>By-Admin</span>
                  </div>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-comments"></i>
                    <span>Comments (3)</span>
                  </div>
                </div>
                <div className={`${styles.body} pb-5 pt-4 px-4`}>
                  <h3 className="mb-5">Moments that need insurance</h3>
                  <NavLink to="/blogs/insurance" className="px-4 py-2">read more</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.blog}`}>
                <div className={`${styles.images}`}>
                  <picture>
                    <img src={main} className="w-100" alt="" />
                  </picture>
                  <div className={`${styles.date} px-2 py-2`}>
                    <span className="px-2">30</span>
                    <span className="px-2">sep</span>
                  </div>
                </div>
                <div className={`${styles.info} py-3 mx-4`}>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-user"></i>
                    <span>By-Admin</span>
                  </div>
                  <div className={`${styles.data}`}>
                    <i className="fa-regular fa-comments"></i>
                    <span>Comments (3)</span>
                  </div>
                </div>
                <div className={`${styles.body} pb-5 pt-4 px-4`}>
                  <h3 className="mb-5">Problems you may encounter</h3>
                  <NavLink to="/blogs/insurance" className="px-4 py-2">read more</NavLink>
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

export default Blogs;
