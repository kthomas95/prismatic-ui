import React, { useState } from "react";
import {
    Flex,
    SiteTheme,
    Checkbox,
    Message,
    PseudoBox,
    AnimatedListItem,
} from "prismatic-ui";

export const ControlledCheckbox = ({ ...props }) => {
    const [check1, setCheck1] = useState(true);
    return (
        <Checkbox
            checked={check1}
            onChange={() => setCheck1(!check1)}
            {...props}
        >
            {check1 ? "Checked" : "An Unchecked Checkbox"} Checkbox
        </Checkbox>
    );
};
