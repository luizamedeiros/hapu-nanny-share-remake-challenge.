import React from 'react';
import styled from 'styled-components';
import Twitter from '../../../assets/images/Twitter.svg';
import Facebook from '../../../assets/images/Facebook.svg';
import Instagram from '../../../assets/images/Instagram.svg';

const Socials = styled.div`
    display: flex;
    width: 33%;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 100%;
        margin: auto;
    }
`
const SocialMedia = styled.li`
    border: 1px solid #DFDFDF;
    border-radius: 100%;
    padding: 3px;
    text-align: center;
    width: 5.5vh;
    height: 5.5vh;
    margin: 1.17vw;
`
const Img = styled.img`
    padding: 5px;
`

const SocialsSection = ()=>{
    return(
        <Socials>
            <SocialMedia><a><Img src={Facebook}/></a></SocialMedia>
            <SocialMedia><a><Img src={Twitter}/></a></SocialMedia>
            <SocialMedia><a><Img src={Instagram}/></a></SocialMedia>
        </Socials>
    )
}
export default SocialsSection;