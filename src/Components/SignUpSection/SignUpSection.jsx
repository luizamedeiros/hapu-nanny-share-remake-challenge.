import React from 'react';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';

const SectionTitle = styled.h3`
`
const SectionSubtitle = styled.p`
`
const SectionWrapper = styled.section`
    padding: 4%;
    @media screen and (max-width: 768px){
        width: 75%;
        margin: auto;
        line-height: 200%;
        padding-bottom: 5vh;
        display: flex;
        flex-direction: column;
    }
`

function SignUpSection(){
    return(
        <>
        <SectionWrapper>
            <SectionTitle>Are you a parent without a nanny and looking to share?</SectionTitle>
            <SectionSubtitle>
                Leave us your name and email and we'll update you as soon as 
                a share becomes available in your area!
            </SectionSubtitle>
            <SignUpForm/>
        </SectionWrapper>
        </>
    )
}

export default SignUpSection;