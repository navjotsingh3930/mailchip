import React, { useState } from "react";
import styles from "./navbar.module.css";
import SignIn from "../../components/popup/SignIn";
import SignUp from "../../components/popup/SignUp";
import Link from "next/link";
import Image from "next/image";
// drawer
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
//
import { FaBars } from "react-icons/fa";
import {AiFillHome} from 'react-icons/ai';
const links = [
  {
    content: "home",
    href: "/",
    icon: <AiFillHome/> ,
  },
  {
    content: "resources",
    href: "/resources",
    icon: "",
  },
  {
    content: "inspiration",
    href: "/inspiration",
    icon: "",
  },
  {
    content: "pricing",
    href: "/pricing",
    icon: "",
  },
]

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
  // drawer
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    console.log(event)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => {
    return (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <span className={styles.navLink}>
          <Image src={"/images/mailChimpLogo.png"} height={250} width={250} alt="mailChimpLogo" />
        </span>
        <List>
          {
            links.map((item, index) => {
              return (
                <ListItem disablePadding key={index}>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.content} />
                  </ListItemButton>
                </ListItem>
              )
            })
          }

        </List>
      </Box>
    )
  };
  return (
    <div className={styles.container}>
      {/* navbar for window */}
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
          <Image src={"/images/mailChimpLogo.png"} height={250} width={250} alt="mailChimpLogo" />
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
      {/* navbar for Mobile */}
      <div className={styles.mobileNav}>
        <span className={styles.navLink}>
          <Image src={"/images/mailChimpLogo.png"} height={250} width={250} alt="mailChimpLogo" />
        </span>
        {['left'].map((anchor, index) => {
          console.log(anchor)
          return (
            <React.Fragment key={index}>
              <div onClick={toggleDrawer(anchor, true)} className={styles.hamburgerIcon}><FaBars /></div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  );
};

export default Navbar;
