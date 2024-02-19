import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      //   console.log(err);
    }
  };

  const loggedInIcons = (
    <>
      <NavLink
        to="/myprofile"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-user"></i>My Profile
      </NavLink>

      <NavLink
        to="/"
        className={styles.NavLink}
        onClick={handleSignOut}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-right-from-bracket"></i>Sign Out
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt m-1"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/"
      >
        <Navbar.Brand className={styles.NavMenuLogo}>
          <img src={logo} alt="logo" height="45" />
          AskCupid
        </Navbar.Brand>
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-3" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {currentUser ? loggedInIcons : loggedOutIcons}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
