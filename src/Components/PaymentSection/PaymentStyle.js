import styled from 'styled-components';

export const SectionWrapper = styled.section`
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
export const PaymentImage = styled.img`
    width: 40%;
    @media screen and (max-width: 768px){
        width: 80vw;
    }

`
export const TextSection = styled.div`
    padding-left: 3.2vw;
    text-align: start;
    width: 32vw;
    @media screen and (max-width: 768px){
        margin: 8vh 0vh 8vh 0vh;
        padding: 0;
        text-align: center;
        width: 100%;
}
`
export const SectionTitle = styled.h2`
    margin-top: 0;
    @media screen and (min-width: 768px){
    text-align: inherit;
    }
`
export const SectionSubtitle = styled.p`
    @media screen and (max-width: 768px){
        margin: auto;
        text-align: inherit;
        width: 75%;
    }
`