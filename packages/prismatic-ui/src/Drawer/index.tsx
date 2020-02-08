import React from "react";
import { Box } from "../Box";
import { motion } from "framer-motion";
import { animated, useSpring } from "react-spring";

const MotionBox = motion.custom(Box);

const DrawerStyles = {
    left: {}
};

export const Drawer = ({ children, ...props }) => {
    const styles = useSpring({
        [["left", "right"].includes(props.direction)
            ? "width"
            : "height"]: props.open ? 300 : 0
    });

    return (
        <MotionBox
            {...props}
            position="fixed"
            {...{
                ...(["left", "right"].includes(props.direction)
                    ? {
                          minHeight: "100vh",
                          [props.direction]: 0,
                          top: 0,
                          bottom: 0
                      }
                    : {
                          minWidth: "100vw",
                          left: 0,
                          right: 0,
                          [props.direction]: 0
                      })
            }}
            overflowX="hidden"
            animate={{
                [["left", "right"].includes(props.direction)
                    ? "width"
                    : "height"]: props.open ? 350 : 0
            }}
            children={props.open && children}
        />
    );
};
