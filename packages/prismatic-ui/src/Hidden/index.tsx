import React from "react";
import { Box } from "..";
import { BoxProps, MotionBox } from "../Box";
import { AnimatePresence } from "framer-motion";

interface HiddenProps extends BoxProps {
    visible: boolean;
}

export const Hidden = ({ visible, ...props }) => (
    <AnimatePresence>{visible && <MotionBox {...props} />}</AnimatePresence>
);

Hidden.defaultProps = {
    exit: { scale: 0, opacity: 0 },
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 }
};
