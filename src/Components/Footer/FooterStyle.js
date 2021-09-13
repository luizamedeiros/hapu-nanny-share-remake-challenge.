import styled from 'styled-components';

export const FooterElements = styled.ul`
    background-color: white;
    padding: 0;
    padding-bottom: 4%;
    @media screen and(max-width: 768px){
        justify-content: center;
    }
    @media screen and(min-width: 768px){
        display: flex;
        flex-direction: row;
        width: 100%;
    }
`
export const Copyright = styled.p`
    color: #3D3D3D;
    font-size: 0.87vw;
    margin: auto;
    @media screen and (max-width: 768px){
        font-size: 2.2vw;
    }

`
export const CopyrightSep = styled.hr`
    @media screen and (min-width: 768px){
        display: none;
    }
`