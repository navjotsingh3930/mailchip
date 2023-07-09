import React from 'react'
import styles from './integratedCard.module.css'
const IntegratedCard = (props) => {
    const {ImgUrl, Heading, Content} =props
    // ImgUrl, Heading, Content
  return (
    <div className={styles._card}>
        <div className={styles.imgContainer}>
          <img src={ImgUrl} alt='Navjot is hero'/>
        </div>
        <div className={styles._contentContainer}>
          <div className={styles._contentHeading}>
            <h2>{Heading}</h2>
          </div>
          <div className={styles._content}>
            <p>{Content}</p>
          </div>
        </div>
      </div>
  )
}

export default IntegratedCard
