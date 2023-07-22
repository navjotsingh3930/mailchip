import React from "react";
import styles from "./adsOnCards.module.css";
import Link from "next/link";
import Image from "next/image";
const AdsOnCards = (props) => {
  const { imgUrl, heading, content, link, linkContent, } = props;
  return (
    <div className={styles.container} >
      <Image src={imgUrl} height={120} width={120} alt="navjot is hero" />
      <h3>{heading}</h3>
      <p>
        {content}
      </p>
      <Link href={link}>{linkContent}</Link>
    </div>
  );
};

export default AdsOnCards;
