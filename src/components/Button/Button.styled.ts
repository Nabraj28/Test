import styled from "styled-components";

export const TagsButton = styled.button<{ Color: string; backgroundColor: string }>`
padding: 10px 20px;
color: ${(props) => props.Color};
background-color: ${props => props.backgroundColor};
border: none;
font-family: ${({ theme }) => theme.poppins};
font-size: 18px;
@media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 14px;
       padding: 10px 10px;
    }
`