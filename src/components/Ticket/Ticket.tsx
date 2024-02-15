import { SelectTicketText, TicketMainContainer } from "./Ticket.styled"
import TicketContainer from "./TicketContainer"

const Ticket = () => {
    return (
        <TicketMainContainer>
            <SelectTicketText>Select Ticket</SelectTicketText>
            <TicketContainer />
        </TicketMainContainer>
    )
}

export default Ticket