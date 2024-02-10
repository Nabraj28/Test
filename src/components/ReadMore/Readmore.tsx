import { useState } from "react";
import './Readmore.css'

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
        <div>
            <p className="about" >{isReadMore ? text.slice(0, 500) : text}<span onClick={toggleReadMore} style={{ color: "var(--main-color)", fontFamily: "cursive" }} >{isReadMore ? "....." : ""}</span> </p>
            <p
                onClick={toggleReadMore}
                style={{ color: "#865CD0", cursor: "pointer", marginTop: '5px' }}
                className="txt"

            >
                {isReadMore ? "Read More" : " Show Less"}
            </p>
        </div>
    );
};

export default ReadMore;
