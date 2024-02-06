import { ReactNode } from "react";

export interface Buttonprops {
    children: ReactNode,
    color: string
}

export interface AccordionProps {
    title: string;
    children: ReactNode;
}