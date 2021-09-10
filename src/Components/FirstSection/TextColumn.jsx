import React from 'react';
import styled from 'styled-components';
import Demonstration from './Demonstration.jsx';
import { Experiment, Variant } from "@marvelapp/react-ab-test";

const MainTitle = styled.h1`
    display:flex;
    letter-spacing: 1px;
    text-align: start;
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
            <Experiment name="Landing page test">
                <Variant name="Design version">
                    <MainTitle>Easily create or join a local nanny share with Hapu</MainTitle>
                    <Subtitle>
                        Hapu is Airbnb for nanny share. 
                        Share your home, nanny and costs and create new flexible, 
                        affordable solutions in childcare.
                    </Subtitle>
                </Variant>
                <Variant name = "Alternate version">
                    <MainTitle>Create the childcare you need at a price you can afford</MainTitle>
                    <Subtitle>
                        Connect with other local families to share a nanny from as low as $10.00/hr each. 
                        Create your family profile today to get started.
                    </Subtitle>
                </Variant>
            </Experiment>
            <Demonstration/>
            
        </TextDiv>
    );
}
export default TextColumn;