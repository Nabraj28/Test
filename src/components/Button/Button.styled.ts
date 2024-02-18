import styled from "styled-components";

export const TagsButton = styled.button<{ color: string; backgroundcolor: string }>`
    padding: 10px 20px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundcolor};
    border: none;
    font-family: ${({ theme }) => theme.poppins};
    font-size: 18px;
    border-radius: 2px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 14px;
       padding: 10px 10px;
    }
`