import '../../styles/Card.css'
import { RiCalendarEventFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";



export const Cardslider = () => {
    const data = [
        { id: 1, src: "/ts.jpg", title: "Taylor Swift in Nepal", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 2, src: "/hhi.jpg", title: "Harry Styles in Nepal enjoy it fullest.", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 3, src: "/ts.jpg", title: "Taylor Swift in Nepal", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 4, src: "/hhi.jpg", title: "Harry Styles in Nepal enjoy it fullest.", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 5, src: "/ts.jpg", title: "Taylor Swift in Nepal", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
        { id: 6, src: "/hhi.jpg", title: "Harry Styles in Nepal enjoy it fullest.", date: "Oct 4, 2023 - Oct 10, 2023", location: "Lakeside-06, Pokhara ", cash: "Rs.10,000 - Rs.50,000" },
    ]
    return (
        <div className='cardmain'>
            {data.map((data) => (


                <div className="cardcontainer" key={data.id} >
                    <img src={data.src} alt="mask" className='cardimage' />
                    <div className="cardinfo">
                        <p className='cardtitle' >{data.title}</p>
                        <div className='detcon' >
                            <div className='carddet' >
                                <div className="details1">
                                    <img src="/frame.png" alt="frame" className='rupaiya' />
                                    <p className='ltxt' >{data.cash}</p>
                                </div>
                                <div className="details1">
                                    <SlLocationPin className='rupaiya' color='#865CD0' />
                                    <p className='cardftxt' >{data.location}</p>
                                </div>
                                <div className="details1">
                                    <RiCalendarEventFill className='rupaiya' color='#865CD0' />
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
    )
}


