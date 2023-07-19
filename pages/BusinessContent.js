import React from 'react'
import styles from './BusinessContent.module.css'

const BusinessContent = () => {
  return (
    <div className={styles.Container}>
      <h6>Ready to grow your business?</h6>
      <p>Its easy to get started with a free plan.</p>
      <button className='button'>Sign Up</button>
      <p>see all plans</p>
    </div>
  )
}

export default BusinessContent
