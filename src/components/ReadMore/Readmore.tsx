import React, { useState } from "react";
import { About, AboutContainer, More, ReadMoreText } from "./Readmore.styled";

interface ReadMoreProps {
    children: string;
}

const ReadMoreContainer: React.FC<ReadMoreProps> = ({ children }) => {
    const text: string = children;
    const [isReadMore, setIsReadMore] = useState<boolean>(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <AboutContainer>
            <About>
                {isReadMore ? text.slice(0, 400) : text}
                <More onClick={toggleReadMore}>
                    {isReadMore ? "....." : ""}
                </More>
            </About>
            <ReadMoreText onClick={toggleReadMore}>
                {isReadMore ? "Read More" : " Show Less"}
            </ReadMoreText>
        </AboutContainer>
    );
};

const ReadMore = () => {
    return (
        <ReadMoreContainer children="
    Experience the allure of Pokhara, Nepal,
    as we invite you to a captivating event nestled in the heart
    of this enchanting city. Against the backdrop of the majestic
     mountain range, immerse yourself in the rich cultural
    tapestry and warm hospitality that define this vibrant destination.
    From exploring the local cuisine to engaging in exciting activities,
    our event promises an unforgettable experience for seasoned travelers
    and first-time visitors alike. Join us as we celebrate the beauty and
     traditions of Pokhara, Nepal, in an adventure that will leave lasting
     memories.
     " />
    )
}

export default ReadMore;
