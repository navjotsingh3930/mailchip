import React , {useState} from "react";
import styles from "./navbar.module.css";
import SignIn from "./popup/SignIn";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Navbar = (props) => {
//   if(typeof(document) != "undefined"){
//   }
//   const notify = () => toast("Wow so easy!");
const [showPopup, setShowPopup] = useState(false)
const handlePopup=()=>{

}
return (
    <>
    {/* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */}
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
        <span className={styles.login} id='startFreeTrialBtn' onClick={()=>setShowPopup(true)} >login</span>
        <span className={styles.startFreeTrial} >start Free Trial</span>
    </span>
    </div>
    <SignIn  showPopup={showPopup} handlePopup={handlePopup}/>
    </>
  );
};

export default Navbar;
