import React, {useState} from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h3`
`
const SectionSubtitle = styled.p`
`
const FormWrapper = styled.form`
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

function SignUpForm({onFormSubmit}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return(
        <>
        <SectionWrapper>
            <SectionTitle>Are you a parent without a nanny and looking to share?</SectionTitle>
            <SectionSubtitle>
                Leave us your name and email and we'll update you as soon as 
                a share becomes available in your area!
            </SectionSubtitle>
            <FormWrapper
            onSubmit={(e)=>{
                e.preventDefault();
                onFormSubmit({name, email});
            }}
            >
            <input
                value={name}
                onChange={(e)=>{
                    setName(e.target.value);
                }} 
                id="name"
                name="name"
                type="text"
                variant="filled"
                label="Your name"
                required/>

                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }} 
                id="email"
                name="email"
                type="email"
                variant="filled"
                label="Your email"
                required/>
                <SendButton>
                    Send
                </SendButton>
            </FormWrapper>
        </SectionWrapper>
        </>
    )
}

export default SignUpForm;