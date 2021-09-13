import React from 'react';
import Twitter from '../../../assets/images/Twitter.svg';
import Facebook from '../../../assets/images/Facebook.svg';
import Instagram from '../../../assets/images/Instagram.svg';
import { Socials, SocialMedia, Img } from './SocialsSectionStyle';

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