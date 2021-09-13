import React from 'react';
import Calendar from '../../../assets/images/Union.png';
import {ButtonDiv, ButtonImage, ButtonText, ButtonTitle, ButtonSubtitle} from './ButtonDivStyle'


const Button = ()=>{
    return(
    <ButtonDiv>
        <ButtonImage src = {Calendar} alt="Calendar icon"/>
        <ButtonText>
            <ButtonTitle>Create Your Nanny Share</ButtonTitle>
            <ButtonSubtitle>Takes less than 5 minutes</ButtonSubtitle>
        </ButtonText>
    </ButtonDiv>
    )}

export default Button;