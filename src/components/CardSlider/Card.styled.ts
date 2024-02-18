import styled, { css } from "styled-components";
import { RiCalendarEventFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CardButtonProps {
    isdisabled?: boolean;
}

export const CardMainContainer = styled.section`
    display: flex;
    overflow-x: scroll;
    position: relative;
    scrollbar-width: none;
    margin-left: -20px;
    display: flex;
    flex-direction: column;
`
export const CardFlexContainer = styled.div`
    display: flex;
    gap: 30px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-top: 0px;
    scroll-behavior: smooth;
    flex-direction: row;
    @media (max-width: ${({ theme }) => theme.mobile}){
        gap:10px;
        
    }
`

export const CardSubContainer = styled.div`
    width: 450px;
    aspect-ratio: 1/1;
    margin-bottom: 20px;
    border-radius: 10px;
    flex-shrink: 0;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    @media (max-width: ${({ theme }) => theme.mobile}){
        width: 250px;
        aspect-ratio: 25/27;
        margin-top: 20px;
        margin-bottom: 20px;
        
    }
    &:last-child {
        margin-right: 20px;
    }

    &:first-child {
        margin-left: 20px;
    }
`
export const CardImage = styled.img`
        width: 100%;
        height: 50%;
        object-fit: cover;
        border-radius: 15px;
`

export const CardInfo = styled.div`
    max-width: 100%;
    min-height: 50% ;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-direction: column;
    position: relative;
    margin-top: -30px;
    padding: 10px; 
`

export const CardTitle = styled.p`
font-family: ${({ theme }) => theme.poppins};
font-size: 24px;
font-weight: 600;
@media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 16px;
       font-family: ${({ theme }) => theme.lora};
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CardDetails = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const EventDetails = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const RupeesImage = styled.img`
    width: 20px;
    height: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       width: 12px;
       height: 12px;
    }
`
export const RupeesText = styled.p`
font-family: ${({ theme }) => theme.poppins};
font-size: 20px;
font-weight: 400;
color: ${({ theme }) => theme.maincolor};
@media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 12px;
       font-family: ${({ theme }) => theme.lora};
    }
`

export const CardCalendarIcon = styled(RiCalendarEventFill)`
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.maincolor};
    @media (max-width: ${({ theme }) => theme.mobile}){
       width:12px;
       height: 12px;
    }
`
export const CardLocationIcon = styled(SlLocationPin)`
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.maincolor};
    @media (max-width: ${({ theme }) => theme.mobile}){
       width:12px;
       height: 12px;
    }
`
export const CardText = styled.p`
font-family: ${({ theme }) => theme.poppins};
font-size: 20px;
font-weight: 400;
color: rgba(0, 0, 0, 0.7);
@media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 12px;
       font-family: ${({ theme }) => theme.lora};
    }
`
export const CardButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    `
export const AddButton = styled.button`
padding: 10px 25px 10px 25px;
display: flex;
align-items: center;
justify-content: center;
background-color: #865CD04D;
border-radius: 15px;
border: none;
cursor: pointer;
@media (max-width: ${({ theme }) => theme.mobile}){
    padding: 5px 10px;
    border-radius: 10px;
}
`
export const AddButtonText = styled.p`
font-family: ${({ theme }) => theme.poppins};
font-size: 20px;
font-weight: 500;
color: ${({ theme }) => theme.maincolor};
@media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 12px;
       font-family: ${({ theme }) => theme.lora};
    }
`
export const UpcomingText = styled.p`
    font-family: ${({ theme }) => theme.lora} ;
    font-weight: 600;
    font-size: 28px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 20px;
    }
`

export const CardNavigationContainer = styled.div`
max-width: 100%;
display: flex;
justify-content: space-between;
padding: 10px;
`
export const CardNavBtnContainer = styled.div`
display: flex;
gap: 5px;
`
const CardButtonStyles = css<CardButtonProps>`
    background-color: white;
    
    cursor: ${({ isdisabled }) => (isdisabled ? "default" : "pointer")};
    color: ${({ isdisabled }) => (isdisabled ? "#865CD04D" : "#865CD0")};
    border: 1px solid;
    border-color: ${({ isdisabled }) => (isdisabled ? "#865CD04D" : "#865CD0")};
    border-radius: 5px;
    font-size: 25px;
    transition: opacity 0.3s ease;
    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`
export const CardLeftButton = styled(IoIosArrowBack) <CardButtonProps>`
    ${CardButtonStyles}
    
`
export const CardRightButton = styled(IoIosArrowForward) <CardButtonProps>`
   ${CardButtonStyles}


`