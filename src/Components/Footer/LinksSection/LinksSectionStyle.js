import styled from 'styled-components';

export const Links = styled.div`
    display: flex;
    justify-content: center;
    width: 33%;
    @media screen and (max-width: 768px){
        flex-wrap: wrap;
        margin: auto;
        padding: 2%;
        width: 60%;
    }
`
export const Link = styled.li`
    margin: auto 2.2%;
    @media screen and (max-width: 768px){
        flex: 40%;
        margin-top: 5%;
        padding: 1%;
    }
`
export const Item = styled.a`
    color: black;
    text-decoration: none;
`