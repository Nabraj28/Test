import styled from "styled-components";
import { FiShare2 } from "react-icons/fi";
import { RiCalendarEventFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { AiFillLike } from "react-icons/ai";

export const StyledContainer = styled.section`
padding-left: 60px;
padding-right: 70px;
gap: 60px;
display: flex;
flex-direction: column;
padding-top: 30px;
gap: 20px;
@media (max-width: ${({ theme }) => theme.mobile}){
    padding-left:5px;
    padding-right: 5px;
    padding-top: 20px;
    gap: 10px;
  }
  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: ${({ theme }) => theme.pc}) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    gap: 10px;
}
`
export const BreadCrum = styled.p`

    font-family: 'Poppins',sans-serif ;
    padding-left: 10px;
    font-family: 400px;
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
    width: 100%;
    display: flex;
    gap: 80px;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        gap: 50px;
    }
`

export const StyledEventDetails = styled.div`
    width: 60%;
    overflow: hidden;
    padding: 10px;
    width: 60%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.pc}) {
    width: 100%;
    padding: 5px;
  }
`
export const StyledTicketContainer = styled.div`
width: 40%;
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

export const StyledText = styled.p`
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
border-radius: 15px;
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
    height: 1.5px;
    background-color: #54545899;
    margin: 10px 20px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       margin: 5px 10px;
    }
`
export const StyledIntrestContainer = styled.div`
display: flex;
justify-content: space-between;
`
export const StyledColumn = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 70%;
`
export const LikeIcon = styled(AiFillLike)`
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.maincolor};
    @media (max-width: ${({ theme }) => theme.mobile}){
       width:18px;
       height: 18px;
    }
`
export const LikedText = styled.p`
font-family: ${({ theme }) => theme.poppins};
  font-weight: 400;
  font-size: 16px;
  color: black;
  @media (max-width: ${({ theme }) => theme.largemobile}){
       font-size: 14px;
    }
  @media (min-width: ${({ theme }) => theme.pc}){
       font-size: 20px;
    }
`

export const StyledButtonText = styled.p`
font-family: ${({ theme }) => theme.poppins};
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.largemobile}){
       font-size: 14px;
    }
  @media (min-width: ${({ theme }) => theme.pc}){
       font-size: 20px;
    }
`

export const NumberedList = styled.li`
font-family: ${({ theme }) => theme.poppins};
font-weight: 400;
font-size: 20px;
padding-bottom: 5px;
list-style-type: decimal;
text-align: justify;
color: #000;
@media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 14px;
    }
`

export const ProfileMainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
`
export const ProfileSubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
`
export const ImageDetails = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 18px;
`
export const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 100%;
    @media (max-width: ${({ theme }) => theme.mobile}){
      width: 80px;
      height: 80px;
    }
`
export const ProfileDetails = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4px;
`
export const ProfileName = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-weight: 700;
    font-size: 22px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 14px;
    }
    `
export const DetailsText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-weight: 500;
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 12px;
    }
    `
export const StyledDetailsText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-weight: 600;
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 12px;
    }
    `
export const FollowButtonText = styled.p`
    padding: 0px 10px;
    font-family: ${({ theme }) => theme.poppins};
    font-weight: 500;
    font-size: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       font-size: 14px;
    }
`

export const Lowerbody = styled.section`
    margin-top: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}){
       gap: 0px;
    }
`

export const FriendsIconText = styled.div`
  display: flex;
  gap:10px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}){
       gap: 5px;
  }
`

export const FriendsImage = styled.img`
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.maincolor};
    @media (max-width: ${({ theme }) => theme.mobile}){
       width:16px;
       height: 16px;
    }
`




