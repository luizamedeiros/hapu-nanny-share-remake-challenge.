import React from 'react';
import styled from 'styled-components';
import profilepic from '../../assets/images/ProfileImage.png';


const CarrouselWrapper = styled.div`
    background-color: white;
    display: flex;
    align-items:center;
    justify-content: center;
    @media screen and (min-width: 768px){
        height: 20vh;
    }
    @media screen and (max-width: 768px){
        height: 40vh;
        flex-direction: column;
        text-align: center;
    }
`
const ProfilePicture = styled.img`
    border-radius: 100%;
    margin: 0.5rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`
const SitterProfileLink = styled.a`
    `
const SitterHours = styled.h4`
    color: black;
    @media screen and (max-width: 768px){
        font-size: 3vw;
        padding-bottom: 0;
`
const AvailableSitter = () => {
    return(
        <CarrouselWrapper>
            <ProfilePicture src={profilepic}/>
            <SitterProfileLink href="#">Sarah’s day care available now in North Sydney</SitterProfileLink>
            <SitterHours>Wednesday, Thursday, Friday - 7:30 - 5:30</SitterHours>
        </CarrouselWrapper>
    );
}
export default AvailableSitter;