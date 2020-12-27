import React, { useState } from "react";
import { Button, Hidden } from "prismatic-ui";

export const HiddenStory = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    return (
        <>
            <h4>Hidden</h4>
            <Button onClick={() => setVisible((old) => !old)}>
                Show Fullscreen
            </Button>
            <Button onClick={() => setVisible2((old) => !old)}>Show</Button>
            <Hidden
                {...{ visible }}
                bg="background.verylight"
                fullScreen
                p={2}
                borderRadius={8}
                boxShadow={4}
                onClick={() => setVisible((old) => !old)}
            />
            <Hidden
                visible={visible2}
                bg="primary.main"
                p={2}
                m={2}
                boxShadow={3}
                borderRadius={3}
            >
                Test
            </Hidden>
        </>
    );
};

HiddenStory.storyName = "Hidden";
