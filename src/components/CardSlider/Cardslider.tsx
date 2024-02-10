import './Card.css'
import { RiCalendarEventFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { Cardtypes } from '../../types';
import { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../Artists/Artiststyle.css"


const Cardslider = () => {


    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (scrollOffset: number) => {
        const adjustedOffset = window.innerWidth >= 1024 ? 540 : 270;
        const finalOffset = scrollOffset * adjustedOffset / 270;

        if (containerRef.current) {
            containerRef.current.scrollLeft += finalOffset;
        }
    }

    const data: Cardtypes[] = [
        { id: 1, src: "/ts.jpg", title: "Taylor Swift in Nepal", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 2, src: "/hhi.jpg", title: "Harry Styles in Nepal enjoy it fullest.", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 3, src: "/ts.jpg", title: "Taylor Swift in Nepal", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 4, src: "/hhi.jpg", title: "Harry Styles in Nepal enjoy it fullest.", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 5, src: "/ts.jpg", title: "Taylor Swift in Nepal", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 6, src: "/hhi.jpg", title: "Harry Styles in Nepal enjoy it fullest.", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
    ]
    return (
        <div className='cardmain'>
            <FaArrowLeft className="scroll-arrow left" onClick={() => handleScroll(-270)} />
            <div className='cardflexcontainer' ref={containerRef} >
                {data.map((data) => (
                    <div className="cardcontainer" key={data.id} >
                        <img src={data.src} alt="image" className='cardimage' />
                        <div className="cardinfo">
                            <p className='cardtitle' >{data.title}</p>
                            <div className='carddetailscontainer' >
                                <div className='carddetails' >
                                    <div className="eventdetails">
                                        <img src="/Rupees.svg" alt="frame" className='eventicon' />
                                        <p className='cashtext' style={{ color: "var(--main-color)" }}  >{data.cash}</p>
                                    </div>
                                    <div className="eventdetails">
                                        <SlLocationPin className='eventicon' color='#865CD0' />
                                        <p className='cardftxt' >{data.location}</p>
                                    </div>
                                    <div className="eventdetails">
                                        <RiCalendarEventFill className='eventicon' color='#865CD0' />
                                        <p className='cardftxt' >{data.date}</p>
                                    </div>

                                </div>
                                <div className='addbtn' >
                                    <div className='cardbtn' >
                                        <p className='add' >Add</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <FaArrowRight className="scroll-arrow right" onClick={() => handleScroll(270)} />

        </div>
    )
}

export default Cardslider

