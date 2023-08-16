import React from 'react'
import styles from './header.module.css'
const Header = () => {
  // 
  return (
    <>
    <div className={styles.container}>
    <div className={styles.subContainer}>
      <p className={styles.content} id="email">Turn Emails into Revenue</p>
    </div>
    <div className={styles.subContainer + " " +styles.subContainer_}>
      <p className={styles.content}>
        Win new customers with the #1 email marketing and automations brand*
        that recommends ways to get more opens, clicks and sales.
      </p>
    </div>
    <div className={styles.startFreeBtnContainer}>
      <button >start Free Trial</button>
    </div>
  </div>
    </>
  )
}

export default Header
