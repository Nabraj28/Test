import "../../styles/Ticketstyle.css"
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
            <div className="tcktaccordion-header" onClick={toggleAccordion}>
                {element}
            </div>
            {isOpen && (
                <div className="tcktaccordion-content">
                    {children}
                </div>
            )}
        </div>
    )
}

export default Tcaccordoin