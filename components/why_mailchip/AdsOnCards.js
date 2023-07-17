import React from "react";
import styles from "./adsOnCards.module.css";
import Link from "next/link";
const AdsOnCards = (props) => {
  const { imgUrl, heading, content, link, linkContent, key } = props;
  return (
    <div className={styles.container} key={key}>
      <img
        src={imgUrl}
        alt="navjot is hero"
      />
      <h3>{heading}</h3>
      <p>
        {content}
      </p>
      <Link href={link}>{linkContent}</Link>
    </div>
  );
};

export default AdsOnCards;
