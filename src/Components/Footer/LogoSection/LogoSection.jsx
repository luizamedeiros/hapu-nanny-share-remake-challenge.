import React from 'react';
import fullLogo from '../../../assets/images/fullLogo.svg'
import { Logo, LogoContainer } from './LogoSectionStyle';

const LogoSection = ()=>{
    return(
    <LogoContainer>
        <Logo src={fullLogo}/>
    </LogoContainer>
    )
}
export default LogoSection;