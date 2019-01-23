import React from 'react';
import styled from 'styled-components';

const SubNavsWrapper = styled.div`
    background-color: #F6F6F6;
    color: #333333;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 2% 0;
`
const SubNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

const SubNav = (props) => {
    const currentNav = props.navLinkData.find(
        item => item.mainNav.toLowerCase() === props.match.params.navID
    );
    return (
        <SubNavsWrapper>
            {currentNav.subNavs.map( item => 
                <SubNavContainer key={item.name}>
                    <span style={{ display: "flex", justifyContent: "center", height: "54px", width: "auto"}}>
                        <img src={item.img} alt="product logo" style={{ width: "40%", height: "100%"}}/>
                    </span>
                    {item.name}
                </SubNavContainer>)}
        </SubNavsWrapper>
    );
  }
  
  export default SubNav;