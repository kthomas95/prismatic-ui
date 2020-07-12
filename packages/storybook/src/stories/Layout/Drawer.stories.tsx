import React, { useState } from "react";
import { Box, Button, Drawer, Checkbox } from "prismatic-ui/dist";

export default {
    title: "Layout",
    id: "Layout/Drawer",
    name: "Drawer"
};

export const drawer = () => {
    const [open, setOpen] = useState(false);
    const [direction, setDirection] = useState("top");
    return (
        <Box lineHeight={2}>
            <h3>Drawer</h3>
            <Checkbox
                checked={direction === "left"}
                mr={2}
                onChange={() => setDirection("left")}
            >
                Left
            </Checkbox>
            <Checkbox
                checked={direction === "right"}
                mr={2}
                onChange={() => setDirection("right")}
            >
                Right
            </Checkbox>
            <Checkbox
                checked={direction === "top"}
                mr={2}
                onChange={() => setDirection("top")}
            >
                Top
            </Checkbox>
            <Checkbox
                checked={direction === "bottom"}
                onChange={() => setDirection("bottom")}
            >
                Bottom
            </Checkbox>{" "}
            <br />
            <Button onClick={() => setOpen(!open)} variantColor="primary">
                Open Drawer
            </Button>
            <Drawer
                {...{ open, direction }}
                bg="primary.main"
                color="primary.text"
            >
                <Box p={2}>
                    <h3>Filter Results</h3>
                    <Button
                        position="absolute"
                        right={0}
                        top={0}
                        width={32}
                        height={32}
                        m={2}
                        variantColor="error"
                        onClick={e => setOpen(!open)}
                    >
                        X
                    </Button>
                </Box>
            </Drawer>
        </Box>
    );
};
