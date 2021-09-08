import React from 'react';
import styled from 'styled-components';
import playbutton from '../../assets/images/Playbutton.png';


const Demonstration = ()=>{
    const DemonstrationLink = styled.a`
        color: white;
        margin-left: 1.2%;
    `
    const DemonstrationWrapper = styled.div`
        display: flex;
        align-items: center;
        margin: 2%;
        @media screen and (max-width: 768px){
            width: 100%;
            justify-content: center;
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