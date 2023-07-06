import React from "react";
import styles from "./navbar.module.css";
const Navbar = (props) => {
return (
    <div className={styles.NavBar}>
    <span className={styles.navLink}>
        {
            props.navlink.map((data,index)=>{
                return (
                    <span className={styles.product} key={index}>{data}</span>
                )
            })
        }
    </span>
    <span className={styles.navLink}>
        <img
          src="/images/mailChimpLogo.png"
          alt="mailChimpLogo"
          className="mailchimplogo"
        />
    </span>
    <span className={styles.navLink}>
        <span className={styles.login}>login</span>
        <span className={styles.startFreeTrial}>start Free Trial</span>
    </span>
    </div>
  );
};

export default Navbar;
