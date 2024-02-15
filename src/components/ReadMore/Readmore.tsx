import { useState } from "react";
import { About, AboutContainer, More, ReadMoreText } from "./Readmore.styled";

interface ReadMoreProps {
    children: string;
}

const ReadMore = ({ children }: ReadMoreProps) => {
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

export default ReadMore;
