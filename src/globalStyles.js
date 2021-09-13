import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    h1, h2, h3, h4, h5, h6, p, a{
        color: #3D3D3D;;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        margin-bottom: 1.46vw;
        margin-top: 1.46vw;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
        text-align: inherit;
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
        line-height: 4.4vh;
        text-align: inherit;
        @media screen and (max-width: 768px){
            font-size: 3vw;
            line-height: 200%;
            padding-bottom: 5vh;
        }
    }
    a{
        color: #5E20A4;
        font-size: 1.17vw;
        text-decoration: underline;
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
        background: #00A870;
        border-radius: 4px;
        border-style: none;
        color: white;
        padding: 15px;
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
    ul{
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 1%;
        width: 100%;
    }
    nav{
        display: flex;
        width: 100%;
        @media screen and (max-width: 768px){
            margin-bottom: 10vh;
        }
    }
`
export default GlobalStyle;