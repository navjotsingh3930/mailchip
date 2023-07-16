import React from "react";
import styles from "../styles/why_mailchip.module.css";
import Banner from "@/components/why_mailchip/banner";
import MarketingToolDesc from "@/components/why_mailchip/MarketingToolDesc";
import InspiredSection from "@/components/why_mailchip/InspiredSection";
const why_mailchip = () => {
  return (
    <div className={styles.mainContainer}>
      <Banner />
      <MarketingToolDesc/>
      <InspiredSection/>
    </div>
  );
};

export default why_mailchip;
