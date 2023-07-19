import React from "react";
import styles from "../styles/why_mailchip.module.css";
import Banner from "@/components/why_mailchip/banner";
import MarketingToolDesc from "@/components/why_mailchip/MarketingToolDesc";
import InspiredSection from "@/components/why_mailchip/InspiredSection";
import InspiredContent from "@/components/why_mailchip/InspiredContent";
import AdsOn from "@/components/why_mailchip/AdsOn";
import CompanyContainer from "@/components/why_mailchip/companyContainer";
import BusinessContent from "./BusinessContent";
const why_mailchip = () => {
  return (
    <div className={styles.mainContainer}>
      <Banner />
      <MarketingToolDesc/>
      <InspiredSection/>
      <InspiredContent/>
      <AdsOn/>
      <CompanyContainer/>
      <BusinessContent/>
    </div>
  );
};

export default why_mailchip;
