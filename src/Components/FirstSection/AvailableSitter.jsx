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
        height: 80vh;
    }
`
const ProfilePicture = styled.img`
    border-radius: 100%;
    margin-right: 1rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const SitterProfileLink = styled.a`
    font-weight: 500;
    color: #5E20A4;
    margin-right: 1rem;
    font-size: 1.2vw;
    @media screen and (max-width: 768px){
        font-size: 3vw;
    `
const SitterHours = styled.p`
    font-size: 1.2vw;
    font-weight: 500;
    color: black;
    @media screen and (max-width: 768px){
        font-size: 3vw;
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