
import { Buttonprops } from "../../types";

const Outlinebutton = ({ children, color }: Buttonprops) => {
    const buttonStyle = {
        backgroundColor: 'white',
        padding: '0px 0px',
        color: color,
        borderWidth: '1px solid',
        borderColor: color,
        borderRadius: '10px',
        cursor: 'Pointer'

    };

    return (
        <button style={buttonStyle}>
            {children}
        </button>
    );
};

export default Outlinebutton;
