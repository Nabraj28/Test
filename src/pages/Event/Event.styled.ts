import styled from "styled-components";
import { FiShare2 } from "react-icons/fi";
import { RiCalendarEventFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

export const StyledContainer = styled.section`
padding-left: 70px;
padding-right: 70px;
gap: 60px;
display: flex;
flex-direction: column;
padding-top: 30px;
gap: 30px;
@media (max-width: ${({ theme }) => theme.mobile}){
    padding-left:5px;
    padding-right: 5px;
    padding-top: 20px;
    gap: 20px;
  }
@media (max-width: ${({ theme }) => theme.pc}){
    padding-left:10px;
    padding-right: 10px;
    padding-top: 20px;
    gap: 20px;
  }
`
export const BreadCrum = styled.p`

    font-family: ${({ theme }) => theme.poppins} ;
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.mobile}){
    font-size: 14px;
    }
`
export const ColoredBreadCrumText = styled.span`
  font-family: ${({ theme }) => theme.poppins} ;
    font-size: 18px;
    color: ${({ theme }) => theme.maincolor};
    @media (max-width: ${({ theme }) => theme.mobile}){
    font-size: 14px;
    }
`

export const StyledUpperbody = styled.div`
    display: flex;
    gap: 40px;
`

export const StyledEventDetails = styled.div`
    width: 60%;
    height: 500vh;
    display: flex;
    gap: 10px;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.pc}) {
    width: 100%;
  }
`
export const StyledTicketContainer = styled.div`
width: 40%;
display: flex;
justify-content: flex-end;
@media (max-width: ${({ theme }) => theme.pc}) {
    width:0%;
    display: none;
  }

`

export const HeroImage = styled.img`
width: 100%;
aspect-ratio: 5/2;
object-fit: cover;
border-radius: 15px;
object-position: 50% 5%;
@media (max-width: ${({ theme }) => theme.largemobile}){
   aspect-ratio: 1/1;
}
`

export const StyledDetails = styled.div`
    background-color: white;
    border-radius: 15px;
    margin-top: -30px;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}){
    padding: 10px;
}
`
export const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
`
export const StyledHeaderText = styled.h1`
    font-size: 24px;
    font-family: ${({ theme }) => theme.poppins} ;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 20px;
    }
`
export const ShareIcon = styled(FiShare2)`
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.maincolor};
    @media (max-width: ${({ theme }) => theme.mobile}){
       width:20px;
       height: 20px;
    }
`
export const StyledButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       gap: 5px;
    }
`
export const EventInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`
export const IconTextContainer = styled.div`
  display: flex;
  gap:20px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}){
       gap: 10px;
    }
`

export const StyledDateLocationText = styled.p`
  font-family: ${({ theme }) => theme.poppins};
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: ${({ theme }) => theme.largemobile}){
       font-size: 14px;
    }
  @media (min-width: ${({ theme }) => theme.pc}){
       font-size: 20px;
    }
  `

export const StyledColoredText = styled.p`
font-family: ${({ theme }) => theme.poppins};
font-weight: 400;
font-size: 16px;
cursor: pointer;
color: ${({ theme }) => theme.maincolor} ;
@media (max-width: ${({ theme }) => theme.largemobile}){
       font-size: 14px;
    }
@media (min-width: ${({ theme }) => theme.pc}){
       font-size: 20px;
    }
`

export const CalendarIcon = styled(RiCalendarEventFill)`
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.maincolor};
    @media (max-width: ${({ theme }) => theme.mobile}){
       width:18px;
       height: 18px;
    }
`
export const MapIcon = styled(SlLocationPin)`
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.maincolor};
    @media (max-width: ${({ theme }) => theme.mobile}){
       width:18px;
       height: 18px;
    }
`

export const InformationList = styled.div`
width: 100%;
height: 500vh;
border-radius: 15px;
/* padding: 10px 20px; */
box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);

`

export const MoreInformationContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

export const IconImage = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.mobile}){
       width:18px;
       height: 18px;
    }
`

export const Divider = styled.div`
    height: 1px;
    background-color: #54545899;
    margin: 10px 20px;
`

