import styled from "styled-components";


export const AboutContainer = styled.div``

export const About = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 14px;
    }
`
export const More = styled.span`
    font-family: cursive;
    cursor: pointer;
    color: ${({ theme }) => theme.maincolor};
`
export const ReadMoreText = styled.p`
    font-family: sans-serif;
    font-size: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.maincolor};
    margin-top: 5px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 14px;
    }
`



