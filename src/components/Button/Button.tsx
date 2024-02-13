
import { Buttonprops } from "../../types";
import { TagsButton } from "./Button.styled";


const Button = ({ children, color, backgroundColor }: Buttonprops) => {


    return (
        <TagsButton Color={color} backgroundColor={backgroundColor}  >
            {children}
        </TagsButton>
    );
};

export default Button;
