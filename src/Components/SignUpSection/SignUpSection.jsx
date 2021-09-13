import React from 'react';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';

const SectionWrapper = styled.section`
    padding: 4%;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        line-height: 200%;
        margin: auto;
        padding-bottom: 5vh;
        width: 75%;
    }
`

function SignUpSection(){
    return(
        <SectionWrapper>
            <h3>Are you a parent without a nanny and looking to share?</h3>
            <p>
                Leave us your name and email and we'll update you as soon as 
                a share becomes available in your area!
            </p>
            <SignUpForm/>
        </SectionWrapper>
    );
}

export default SignUpSection;