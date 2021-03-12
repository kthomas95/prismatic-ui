import * as _ from "lodash/fp";
export enum Suits {
    SPADES = "♠",
    DIAMONDS = "♦",
    CLUBS = "♣",
    HEARTS = "♥",
}

const getNumber = (index: number): string | number =>
    _.pipe(
        _.cond([
            [_.lt(9), (index) => ["J", "Q", "K"][index % 10]],
            [_.stubTrue, _.identity],
        ]),
        _.cond([
            [_.isNumber, _.add(1)],
            [_.stubTrue, _.identity],
        ]),
        _.cond([
            [_.equals(1), () => "A"],
            [_.stubTrue, _.identity],
        ])
    )(index % 13);

const getSuit = _.pipe(
    _.add(1),
    _.divide(_.__, 13),
    _.ceil,
    (val: number) =>
        [Suits.CLUBS, Suits.DIAMONDS, Suits.HEARTS, Suits.SPADES][val - 1]
);

export interface Card {
    number: string | number;
    suit: Suits;
}

export const CARDS: Card[] = Array(52)
    .fill(undefined)
    .map((_, index) => ({
        number: getNumber(index),
        suit: getSuit(index),
    }));
