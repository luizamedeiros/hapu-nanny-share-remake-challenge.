import styled from 'styled-components';

export const SectionTitle = styled.h3`
    padding-top: 1.46vw;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 4.6vw;
        width: 75%;
        margin: 3.7vh auto 2.5vh auto;
    }
`
export const SectionSubtitle = styled.p`
    margin: auto;
    width: 60%;
    @media screen and (max-width: 768px){
        text-align: inherit;
        width: 91%;
        margin: auto;
    }
`
export const SectionImage = styled.img`
    width: 15vw;
    @media screen and (max-width: 768px){
        width: 60vw;
    }
`
