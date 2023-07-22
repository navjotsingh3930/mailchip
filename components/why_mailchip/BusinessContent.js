import React from 'react'
import { useState } from 'react';
import styles from './BusinessContent.module.css'
import SignUp from '@/components/popup/SignUp';

const BusinessContent = () => {
  const [toggleSignOut, setToggleSignOut] = useState(false);
  const handleSignOutPopup = () => {
    toggleSignOut ? setToggleSignOut(false) : setToggleSignOut(true);
  };
  return (<>
    <SignUp showPopup={toggleSignOut} handlePopup={handleSignOutPopup}/>
    <div className={styles.Container}>
      <h6>Ready to grow your business?</h6>
      <p>Its easy to get started  with a free plan.</p>
      <button className='button' onClick={() => handleSignOutPopup(toggleSignOut)}>Sign Up</button>
      <p>see all plans</p>
    </div>
    </>
  )
}

export default BusinessContent
