import React from 'react';
import styled from 'styled-components';

const SubNavContainer = styled.div`
    background-color: #F6F6F6;
    color: #333333;
`

const target = 0;

const SubNav = (props) => {
    console.log(props.match.params.navID)
    return (
        <SubNavContainer>
            {props.navLinkData[target].subNavs.map( item => 
                <div key={item.name}>{item.img} {item.name}</div>)}
        </SubNavContainer>
    );
  }
  
  export default SubNav;