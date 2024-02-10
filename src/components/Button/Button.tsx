
import { Buttonprops } from "../../types";
import "./Button.css"


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
