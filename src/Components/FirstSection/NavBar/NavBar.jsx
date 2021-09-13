import React from 'react';
import logo from '../../../assets/images/logo.svg';
import { Icon, List, ListItem, HostBtn } from './NavBarStyle';

const NavBar = () =>{
    return(
        <nav>
        <Icon src={logo}/>
            <ul>
                <List><ListItem href="#">Create Your Nanny Share</ListItem></List>
                <List><ListItem href="#">Browse Shares</ListItem></List>
                <List><ListItem href="#">Our Story</ListItem></List>
                <List><ListItem href="#"><HostBtn>Become a Nanny Share Host</HostBtn></ListItem></List>
                <List><ListItem href="#">Sign In</ListItem></List>
            </ul>
        </nav>
    )
}
export default NavBar;