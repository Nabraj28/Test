
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../../styles/Accordion.css'
import { AccordionProps } from '../types';



const Accordion = ({ title, children }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <span className="accordion-title">{title}</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isOpen && (
                <div className="accordion-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
