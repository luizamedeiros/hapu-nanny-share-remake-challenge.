import React from 'react';
import Demonstration from './Demonstration';
import { Experiment, Variant } from "@marvelapp/react-ab-test";
import { MainTitle, Subtitle, TextDiv } from './TextColumnStyle';

const TextColumn = () =>{
    return(
        <TextDiv>
            <Experiment name="Landing page test">
                <Variant name="Design version">
                    <MainTitle>Easily create or join a local nanny share with Hapu</MainTitle>
                    <Subtitle>
                        Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, 
                        affordable solutions in childcare.
                    </Subtitle>
                </Variant>
                <Variant name="Alternate version">
                    <MainTitle>Create the childcare you need at a price you can afford</MainTitle>
                    <Subtitle>
                    Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.
                    </Subtitle>
                </Variant>
            </Experiment>
            <Demonstration/>
        </TextDiv>
    );
}
export default TextColumn;