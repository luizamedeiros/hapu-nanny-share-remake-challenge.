import React from 'react';
import NavBar from './NavBar';
import AvailableSitter from './AvailableSitter';
import TextColumn from './TextColumn';
import imageheader from '../../assets/images/ImageHeader.png';
import {Banner, MainDiv, HeaderImage} from './FirstSectionStyle';

const FirstSection = () =>{
    return(
        <>
        <Banner alt="Photograph of family in kitchen ">
            <NavBar/>
            <MainDiv>      
                <TextColumn/>
                <HeaderImage src = {imageheader} alt="Illustration of nanny share notification, showing a succesful match between nanny and family."/>
            </MainDiv>
        </Banner>
        <AvailableSitter/>
        </>
    );}
export default FirstSection;