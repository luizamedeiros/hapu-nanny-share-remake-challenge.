import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

const SectionTitle = styled.h3`
`
const SectionSubtitle = styled.p`
`
const FormWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-content: center;
        flex-wrap: wrap;
    }
`
const SendButton = styled.button`
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
const InputWrapper = styled.div`
    margin: 1.5vw;
`

const SignUpForm = () =>{
    return(
        <>
        <SectionWrapper>
            <SectionTitle>Are you a parent without a nanny and looking to share?</SectionTitle>
            <SectionSubtitle>
                Leave us your name and email and we'll update you as soon as 
                a share becomes available in your area!
            </SectionSubtitle>
            <FormWrapper>
                <InputWrapper>
                <TextField 
                id="name"
                name="name"
                type="text"
                multiline = {true}
                variant="filled"
                label="Your name"/>
                </InputWrapper>
                <InputWrapper>
                <TextField
                id="email"
                name="email"
                type="email"
                variant="filled"
                label="Your email"/>
                </InputWrapper>
                <SendButton>Send</SendButton>
            </FormWrapper>
        </SectionWrapper>
        </>
    )
}

export default SignUpForm;