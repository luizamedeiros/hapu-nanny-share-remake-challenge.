import React from 'react';
import styled from 'styled-components';
import LinksSection from './LinksSection';
import SocialsSection from './SocialsSection';
import LogoSection from './LogoSection';

const FooterElements = styled.ul`

    height: 17.6vh;
    background-color: white;
    padding: 0;
    @media screen and(max-width: 768px){
        justify-content: center;
    }
    @media screen and(min-width: 768px){
        display: flex;
        width: 100%;
        flex-direction: row;
    }
`

const Footer = () => {
    return(       
        <FooterElements>
            <LogoSection/>
            <LinksSection/>
            <SocialsSection/>
        </FooterElements>
    );
}
export default Footer;