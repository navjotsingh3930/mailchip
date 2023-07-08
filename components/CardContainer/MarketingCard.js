import React from 'react'
import styles from "./marketingCard.module.css"
const MarketingCard = (props) => {
    const {ImgUrl,Content,Heading,ImgPosition,BtnContent} =props
    // img , content , heading , position , btnContent

return (
    <div className={styles.__CardContainer} style={{flexDirection:ImgPosition=="left"?"row-reverse":"row"}}>
    <div className={styles.ContentCard}>
     <h1 className={styles.heading}>
       {Heading}
     </h1>
     <p className={styles.content}>
      {Content}
     </p>
     <button className={styles.__btn}>{BtnContent}</button>
    </div>
    <div className={styles.ImageCard}>
      <div className={styles._Img}>
        <img src={ImgUrl}  alt="navjot is hero"/>
      </div>
    </div>
</div>
)
}

export default MarketingCard
