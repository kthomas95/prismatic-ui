import { Box, BoxProps, MotionBox } from "../Box";
import { List } from "../List";
import React from "react";
import { useTransition, animated } from "react-spring";
import { MotionProps } from "framer-motion";

interface List {
    items: any[];
    element: (item: any) => BoxProps & MotionProps & { key: number | string };
}

export const AnimatedList: React.FC<List & BoxProps> = ({
    items,
    element,
    ...props
}) => (
    <Box {...props}>
        {items.map(card => (
            <MotionBox
                positionTransition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                }}
                {...element(card)}
            />
        ))}
    </Box>
);

AnimatedList.defaultProps = { p: 0, as: "ul" };
