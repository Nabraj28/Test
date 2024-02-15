
import { OutlineButtonProps } from "../../types";
import { StyledOutlineButton } from "./Outline.styled";




const Outlinebutton = ({ children, color, bordercolor }: OutlineButtonProps) => {



    return (

        <StyledOutlineButton color={color} bordercolor={bordercolor} >
            {children}
        </StyledOutlineButton>

    );
};

export default Outlinebutton;
