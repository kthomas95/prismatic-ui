import React, { useState } from "react";
import {
    Grid,
    Box,
    MotionButton as Button,
    AnimatedList
} from "prismatic-ui/dist";

import cardData from "../../card_data.json";

export default {
    title: "Inputs"
};

var shuffle = function(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const cards = cardData.map(edge => edge.node);

const CardListItem = card => (
    <AnimatedList.Item
        onClick={() => card.toggleItems(card.id)}
        bg={`${card.types}.main`}
        color={`${card.types}.text`}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        borderRadius={4}
    >
        {card.name}
    </AnimatedList.Item>
);
export const list = () => {
    const [items, setItems] = useState(cards);
    const [open, setOpen] = useState(true);
    const toggleItems = (toggle: string) => {
        // setItems([
        //     ...items.filter(item => item.id !== toggle),
        //     items.find(card => card.id === toggle)
        // ]);
        setItems(old => old.filter(item => item.id !== toggle));
    };
    return (
        <Grid gridTemplateColumns="1fr 300px">
            <Box>
                <h3>List</h3>
            </Box>
            <Box>
                <h3 onClick={() => setItems([...shuffle(items)])}>
                    Animated List
                </h3>
                <Button mb={2} onClick={() => setItems([...shuffle(items)])}>
                    Shuffle
                </Button>

                <AnimatedList.Container
                    position="absolute"
                    bottom={0}
                    top={"50%"}
                    left={0}
                    right={0}
                    bg="primary.light"
                    items={items}
                    itemKey={item => item.id}
                    itemProps={{ toggleItems }}
                    component={CardListItem}
                    display={"grid"}
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    p={2}
                    overflowX="auto"
                    gridGap={3}
                    _css={{ whiteSpace: "nowrap" }}
                />
            </Box>
        </Grid>
    );
};
