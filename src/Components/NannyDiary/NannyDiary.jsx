import React from 'react';
import styled from 'styled-components';
import ImageSec5 from '../../assets/images/ImageSection5.png';

const SectionWrapper = styled.section``
const TextSection = styled.div``
const SectionTitle = styled.h3`
    padding-top: 1.46vw;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 5.6vw;
    }
`
const SectionSubtitle = styled.p`
    width: 60%;
    margin: auto;
    @media screen and (max-width: 768px){
        text-align: inherit;
        width: 91%;
        margin: auto;
    }
`
const SectionImage = styled.img`
    width: 15vw;
    @media screen and (max-width: 768px){
        width: 60vw;
    }
`
const NannyDiary = () => {
    return(
        <SectionWrapper>
            <TextSection>
                <SectionImage src={ImageSec5}/>
                <SectionTitle>Coming soon: Nanny Share Daily Diary!</SectionTitle>
                <SectionSubtitle>
                With the Hapu daily diary your nanny will be able to update you 
                and your sharers with photos and commentary of the day. You and sharers will receive 
                notifications and you’ll be able to login to view the daily adventures for your little ones. 
                We can’t wait!
                </SectionSubtitle>
            </TextSection>
        </SectionWrapper>
    )
}
export default NannyDiary;