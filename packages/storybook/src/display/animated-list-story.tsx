import React, { useState } from "react";

import cardData from "../card_data.json";
import { AnimatedList, Button, MotionBox } from "prismatic-ui";
import { shuffle } from "lodash";

const cards = cardData.map((card) => card.node);

const colors = [
    "primary",
    "secondary",
    "error",
    "success",
    "warning",
    "danger",
];

const AnimatedListItem = ({ name, index, ...props }: { name: string }) => (
    <AnimatedList.Item
        bg={`${colors[name.charCodeAt(0) % 6]}.main`}
        color={`${colors[name.charCodeAt(0) % 6]}.text`}
        m={2}
        p={3}
        borderRadius={4}
        onClick={() => props.toggleItems(props.id)}
        // {...props}
    >
        {name}
    </AnimatedList.Item>
);

export const AnimatedListStory = () => {
    const [cardList, setCards] = useState(cards);
    const toggleItems = (toggle: string) => {
        setCards((old) => old.filter((item) => item.id !== toggle));
    };

    return (
        <>
            <Button onClick={() => setCards((old) => [...shuffle(old)])}>
                Shuffle
            </Button>
            <AnimatedList.Container
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr"
                position="absolute"
                flexWrap="wrap"
                items={cardList}
                itemProps={{ toggleItems }}
                itemKey={(card, index) => card.id}
                component={AnimatedListItem}
            />
        </>
    );
};

AnimatedListStory.storyName = "Animated List";
