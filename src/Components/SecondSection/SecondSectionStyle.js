import styled from 'styled-components';

export const SectionWrapper = styled.section`
    align-items: center;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        padding: 5vh 0;
        flex-direction: column-reverse;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
    }
    `
export const TextSection = styled.div`
    padding-right: 6vw;
    text-align: left;
    width: 40%;
    @media screen and (max-width: 768px){
        margin: 8vh 0vh 8vh 0vh;
        padding: 0;
        width: 100%;
        text-align: center;
    }
`
export const SectionTitle = styled.h2`
    margin-top: -2vh;
`
export const SectionPitch = styled.p`
    margin-bottom: 5vh;
    text-align: inherit;
    width: 32vw;
    @media screen and (max-width: 768px){
        margin: auto;
        width: 75%;
    }
`

export const ReadyToStartLink = styled.a`
    font-size: 1.2 vw;
    padding: 10vh 0 10vh 0;
`
export const StartImage = styled.img`
    margin: 0px;
    width: 50%;
    @media screen and(max-width: 768px){
        margin: 15vh 0vh 0vh 0vh;
    }

`
