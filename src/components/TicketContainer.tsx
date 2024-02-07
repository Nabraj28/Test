
import Tcaccordoin from './Tcaccordoin'
import Textaccordion from './Textaccordion'

export const Ticket = () => {

    const data = [
        {
            title: "Pokhara", details: [
                { dayofweek: "Tue", dayofmonth: "21", yearmonth: "Aug 2022" },
                { dayofweek: "Wed", dayofmonth: "22", yearmonth: "Aug 2022" },
                { dayofweek: "Thu", dayofmonth: "23", yearmonth: "Aug 2022" },
            ]
        }, {
            title: "Kathmandu", details: [
                { dayofweek: "Fri", dayofmonth: "24", yearmonth: "Aug 2022" },
                { dayofweek: "Sat", dayofmonth: "25", yearmonth: "Aug 2022" },
            ]
        }
    ]

    return (
        <div>
            {data.map((data) => (

                <div className='ticketcon' key={data.title} >
                    <div className="tdivider">{data.title}</div>
                    {data.details?.map((details) => (

                        <Tcaccordoin element={
                            <div className='tcktheading'>
                                <div className="tcktdatecon">
                                    <p className="dayofweek">{details.dayofweek}</p>
                                    <p className="dayofmonth">{details.dayofmonth}</p>
                                    <p className="dayofweek">{details.yearmonth}</p>
                                </div>
                                <div className='dividermain' >
                                    <div className='dividerimgcon' >
                                        <img src="/divider.png" alt="divider" className='dividerimg' />
                                    </div>
                                </div>
                                <div className="tckheadinginfo">
                                    <div className='lot' >
                                        <img src="/Time.png" alt="time" className='logocon' />
                                        <p className='dayofweek' >7:15 PM - 10:15 PM</p>
                                    </div>
                                    <div className='lot' >
                                        <img src="/pinch.png" alt="pinch" className='logocon' />
                                        <p className='dayofweek' >Iris Pub, Lakeside : Pokhara</p>
                                    </div>
                                    <div className='lot' >
                                        <img src="/location.png" alt="location" className='logocon' />
                                        <p className='dayofweek' >Map</p>
                                    </div>
                                </div>
                                <div className="tcktcolorcon">
                                    <div className="whitecir">
                                        <img src="/Vector.png" alt="ticket" className='ticketimg' />
                                    </div>
                                </div>
                            </div>
                        } >
                            <div className='tcktdetails' >
                                <div className='tcktgap' >
                                    <div className="firstphase">
                                        <div className='between' >
                                            <div className='fsmain' >
                                                <p className='fsphase' >First Phase</p>
                                                <p className="tcktprice">Rs. 10,000/Person</p>
                                            </div>
                                            <div className="tcktaddmain">
                                                <p className="tcktaddtext">Add</p>
                                            </div>
                                        </div>
                                        <Textaccordion showIcon={true}>
                                            Entry for 1 people, 1 bottle, premium service
                                        </Textaccordion>
                                    </div>
                                    <hr />
                                    <div className="secondphase">
                                        <div className='between' >
                                            <div className='fsmain' >
                                                <p className='fsphase' >Second Phase</p>
                                                <p className="tcktprice">Rs. 10,000/Person</p>
                                            </div>
                                            <div className="tcktaddmain">
                                                <p className="tcktaddtext">Add</p>
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

export const TicketContainer = () => {
    return (
        <div>
            <Ticket />
        </div>
    )
}
