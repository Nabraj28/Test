
import React from "react";
import { OutlineButtonProps } from "../../types";
import { StyledOutlineButton } from "./Outline.styled";




const Outlinebutton: React.FC<OutlineButtonProps> = ({ children, color, bordercolor }) => {



    return (

        <StyledOutlineButton color={color} bordercolor={bordercolor} >
            {children}
        </StyledOutlineButton>

    );
};

export default Outlinebutton;
