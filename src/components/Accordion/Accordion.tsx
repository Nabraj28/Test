
import { useState } from 'react';
import { AccordionProps } from '../../types';
import { AccordionContainer, AccordionContent, AccordionHeader, AccordionTitle, DownIcon, UpIcon } from './Accordion.styled';



const Accordion = ({ title, children }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionContainer>
            <AccordionHeader onClick={toggleAccordion} >
                <AccordionTitle>{title}</AccordionTitle>
                {isOpen ? <UpIcon /> : <DownIcon />}
            </AccordionHeader>
            {
                isOpen && (
                    <AccordionContent>
                        {children}
                    </AccordionContent>
                )
            }
        </AccordionContainer>
    );
};

export default Accordion;