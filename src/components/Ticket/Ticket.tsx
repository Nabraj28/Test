import React from "react"
import { ProceedButton, ProceedButtonCotainer, SelectTicketText, TicketMainContainer } from "./Ticket.styled"
import TicketContainer from "./TicketContainer"

const Ticket: React.FC = () => {
    return (
        <TicketMainContainer>
            <SelectTicketText>Select Ticket</SelectTicketText>
            <TicketContainer />
            <ProceedButtonCotainer>
                <ProceedButton>Proceed</ProceedButton>
            </ProceedButtonCotainer>
        </TicketMainContainer>
    )
}

export default Ticket