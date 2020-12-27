import { AnimatePresence, MotionProps } from "framer-motion";
import React from "react";
import { MotionBox } from "../box";

interface AnimatedValue {
    value: string | number;
}

export const AnimatedValue: MotionBox<AnimatedValue> = ({
    children,
    value,
    ...props
}) => (
    <AnimatePresence exitBeforeEnter>
        <MotionBox
            exit={{ y: -20, opacity: 0 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={value}
            {...props}
        >
            {value}
            {children}
        </MotionBox>
    </AnimatePresence>
);
