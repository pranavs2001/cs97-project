import React from 'react';
import logo from "../../img/insta-chef-logo.png"
import fire from '../SignIn/fire';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const handleLogout = () => {
  fire.auth().signOut();
};

const Navbar = () => {

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt={"Insta-Chef logo"} width={"300px"}/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Search'>
            Search
          </NavLink>
          <NavLink to='/Pantry'>
            Pantry
          </NavLink>
          <NavLink to='/Favorites'>
            Favorites
          </NavLink>
          <NavLink to='/Profile'>
            Profile
          </NavLink>
        </NavMenu>
        <NavBtn onClick={handleLogout}>
          <NavBtnLink to='/'> Logout </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
       
};

export default Navbar;