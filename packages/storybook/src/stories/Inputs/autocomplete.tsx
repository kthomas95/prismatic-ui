import React, { useState, useEffect } from "react";
import {
    Box,
    MotionButton as Button,
    Grid,
    Autocomplete,
    AnimatedList
} from "prismatic-ui/dist";
import cardData from "../card_data.json";
import { AnimatedCard } from "./2-Inputs.stories";
export const autocomplete = () => {
    const [text, setText] = useState("");
    const [cards, setCards] = useState(cardData.map(edge => edge.node));
    useEffect(
        () =>
            setCards(
                cardData
                    .map(edge => edge.node)
                    .filter(card =>
                        card.name.toLowerCase().startsWith(text.toLowerCase())
                    )
            ),
        [text]
    );
    const [text2, setText2] = useState("");
    const [selected, setSelected] = useState<any[]>([]);
    const removeCard = (id: string) =>
        setSelected([...selected.filter(card => card.id !== id)]);
    return (
        <div>
            <h3>Autocomplete {text}</h3>
            <Autocomplete
                wrapperProps={{ mb: 4 }}
                height={212}
                inputHeight={32}
                open={text !== "" && cards.length > 0}
                {...{ value: text, setText }}
            >
                <Grid
                    height={"100%"}
                    overflowX="auto"
                    gridGap={3}
                    p={1}
                    gridTemplateRows="100%"
                    gridAutoColumns="1fr"
                    gridAutoFlow="column"
                >
                    {cards.map(card => (
                        <Button
                            key={card.id}
                            minWidth={400}
                            p={2}
                            onClick={() => {
                                // console.log("hi");
                                let found = selected.find(
                                    currentCard => currentCard.id === card.id
                                );
                                if (found) {
                                    found.count += 1;
                                } else {
                                    setSelected(
                                        [
                                            ...selected,
                                            { ...card, count: 1 }
                                        ].sort(
                                            (a, b) =>
                                                parseInt(a.number.slice(2)) -
                                                parseInt(b.number.slice(2))
                                        )
                                    );
                                }
                                setText("");
                            }}
                            boxShadow={2}
                            variantColor={card.types[0]}
                        >
                            <Box
                                as="img"
                                mr="auto"
                                maxHeight="100%"
                                _css={{
                                    objectFit: "scale-down",
                                    objectPosition: "left"
                                }}
                                src={`https://pkmn-cards.nyc3.cdn.digitaloceanspaces.com/${card.setCode}/${card.id}.jpg`}
                                width="40%"
                            />
                            {card.name}
                        </Button>
                    ))}
                </Grid>
            </Autocomplete>
            <Box maxWidth={400}>
                <h2>Pokemon</h2>

                <AnimatedList
                    items={selected}
                    itemKey={"id"}
                    itemHeight={32}
                    space={8}
                    listItemProps={{ removeCard }}
                    ListItem={AnimatedCard}
                />
            </Box>
        </div>
    );
};
