import styled from "styled-components";
import { CiCircleQuestion, CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";

export const FooterContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 50px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       margin-top: 0;
       margin-bottom: 20px;
    }
`


export const FooterCard = styled.div`
    width: 500px;
    aspect-ratio: 4/1;
    box-shadow: 0px 2px 6px #865CD080;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    padding: 20px;
    @media (max-width: ${({ theme }) => theme.largemobile}){
       width: 80%;
       min-height: 200px;
       gap: 10px;
       flex-direction: column;
    }
    @media (min-width: ${({ theme }) => theme.pc}){
       width: 650px;
       aspect-ratio: 13/4;

    }
`
export const HelpIconContainer = styled.div`
    width: 80px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-color: #875cd027;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.largemobile}){
       width: 60px;
    }
    @media (min-width: ${({ theme }) => theme.largemobile}){
       width: 100px;
    }
`

export const HelpIcon = styled(CiCircleQuestion)`
    width: 60px;
    height: 60px;
    color: ${({ theme }) => theme.maincolor};
    @media (max-width: ${({ theme }) => theme.largemobile}){
       width: 40px;
       height: 40px;
    }
`
export const StyledFooterInfo = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    @media (max-width: ${({ theme }) => theme.largemobile}){
    padding-left: 10px;
    gap: 10px;
    padding-top: 15px;
    align-items: center;
    }  
`
export const InquiryText = styled.p`
    font-size: 40px;
    font-family: ${({ theme }) => theme.poppins};
    @media (max-width: ${({ theme }) => theme.mobile}){
    font-size: 20px;
    } 
`

export const FooterIconTextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}){
    gap: 10px;
    } 
`

export const FooterText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}){
    font-size: 14px;
    text-align: justify;
    } 
`
export const CallIcon = styled(PiPhoneThin)`
    width: 24px;
    height: 24px;
    @media (max-width: ${({ theme }) => theme.mobile}){
    width: 14px;
    width: 14px;
    } 
`
export const MailIcon = styled(CiMail)`
    width: 24px;
    height: 24px;
    @media (max-width: ${({ theme }) => theme.mobile}){
    width: 14px;
    width: 14px;
    } 
`