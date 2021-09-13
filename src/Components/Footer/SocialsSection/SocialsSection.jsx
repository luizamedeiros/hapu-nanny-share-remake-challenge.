import React from 'react';
import styled from 'styled-components';
import Twitter from '../../../assets/images/Twitter.svg';
import Facebook from '../../../assets/images/Facebook.svg';
import Instagram from '../../../assets/images/Instagram.svg';

const Socials = styled.div`
    display: flex;
    width: 33%;
    justify-content: center;
    background: white;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const SocialMedia = styled.li`
    border: 1px solid #DFDFDF;
    border-radius: 100%;
    padding: 3px;
    width: 5.5vh;
    height: 5.5vh;
    margin: 1.17vw;
    @media screen and (max-width: 768px){
        width: 8.5vh;
        height: 8.5vh;
    }
`
const Img = styled.img`
    padding: 5px;
    @media screen and (max-width: 768px){
        padding: 2.8vw;
    }
`

const SocialsSection = ()=>{
    return(
        <Socials>
            <SocialMedia><a href="#"><Img src={Facebook}/></a></SocialMedia>
            <SocialMedia><a href="#"><Img src={Twitter}/></a></SocialMedia>
            <SocialMedia><a href="#"><Img src={Instagram}/></a></SocialMedia>
        </Socials>
    )
}
export default SocialsSection;