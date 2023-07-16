import React from 'react'
import styles from './banner.module.css'
const Banner = () => {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.subContainer}>
    <p>Why Mailchimp</p>
    <h1>We’re built for growing businesses</h1>
    <p>Put our marketing and commerce tools behind your idea, dream, brand, or business and we’ll help you share it with the world.</p>
    <button className={styles.tryFreeTrial}>Try For Free</button>
    </div>
    <div className={styles.imageContainer}>
      <img src='/images/why-mailchimp-anthem-bakers-hero_1520-min.webp' alt='mailChip'/>
    </div>
  </div>
  )
}

export default Banner
