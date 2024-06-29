/* eslint-disable react/no-unescaped-entities */
// import React from "react";

import { useTranslation } from "react-i18next";

// css
import styles from "./LiabilityPublicInsurance.module.css";

// images
import mainImage from "../../../assets/images/pages/products/LiabilityPublicInsurance.png";

// components
import Consultation from "../../../Components/Consultation/Consultation";

const LiabilityPublicInsurance = () => {
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
          <h2 className={`${styles.mainTitle}`}>Liability Public Insurance</h2>
        </div>
      </div>
      <div className={`${styles.singleProductBody} container-lg mx-auto my-5`}>
        <div className={`${styles.image} w-100 mx-auto mb-3`}>
          <picture>
            <img src={mainImage} alt="" className="w-100" />
          </picture>
        </div>
        <div className={`${styles.content} mb-5`}>
          <h3 className={`${styles.title} mb-4`}>
            We provide general liability insurance products
          </h3>
          <p className="mb-3">
            Liability insurance exposures may arise from many sources, from
            actions or products of third parties or emerging risks of
            environmental disasters. Businesses of all sizes need a partner with
            years of experience and the ability to respond to an ever-changing
            liability environment.
          </p>
          <p className="mb-3">
            Allianz Saudi Fransi's liability insurance solutions provide you
            with cover tailored to your needs. We offer a wide range of general
            and specialist liability insurance solutions, covering personal or
            bodily injury, property damage and other losses.
          </p>
        </div>
        <div className={`${styles.features} text-center`}>
          <h2 className={`${styles.title} mb-4`}>
            Features general liability insurance
          </h2>
          <div className={`${styles.featuresWrapperItems}`}>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row `}>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Travel Insurance
                </div>
                <div className={`${styles.item} ${styles.itemBlue} p-3`}>
                  Personal Accident
                </div>
              </div>
            </div>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row `}>
                <div className={`${styles.item} ${styles.itemBlue} p-3`}>
                  Fidelity Guarantee
                </div>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Medical Malpractice
                </div>
              </div>
            </div>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row `}>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Contractual Liability
                </div>
                <div className={`${styles.item} ${styles.itemBlue} p-3`}>
                  Professional Indemnity
                </div>
              </div>
            </div>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row `}>
                <div className={`${styles.item} ${styles.itemBlue}  p-3`}>
                  Directors & O icers’ Liability
                </div>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Comprehensive General Liability (CGL)
                </div>
              </div>
            </div>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row `}>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Money Insurance (In safe and Transit insurance)
                </div>
                <div className={`${styles.item} ${styles.itemBlue} p-3`}>
                  Workmen’s Compensation / Employer’s Liability Insurance
                </div>
              </div>
            </div>
          </div>
          {/* <div className={`${styles.featuresWrapperItems}`}>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row gx-3`}>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Travel Insurance
                </div>
                <div className={`${styles.item} ${styles.itemBlue} p-3`}>
                  Personal Accident
                </div>
              </div>
            </div>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row gx-3`}>
                <div className={`${styles.item} ${styles.itemBlue} p-3`}>
                  Fidelity Guarantee
                </div>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Medical Malpractice
                </div>
              </div>
            </div>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row gx-3`}>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Contractual Liability
                </div>
                <div className={`${styles.item} ${styles.itemBlue} p-3`}>
                  Professional Indemnity
                </div>
              </div>
            </div>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row gx-3`}>
                <div className={`${styles.item} ${styles.itemBlue}  p-3`}>
                  Directors & O icers’ Liability
                </div>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Comprehensive General Liability (CGL)
                </div>
              </div>
            </div>
            <div className={`${styles.cols}`}>
              <div className={`${styles.itemColumn} row gx-3`}>
                <div className={`${styles.item} ${styles.itemBurgundy} p-3`}>
                  Money Insurance (In safe and Transit insurance)
                </div>
                <div className={`${styles.item} ${styles.itemBlue} p-3`}>
                  Workmen’s Compensation / Employer’s Liability Insurance
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <Consultation />
    </div>
  );
};

export default LiabilityPublicInsurance;
