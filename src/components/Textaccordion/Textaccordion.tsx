
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';


interface TextAccordionProps {
    children: React.ReactNode
}

const AccordionContainer = styled.div`
    border: none;
    margin-bottom: 10px;
`;

const AccordionHeader = styled.div`
    padding: 10px;
    background-color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
`;

const AccordionTitle = styled.span`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 16px;
`;
const ContentText = styled.span`
    font-family: ${({ theme }) => theme.poppins};
    font-size: 16px;
`;

const AccordionContent = styled.div`
    padding: 10px;
`;



const TextAccordion: React.FC<TextAccordionProps> = ({ children, }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionContainer>
            <AccordionHeader onClick={toggleAccordion}>
                <AccordionTitle>{isOpen ? "Hide Details" : "View Details"}</AccordionTitle>
                {isOpen ? <FaChevronUp size={15} /> : <FaChevronDown size={15} />}
            </AccordionHeader>
            {isOpen && (
                <AccordionContent>
                    <ContentText>{children}</ContentText>
                </AccordionContent>
            )}
        </AccordionContainer>
    );
};

export default TextAccordion;