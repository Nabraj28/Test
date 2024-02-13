import React, { ReactNode } from "react";

export interface AccordionProps {
    title?: React.ReactNode;
    children: ReactNode;
    // showIcon: boolean
}