import React from "react";
import { Box, MotionBox } from "../../primatives";
import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";
import { WidthProps, ResponsiveValue } from "styled-system";

interface LoaderProps {
    size?: ResponsiveValue<number | string>;
}

export const Loader: MotionBox<LoaderProps> = ({ size = 32, ...props }) => (
    <MotionBox
        width={size}
        height={size}
        animate={{ rotate: [0, 365] }}
        display="inline-flex"
        transition={{
            loop: Infinity,
            mass: 100,
            ease: "anticipate",
            damping: 300,
            stiffness: 10,
        }}
        {...props}
    >
        <Box as={FiLoader} height={"100%"} width={"100%"} />
    </MotionBox>
);
