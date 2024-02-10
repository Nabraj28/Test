
import Tcaccordoin from '../Ticketaccordion/Tcaccordoin'
import Textaccordion from '../Textaccordion/Textaccordion'
import { LocationData } from '../../types'

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
        <div>
            {data.map((menu) => (
                <div className='ticketcontainer' key={menu.title} >
                    <div className="locationdivider">{menu.title}</div>
                    {menu.details?.map((details) => (

                        <Tcaccordoin element={
                            <div className='tcktheading' key={details.id} >
                                <div className="ticketdatecontainer">
                                    <p className="dayofweek">{details.dayofweek}</p>
                                    <p className="dayofmonth">{details.dayofmonth}</p>
                                    <p className="dayofweek">{details.yearmonth}</p>
                                </div>
                                <div className='dividermain' >
                                    <div className='dividerimgcon' >
                                        {
                                            Array.from({ length: 15 }).map((_, index) => (
                                                <img key={index} src="/dot.svg" alt="divider" className='dividerimg' />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="ticketheadinginfo">
                                    <div className='logotextseprator' >
                                        <img src="/timer.svg" alt="time" className='logocon' />
                                        <p className='dayofweek' >7:15 PM - 10:15 PM</p>
                                    </div>
                                    <div className='logotextseprator' >
                                        <img src="/pinch.svg" alt="pinch" className='logocon' />
                                        <p className='dayofweek' >Iris Pub, Lakeside : Pokhara</p>
                                    </div>
                                    <div className='logotextseprator' >
                                        <img src="/map.svg" alt="location" className='logocon' />
                                        <p className='dayofweek' >Map</p>
                                    </div>
                                </div>
                                <div className="tcktcolorcon">
                                    <div className="whitecircle">
                                        <img src="/Vector.svg" alt="ticket" className='ticketimg' />
                                    </div>
                                </div>
                            </div>
                        } >
                            <div className='ticketdetails' >
                                <div className='ticketpadding' >
                                    <div className="firstphase">
                                        <div className='between' >
                                            <div className='phasecost' >
                                                <p className='firstsecondphase' >First Phase</p>
                                                <p className="ticketprice">Rs. 10,000/Person</p>
                                            </div>
                                            <div className="addticketcontainer">
                                                <p className="ticketaddtext">Add</p>
                                            </div>
                                        </div>
                                        <Textaccordion showIcon={true}>
                                            Entry for 1 people, 1 bottle, premium service
                                        </Textaccordion>
                                    </div>
                                    <hr />
                                    <div className="secondphase">
                                        <div className='between' >
                                            <div className='phasecost' >
                                                <p className='firstsecondphase' >Second Phase</p>
                                                <p className="ticketprice">Rs. 10,000/Person</p>
                                            </div>
                                            <div className="addticketcontainer">
                                                <p className="ticketaddtext">Add</p>
                                            </div>
                                        </div>
                                        <Textaccordion showIcon={true}>
                                            Entry for 1 people, 1 bottle, premium service
                                        </Textaccordion>
                                    </div>
                                </div>
                            </div>
                        </Tcaccordoin>
                    ))
                    }
                </div>
            ))}
        </div>
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
