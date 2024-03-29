import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default function Navbar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">PRODUCT</Link>
        </li>
      </ul>
     <Link to="/cart" className="ml-auto">
     <ButtonContainer>
        <span className="mr-2">
        <i className="fa fa-cart-plus"></i>
        My cart
        </span>

      </ButtonContainer>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper=styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    
}

`