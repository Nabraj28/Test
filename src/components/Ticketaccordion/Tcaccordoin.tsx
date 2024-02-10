import "./Ticketstyle.css"
import React, { useState } from 'react';


interface Accordionticketprops {
    element: React.ReactNode,
    children: React.ReactNode
}


const Tcaccordoin = ({ element, children }: Accordionticketprops) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="tcktaccordion">
            <div className={`tcktaccordion-header`} onClick={toggleAccordion}>
                {element}
            </div>
            <div className={`tcktaccordion-content ${isOpen ? "open" : ""} `}>
                {children}
            </div>
        </div>
    )
}

export default Tcaccordoin