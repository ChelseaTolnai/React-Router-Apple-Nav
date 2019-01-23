import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainNavContainer = styled.div`
    background-color: #313131;
    color: #FFFFFF;
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
    color: #FFFFFF;
    :hover {
        color: #B6B6B6;
    }
`

const Nav = (props) => {
    return (
        <MainNavContainer>
            <StyledNavLink to='/'><NavIcon className="fa fa-apple"></NavIcon></StyledNavLink>
            {props.navLinkData.map( item => 
                <StyledNavLink 
                    to={`/${item.mainNav.toLowerCase()}`} 
                    key={item.mainNav} 
                    activeStyle={{
                        color: "#B6B6B6"
                    }}
                >
                    {item.mainNav}
                </StyledNavLink>
            )}
            <StyledNavLink to='/'>Support</StyledNavLink>
            <StyledNavLink to='/'><NavIcon className="fa fa-search"></NavIcon></StyledNavLink>
            <StyledNavLink to='/'><NavIcon className="fa fa-shopping-bag"></NavIcon></StyledNavLink>
        </MainNavContainer>
    );
  }
  
  export default Nav;