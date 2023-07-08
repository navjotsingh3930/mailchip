import React from "react";
import styles from "./card.module.css";
function Card(props) {
    // console.log(props)
const { Img, BgColor, CardHeading, CardDescription, ButtonDesc } = props;
return (
    <div className={styles.card}>
    <div className={styles.cardTopContainer + " " + styles.bg_automation} style={{backgroundImage:"url("+Img+")"}}>
        <p className={styles.cardHeading}>{CardHeading}</p>
    </div>
    <div className={styles.cardBottomContainer} style={{backgroundColor:BgColor}}>
        <p className={styles.cardDescription}>
        {CardDescription}
        </p>
        <button>{ButtonDesc}</button>
    </div>
    </div>
);
}

export default Card;
