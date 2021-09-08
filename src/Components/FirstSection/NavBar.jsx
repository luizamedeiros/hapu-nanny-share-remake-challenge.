import React from 'react';
import logo from '../../assets/images/logo.svg';
import styled from 'styled-components';

    const Icon = styled.img`
        width: 48px;
        height: 64px;
        left: 20px;
        top: 0px;
        background: #00C88C;
        border-radius: 0px 0px 32px 32px;
    `
    const Nav = styled.nav`
        display: flex;
        width: 100%;
    `
    const UL = styled.ul`
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        margin: 0;
        padding: 1%;
    `

    const List = styled.li`
        list-style: none;
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
    const ListItem = styled.a`
        color: white;
        font-size: 1.02vw;
        margin: 0;
        text-decoration: none;   
    `
    const HostBtn = styled.button`
        padding: 1.10vw;
        background: #00A870;
        border-radius: 4px;
        border-style: none;
        color: inherit;
        font-size: inherit;
        text-decoration: inherit;
        width: 100%;
        &:hover{
            background-color: #027f55;
        }
        @media screen and (max-width: 768px){
            width: 130%;
            margin-right: 5px;
            font-size: 2.5vw;
        }  
    `

const NavBar = () =>{
    return(
        <Nav>
        <Icon src={logo}/>
            <UL>
                <List><ListItem href="#">Create Your Nanny Share</ListItem></List>
                <List><ListItem href="#">Browse Shares</ListItem></List>
                <List><ListItem href="#">Our Story</ListItem></List>
                <List><ListItem href="#"><HostBtn>Become a Nanny Share Host</HostBtn></ListItem></List>
                <List><ListItem href="#">Sign In</ListItem></List>
            </UL>
        </Nav>
    )
}
export default NavBar;