import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { MotionBox, Box } from "../";

export const Menu = (props) => (
    <AnimateSharedLayout type="crossfade">
        <MotionBox
            layout
            as="ol"
            p={0}
            m={0}
            {...props}
            transition={{ easings: "linear" }}
        />
    </AnimateSharedLayout>
);

interface MenuItem {
    heading?: boolean;
}

const variants = {
    opened: { rotate: 0 },
    closed: { rotate: -90 },
};

export const MenuCollapse = ({
    heading,
    children,
    variantColor,
    opened = false,
    ...props
}) => {
    const [openedValue, setOpened] = useState(opened);

    return (
        <MotionBox
            layout
            transition={{ easings: "linear" }}
            _css={{
                borderLeft: "solid 4px",
                bg: `${variantColor}.a50` as const,
                borderColor: `${variantColor}.500`,
            }}
        >
            <MotionBox
                layout
                as="button"
                transition={{ easings: "linear" }}
                onClick={() => setOpened(!openedValue)}
                _css={{
                    width: "100%",
                    p: 3,
                    border: "none",
                    display: "flex",
                    bg: `${variantColor}.a50`,
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <MotionBox
                    variants={variants}
                    animate={openedValue ? "opened" : "closed"}
                    _css={{
                        width: "1rem",
                        height: "1rem",
                        mr: 2,
                        fontSize: "1rem",
                    }}
                >
                    <FiArrowDown />
                </MotionBox>
                <Box as="h4" _css={{ my: 0 }}>
                    {heading}
                </Box>
            </MotionBox>
            <AnimatePresence
                initial={false}
                exitBeforeEnter
                presenceAffectsLayout
            >
                {openedValue && (
                    <MotionBox
                        animate={{ scaleY: 1, opacity: 1 }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        exit={{ scaleY: 0, opacity: 0 }}
                        transition={{ easings: "linear" }}
                        style={{ originY: 0 }}
                        _css={{ display: "flex", flexDirection: "column" }}
                        layout
                    >
                        {children}
                    </MotionBox>
                )}
            </AnimatePresence>
        </MotionBox>
    );
};

export const MenuItem: Box<MenuItem> = ({ heading, ...props }) => (
    <Box
        as={heading ? "h3" : "li"}
        _css={{
            listStyle: "none",
            my: 0,
            pl: heading ? 0 : 3,
        }}
        {...props}
    />
);
