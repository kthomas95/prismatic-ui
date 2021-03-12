import React from "react";
import { ResponsiveValue } from "styled-system";
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "../";
import { CSSObject, CSSProperties } from "@styled-system/css";
import { WithCSS } from "../box";

const FullScreenProps = (
    offset: ResponsiveValue<number | string>
): CSSObject => ({
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
    _css,
    ...props
}) => (
    <AnimatePresence>
        {visible && (
            <MotionBox
                _css={{
                    ...(fullScreen ? FullScreenProps(fullScreenOffset) : {}),
                    ..._css,
                }}
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
