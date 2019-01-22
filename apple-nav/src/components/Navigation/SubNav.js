import React from 'react';
import styled from 'styled-components';

const SubNavContainer = styled.div`
    background-color: #F6F6F6;
    color: #333333;
`

const SubNav = (props) => {
    return (
        <SubNavContainer>
            {props.subLinkData.map( item => 
                <div>{item.img} {item.name}</div>)}
        </SubNavContainer>
    );
  }
  
  export default SubNav;