import React, { useState } from "react";
import { TextField, Stat, Box, Card } from "prismatic-ui";

export const TextfieldStory = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <TextField onChange={(e) => setText(e.currentTarget.value)} />
            <br />
            <Card display="inline-block" as="p" p={2} fontSize=".8em">
                <Stat label="Current Text" value={text === "" ? `""` : text} />
            </Card>
        </div>
    );
};

TextfieldStory.storyName = "Text Field";
