// import React from 'react'
import "../../styles/Eventstyles.css"
import Button from "../components/Button"
import { FiShare2 } from "react-icons/fi";
import { RiCalendarEventFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import Accordion from "../components/Accordion";



export const Event = () => {
    return (
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
                            <h1>Taylor Swift in Nepal</h1>
                            <FiShare2 size={30} color="#865CD0" />
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
                                <RiCalendarEventFill size={26} color="#865CD0" />
                                <p className="ftxt" >Oct 4, 2023 - Oct 10, 2023</p>
                            </div>
                            <p className="ltxt" >Add to Calendar</p>
                        </div>
                        <div className="seprate">
                            <div className="first" >
                                <SlLocationPin size={26} color="#865CD0" />
                                <p className="ftxt" >Lakeside-06, Pokhara</p>
                            </div>
                            <p className="ltxt" >View on Map</p>
                        </div>
                    </div>
                </div>
                <div className="acon">
                    <Accordion title="More Information" >
                        <div className="container" >
                            <div className="space">
                                <img src="/Pop.png" alt="Game" className="image" />
                                <p className="ftxt" >Outdoor Events</p>
                            </div>
                            <div className="space">
                                <img src="/Time.png" alt="Game" className="image" />
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
                    <Accordion title="Click on Interested to stay updated about this event." >
                        <div className="container" >

                        </div>
                    </Accordion>
                </div>

            </div>
            <div className="part2" ></div>
        </div>
    )
}
