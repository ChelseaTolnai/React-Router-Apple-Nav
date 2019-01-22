import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import SubNav from './SubNav';
import styled from 'styled-components';
import { navLinkData } from '../../data/NavData'

const NavContainer = styled.div`
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-size: 62.5%;
font-size: 0.9em;
`

class NavWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinkData,
        }
    }

    render() {
        return (
            <NavContainer>
                <Route
                    path={'/'}
                    render={props => 
                    <Nav {...props} navLinkData={this.state.navLinkData}/>}
                />
                <Route
                    exact
                    path={'/:navID'}
                    render={props => 
                    <SubNav {...props} navLinkData={this.state.navLinkData} />}
                />
            </NavContainer>
        );
    }
}
  
export default NavWrapper;