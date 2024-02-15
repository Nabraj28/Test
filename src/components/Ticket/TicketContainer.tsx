
import TicketAccordion from './TicketAccordion'
import { LocationData } from '../../types'
import { BetweenContainer, DayText, DividerImg, DividerImgContainer, DividerMain, FirstSecondPhase, HeadingDateContainer, HeadingLogoText, LocationDivider, Logocontainer, PhaseCostContainer, TicketAddContainer, TicketAddText, TicketDetailsContainer, TicketHeading, TicketHeadingInformation, TicketHeadingText, TicketIconContainer, TicketImage, TicketPrice, TicketSubContainer, TicketWrapper, WeekYearText } from './Ticket.styled'
import TextAccordion from '../Textaccordion'

export const Ticketdetails = () => {

    const data: LocationData[] = [
        {
            title: "Pokhara",
            details: [
                { id: 1, dayofweek: "Tue", dayofmonth: "21", yearmonth: "Aug 2022" },
                { id: 2, dayofweek: "Wed", dayofmonth: "22", yearmonth: "Aug 2022" },
                { id: 3, dayofweek: "Thu", dayofmonth: "23", yearmonth: "Aug 2022" },
            ]
        }, {
            title: "Kathmandu",
            details: [
                { id: 4, dayofweek: "Fri", dayofmonth: "24", yearmonth: "Aug 2022" },
                { id: 5, dayofweek: "Sat", dayofmonth: "25", yearmonth: "Aug 2022" },
            ]
        }
    ]

    return (
        <>
            {
                data.map((ticket) => (
                    <TicketSubContainer key={ticket.title} >
                        <LocationDivider>{ticket.title}</LocationDivider>
                        {ticket.details.map((data) => (
                            <TicketAccordion key={data.id}
                                element={
                                    <TicketHeading>
                                        <HeadingDateContainer>
                                            <WeekYearText>{data.dayofweek}</WeekYearText>
                                            <DayText>{data.dayofmonth}</DayText>
                                            <WeekYearText>{data.yearmonth}</WeekYearText>
                                        </HeadingDateContainer>
                                        <DividerMain>
                                            <DividerImgContainer>
                                                {Array.from({ length: 15 }).map((_, index) => (
                                                    <DividerImg key={index} src="/dot.svg" alt="divider" />
                                                ))}
                                            </DividerImgContainer>
                                        </DividerMain>
                                        <TicketHeadingInformation>
                                            <HeadingLogoText>
                                                <Logocontainer src="/timer.svg" alt="time" />
                                                <TicketHeadingText>7:15 PM - 10:15 PM</TicketHeadingText>
                                            </HeadingLogoText>
                                            <HeadingLogoText>
                                                <Logocontainer src="/pinch.svg" alt="pinch" />
                                                <TicketHeadingText>Iris Pub, Lakeside : Pokhara</TicketHeadingText>
                                            </HeadingLogoText>
                                            <HeadingLogoText>
                                                <Logocontainer src="/map.svg" alt="location" />
                                                <TicketHeadingText>Map</TicketHeadingText>
                                            </HeadingLogoText>
                                            <TicketIconContainer>
                                                <TicketWrapper>
                                                    <TicketImage src="/Vector.svg" alt="ticket" />
                                                </TicketWrapper>
                                            </TicketIconContainer>
                                        </TicketHeadingInformation>
                                    </TicketHeading>
                                }
                            >
                                <TicketDetailsContainer>
                                    <BetweenContainer>
                                        <PhaseCostContainer>
                                            <FirstSecondPhase>First Phase</FirstSecondPhase>
                                            <TicketPrice>Rs. 10,000/Person</TicketPrice>
                                        </PhaseCostContainer>
                                        <TicketAddContainer>
                                            <TicketAddText>Add</TicketAddText>
                                        </TicketAddContainer>
                                    </BetweenContainer>
                                    <TextAccordion>
                                        Entry for 1 people, 1 bottle, premium service
                                    </TextAccordion>

                                    <hr />

                                    <BetweenContainer>
                                        <PhaseCostContainer>
                                            <FirstSecondPhase>Second Phase</FirstSecondPhase>
                                            <TicketPrice>Rs. 10,000/Person</TicketPrice>
                                        </PhaseCostContainer>
                                        <TicketAddContainer>
                                            <TicketAddText>Add</TicketAddText>
                                        </TicketAddContainer>
                                    </BetweenContainer>
                                    <TextAccordion>
                                        Entry for 1 people, 1 bottle, premium service
                                    </TextAccordion>
                                </TicketDetailsContainer>
                            </TicketAccordion>
                        ))}
                    </TicketSubContainer>

                ))
            }
        </>
    )
}
const TicketContainer = () => {
    return (
        <div>
            <Ticketdetails />
        </div>
    )
}

export default TicketContainer
