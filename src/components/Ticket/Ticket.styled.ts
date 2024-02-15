import styled from "styled-components";

export const TicketMainContainer = styled.section`
    padding-left: 10px;
    /* padding-right: 10px; */
    display: flex;
    flex-direction: column;
    gap: 22px;
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
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    width: 100%;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.maincolor};
    display: flex;
    position: relative;

`
export const HeadingDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 20%;
`
export const WeekYearText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 20px;
    font-weight: 200;
    color: white;
`
export const DayText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 35px;
    font-weight: 500;
    color: white;
`

export const DividerMain = styled.div`
    width: 3%;
    height: 150px;
    display: flex;
    align-items: center;
`;

export const DividerImgContainer = styled.div`
    width: 100%;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: hidden;
`;

export const DividerImg = styled.img`
    width: 10px;
    height: 10px;
    object-fit: cover;
`;

export const TicketHeadingInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding: 10px 10px 10px 20px;
`;

export const Logocontainer = styled.img`
    width: 25px;
    height: 25px;
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
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TicketImage = styled.img`
    width: 30px;
    height: 30px;
`;

export const TicketHeadingText = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 20px;
    font-weight: 200;
    color: white;
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
    border-radius: 25px;
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
`;

export const FirstSecondPhase = styled.p`
    font-family: ${({ theme }) => theme.poppins};
    font-weight: 600;
    font-size: 20px;
`;

export const TicketPrice = styled.p`
    font-family: ${({ theme }) => theme.lora};
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.maincolor};
`;

