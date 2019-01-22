import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #FFFFFF;
    margin: 0 2%;
`
// const navLink = {
//     color: "#FFFFFF",
// };

// const activeNavLink = {
//     color: "#B6B6B6",
// };

const Nav = () => {

    return (
        <div>
            <StyledNavLink to=""><i className="fa fa-apple"></i></StyledNavLink>
            <StyledNavLink to="">Mac</StyledNavLink>
            <StyledNavLink to="">iPad</StyledNavLink>
            <StyledNavLink to="">iPhone</StyledNavLink>
            <StyledNavLink to="">Watch</StyledNavLink>
            <StyledNavLink to="">TV</StyledNavLink>
            <StyledNavLink to="">Music</StyledNavLink>
            <StyledNavLink to="">Support</StyledNavLink>
            <StyledNavLink to=""><i className="fa fa-search"></i></StyledNavLink>
            <StyledNavLink to=""><i className="fa fa-shopping-bag"></i></StyledNavLink>
        </div>
    );
  }
  
  export default Nav;