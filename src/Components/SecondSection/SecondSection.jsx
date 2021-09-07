import React from 'react';
import styled from 'styled-components';
import imageSec1 from '../../assets/images/ImageSection1.png';

const SectionWrapper = styled.div`
    display: flex;
    padding: 10vh 12.5% 10vh 12.5%;
    align-items: center;
    justify-content: space-between;
    height: 60vh;
    @media screen and (max-width: 768px){
        padding: 5vh 0 0 0;
        flex-direction: column-reverse;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
    }
    `
const TextSection = styled.div`
    width: 40%;
    text-align: left;
    padding-right: 6vw;
    @media screen and (max-width: 768px){
        margin: 8vh 0vh 8vh 0vh;
        padding: 0;
        width: 100%;
        text-align: center;
    }
`
const SectionTitle = styled.h2`
    height: 10vh;
    margin-top: -2vh;
`
const SectionPitch = styled.p`
    width: 32vw;
    text-align: justify;
    margin-bottom: 5vh;
    @media screen and (max-width: 768px){
        width: 75%;
        text-align: center;
        margin: auto;
        line-height: 200%;
        padding-bottom: 5vh;
    }
`

const ReadyToStartLink = styled.a`
    font-size: 1.2 vw;
    padding: 10vh 0 10vh 0;
`
const StartImage = styled.img`
    width: 53%;
    margin: 0px;
    @media screen and(max-width: 768px){
        margin: 15vh 0vh 0vh 0vh;
    }

`

const SecondSection = () =>{
    return(
        <SectionWrapper>
            <TextSection>
                <SectionTitle>Share your home, {<br/>} nanny and costs</SectionTitle>
                <SectionPitch>
                    You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be,
                    well, fantastic?! If only it was easy to connect with other parents to share your costs? 
                    Well now it is, with Hapu. {<a>Hapu means tribe </a>} and it’s our foundational 3 tribal principles 
                    that empowers you to create and manage your own tribe. A tribe that together has the power 
                    to create new affordable solutions in childcare that work for you and your community.
                </SectionPitch>
                <ReadyToStartLink href="#">Ready to get started?</ReadyToStartLink>
            </TextSection>
            <StartImage src={imageSec1}/>
        </SectionWrapper>
    );
} 
export default SecondSection;