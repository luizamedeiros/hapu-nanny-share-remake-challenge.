import React from 'react';
import styled from 'styled-components';
import ImageSec3 from '../../assets/images/ImageSection3.png'

const SectionWrapper = styled.section`
    align-items: center;    
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 5vh 0;
        width: 100%;
        height: 100%;
}
`
const PaymentImage = styled.img`
    width: 40%;
    @media screen and (max-width: 768px){
        width: 80vw;
    }

`
const TextSection = styled.div`
    text-align: start;
    width: 32vw;
    padding-left: 3.2vw;
    @media screen and (max-width: 768px){
        margin: 8vh 0vh 8vh 0vh;
        padding: 0;
        width: 100%;
        text-align: center;
}
`
const SectionTitle = styled.h2`
margin-top: 0;
    @media screen and (min-width: 768px){
    text-align: inherit;
    }
`
const SectionSubtitle = styled.p`
    @media screen and (max-width: 768px){
        text-align: inherit;
        width: 75%;
        margin: auto;
    }
`
const SectionLink = styled.a`
`

const PaymentSection = () => {
    return(
    <SectionWrapper>
        <PaymentImage src={ImageSec3}/>
        <TextSection>
            <SectionTitle>Shared payments made simple</SectionTitle>
            <SectionSubtitle>
            Sometimes it’s hard enough just sharing a restaurant bill. 
            Try sharing that bill week in, week out and you might encounter more than a few snares. 
            But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. 
            You need never talk money or who owes what.
            </SectionSubtitle>
            <SectionLink href="#">
            Read how Bridget’s share (without Hapu) ended over $15
            </SectionLink>
        </TextSection>
    </SectionWrapper>
        )
}
export default PaymentSection;