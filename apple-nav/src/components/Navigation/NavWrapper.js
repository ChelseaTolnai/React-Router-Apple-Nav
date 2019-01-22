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
            navLinkData: [],
            subLinkData: [],
            navID: 0,
        }
    }

    componentDidMount = () => {
        this.setState({
            navLinkData,
            subLinkData: navLinkData[this.state.navID].subNavs,
        })
    }

    render() {
        return (
            <NavContainer>
                <Nav navLinkData={this.state.navLinkData} />
                <Route
                    path={`/:${this.state.navID}`}
                    render={props => <SubNav {...props} subLinkData={this.state.subLinkData} />}
                />
            </NavContainer>
        );
    }
}
  
export default NavWrapper;