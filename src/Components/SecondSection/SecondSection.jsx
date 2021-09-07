import React from 'react';
import styled from 'styled-components';
import imageSec1 from '../../assets/images/ImageSection1.png';

const SectionWrapper = styled.div`
    display: flex;
    padding: 10vh 12.5% 10vh 12.5%;
    align-items: center;
    justify-content: space-between;
    height: 60vh;
    `
const TextSection = styled.div`
    width: 40%;
    text-align: left;
    padding-right: 6vw;
`
const SectionTitle = styled.h2`
    height: 10vh;
    margin-top: -2vh;
`
const SectionPitch = styled.p`
    width: 32vw;
    text-align: justify;
    margin-bottom: 5vh;
    `

const ReadyToStartLink = styled.a`
    font-size: 1.2 vw;
`
const StartImage = styled.img`
    width: 55%;
    margin: 0px;
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