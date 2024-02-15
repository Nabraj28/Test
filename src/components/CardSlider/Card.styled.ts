import styled from "styled-components";
import { RiCalendarEventFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const CardMainContainer = styled.section`
    display: flex;
    overflow-x: scroll;
    position: relative;
    scrollbar-width: none;
    margin-left: -20px;
`
export const CardFlexContainer = styled.div`
    display: flex;
    gap: 20px;
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
    margin-right: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-right: 10px;
    flex-shrink: 0;
    border-radius: 15px;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.43);
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
export const CardLeftButton = styled(IoIosArrowBack)`
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);
    background-color: white;
    cursor: pointer;
    border-radius: 100%;
    color: ${({ theme }) => theme.maincolor};
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.445);
    padding: 20px;
    font-size: 25px;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.3s ease;
    @media (max-width: ${({ theme }) => theme.pc}){
        display: none;
       
    }
    ${CardMainContainer}:hover & {
        opacity: 1;
    }
`
export const CardRightButton = styled(IoIosArrowForward)`
    position: absolute;
    top: 50%;
    right: 1%;
    transform: translateY(-50%);
    background-color: white;
    cursor: pointer;
    border-radius: 100%;
    color: ${({ theme }) => theme.maincolor};
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.445);
    padding: 20px;
    font-size: 25px;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.3s ease;
    @media (max-width: ${({ theme }) => theme.pc}){
        display: none;
       
    }
    ${CardMainContainer}:hover & {
        opacity: 1;
    }
`
