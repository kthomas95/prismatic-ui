import React from "react";
import { MotionBox } from "../";

const DrawerStyles = {
    left: {},
};

interface DrawerProps {
    open: boolean;
    direction?: "left" | "right" | "bottom" | "top";
    size?: number;
}

export const Drawer: MotionBox<DrawerProps> = ({
    children,
    size = 350,
    direction = "left",
    open,
    ...props
}) => {
    return (
        <MotionBox
            {...props}
            position="fixed"
            {...{
                ...(["left", "right"].includes(direction)
                    ? {
                          minHeight: "100vh",
                          [direction]: 0,
                          top: 0,
                          bottom: 0,
                      }
                    : {
                          minWidth: "100vw",
                          left: 0,
                          right: 0,
                          [direction]: 0,
                      }),
            }}
            overflowX="hidden"
            animate={{
                [["left", "right"].includes(direction)
                    ? "width"
                    : "height"]: open ? size : 0,
            }}
            transition={{ mass: 100 }}
            children={open && children}
        />
    );
};
