import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {onFormSubmit} from '../../../api/onFormSubmit.js';
import ValidateInput from '../../../contexts/ValidateInput.js';

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
    const [canSubmit, setCanSubmit] = useState(false);
    const validate = useContext(ValidateInput);

    function validateInput(e){
        const checkEmail = e.target.value;
        const validEmail = validate(checkEmail);
        const newState = {...canSubmit, validEmail}
        setCanSubmit(newState);
    }
    function handleSubmit(){
        if(canSubmit){
            onFormSubmit({'name': name, 'email': email});
        }
        else{
            window.alert("It seems like the email format you used isn't valid. Please double check and try again.")
        }
    }

    return(
        <FormWrapper
            onSubmit={(e)=>{
                e.preventDefault();
                handleSubmit();
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
                validateInput(e);
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