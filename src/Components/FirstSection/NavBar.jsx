import React from 'react';
import logo from '../../assets/images/logo.svg';
import styled from 'styled-components';

    const Icon = styled.img`
        position: absolute;
        width: 48px;
        height: 64px;
        left: 20px;
        top: 0px;
        background: #00C88C;
        border-radius: 0px 0px 32px 32px;
    `
    const Nav = styled.nav`
        padding: 16px;
    `
    const UL = styled.ul`
        list-style: none;
        display: flex;
        top: calc(50% - 20px/2 - 2029px);
        align-items:center;
    `

    const List = styled.li`
        list-style: none;
        display: flex;
        flex-direction: column;
        padding-left: 2.5rem;
        line-height: 20px;
        &:nth-child(3){
            margin-right: 33%;
        }
        &:nth-child(1){
            margin-left: 1%;
        }
        @media screen and (max-width: 768px){
            &:nth-child(1), :nth-child(2), :nth-child(3),
            :nth-child(5){
                display:none;
            }
        }
    `
    const ListItem = styled.a`
        color: white;
        font-size: 14px;
        text-decoration: none;    
    `
    const HostBtn = styled.button`
        padding: 15px;
        background: #00A870;
        border-radius: 4px;
        border-style: none;
        color: white;
        text-decoration: none;
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
        <header>
            <Icon src={logo}/>
            <Nav>
                <UL>
                    <List><ListItem href="#">Create Your Nanny Share</ListItem></List>
                    <List><ListItem href="#">Browse Shares</ListItem></List>
                    <List><ListItem href="#">Our Story</ListItem></List>
                    <List><ListItem href="#"><HostBtn>Become a Nanny Share Host</HostBtn></ListItem></List>
                    <List><ListItem href="#">Sign In</ListItem></List>
                </UL>
            </Nav>
        </header>
    )
}
export default NavBar;