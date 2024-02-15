import styled from "styled-components";

export const Iframe = styled.iframe`
width: 100%;
aspect-ratio: 5/2;
@media (max-width: ${({ theme }) => theme.largemobile}){
       aspect-ratio: 3/2;
    }
@media (min-width: ${({ theme }) => theme.pc}){
       aspect-ratio: 2/1;
    }

`