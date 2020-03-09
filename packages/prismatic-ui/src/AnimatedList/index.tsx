import { Box, BoxProps, MotionBox } from "../Box";
import React from "react";
import { useTransition, animated } from "react-spring";
import { MotionProps, AnimatePresence } from "framer-motion";

interface List<T> {
    items: T[];
    /** The component that will be rendered for each list item. */
    component: React.FC<T>;
    /** A function that takes the list item and returns a unique key. */
    itemKey: (item: T, index: number) => string | number;
    /** An object of items to be passed on to the list element. */
    itemProps?: object;
}

const DefaultAnimateProps: MotionProps = {
    positionTransition: {
        damping: 20,
        stiffness: 300
    },
    exit: { scale: 0, opacity: 0 },
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 }
};

const AnimatedListItem = (props: MotionProps & BoxProps) => (
    <MotionBox
        {...props}
        {...(DefaultAnimateProps as Pick<
            MotionProps,
            "positionTransition" | "exit" | "initial" | "animate"
        >)}
    />
);

const AnimatedListContainer = <T extends any>({
    items,
    component: ListItem,
    itemKey,
    itemProps = {},
    ...props
}: List<T> & BoxProps) => {
    return (
        <Box {...props}>
            <AnimatePresence>
                {items.map((item, index) => (
                    <ListItem
                        {...{ ...item, index }}
                        {...itemProps}
                        key={itemKey(item, index)}
                    />
                ))}
            </AnimatePresence>
        </Box>
    );
};

AnimatedListContainer.defaultProps = { p: 0, as: "ul" };

export const AnimatedList = {
    Item: AnimatedListItem,
    Container: AnimatedListContainer
};
