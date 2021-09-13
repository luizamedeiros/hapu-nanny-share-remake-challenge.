import React from 'react';
import styled from 'styled-components';
import fullLogo from '../../../assets/images/fullLogo.svg'

const LogoContainer = styled.div`
    display: flex;
    width: 28%;
    margin-left: 5%;
    @media screen and (max-width: 768px){
        width: 100%;
        justify-content: center;
        margin: auto;
    }
`
const Logo = styled.img`
    margin-left: 5%;
    padding: auto 17%;
    @media screen and (max-width: 768px){
        margin: auto;
    }
`

const LogoSection = ()=>{
    return(
    <LogoContainer>
        <Logo src={fullLogo}/>
    </LogoContainer>
    )
}
export default LogoSection;