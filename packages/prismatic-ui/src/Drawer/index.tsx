import React from "react";
import { MotionBox } from "../Box";

const DrawerStyles = {
    left: {}
};

export const Drawer = ({ children, size = 350, ...props }) => {
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
                    : "height"]: props.open ? size : 0
            }}
            transition={{ mass: 100 }}
            children={props.open && children}
        />
    );
};
