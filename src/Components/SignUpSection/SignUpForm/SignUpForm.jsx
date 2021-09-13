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
const Input = styled.input`
    width: 16.98vw;
    height: 48px;
    margin: 0.8vw;
    border: 1px solid #DFDFDF;
    @media screen and (max-width: 768px){
        width: 91%;
    }
`
const SendButton = styled.button`
    height: 48px;
    padding: 1%  2%;
    @media screen and (max-width: 768px){
        width: 91%;
    }
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
            <Input
                value={name}
                onChange={(e)=>{
                    setName(e.target.value);
                }} 
                id="name"
                name="name"
                type="text"
                variant="filled"
                placeholder={"Your name"}
                required/>

            <Input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
                validateInput(e);
            }} 
            id="email"
            name="email"
            type="email"
            variant="filled"
            placeholder="Your email"
            required/>
            <SendButton>
                Send
            </SendButton>
            </FormWrapper>
    )
}
export default SignUpForm;