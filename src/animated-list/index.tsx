import React, { useState } from "react";
import {
    MotionProps,
    AnimatePresence,
    AnimationProps,
    motion,
} from "framer-motion";
import { FiShuffle } from "react-icons/fi";
import { Button } from "../button";
import { Theme } from "styled-system";
import { StyledBoxProps, MotionBox, Box } from "../box";

interface ListProps<T, O> extends StyledBoxProps {
    items: T[];
    /** The component that will be rendered for each list item. */
    component: React.FC<T & O & { index: number }>;
    /** A function that takes the list item and returns a unique key. */
    itemKey: (item: T, index: number) => string | number;
    /** An object of items to be passed on to the list element. */
    itemProps?: O;
}

const DefaultAnimateProps: MotionProps & AnimationProps = {
    // transition: {
    //     damping: 20,
    //     stiffness: 300,
    // },
    exit: { scale: 0, opacity: 0 },
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    layout: true,
};

const AnimatedListItem: MotionBox = (props) => (
    <MotionBox {...props} {...(DefaultAnimateProps as MotionProps)} />
);

const AnimatedListContainer = <T extends object, O extends object = {}>({
    items,
    component: ListItem,
    itemKey,
    itemProps,
    ...props
}: ListProps<T, O>) => {
    return (
        <Box {...props}>
            <AnimatePresence>
                {items.map((item, index) => (
                    <ListItem
                        {...{ ...itemProps, ...item, index }}
                        key={itemKey(item, index)}
                    />
                ))}
            </AnimatePresence>
        </Box>
    );
};

AnimatedListContainer.defaultProps = { p: 0, as: "ul" };

export { AnimatedListItem, AnimatedListContainer };
