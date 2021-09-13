import React from 'react';
import NavBar from './NavBar';
import AvailableSitter from './AvailableSitter';
import TextColumn from './TextColumn';
import imageheader from '../../assets/images/ImageHeader.png';
import {Banner, MainDiv, HeaderImage} from './FirstSectionStyle';

const FirstSection = () =>{
    return(
        <>
        <Banner>
            <NavBar/>
            <MainDiv>      
                <TextColumn/>
                <HeaderImage src = {imageheader}/>
            </MainDiv>
        </Banner>
        <AvailableSitter/>
        </>
    );}
export default FirstSection;