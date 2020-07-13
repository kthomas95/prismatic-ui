import React, { useState, useEffect } from "react";
import { Badge, AnimatedValue } from "prismatic-ui/dist";

export default {
    title: "Data Display"
};

const Names = ["Kyle", "Mallory", "Grady", "Jon", "Buddy"];
export const animatedValue = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setValue(old => old + 1), 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <h3>Animated Value</h3>
            <Badge variantColor="error">
                <AnimatedValue value={`${Names[value % 5]} `} as="span">
                    is cool!
                </AnimatedValue>
            </Badge>
        </>
    );
};
