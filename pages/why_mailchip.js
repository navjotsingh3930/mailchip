import React from "react";
import styles from "../styles/why_mailchip.module.css";
import Banner from "@/components/why_mailchip/banner";
import MarketingToolDesc from "@/components/why_mailchip/MarketingToolDesc";
import InspiredSection from "@/components/why_mailchip/InspiredSection";
import InspiredContent from "@/components/why_mailchip/InspiredContent";
const why_mailchip = () => {
  return (
    <div className={styles.mainContainer}>
      <Banner />
      <MarketingToolDesc/>
      <InspiredSection/>
      <InspiredContent/>
    </div>
  );
};

export default why_mailchip;
