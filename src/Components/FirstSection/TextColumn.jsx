import React from 'react';
import styled from 'styled-components';
import Demonstration from './Demonstration.jsx';

const MainTitle = styled.h1`
    display:flex;
    letter-spacing: 1px;
    text-align: justify;
    padding-top: 0.5vh;
    color:inherit;
    @media screen and (max-width: 768px){
        text-align: inherit;
    }

`
const Subtitle = styled.p`
    position: relative;
    display: flex;
    text-align: left;
    padding-bottom: 0.5vh;
    color:inherit;
    @media screen and (max-width: 768px){
        text-align: inherit;
    }
`
const TextDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    padding-bottom: 8%;
    @media screen and (max-width: 768px){
        width: 100%;
        justify-content: space-around;
        text-align: center;
    }
    @media screen and (min-width: 769px){
        width:50%;
        justify-content: space-between;

    }
`
const TextColumn = () =>{
    return(
        <TextDiv>
            <MainTitle>Easily create or join a local nanny share with Hapu</MainTitle>
            <Subtitle>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</Subtitle>
            <Demonstration/>
        </TextDiv>
    );
}
export default TextColumn;