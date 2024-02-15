import styled from "styled-components";


export const StyledOutlineButton = styled.button<{ color: string; bordercolor: string }> `
background-color: white;
color: ${props => props.color};
border-width: 1px solid ;
border-color: ${props => props.bordercolor};
border-radius: 10px;
height: fit-content;
padding:10px 20px;
@media (max-width: ${({ theme }) => theme.mobile}){
padding: 5px 10px;
}

`