import { motion, MotionProps } from "framer-motion";
import React from "react";
import { WithCSS, Box } from "../box";

export type HtmlAttributes<P = any> = Omit<
    React.AllHTMLAttributes<P>,
    | "width"
    | "height"
    | "size"
    | "as"
    | "style"
    | "onDrag"
    | "onDragEnd"
    | "onDragStart"
    | "css"
>;
export type MotionBox<T = {}> = React.FC<
    WithCSS &
        HtmlAttributes &
        MotionProps &
        T &
        Pick<React.DOMAttributes<any>, "onClick">
>;

export const MotionBox: MotionBox = motion.custom<WithCSS>(Box);
