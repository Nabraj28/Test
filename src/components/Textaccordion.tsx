
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../../styles/Accordion.css'
import { AccordionProps } from '../types';



const Textaccordion = ({ children, showIcon = true }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="txtaccordion-header" onClick={toggleAccordion}>
                <span className="txtaccordion-title">{isOpen ? "Hide Details" : "View Details"}</span>
                {showIcon && (isOpen ? <FaChevronUp size={15} /> : <FaChevronDown size={15} />)}
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <span className='txtaccordion-content' >
                        {children}
                    </span>
                </div>
            )}
        </div>
    );
};

export default Textaccordion;
