import React from 'react';
import styled from 'styled-components';
import ImageSec4 from '../../assets/images/ImageSection4.png';

const SectionWrapper = styled.section``
const TextSection = styled.div``
const SectionTitle = styled.h2``
const SectionSubtitle = styled.p`
    width: 55%;
    margin: auto;
    @media screen and (max-width: 768px){
        text-align: inherit;
        width: 75%;
        margin: auto;
    }
`
const SectionLink = styled.a``
const SectionImage = styled.img`
    margin-top: 6.9vh;
    height: 55vh;
    @media screen and (max-width: 768px){
        display:none;
    }
`
const Framework = () => {
    return(
        <SectionWrapper>
            <TextSection>
                <SectionTitle>A framework built for the long term</SectionTitle>
                <SectionSubtitle>
                    Childcare is for the long term. 
                    And you need a framework you can count on that gives 
                    your share long term viability and success.
                    That’s why we’ve defined Hapu around our three tribal principles; 
                    clearly defined process, 
                    transparency over money and equality of participation.
                </SectionSubtitle>
                <SectionLink href="#">Read how Hapu’s tribal background defines our app </SectionLink>
                <SectionImage src={ImageSec4}/>
            </TextSection>
        </SectionWrapper>
    )
}
export default Framework;