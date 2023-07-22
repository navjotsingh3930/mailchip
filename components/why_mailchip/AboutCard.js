import React from "react";
import styles from './aboutCard.module.css'
import Image from "next/image";
const AboutCard = (props) => {
  console.log(props);
  const { imgUrl, heading, subHeading, content } = props;
  return <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src={imgUrl} width={200} height={200} alt="navjot is hero"/>
    </div>
    {subHeading ? <h3>{subHeading}</h3>:""}
    <h2>{heading}</h2>
    <p>{content}</p>
  </div>;
};

export default AboutCard;
