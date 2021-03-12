import { AnimatedListContainer, AnimatedListItem, Button } from "../";
import * as _ from "lodash/fp";
import React, { useState } from "react";
import { ColorVariant } from "../system";
import { Flex } from "../flex";
import { Card, CARDS, Suits } from "./card-data";

export default {
    title: "Layout/Animated List",
};

const CardItem = ({
    index,
    removeCard,
    ...card
}: Card & { index: number; removeCard: (index: number) => void }) => {
    const color: ColorVariant =
        card.suit === Suits.CLUBS || card.suit === Suits.SPADES
            ? "text"
            : "error";
    return (
        <AnimatedListItem
            _css={{
                bg: `${color}.a50`,
                color: `${color}.500`,
                fontWeight: 700,
                fontSize: "lg",
                p: 3,
                borderRadius: 4,
                boxShadow: "md",
            }}
            onClick={() => removeCard(index)}
        >
            <Flex
                vertical
                _css={{ display: "inline-flex", textAlign: "center" }}
            >
                <div>{card.number}</div>
                <div>{card.suit}</div>
            </Flex>
        </AnimatedListItem>
    );
};

export const basic = () => {
    const [cards, setCards] = useState(CARDS);
    return (
        <>
            <Button onClick={() => setCards(_.shuffle)} _css={{ mr: 2 }}>
                Shuffle
            </Button>
            <Button onClick={() => setCards(CARDS)}>Reset</Button>
            <AnimatedListContainer
                items={cards}
                itemKey={(item) => `${item.number}${item.suit}`}
                component={CardItem}
                itemProps={{
                    removeCard: (index: number) => setCards(_.pullAt(index)),
                }}
                _css={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(100px, 1fr))",
                    gridAutoRows: "150px",
                    gridGap: 3,
                }}
            />
        </>
    );
};
