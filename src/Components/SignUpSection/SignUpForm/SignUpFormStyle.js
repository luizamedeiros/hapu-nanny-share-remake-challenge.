import styled from 'styled-components';

export const FormWrapper = styled.form`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-content: center;
        flex-wrap: wrap;
    }
`
export const Input = styled.input`
    width: 16.98vw;
    height: 48px;
    margin: 0.8vw;
    border: 1px solid #DFDFDF;
    @media screen and (max-width: 768px){
        width: 91%;
    }
`
export const SendButton = styled.button`
    height: 48px;
    padding: 1%  2%;
    @media screen and (max-width: 768px){
        width: 91%;
    }
`
