import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body, h1, h2, h3, h4, h5, h6, p, a{
        font-family: 'Inter', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
        color: inherit;
        font-weight: 500;
        text-align: inherit;

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
            font-size: 4vw;   
        }
    }
    p{
        font-size: 1.2vw;
        font-weight: 400;
        @media screen and (max-width: 768px){
            font-size: 3vw;
        }
    }
    a{
        text-decoration: underline;
        color: #5E20A4;
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
        &:hover{
            cursor: pointer;
            background-color: #027f55;
            transition: all .1s ease-in-out;
        }
    }
`
export default GlobalStyle;