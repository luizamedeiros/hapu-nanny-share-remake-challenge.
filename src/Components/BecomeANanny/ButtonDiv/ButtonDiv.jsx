import React from 'react';
import styled from 'styled-components';
import Calendar from '../../../assets/images/Union.png';


const ButtonDiv = styled.div`
    margin: auto auto 1.46vw auto; 
    padding: 0.5%;  
    background-color: #5E20A4;
    width: 22.254vw;
    border-radius: 4px;
    height: 10.708vh;
    display: flex;
    color: white;
    &:hover{
        cursor: pointer;
        size: 120%;
    }
    @media screen and (max-width: 768px){
        width: 84%;
        padding: 3%;
        height: 10.70vh;
        margin-bottom: 4vw;
    }

`
const ButtonImage = styled.img`
    height: 4.7244vh;
    margin: auto 1.83vw;
    @media screen and (max-width: 768px){
        margin: auto 4.8vw;
        height: 6.5vh;
    }
`
const ButtonText = styled.div`
    padding-top: 7px;
    display: flex;
    flex-direction: column;
    margin-left: 0.1vw;
    @media screen and (max-width: 768px){
        margin-left: 2vw;
    }
`
const ButtonTitle = styled.p`
    font-size: 1.17vw;
    line-height: 0px;
    color: inherit;
    display: flex;
    flex-direction: row;
    margin-bottom: 2px;
    @media screen and (max-width: 768px){
        font-size: 3.3vw;
        margin-bottom: 0px;
        justify-content:space-around;
    }
`
const ButtonSubtitle = styled.p`
    font-size: 0.87vw;
    color: inherit;
    line-height: 0px;
    text-align: left;
    @media screen and (max-width: 768px){
        font-size: 2.7vw;
        padding-bottom: 3.5vh;
    }

`
const Button = ()=>{
    return(
    <ButtonDiv>
        <ButtonImage src = {Calendar}/>
        <ButtonText>
            <ButtonTitle>Create Your Nanny Share</ButtonTitle>
            <ButtonSubtitle>Takes less than 5 minutes</ButtonSubtitle>
        </ButtonText>
    </ButtonDiv>
    )}

export default Button;