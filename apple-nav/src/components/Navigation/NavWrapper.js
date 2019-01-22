import React from 'react';
import Nav from './Nav';
import SubNav from './SubNav';
import styled from 'styled-components';

const NavContainer = styled.div`
background-color: #313131;
color: #FFFFFF;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-size: 62.5%;
font-size: 0.9em;
`

const NavWrapper = () => {
    return (
        <NavContainer>
            <Nav />
            {/* <SubNav /> */}
        </NavContainer>
    );
  }
  
  export default NavWrapper;