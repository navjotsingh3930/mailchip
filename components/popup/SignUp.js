import React from 'react'
import styles from './signUp.module.css';
import {RxCross1} from 'react-icons/rx';
import {FaFacebookSquare ,FaUserInjured , FaTwitterSquare} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {MdSecurity} from 'react-icons/md';
const SignUp = (props) => {
  const {showPopup , handlePopup} = props;
  return (
    <div className={styles.Container + " " + styles.form_popup} style={{display:showPopup? "flex":"none"}}>
      <div className={styles.formContainer}>
       <span onClick={()=>handlePopup(showPopup)} > <RxCross1/> </span>
        <div className={styles.imgContainer}>
          <img
            src="/images/signinImage-removebg-preview.png"
            alt="signIn image"
          />
        </div>
        <div className={styles.form}>
          <h2 className={styles.heading}>Sign Up</h2>
          <form>
            <div className={styles.UserName}>
              <span>
            <FaUserInjured/>
              <input
                type="text"
                id="FName"
                name="FName"
                placeholder="First Name"
              />
                </span>
                <span>
            <FaUserInjured/>
              <input
                type="text"
                id="LName"
                name="LName"
                placeholder="Last Name"
              />
                </span>
            </div>
            <div className={styles.password}>
              <MdSecurity/>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className={styles.password}>
              <MdSecurity/>
              <input
                type="password"
                id="Cpassword"
                name="Cpassword"
                placeholder="Confirmed Password"
              />
            </div>
            <button className={styles.submit}>SignUp</button>
          </form>
          <div className={styles.LoginWithContainer}>
            <span className={styles.LoginWith}> Or SignUp With </span>
            <span className={styles.LoginIcon}>
              <FaFacebookSquare/>
              <FcGoogle/>
              <FaTwitterSquare/>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
