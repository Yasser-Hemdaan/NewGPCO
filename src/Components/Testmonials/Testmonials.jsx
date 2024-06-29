/* eslint-disable react/no-unescaped-entities */
// import React from "react";

// images
import { useTranslation } from "react-i18next";
import person1 from "../../../public/1.png";
import person2 from "../../../public/2.png";
import person3 from "../../../public/3.png";

// CSS
import styles from "./Testmonials.module.css";

// react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 992 },
    items: 3,
  },
  minTablet: {
    breakpoint: { max: 992, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Testmonials = () => {
  const { i18n } = useTranslation();
  return (
    <div className={`${styles.testmonialsWrapper} px-3 py-5`}>
      <div className="container-lg">
        <div className="sectionTitle mb-3">
          <div className="preIconGreen">
            <span></span>
            <span></span>
          </div>
          <h4 className="whiteColorTitle">Testimonial</h4>
        </div>
        <h3 className={`subTitle mb-5 fw-bold text-capitalize text-white`}>
          What People say about Us
        </h3>
        <Carousel
          swipeable={false}
          draggable={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1750}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "tablet",
            "minTablet",
            "mobile",
          ]}
          responsive={responsive}
        >
          <div
            className={`${styles.testmonialItem} px-4 py-5`}
            dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
          >
            <div className={`${styles.testmonialItemInfo} mb-3`}>
              <picture>
                <img src={person1} alt="" />
              </picture>
              <div
                className={`${styles.data} ${
                  i18n.language === "ar" ? "text-end" : "text-start"
                }`}
              >
                <h4 className={`${styles.name} fw-bold`}>Faisal Al Mutailri</h4>
                <p className={`${styles.jobTitle} text-muted`}>Co Founder</p>
              </div>
            </div>
            <p className={`${styles.testmonialItemOpinion} mb-3`}>
              Aenean a felis consequat, varius orci ut, varius metus. Donec
              iaculis leo turpis, vitae sagittis massa luctus feugiat. Aenean a
              felis consequat, varius orci ut, varius metus. Donec iaculis leo
              turpis, vitae sagittis massa luctus feugiat. Aenean a felis
              consequat, varius orci ut, varius metus. Donec iaculis leo turpis,
              vitae sagittis massa luctus feugiat.
            </p>
            <div className={`${styles.rating}`}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div
            className={`${styles.testmonialItem} px-4 py-5`}
            dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
          >
            <div className={`${styles.testmonialItemInfo} mb-3`}>
              <picture>
                <img src={person2} alt="" />
              </picture>
              <div
                className={`${styles.data} ${
                  i18n.language === "ar" ? "text-end" : "text-start"
                }`}
              >
                <h4 className={`${styles.name} fw-bold`}>Faisal Al Mutailri</h4>
                <p className={`${styles.jobTitle} text-muted`}>Co Founder</p>
              </div>
            </div>
            <p className={`${styles.testmonialItemOpinion} mb-3`}>
              Aenean a felis consequat, varius orci ut, varius metus. Donec
              iaculis leo turpis, vitae sagittis massa luctus feugiat. Aenean a
              felis consequat, varius orci ut, varius metus. Donec iaculis leo
              turpis, vitae sagittis massa luctus feugiat. Aenean a felis
              consequat, varius orci ut, varius metus. Donec iaculis leo turpis,
              vitae sagittis massa luctus feugiat.
            </p>
            <div className={`${styles.rating}`}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div
            className={`${styles.testmonialItem} px-4 py-5`}
            dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
          >
            <div className={`${styles.testmonialItemInfo} mb-3`}>
              <picture>
                <img src={person3} alt="" />
              </picture>
              <div
                className={`${styles.data} ${
                  i18n.language === "ar" ? "text-end" : "text-start"
                }`}
              >
                <h4 className={`${styles.name} fw-bold`}>Faisal Al Mutailri</h4>
                <p className={`${styles.jobTitle} text-muted`}>Co Founder</p>
              </div>
            </div>
            <p className={`${styles.testmonialItemOpinion} mb-3`}>
              Aenean a felis consequat, varius orci ut, varius metus. Donec
              iaculis leo turpis, vitae sagittis massa luctus feugiat. Aenean a
              felis consequat, varius orci ut, varius metus. Donec iaculis leo
              turpis, vitae sagittis massa luctus feugiat. Aenean a felis
              consequat, varius orci ut, varius metus. Donec iaculis leo turpis,
              vitae sagittis massa luctus feugiat.
            </p>
            <div className={`${styles.rating}`}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testmonials;
