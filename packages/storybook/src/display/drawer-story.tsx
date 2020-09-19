import React, { useState } from "react";
import { Drawer, Button, Box, Grid } from "prismatic-ui";

export const DrawerStory = () => {
    const [open, setOpen] = useState(false);
    const [direction, setDirection] = useState("left");

    const toggle = (direction: string) => {
        setOpen(false);
        setDirection(direction);
        setOpen(true);
    };

    return (
        <div>
            <Grid
                position="absolute"
                m="auto"
                top={0}
                bottom={0}
                right={0}
                maxWidth="150px"
                maxHeight="150px"
                gridGap={2}
                left={0}
                gridTemplateColumns="1fr 1fr"
                gridTemplateRows="1fr 1fr"
            >
                <Button onClick={() => toggle("left")}>Open Left</Button>
                <Button onClick={() => toggle("right")}>Open Right</Button>
                <Button onClick={() => toggle("top")}>Open Top</Button>
                <Button onClick={() => toggle("bottom")}>Open Bottom</Button>
            </Grid>
            <Drawer
                open={open}
                key={direction}
                direction={direction}
                bg="primary.verylight"
                color="primary.text"
            >
                <Box p={2}>
                    <h3>Test</h3>
                    Direction: {direction}
                    Status: {open ? "Open" : "Closed"}
                    <Button
                        position="absolute"
                        right={2}
                        top={2}
                        variantColor="error"
                        onClick={() => setOpen((old) => false)}
                    >
                        Close
                    </Button>
                </Box>
            </Drawer>
        </div>
    );
};

DrawerStory.storyName = "Drawer";
