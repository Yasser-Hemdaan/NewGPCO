/* eslint-disable react/no-unescaped-entities */
// import React from "react";

// images
import hospital from "../../assets/images/components/products/hospital.svg";
import car from "../../assets/images/components/products/car.svg";
import house from "../../assets/images/components/products/house.svg";

// CSS
import styles from "./Products.module.css";

// react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1400, min: 992 },
    items: 3,
  },
  minTablet: {
    breakpoint: { max: 992, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

const Products = () => {
  return (
    <div className="px-3 py-5">
      <div className="container-lg">
        <div className="sectionTitle mb-2">
          <div className="preIconBlue">
            <span></span>
            <span></span>
          </div>
          <h4 className="mainColorTitle">New Experience</h4>
        </div>
        <h3 className={`subTitle mb-5 fw-bold text-capitalize`}>
          Our mission is to provide insurance and risk management services
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
          <div className={`${styles.productItem} p-5`}>
            <div className={`${styles.productItemImage} mb-3`}>
              <picture>
                <img src={hospital} alt="" />
              </picture>
            </div>
            <h4 className={`${styles.productItemTitle} fw-bold mb-4`}>
              Health Insurance
            </h4>
            <NavLink to="" className="btn py-2 px-3 burgundyButton">
              read more <i className="fa-solid fa-angles-right"></i>
            </NavLink>
          </div>
          <div className={`${styles.productItem} p-5`}>
            <div className={`${styles.productItemImage} mb-3`}>
              <picture>
                <img src={car} alt="" />
              </picture>
            </div>
            <h4 className={`${styles.productItemTitle} fw-bold mb-4`}>
              Car Insurance
            </h4>
            <NavLink to="" className="btn py-2 px-3 burgundyButton">
              read more <i className="fa-solid fa-angles-right"></i>
            </NavLink>
          </div>
          <div className={`${styles.productItem} p-5`}>
            <div className={`${styles.productItemImage} mb-3`}>
              <picture>
                <img src={house} alt="" />
              </picture>
            </div>
            <h4 className={`${styles.productItemTitle} fw-bold mb-4`}>
              Property Insurance
            </h4>
            <NavLink to="" className="btn py-2 px-3 burgundyButton">
              read more <i className="fa-solid fa-angles-right"></i>
            </NavLink>
          </div>
          <div className={`${styles.productItem} p-5`}>
            <div className={`${styles.productItemImage} mb-3`}>
              <picture>
                <img src={house} alt="" />
              </picture>
            </div>
            <h4 className={`${styles.productItemTitle} fw-bold mb-4`}>
              Health Insurance
            </h4>
            <NavLink to="" className="btn py-2 px-3 burgundyButton">
              read more <i className="fa-solid fa-angles-right"></i>
            </NavLink>
          </div>
        </Carousel>
        <div className={`${styles.productsLink} link w-100 text-center`}>
          <NavLink
            className={`btn py-2 px-3 mt-5 text-capitalize whiteButton fw-bold`}
          >
            Our products
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Products;
