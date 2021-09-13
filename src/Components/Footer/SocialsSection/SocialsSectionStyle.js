import styled from 'styled-components';

export const Socials = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    width: 33%;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const SocialMedia = styled.li`
    border: 1px solid #DFDFDF;
    border-radius: 100%;
    height: 5.5vh;
    margin: 1.17vw;
    padding: 3px;
    width: 5.5vh;
    @media screen and (max-width: 768px){
        width: 8.5vh;
        height: 8.5vh;
    }
`
export const Img = styled.img`
    padding: 5px;
    @media screen and (max-width: 768px){
        padding: 2.8vw;
    }
`
