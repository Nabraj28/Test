
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Accordion.css'
import { AccordionProps } from '../../types';



const Accordion = ({ title, children, showIcon = true }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <span className="accordion-title">{title}</span>
                {showIcon && (isOpen ? <FaChevronUp className='updown' /> : <FaChevronDown className='updown' />)}
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
