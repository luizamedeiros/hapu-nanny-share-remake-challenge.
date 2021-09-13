import styled from 'styled-components';

export const ButtonDiv = styled.div`
    background-color: #5E20A4;
    border-radius: 4px;
    color: white;
    display: flex;
    height: 10.708vh;
    margin: auto auto 1.46vw auto; 
    padding: 0.5%;  
    width: 22.254vw;
    &:hover{
        cursor: pointer;
        size: 120%;
    }
    @media screen and (max-width: 768px){
        height: 10.70vh;
        margin-bottom: 4vw;
        padding: 3%;
        width: 84%;
    }

`
export const ButtonImage = styled.img`
    height: 4.7244vh;
    margin: auto 1.83vw;
    @media screen and (max-width: 768px){
        height: 6.5vh;
        margin: auto 4.8vw;
    }
`
export const ButtonText = styled.div`
    flex-direction: column;
    display: flex;
    margin-left: 0.1vw;
    padding-top: 7px;
    @media screen and (max-width: 768px){
        margin-left: 2vw;
    }
`
export const ButtonTitle = styled.p`
    color: inherit;
    display: flex;
    flex-direction: row;
    font-size: 1.17vw;
    line-height: 0px;
    margin-bottom: 2px;
    @media screen and (max-width: 768px){
        font-size: 3.3vw;
        justify-content:space-around;
        margin-bottom: 0px;
    }
`
export const ButtonSubtitle = styled.p`
    color: inherit;
    font-size: 0.87vw;
    line-height: 0px;
    text-align: left;
    @media screen and (max-width: 768px){
        font-size: 2.7vw;
        padding-bottom: 3.5vh;
    }

`