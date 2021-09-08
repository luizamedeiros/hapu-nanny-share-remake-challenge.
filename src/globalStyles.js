import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    h1, h2, h3, h4, h5, h6, p, a{
        font-family: 'Inter', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
        color: #3D3D3D;;
        font-weight: 500;
        text-align: inherit;
        margin-top: 1.46vw;
        margin-bottom: 1.46vw;
        @media screen and (max-width: 768px){
            margin-top: 0.7vw;
            margin-bottom: 0.7vw;
        }
    }
    h1, h2, h3, h4, h5, h6{
        @media screen and (max-width: 768px){
            line-height: 150%;
        }
    }
    body{
        background: #F2F2F2;
    }
    h1{
        font-size: 3vw;   
        @media screen and (max-width: 768px){
            font-size: 6vw;   
        }
    }
    h2{
        font-size: 2vw;
        @media screen and (max-width: 768px){
            font-size: 4.6vw;   
        }
    }
    h3{
        font-size: 1.6vw;
        @media screen and (max-width: 768px){
            font-size: 4.6vw;   
        }
    }
    h4{
        font-size: 1.17vw;
        @media screen and (max-width: 768px){
            font-size: 3vw;   
        }
    }
    p{
        font-size: 1.17vw;
        font-weight: 400;
        text-align: inherit;
        line-height: 4.4vh;
        @media screen and (max-width: 768px){
            font-size: 3vw;
            line-height: 200%;
            padding-bottom: 5vh;
        }
    }
    a{
        text-decoration: underline;
        color: #5E20A4;
        font-size: 1.17vw;
        @media screen and (max-width: 768px){
            font-size: 3vw;
        }
    }
    div{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    button{
        padding: 15px;
        background: #00A870;
        border-radius: 4px;
        border-style: none;
        color: white;
        text-decoration: none;
        &:hover{
            cursor: pointer;
            background-color: #027f55;
            transition: all .1s ease-in-out;
        }
    }
    section{
        padding:8%;
        @media screen and (max-width: 768px){
            text-align: center;
        }

    }
    hr{
        border: 1px solid #DFDFDF;
        width: 50%;
        @media screen and (max-width: 768px){
            width: 90%;
            margin-top: 5%;
            margin-bottom: 5%;
        }
    }
`
export default GlobalStyle;