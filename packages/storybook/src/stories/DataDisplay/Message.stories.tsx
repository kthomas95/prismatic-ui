import React from "react";
import { Message } from "prismatic-ui/dist";
import { colorTypes } from "../../colorTypes";

export default {
    title: "Data Display"
};

export const message = () => (
    <>
        {colorTypes.map(color => (
            <Message variantColor={color} key={color} mb={3}>
                <h4>{color[0].toUpperCase() + color.slice(1)}</h4>
                This is an example of a message.
            </Message>
        ))}
    </>
);
