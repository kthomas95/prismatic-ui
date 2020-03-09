import { MotionBox, BoxProps } from "../Box";
import { AnimatePresence, MotionProps } from "framer-motion";
import React from "react";

interface AnimatedValue {
    value: string | number;
}

const AnimatedValue: React.FC<AnimatedValue & BoxProps & MotionProps> = ({
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

export default AnimatedValue;
