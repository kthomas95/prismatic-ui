import React, { useState } from "react";
import { TextField } from "prismatic-ui/dist";

export default {
    title: "Inputs"
};

export const textField = () => {
    const [text, setText] = useState("");
    return (
        <>
            <TextField value={text} onChange={e => setText(e.target.value)} />

            <p>{text}</p>
        </>
    );
};
