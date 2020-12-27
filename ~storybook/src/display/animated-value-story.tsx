import React, { useState, useEffect } from "react";
import { AnimatedValue, Badge } from "prismatic-ui";

export const AnimatedValueStory = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setValue((old) => old + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Badge>
            <AnimatedValue value={value} />
        </Badge>
    );
};

AnimatedValueStory.storyName = "Animated Value";
