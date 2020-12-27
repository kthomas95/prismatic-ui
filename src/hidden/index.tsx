import React from "react";
import { ResponsiveValue } from "styled-system";
import { AnimatePresence } from "framer-motion";
import { StyledBoxProps, MotionBox } from "../box";

const FullScreenProps = (
    offset: ResponsiveValue<number | string>
): StyledBoxProps => ({
    position: "fixed",
    top: offset,
    bottom: offset,
    left: offset,
    right: offset,
    margin: "auto",
    maxWidth: Array.isArray(offset)
        ? offset.map((width) => `calc(100vw - ${width} - ${width})`)
        : `calc(100vw - ${offset} - ${offset})`,
    maxHeight: Array.isArray(offset)
        ? offset.map((height) => `calc(100vh - ${height} - ${height})`)
        : `calc(100vh - ${offset} - ${offset})`,
    zIndex: 1000,
});

interface HiddenProps {
    visible: boolean;
    fullScreen?: boolean;
    fullScreenOffset?: ResponsiveValue<number | string>;
}

export const Hidden: MotionBox<HiddenProps> = ({
    visible,
    fullScreen,
    fullScreenOffset = "5vw",
    ...props
}) => (
    <AnimatePresence>
        {visible && (
            <MotionBox
                {...(fullScreen ? FullScreenProps(fullScreenOffset) : {})}
                layout
                {...props}
            />
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
