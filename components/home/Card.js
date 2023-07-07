import React from "react";
import styles from "./card.module.css";
function Card(props) {
    console.log(props)
const { Img, BgColor, CardHeading, CardDescription, ButtonDesc } = props;
return (
    <div class={styles.card}>
    <div class={styles.cardTopContainer + " " + styles.bg_automation} style={{backgroundImage:"url("+Img+")"}}>
        <p class={styles.cardHeading}>{CardHeading}</p>
    </div>
    <div class={styles.cardBottomContainer} style={{backgroundColor:BgColor}}>
        <p class={styles.cardDescription}>
        {CardDescription}
        </p>
        <button>{ButtonDesc}</button>
    </div>
    </div>
);
}

export default Card;
