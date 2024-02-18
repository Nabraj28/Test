import { TicketAccordionContainer, TicketAccordionContent, TicketAccordionHeader } from "./Ticket.styled";
import React, { useState } from 'react';


interface Accordionticketprops {
    element: React.ReactNode,
    children: React.ReactNode
}


const TicketAccordion: React.FC<Accordionticketprops> = ({ element, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <TicketAccordionContainer>
            <TicketAccordionHeader onClick={toggleAccordion} >
                {element}
            </TicketAccordionHeader>
            <TicketAccordionContent className={isOpen ? "open" : ""} >
                {children}
            </TicketAccordionContent>
        </TicketAccordionContainer>
    )
}

export default TicketAccordion