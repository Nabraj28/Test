
import { Buttonprops } from "../types";
import "../../styles/Eventstyles.css"


const Button = ({ children, color }: Buttonprops) => {

    const buttonStyle = {
        backgroundColor: color,
    };

    return (
        <button style={buttonStyle} className="btnstyle" >
            {children}
        </button>
    );
};

export default Button;
