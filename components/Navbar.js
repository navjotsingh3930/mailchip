import React, { useState } from "react";
import styles from "./navbar.module.css";
import SignIn from "./popup/SignIn";
import SignUp from "./popup/SignUp";
import Link from "next/link";
const Navbar = () => {
  const [toggleSignIn, setToggleSignIn] = useState(false);
  const [toggleSignOut, setToggleSignOut] = useState(false);
  const navLink = [
    { name: "home", link: "/" },
    { name: "resources", link: "/resources" },
    { name: "inspiration", link: "/inspiration" },
    { name: "pricing", link: "/pricing" },
  ];
  const handleSignInPopup = () => {
    toggleSignIn ? setToggleSignIn(false) : setToggleSignIn(true);
  };
  const handleSignOutPopup = () => {
    toggleSignOut ? setToggleSignOut(false) : setToggleSignOut(true);
  };
  return (
    <>
      <div className={styles.NavBar}>
        <span className={styles.navLink}>
          {navLink.map((data, index) => {
            return (
              <span className={styles.product} key={index}>
                <Link href={data.link}>
                {data.name}
                </Link>
              </span>
            );
          })}
        </span>
        <span className={styles.navLink}>
          <img
            src="/images/mailChimpLogo.png"
            alt="mailChimpLogo"
            className="mailchimplogo"
          />
        </span>
        <span className={styles.navLink}>
          <span
            className={styles.login}
            id="startFreeTrialBtn"
            onClick={() => handleSignInPopup(toggleSignIn)}
          >
            login
          </span>
          <span
            className={styles.startFreeTrial}
            onClick={() => handleSignOutPopup(toggleSignOut)}
          >
            start Free Trial
          </span>
        </span>
      </div>
      <SignIn toggleSignIn={toggleSignIn} handlePopup={handleSignInPopup} />
      <SignUp showPopup={toggleSignOut} handlePopup={handleSignOutPopup} />
    </>
  );
};

export default Navbar;
