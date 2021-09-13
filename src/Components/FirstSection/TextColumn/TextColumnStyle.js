import styled from 'styled-components';

export const MainTitle = styled.h1`
    color:inherit;
    display:flex;
    letter-spacing: 1px;
    padding-top: 0.5vh;
    text-align: start;
    @media screen and (max-width: 768px){
        text-align: inherit;
    }
`
export const Subtitle = styled.p`
    color:inherit;
    display: flex;
    padding-bottom: 0.5vh;
    position: relative;
    text-align: left;
    @media screen and (max-width: 768px){
        text-align: inherit;
    }
`
export const TextDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    padding-bottom: 8%;
    @media screen and (max-width: 768px){
        justify-content: space-around;
        width: 100%;
        text-align: center;
    }
    @media screen and (min-width: 769px){
        justify-content: space-between;
        width:50%;
    }
`
