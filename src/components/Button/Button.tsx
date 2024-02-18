
import React from "react";
import { Buttonprops } from "../../types";
import { TagsButton } from "./Button.styled";


const Button: React.FC<Buttonprops> = ({ children, color, backgroundcolor }) => {


    return (
        <TagsButton color={color} backgroundcolor={backgroundcolor}  >
            {children}
        </TagsButton>
    );
};

export default Button;
