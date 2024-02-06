
import { Buttonprops } from "../types";

const Button = ({ children, color }: Buttonprops) => {
    const buttonStyle = {
        backgroundColor: color,
        padding: '10px 20px',
        border: 'none',
        color: 'white',
        // margin: '5px'
    };

    return (
        <button style={buttonStyle}>
            {children}
        </button>
    );
};

export default Button;
