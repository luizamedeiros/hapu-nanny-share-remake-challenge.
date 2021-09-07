import React from 'react';
import styled from 'styled-components';
import playbutton from '../../assets/images/Playbutton.png';

const Demonstration = ()=>{
    const DemonstrationLink = styled.a`
        font-size: 1.2vw;
        letter-spacing: 0px;
        margin-left: 3%;
        color: white;
        @media screen and (max-width: 768px){
            font-size: 3vw;
    `
    const DemonstrationWrapper = styled.div`
        text-align: left;
        display: flex;
        align-items: center;
        padding-bottom: 0.5vh;
        @media screen and (max-width: 768px){
            text-align: center;
            width: 70%;
            margin: auto;
        }
    `
    return(
        <DemonstrationWrapper>
            <img src={playbutton}/>
            <DemonstrationLink href="https://www.youtube.com/watch?v=lao2bxWgqOg&ab_channel=BenMarr" alt="Hapu Nanny Share video">
                See hapu in action (25 seconds)</DemonstrationLink>
        </DemonstrationWrapper>
    )
}
export default Demonstration;