import React from 'react';
import NavBar from './NavBar.jsx';
import AvailableSitter from './AvailableSitter.jsx';
import styled from 'styled-components';
import TextColumn from './TextColumn.jsx';
import image from '../../assets/images/Image.png';
import imageheader from '../../assets/images/ImageHeader.png';

const Banner = styled.div`
    background: url(${image}), linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);  
    width: 100%;
`
const MainDiv = styled.div`
    display: flex;
    color: white;
    padding: 5%;
    justify-content: space-between;
    max-height: 50vh;
`
const HeaderImage = styled.img`
    img:  url(${imageheader});
    margin: auto 10% auto 10%;
    @media only screen and (max-width: 768px){
        display:none;
    }
`
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