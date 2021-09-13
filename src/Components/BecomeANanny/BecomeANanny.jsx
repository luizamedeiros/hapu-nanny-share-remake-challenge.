import React from 'react';
import styled from 'styled-components';
import Button from './ButtonDiv';

const SectionWrapper = styled.section`
    background-color: white;
    padding-top: 12.59vh;
    padding-bottom: 6vh;
`
const SectionTitle = styled.h2``
const SectionSubtitle = styled.p``
const SectionLink = styled.a`
    padding-top: 2.8vw;
`


const BecomeANanny = ()=>{
    return(
        <SectionWrapper>
            <SectionTitle>Become a nanny share host</SectionTitle>
            <SectionSubtitle>Takes less than 5 minutes to get started</SectionSubtitle>
            <Button/>
            <SectionLink href="#">Or browse local nanny-shares</SectionLink>
        </SectionWrapper>
    )
}

export default BecomeANanny;