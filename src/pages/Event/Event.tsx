
import React from "react"
import { Accordion, Artists, Button, Cardslider, Footer, Gallery, Outlinebutton, ReadMore, Ticket, Video } from "../../components"
import {
    BreadCrum,
    CalendarIcon,
    ColoredBreadCrumText,
    Divider,
    EventInfoContainer,
    HeroImage,
    IconImage,
    IconTextContainer,
    InformationList,
    LikeIcon,
    LikedText,
    MapIcon,
    MoreInformationContainer,
    ShareIcon,
    StyledButtonContainer,
    StyledColoredText,
    StyledColumn,
    StyledContainer,
    StyledText,
    StyledDetails,
    StyledEventDetails,
    StyledHeader,
    StyledHeaderText,
    StyledIntrestContainer,
    StyledTicketContainer,
    StyledUpperbody,
    StyledButtonText,
    NumberedList,
    ProfileMainContainer,
    ProfileSubContainer,
    ImageDetails,
    ProfileImage,
    ProfileDetails,
    ProfileName,
    DetailsText,
    FollowButtonText,
    StyledDetailsText,
    Lowerbody,
    FriendsImage,
    FriendsIconText,
    NumberedListContainer
} from "./Event.styled"


export const Event: React.FC = () => {
    return (
        <StyledContainer>
            <BreadCrum>
                <ColoredBreadCrumText>All Event / Event List </ColoredBreadCrumText>
                / Taylor Swift in Nepal</BreadCrum>
            <StyledUpperbody>
                <StyledEventDetails>
                    <HeroImage src="/ts.jpg" />
                    <StyledDetails>
                        <StyledHeader>
                            <StyledHeaderText>Taylor Swift in Nepal</StyledHeaderText>
                            <ShareIcon />
                        </StyledHeader>
                        <StyledButtonContainer>
                            <Button color="white" backgroundcolor="#f43434" >
                                High in Demand
                            </Button>
                            <Button color="white" backgroundcolor="#f43434" >
                                Limited Booking
                            </Button>
                        </StyledButtonContainer>
                        <StyledButtonContainer>
                            <Button color="white" backgroundcolor="#6B6D81" >
                                Music Shows
                            </Button>
                            <Button color="white" backgroundcolor="#6B6D81" >
                                Pop
                            </Button>
                        </StyledButtonContainer>
                        <EventInfoContainer>
                            <IconTextContainer>
                                <CalendarIcon />
                                <StyledText>Oct 4, 2023 - Oct 10, 2023</StyledText>
                            </IconTextContainer>
                            <StyledColoredText>
                                Add to calendar
                            </StyledColoredText>
                        </EventInfoContainer>
                        <EventInfoContainer>
                            <IconTextContainer>
                                <MapIcon />
                                <StyledText>Lakeside-06, Pokhara</StyledText>
                            </IconTextContainer>
                            <StyledColoredText>
                                View on Map
                            </StyledColoredText>
                        </EventInfoContainer>
                    </StyledDetails>
                    <InformationList>
                        <Accordion title="More Information" >
                            <MoreInformationContainer>
                                <IconTextContainer>
                                    <IconImage src="/Pop.svg" alt="" />
                                    <StyledText>Outdoor Events</StyledText>
                                </IconTextContainer>
                                <IconTextContainer>
                                    <IconImage src="/Time.svg" alt="" />
                                    <StyledText>11 AM - 5 PM</StyledText>
                                </IconTextContainer>
                                <IconTextContainer>
                                    <IconImage src="/PG.svg" alt="" />
                                    <StyledText>18 yrs +</StyledText>
                                </IconTextContainer>
                                <IconTextContainer>
                                    <IconImage src="/Language.svg" alt="" />
                                    <StyledText>Nepali, English</StyledText>
                                </IconTextContainer>
                            </MoreInformationContainer>
                        </Accordion>
                        <Divider />
                        <Accordion title="Click on Interested to stay updated about this event." >
                            <StyledIntrestContainer>
                                <StyledColumn>
                                    <IconTextContainer>
                                        <LikeIcon />
                                        <LikedText>1000</LikedText>
                                    </IconTextContainer>
                                    <StyledText>
                                        People who have shown intrest recently
                                    </StyledText>
                                </StyledColumn>
                                <Outlinebutton color="#865CD0" bordercolor="#865CD0" >
                                    <StyledButtonText>Intrested?</StyledButtonText>
                                </Outlinebutton>
                            </StyledIntrestContainer>
                        </Accordion>
                        <Divider />
                        <Accordion title="Artist" >
                            <Artists />
                        </Accordion>
                        <Divider />
                        <Accordion title="About" >
                            <ReadMore />
                        </Accordion>
                        <Divider />
                        <Accordion title="Gallery" >
                            <Gallery />
                        </Accordion>
                        <Divider />
                        <Accordion title="Video" >
                            <Video />
                        </Accordion>
                        <Divider />
                        <Accordion title="Terms and Conditions" >
                            <NumberedListContainer>
                                <NumberedList>Registration required for attendance.</NumberedList>
                                <NumberedList>Consent for photo/video use.</NumberedList>
                                <NumberedList>Respectful conduct expected.</NumberedList>
                                <NumberedList>Organizers not liable for injuries or losses.</NumberedList>
                            </NumberedListContainer>
                        </Accordion>
                        <Divider />
                        <ProfileMainContainer>
                            <ProfileSubContainer>
                                <ImageDetails>
                                    <ProfileImage src="/mask.jpg" />
                                    <ProfileDetails>
                                        <ProfileName>Harry Potter</ProfileName>
                                        <FriendsIconText>
                                            <FriendsImage src="/Friends.svg" alt="" />
                                            <DetailsText>50 Followers</DetailsText>
                                        </FriendsIconText>
                                        <StyledDetailsText>Organizer</StyledDetailsText>
                                    </ProfileDetails>
                                </ImageDetails>
                                <Outlinebutton color="#865CD0" bordercolor="#865CD0" >
                                    <FollowButtonText>Follow</FollowButtonText>
                                </Outlinebutton>
                            </ProfileSubContainer>
                        </ProfileMainContainer>
                    </InformationList>
                </StyledEventDetails>
                <StyledTicketContainer>
                    <Ticket />
                </StyledTicketContainer>
            </StyledUpperbody>
            <Lowerbody>
                <Cardslider />
            </Lowerbody>
            <Footer />
        </StyledContainer>
    )
}
