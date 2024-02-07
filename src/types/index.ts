import React, { ReactNode } from "react";

export interface Buttonprops {
    children: ReactNode,
    color: string,

}

export interface AccordionProps {
    title?: React.ReactNode;
    children: ReactNode;
    showIcon: boolean
}