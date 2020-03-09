import React, { useState } from "react";
import {
    ThemeProvider,
    Flex,
    SiteTheme,
    Checkbox,
    Message,
    PseudoBox
} from "prismatic-ui/dist";

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

export const AnimatedCard = ({ item, children, removeCard, ...props }) => (
    <Flex
        {...props}
        onClick={() => removeCard(item.id)}
        borderRadius={6}
        boxShadow={2}
        alignItems="center"
        px={2}
        key={item.id}
        bg={`${item.types[0]}.main`}
        color={`${item.types[0]}.text`}
    >
        {item.count} | {item.name} | #{item.number}
    </Flex>
);
