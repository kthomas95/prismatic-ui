import React, { useState } from "react";
import { Button, Hidden } from "prismatic-ui/dist";

export default {
    title: "Layout"
};

export const hidden = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <h4>Hidden</h4>
            <Button onClick={() => setVisible(old => !old)}>Show</Button>
            <Hidden
                {...{ visible }}
                bg="background.verylight"
                p={2}
                position="fixed"
                top={"10vh"}
                right={"10vw"}
                borderRadius={8}
                boxShadow={4}
                left={"10vw"}
                bottom={"10vh"}
                onClick={() => setVisible(old => !old)}
            />
        </>
    );
};
