import { useState, FC } from "react";
import '../../styles/Readmore.css'

interface ReadMoreProps {
    children: string;
}

const ReadMore: FC<ReadMoreProps> = ({ children }) => {
    const text: string = children;
    const [isReadMore, setIsReadMore] = useState<boolean>(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div>
            <p className="about" >{isReadMore ? text.slice(0, 600) : text}</p>
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
