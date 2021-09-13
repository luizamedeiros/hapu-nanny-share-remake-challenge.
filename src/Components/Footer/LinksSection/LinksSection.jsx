import React from 'react';
import styled from 'styled-components';

const Links = styled.div`
    display: flex;
    justify-content: center;
    width: 33%;
    @media screen and (max-width: 768px){
        width: 60%;
        padding: 2%;
        margin: auto;
        flex-wrap: wrap;
    }
`
const Link = styled.li`
    margin: auto 2.2%;
    @media screen and (max-width: 768px){
        flex: 40%;
        padding: 1%;
        margin-top: 5%;
    }
    
    
`
const Item = styled.a`
    text-decoration: none;
    color: black;
`
const LinksSection = ()=>{
     return(
    <Links>
        <Link><Item href="#">Share Your Nanny</Item></Link>
        <Link><Item href="#">Our Story</Item></Link>    
        <Link><Item href="#">Blog</Item></Link>
        <Link><Item href="#"> Terms & Privacy</Item></Link>
    </Links>
)}
export default LinksSection;