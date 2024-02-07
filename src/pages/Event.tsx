
import "../../styles/Eventstyles.css"
import Button from "../components/Button"
import { FiShare2 } from "react-icons/fi";
import { RiCalendarEventFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import Accordion from "../components/Accordion";
import { AiFillLike } from "react-icons/ai";
import Outlinebutton from "../components/Outlinebutton";
import { Artists } from "../components/Artists";
import ReadMore from "../components/Readmore";
import { Gallery } from "../components/Gallery";
import { Video } from "../components/Video";
import { Cardslider } from "../components/Cardslider";
import { Footer } from "../components/Footer";
import Ticket from "../components/Ticket";



export const Event = () => {
    return (
        <div className="bodymain" >
            <div className="body" >
                <div className="part1" >
                    <p className="htext">
                        <span className="purple" >All Event/Event List</span>
                        /Taylor Swift in Nepal
                    </p>
                    <div>
                        <div className="imgcon" ></div>
                        <div className="details">
                            <div className="title" >
                                <p className="h1">Taylor Swift in Nepal</p>
                                <FiShare2 className="sharebtn" color="#865CD0" />
                            </div>
                            <div className="btncon" >
                                <Button color="#f43434" >
                                    <p className="btntxt" >High in Demand</p>
                                </Button>
                                <Button color="#f43434" >
                                    <p className="btntxt" >Limited Booking</p>
                                </Button>
                            </div>
                            <div className="btncon" >
                                <Button color="#6B6D81" >
                                    <p className="btntxt" >Music Shows</p>
                                </Button>
                                <Button color="#6B6D81" >
                                    <p className="btntxt" >Pop</p>
                                </Button>
                            </div>
                            <div className="seprate">
                                <div className="first" >
                                    <RiCalendarEventFill className="local" color="#865CD0" />
                                    <p className="ftxt" >Oct 4, 2023 - Oct 10, 2023</p>
                                </div>
                                <p className="ltxt" >Add to Calendar</p>
                            </div>
                            <div className="seprate">
                                <div className="first" >
                                    <SlLocationPin className="local" color="#865CD0" />
                                    <p className="ftxt" >Lakeside-06, Pokhara</p>
                                </div>
                                <p className="ltxt" >View on Map</p>
                            </div>
                        </div>
                    </div>
                    <div className="acon">
                        <Accordion showIcon title="More Information" >
                            <div className="container" >
                                <div className="space">
                                    <img src="/Pop.png" alt="Game" className="image" />
                                    <p className="ftxt" >Outdoor Events</p>
                                </div>
                                <div className="space">
                                    <img src="/timer.png" alt="" className="image" />
                                    <p className="ftxt" >11 AM - 5 PM</p>
                                </div>
                                <div className="space">
                                    <img src="/PG.png" alt="Game" className="image" />
                                    <p className="ftxt" >18yrs +</p>
                                </div>
                                <div className="space">
                                    <img src="/Language.png" alt="Game" className="image" />
                                    <p className="ftxt" >Nepali, English</p>
                                </div>
                            </div>
                        </Accordion>
                        <div className="divider"></div>
                        <Accordion showIcon title="Click on Interested to stay updated about this event." >
                            <div className="scontainer" >
                                <div className="half" >
                                    <div className="line" >
                                        <AiFillLike size={25} color="#865CD0" />
                                        <p className="num" >1000</p>
                                    </div>
                                    <p className="ftxxt" >People who have shown interest recently</p>
                                </div>
                                <div>
                                    <Outlinebutton color="#865CD0">
                                        <p className="ltxxt" >Intrested?</p>
                                    </Outlinebutton>
                                </div>
                            </div>
                        </Accordion>
                        <div className="divider"></div>
                        <Accordion showIcon title="Artists" >
                            <Artists />
                        </Accordion>
                        <div className="divider"></div>
                        <Accordion showIcon title="Read More" >
                            <ReadMore children="Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.....
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore..... " />
                        </Accordion>
                        <div className="divider"></div>
                        <Accordion showIcon title="Gallery" >
                            <Gallery />
                        </Accordion>
                        <div className="divider"></div>
                        <Accordion showIcon title="Video" >
                            <Video />
                        </Accordion>
                        <div className="divider"></div>
                        <Accordion showIcon title="Terms and Conditions" >
                            <div className="tandc" >
                                <p className="terms" >
                                    1. Lorem ipsum dolor sit amet.
                                    <br /> 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                                    <br /> 3. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                                    <br /> 4. sed do eiusmod tempor incididunt.
                                    <br /> 5. Duis aute irure dolor in reprehenderit
                                </p>
                            </div>
                        </Accordion>
                        <div className="divider"></div>
                        <div className="profilemain" >
                            <div className="profilecon" >
                                <div className="imgdetsep">
                                    <img src="/mask.jpg" alt="" className="profile" />
                                    <div className="smgap">
                                        <p className="namey" >Dattebaiyo</p>
                                        <div>
                                            <p className="sub" >50 followers</p>
                                        </div>
                                        <p className="sub" >Organizer</p>
                                    </div>
                                </div>
                                <Outlinebutton color="#865CD0" >
                                    <p className="follow" >Follow</p>
                                </Outlinebutton>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="part2" >
                    <Ticket />
                </div>
            </div >
            <div className="second" >
                <p className="upcoming" >Upcoming Events</p>
                <Cardslider />
            </div>
            <Footer />
        </div>
    )
}
