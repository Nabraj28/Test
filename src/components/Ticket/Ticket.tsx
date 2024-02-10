
import "../Ticketaccordion/Ticketstyle.css"
import TicketContainer from "./TicketContainer"

const Ticket = () => {
    return (
        <div className='ticketmain' >
            <p className='ticketselect' >Select Ticket</p>
            <TicketContainer />
        </div>
    )
}

export default Ticket