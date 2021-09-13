import React from 'react';
import playbutton from '../../../../assets/images/Playbutton.png';
import { DemonstrationLink, DemonstrationWrapper } from './DemonstrationStyle';

const Demonstration = ()=>{

    return(
        <DemonstrationWrapper>
            <img src={playbutton} alt="Image of a play button"/>
            <DemonstrationLink href="https://www.youtube.com/watch?v=lao2bxWgqOg&ab_channel=BenMarr" alt="Hapu Nanny Share video">
                See hapu in action (25 seconds)</DemonstrationLink>
        </DemonstrationWrapper>
    )
}
export default Demonstration;