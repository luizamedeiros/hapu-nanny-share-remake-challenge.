import React, {useState} from 'react';
import styled from 'styled-components';
import {onFormSubmit} from '../../../api/onFormSubmit.js';

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

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return(
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
    )
}
export default SignUpForm;