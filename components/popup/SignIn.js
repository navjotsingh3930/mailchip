import React from 'react'
import styles from './sigIn.module.css';
import {RxCross1} from 'react-icons/rx';
import {FaFacebookSquare ,FaUserInjured , FaTwitterSquare} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {MdSecurity} from 'react-icons/md';
const SignIn = (props) => {
  let {showPopup} = props
  return (
    <div className={styles.Container + " " + styles.form_popup} id="togglePopup" style={{display:showPopup? "flex":"none"}} >
      <div className={styles.formContainer}>
       <span > <RxCross1/> </span>
        <div className={styles.imgContainer}>
          <img
            src="/images/signinImage-removebg-preview.png"
            alt="signIn image"
          />
          <a className={styles.createAccount} href="/">Create an account</a>
        </div>
        <div className={styles.form}>
          <h2 className={styles.heading}>Log In</h2>
          <form>
            <div className={styles.UserName}>
            <FaUserInjured/>
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Your Name"
              />
            </div>
            <div className={styles.password}>
              <MdSecurity/>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Password"
              />
            </div>
            <div className={styles.rememberMe}>
              <input
                type="checkbox"
                id="css"
                name="rememberMe"
                value="rememberMe"
              />
              <label for="html">Remember Me</label>
            </div>
            <button className={styles.submit}>LogIn</button>
          </form>
          <div className={styles.LoginWithContainer}>
            <span className={styles.LoginWith}> Or Login With </span>
            <span className={styles.LoginIcon}>
              {/* <svg
                stroke="currentColor"
                className={styles.facebookIcon}
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"
                ></path>
              </svg> */}
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

export default SignIn
