import styled from 'styled-components';
import image from '../../assets/images/Image.png';

export const Banner = styled.div`
    background: url(${image}), linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);  
    width: 100%;
`
export const MainDiv = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    max-height: 50vh;
    padding: 5%;
`
export const HeaderImage = styled.img`
    margin: auto 10% auto 10%;
    @media only screen and (max-width: 768px){
        display:none;
    }
`
