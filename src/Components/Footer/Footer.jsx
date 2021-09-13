import React from 'react';
import LinksSection from './LinksSection';
import SocialsSection from './SocialsSection';
import LogoSection from './LogoSection';
import {FooterElements, Copyright, CopyrightSep} from './FooterStyle'


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