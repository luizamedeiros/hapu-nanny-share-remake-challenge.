import styled from 'styled-components';

export const Icon = styled.img`
    background: #00C88C;
    border-radius: 0px 0px 32px 32px;
    height: 1.75vw;
    margin-left: 1%;
    padding: 2% 0.8% 1.2% 0.8%;
    @media screen and (max-width: 768px){
        margin-bottom: 5vh;
        margin-left: 3vh;
        height: 10vh;
        width: 3.5vw;
        padding: 5% 1.5% 1.2% 1.5%;
    }
`
export const List = styled.li`
    padding-left: 2.3vw;
    &:nth-child(3){
        margin-right: 40%;
    }
    &:nth-child(1){
        margin-left: 1%;
    }
    @media screen and (max-width: 768px){
        &:nth-child(1), :nth-child(2), :nth-child(3),
        :nth-child(5){
            display:none;
        }
        &:nth-child(4){
            margin-left: 40%;
        }
    }
`
export const ListItem = styled.a`
    color: white;
    font-size: 1.02vw;
    margin: 0;
    text-decoration: none;   
`
export const HostBtn = styled.button`
    background: #00A870;
    border-radius: 4px;
    border-style: none;
    color: inherit;
    font-size: inherit;
    padding: 1.10vw;
    text-decoration: inherit;
    width: 100%;
    &:hover{
        background-color: #027f55;
    }
    @media screen and (max-width: 768px){
        font-size: 2.5vw;
        margin-right: 5px;
        width: 130%;
    }  
`