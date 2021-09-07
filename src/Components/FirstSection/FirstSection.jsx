import React from 'react';
import NavBar from './NavBar.jsx';
import Demonstration from './Demonstration.jsx';
import AvailableSitter from './AvailableSitter.jsx';
import styled from 'styled-components';
import image from '../../assets/images/Image.png';
import imageheader from '../../assets/images/ImageHeader.png';

const Banner = styled.div`
    background: url(${image}), linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);  
    width: 100%;
`

const MainDiv = styled.div`
    display: flex;
    padding: 8%;
    color: white;
    justify-content: space-between;
    max-height: 50vh;
`
const FirstColumn = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    @media screen and (max-width: 767px){
        width: 100%;
        justify-content: center;
    }

    @media screen and (min-width: 768px){
        width:50%;
        justify-content: space-around;
        text-align: center;
    }
`
const MainTitle = styled.h1`
    display:flex;
    letter-spacing: -1px;
    text-align: justify;
    padding-top: 0.5vh;
`
const Subtitle = styled.p`
    position: relative;
    display: flex;
    text-align: left;
    padding-bottom: 0.5vh;
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
                <FirstColumn>
                    <MainTitle>Easily create or join a local nanny share with Hapu</MainTitle>
                    <Subtitle>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</Subtitle>
                    <Demonstration/>
                </FirstColumn>
                <HeaderImage src = {imageheader}/>
            </MainDiv>
        </Banner>
        <AvailableSitter/>
        </>
    );}
export default FirstSection;