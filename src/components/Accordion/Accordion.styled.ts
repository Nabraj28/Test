import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const AccordionContainer = styled.section`
    border: none;
    margin-bottom: 10px;
`
export const AccordionHeader = styled.div`
    padding: 10px 20px;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.mobile}){
       padding: 5px 10px;
    }
`
export const AccordionTitle = styled.h2`
    width: 90%;
    font-size: 22px;
    font-family:${({ theme }) => theme.poppins};
    font-weight: 600;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 18px;
    }
`
export const DownIcon = styled(FaChevronDown)`
width: 20px;
height: 20px;
@media (max-width: ${({ theme }) => theme.mobile}){
       width: 15px;
       height: 15px;
    }
`
export const UpIcon = styled(FaChevronUp)`
width: 20px;
height: 20px;
@media (max-width: ${({ theme }) => theme.mobile}){
       width: 15px;
       height: 15px;
    }
`

export const AccordionContent = styled.div`
padding: 10px 20px ;
@media (max-width: ${({ theme }) => theme.mobile}){
       padding: 5px 10px;
    }
    ul {
        padding-left: 20px;
    }
`