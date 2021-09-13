import React from 'react';
import imageSec1 from '../../assets/images/ImageSection1.png';
import { SectionWrapper, TextSection, SectionTitle, SectionPitch, ReadyToStartLink, StartImage } from './SecondSectionStyle';

const SecondSection = () =>{
    return(
        <SectionWrapper>
            <TextSection>
                <SectionTitle>Share your home, {<br/>} nanny and costs</SectionTitle>
                <SectionPitch>
                    You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be,
                    well, fantastic?! If only it was easy to connect with other parents to share your costs? 
                    Well now it is, with Hapu. {<a>Hapu means tribe</a>} and it’s our foundational 3 tribal principles 
                    that empowers you to create and manage your own tribe. A tribe that together has the power 
                    to create new affordable solutions in childcare that work for you and your community.
                </SectionPitch>
                <ReadyToStartLink href="#">Ready to get started?</ReadyToStartLink>
            </TextSection>
            <StartImage src={imageSec1} alt="Example image of Hapu Nanny Share platform, showing a Nanny's weekly recurring fee, timetable, and rates."/>
        </SectionWrapper>
    );
} 
export default SecondSection;