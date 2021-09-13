import React from 'react';
import fullLogo from '../../../assets/images/fullLogo.svg'
import { Logo, LogoContainer } from './LogoSectionStyle';

const LogoSection = ()=>{
    return(
    <LogoContainer>
        <Logo src={fullLogo} alt="Hapu Nanny Share logo"/>
    </LogoContainer>
    )
}
export default LogoSection;