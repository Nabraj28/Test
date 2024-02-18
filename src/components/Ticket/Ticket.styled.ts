import styled from "styled-components";

export const TicketMainContainer = styled.section`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
`

export const SelectTicketText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 24px;
    font-weight: 600;
    margin-left: 5px;
    margin-right: 5px;
`
export const TicketAccordionContainer = styled.div`
    border: none;
    padding-left: 10px;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`
export const TicketAccordionHeader = styled.div`
    cursor: pointer;
    overflow: hidden;
    z-index: 1;
    margin-left: 5px;
        margin-right: 5px;
`

export const TicketAccordionContent = styled.div`
    max-height: 0px;
    overflow: hidden;
    box-shadow: 0px 3px 9px #875cd052;
    border-radius: 25px;
    
    &.open{
        max-height: 500px;
        overflow: hidden;
        transition: max-height 0.5s ease-in;
        margin-top: -50px;
        margin-bottom: 10px;
        padding-top: 50px;
        margin-left: 5px;
        margin-right: 5px;
    }
`

export const TicketSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;
`
export const LocationDivider = styled.div`
    font-size: 25px;
    display: flex;
    align-items: center;
    color: #0000004e;
    font-family: ${({ theme }) => theme.poppins};
    font-weight: 600;
    margin-left: 5px;
    margin-right: 5px;
    padding-top: 20px;

    &::before,
    &::after {
        flex: 1;
        content: '';
        padding: 1px;
        background-color: rgba(0, 0, 0, 0.1);
        margin: 5px;
    }
`

export const TicketHeading = styled.div`
    max-width: 100%;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.maincolor};
    display: flex;
    position: relative;

`
export const HeadingDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`
export const WeekYearText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 20px;
    font-weight: 200;
    color: white;
    text-align: center;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        font-size: 14px;
    }
    @media (min-width: ${({ theme }) => theme.largepc}) {
        font-size: 20px;
    }
`
export const DayText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 35px;
    font-weight: 500;
    color: white;
    text-align: center;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        font-size: 20px;
    }
`

export const DividerMain = styled.div`
    max-width: 10px;
    display: flex;
    align-items: center;
    padding-top: 2px;
`;

export const DividerImgContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding-top: 5px;
    padding-bottom: 5px;
    gap: 12px;
    overflow: hidden;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        gap: 7px;
    }
    @media (min-width: ${({ theme }) => theme.largepc}) {
        gap: 10px;
    }
`;

export const DividerImg = styled.img`
    width: 10px;
    height: 10px;
    object-fit: cover;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        width: 7px;
        height: 7px;
    }
`;

export const TicketHeadingInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding: 10px 10px 10px 20px;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        padding: 10px 5px 5px 10px;
        gap:5px;
    }
    @media (min-width: ${({ theme }) => theme.largepc}) {
        padding: 10px 10px 10px 20px;
    }
`;

export const Logocontainer = styled.img`
    width: 25px;
    height: 25px;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        width: 16px;
        height: 16px;
    }
    @media (min-width: ${({ theme }) => theme.largepc}) {
        width: 25px;
        height: 25px;
    }
`;

export const HeadingLogoText = styled.div`
    display: flex;
    gap: 10px;
`;

export const TicketIconContainer = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;
`;

export const TicketWrapper = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        width: 30px;
        height: 30px;
    }
    
`;

export const TicketImage = styled.img`
    width: 25px;
    height: 25px;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        width: 20px;
        height: 20px;
    }
`;

export const TicketHeadingText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 20px;
    font-weight: 200;
    color: white;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        font-size: 14px;
    }
    @media (min-width: ${({ theme }) => theme.largepc}) {
        font-size: 20px;
    }
`

export const TicketDetailsContainer = styled.div`
    padding: 10px;
`;

export const BetweenContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;

export const PhaseCostContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TicketAddContainer = styled.div`
    width: 25%;
    background-color: #875cd03f;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5px 10px;
`;

export const TicketAddText = styled.p`
    color: ${({ theme }) => theme.maincolor};
    font-family: ${({ theme }) => theme.poppins};
    font-size: 20px;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        font-size: 16px;
    }
`;

export const FirstSecondPhase = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-weight: 600;
    font-size: 20px;
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        font-size: 16px;
    }
`;

export const TicketPrice = styled.p`
    font-family: ${({ theme }) => theme.lora};
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.maincolor};
    @media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        font-size: 16px;
    }
`;

export const ProceedButtonCotainer = styled.div`
margin-top: 20px;
margin-left: 10px;
margin-right: 10px;
padding: 10px;
box-shadow: 0 2px 5px #0000001A;
`
export const ProceedButton = styled.button`
width: 100%;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: #865CD04D ;
padding-top: 15px;
padding-bottom: 15px;
border-radius: 10px;
font-family:${({ theme }) => theme.poppins} ;
font-size: 20px;
font-weight: 600;
color: ${({ theme }) => theme.maincolor};
@media (min-width: ${({ theme }) => theme.pc}) and (max-width: ${({ theme }) => theme.largepc}) {
        font-size: 16px;
        padding-top: 10px;
        padding-bottom: 10px;
    };
`

export const DashedBorder = styled.hr`
border: none;
border-top: dashed 2px #865CD0 ;
margin: 0;
`
