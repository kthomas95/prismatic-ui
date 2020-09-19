import React from "react";
import { Box } from "../..";
import { BoxProps, MotionBox, StyledBoxProps } from "../../primatives";
import { ResponsiveValue } from "styled-system";
import { AnimatePresence } from "framer-motion";

const FullScreenProps = (
    offset: ResponsiveValue<number | string>
): StyledBoxProps => ({
    position: "fixed",
    top: offset,
    bottom: offset,
    left: offset,
    right: offset,
});

interface HiddenProps {
    visible: boolean;
    fullScreen?: boolean;
    fullScreenOffset?: ResponsiveValue<number | string>;
}

export const Hidden: MotionBox<HiddenProps> = ({
    visible,
    fullScreenOffset = "5vw",
    ...props
}) => (
    <AnimatePresence>
        {visible && (
            <MotionBox {...props} {...FullScreenProps(fullScreenOffset)} />
        )}
    </AnimatePresence>
);

Hidden.defaultProps = {
    exit: { scale: 0, opacity: 0 },
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: {
        ease: "easeIn",
    },
};
