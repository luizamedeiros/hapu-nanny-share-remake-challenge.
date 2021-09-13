import React, {useState, useContext} from 'react';
import {onFormSubmit} from '../../../api/onFormSubmit.js';
import ValidateInput from '../../../contexts/ValidateInput.js';
import { FormWrapper, Input, SendButton } from './SignUpFormStyle.js';

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