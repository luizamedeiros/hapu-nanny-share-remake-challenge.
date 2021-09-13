import React from 'react';
import Button from './ButtonDiv';
import { SectionWrapper, SectionLink } from './BecomeANannyStyle';


const BecomeANanny = ()=>{
    return(
        <SectionWrapper>
            <h2>Become a nanny share host</h2>
            <p>Takes less than 5 minutes to get started</p>
            <Button/>
            <SectionLink href="#">Or browse local nanny-shares</SectionLink>
        </SectionWrapper>
    )
}

export default BecomeANanny;