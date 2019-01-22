import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { navLinkData } from '../../data/NavData'

const MainNavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 1% 8% 1.2%;
`
const NavIcon = styled.i`
    font-size: 1.3em;
`
const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${() => navLink.color};
`
const navLink = {
    color: "#FFFFFF",
};

const activeNavLink = {
    color: "#B6B6B6",
};

const Nav = () => {
    return (
        <MainNavContainer>
            <StyledNavLink to=""><NavIcon className="fa fa-apple"></NavIcon></StyledNavLink>
            {navLinkData.map( item => 
                <StyledNavLink 
                    to="" 
                    key={item.mainNav} 
                >
                    {item.mainNav}
                </StyledNavLink>
            )}
            <StyledNavLink to=""><NavIcon className="fa fa-search"></NavIcon></StyledNavLink>
            <StyledNavLink to=""><NavIcon className="fa fa-shopping-bag"></NavIcon></StyledNavLink>
        </MainNavContainer>
    );
  }
  
  export default Nav;