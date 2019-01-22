import React from 'react';
import Nav from './Nav';
import SubNav from './SubNav';
import styled from 'styled-components';

const NavContainer = styled.div`
background-color: #313131;
color: #FFFFFF;
`

const NavWrapper = () => {
    return (
        <NavContainer>
            <Nav />
            <SubNav />
        </NavContainer>
    );
  }
  
  export default NavWrapper;