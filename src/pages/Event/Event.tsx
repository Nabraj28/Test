
import { Accordion, Button } from "../../components"
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
    MapIcon,
    MoreInformationContainer,
    ShareIcon,
    StyledButtonContainer,
    StyledColoredText,
    StyledContainer,
    StyledDateLocationText,
    StyledDetails,
    StyledEventDetails,
    StyledHeader,
    StyledHeaderText,
    StyledTicketContainer,
    StyledUpperbody
} from "./Event.styled"


export const Event = () => {
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
                            <Button color="white" backgroundColor="#f43434" >
                                High in Demand
                            </Button>
                            <Button color="white" backgroundColor="#f43434" >
                                Limited Booking
                            </Button>
                        </StyledButtonContainer>
                        <StyledButtonContainer>
                            <Button color="white" backgroundColor="#6B6D81" >
                                Music Shows
                            </Button>
                            <Button color="white" backgroundColor="#6B6D81" >
                                Pop
                            </Button>
                        </StyledButtonContainer>
                        <EventInfoContainer>
                            <IconTextContainer>
                                <CalendarIcon />
                                <StyledDateLocationText>Oct 4, 2023 - Oct 10, 2023</StyledDateLocationText>
                            </IconTextContainer>
                            <StyledColoredText>
                                Add to calendar
                            </StyledColoredText>
                        </EventInfoContainer>
                        <EventInfoContainer>
                            <IconTextContainer>
                                <MapIcon />
                                <StyledDateLocationText>Lakeside-06, Pokhara</StyledDateLocationText>
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
                                    <StyledDateLocationText>Outdoor Events</StyledDateLocationText>
                                </IconTextContainer>
                                <IconTextContainer>
                                    <IconImage src="/Time.svg" alt="" />
                                    <StyledDateLocationText>11 AM - 5 PM</StyledDateLocationText>
                                </IconTextContainer>
                                <IconTextContainer>
                                    <IconImage src="/PG.svg" alt="" />
                                    <StyledDateLocationText>18 yrs +</StyledDateLocationText>
                                </IconTextContainer>
                                <IconTextContainer>
                                    <IconImage src="/Language.svg" alt="" />
                                    <StyledDateLocationText>Nepali, English</StyledDateLocationText>
                                </IconTextContainer>
                            </MoreInformationContainer>
                        </Accordion>
                        <Divider />
                        <Accordion title="Click on Interested to stay updated about this event." >
                            <div></div>
                        </Accordion>
                        <Accordion title="Artist" >
                            <div></div>
                        </Accordion>
                        <Accordion title="About" >
                            <div></div>
                        </Accordion>
                        <Accordion title="Gallery" >
                            <div></div>
                        </Accordion>
                        <Accordion title="Video" >
                            <div></div>
                        </Accordion>
                        <Accordion title="Terms and Conditions" >
                            <div></div>
                        </Accordion>
                    </InformationList>
                </StyledEventDetails>
                <StyledTicketContainer>
                    Ticket
                </StyledTicketContainer>
            </StyledUpperbody>
        </StyledContainer>
    )
}
// <div className="bodymain" >
//     <div className="upperbody" >
//         <div className="part1" >
//             <p className="pathtext">
//                 <span className="purple" >All Event / Event List </span>
//                 / Taylor Swift in Nepal
//             </p>
//             <div>
//                 <div className="heroimagecontainer" ></div>
//                 <div className="details">
//                     <div className="title" >
//                         <p className="h1">Taylor Swift in Nepal</p>
//                         <FiShare2 className="sharebtn" color="#865CD0" />
//                     </div>
//                     <div className="tagsbuttoncontainer" >
//                         <Button color="#f43434" >
//                             <p className="buttontext" >High in Demand</p>
//                         </Button>
//                         <Button color="#f43434" >
//                             <p className="buttontext" >Limited Booking</p>
//                         </Button>
//                     </div>
//                     <div className="tagsbuttoncontainer" >
//                         <Button color="#6B6D81" >
//                             <p className="buttontext" >Music Shows</p>
//                         </Button>
//                         <Button color="#6B6D81" >
//                             <p className="buttontext" >Pop</p>
//                         </Button>
//                     </div>
//                     <div className="seprate">
//                         <div className="first" >
//                             <RiCalendarEventFill className="locationcalendaricon" color="#865CD0" />
//                             <p className="locationdatetext" >Oct 4, 2023 - Oct 10, 2023</p>
//                         </div>
//                         <p className="calendarmaptext" >Add to Calendar</p>
//                     </div>
//                     <div className="seprate">
//                         <div className="first" >
//                             <SlLocationPin className="locationcalendaricon" color="#865CD0" />
//                             <p className="locationdatetext" >Lakeside-06, Pokhara</p>
//                         </div>
//                         <p className="calendarmaptext" >View on Map</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="accordiancontainer">
//                 <Accordion showIcon title="More Information" >
//                     <div className="infocontainer" >
//                         <div className="space">
//                             <img src="/Pop.svg" alt="Game" className="image" />
//                             <p className="locationdatetext" >Outdoor Events</p>
//                         </div>
//                         <div className="space">
//                             <img src="/Time.svg" alt="" className="image" />
//                             <p className="locationdatetext" >11 AM - 5 PM</p>
//                         </div>
//                         <div className="space">
//                             <img src="/PG.svg" alt="Game" className="image" />
//                             <p className="locationdatetext" >18yrs +</p>
//                         </div>
//                         <div className="space">
//                             <img src="/Language.svg" alt="Game" className="image" />
//                             <p className="locationdatetext" >Nepali, English</p>
//                         </div>
//                     </div>
//                 </Accordion>
//                 <div className="divider"></div>
//                 <Accordion showIcon title="Click on Interested to stay updated about this event." >
//                     <div className="seprator" >
//                         <div className="likecontainer" >
//                             <div className="likes" >
//                                 <AiFillLike size={25} color="#865CD0" />
//                                 <p className="num" >1000</p>
//                             </div>
//                             <p className="intrestedtext" >People who have shown interest recently</p>
//                         </div>
//                         <div >
//                             <Outlinebutton color="#865CD0">
//                                 <p className="intrestedbuttontext" >Intrested?</p>
//                             </Outlinebutton>
//                         </div>
//                     </div>
//                 </Accordion>
//                 <div className="divider"></div>
//                 <Accordion showIcon title="Artists" >
//                     <Artists />
//                 </Accordion>
//                 <div className="divider"></div>
//                 <Accordion showIcon title="About" >
//                     <ReadMore children="Experience the allure of Pokhara, Nepal,
//                      as we invite you to a captivating event nestled in the heart
//                       of this enchanting city. Against the backdrop of the majestic
//                        Annapurna mountain range, immerse yourself in the rich cultural
//                         tapestry and warm hospitality that define this vibrant destination.
//                          From exploring the local cuisine to engaging in exciting activities,
//                           our event promises an unforgettable experience for seasoned travelers
//                            and first-time visitors alike. Join us as we celebrate the beauty and
//                             traditions of Pokhara, Nepal, in an adventure that will leave lasting
//                              memories." />
//                 </Accordion>
//                 <div className="divider"></div>
//                 <Accordion showIcon title="Gallery" >
//                     <Gallery />
//                 </Accordion>
//                 <div className="divider"></div>
//                 <Accordion showIcon title="Video" >
//                     <Video />
//                 </Accordion>
//                 <div className="divider"></div>
//                 <Accordion showIcon title="Terms and Conditions" >
//                     <p className="terms" >
//                         1. Registration required for attendance.
//                         <br /> 2. Organizers not liable for injuries or losses.
//                         <br /> 3. Respectful conduct expected.
//                         <br /> 4. Consent for photo/video use.
//                         <br /> 5. Consent for photo/video use.
//                     </p>
//                 </Accordion>
//                 <div className="divider"></div>
//                 <div className="profilemain" >
//                     <div className="profilecontainer" >
//                         <div className="imgdetailseprator">
//                             <img src="/mask.jpg" alt="" className="profile" />
//                             <div className="smgap">
//                                 <p className="profilename" >Dattebaiyo</p>
//                                 <div>
//                                     <p className="followers" >50 followers</p>
//                                 </div>
//                                 <p className="followers" >Organizer</p>
//                             </div>
//                         </div>
//                         <Outlinebutton color="#865CD0" >
//                             <p className="follow" >Follow</p>
//                         </Outlinebutton>
//                     </div>
//                 </div>
//             </div>
//         </div >
//         <div className="part2" >
//             <Ticket />
//         </div>
//     </div >
//     <div className="lowerbody" >
//         <p className="upcoming" >Upcoming Events</p>
//         <Cardslider />
//     </div>
//     <Footer />
// </div>
