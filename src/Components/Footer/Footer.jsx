import React from 'react';
import styled from 'styled-components';
import LinksSection from './LinksSection';
import SocialsSection from './SocialsSection';
import LogoSection from './LogoSection';

const FooterElements = styled.ul`
    background-color: white;
    padding: 0;
    padding-bottom: 4%;
    @media screen and(max-width: 768px){
        justify-content: center;
    }
    @media screen and(min-width: 768px){
        display: flex;
        width: 100%;
        flex-direction: row;
    }
`
const Copyright = styled.p`
    font-size: 0.87vw;
    margin: auto;
    color: #3D3D3D;
    @media screen and (max-width: 768px){
        font-size: 2.2vw;
    }

`
const CopyrightSep = styled.hr`
    @media screen and (min-width: 768px){
        display: none;
    }
`

const Footer = () => {
    return(
        <>       
            <FooterElements>
                <LogoSection/>
                <LinksSection/>
                <SocialsSection/>
                <CopyrightSep/>
                <Copyright>Copyright © 2017 Hapu PTY Limited All rights reserved</Copyright>
            </FooterElements>
        </>
    );
}
export default Footer;