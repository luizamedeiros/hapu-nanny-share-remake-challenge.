import styled from 'styled-components';

export const CarrouselDiv = styled.div`
    align-items:center;
    background-color: white;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px){
        height: 20vh;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 40vh;
        text-align: center;
    }
`
export const ProfilePicture = styled.img`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    margin: 0.5rem;
`
export const SitterHours = styled.h4`
    color: black;
    font-weight: 525;
    @media screen and (max-width: 768px){
        font-size: 2.7vw;
        padding-bottom: 0;
`

export const SitterLink = styled.a`
    @media screen and (max-width: 768px){
        width: 60%;
        font-size: 3vw;
        line-height: 4.77vh;
    }
`