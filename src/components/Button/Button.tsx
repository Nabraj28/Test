
import { Buttonprops } from "../../types";
import { TagsButton } from "./Button.styled";


const Button = ({ children, color, backgroundcolor }: Buttonprops) => {


    return (
        <TagsButton color={color} backgroundcolor={backgroundcolor}  >
            {children}
        </TagsButton>
    );
};

export default Button;
