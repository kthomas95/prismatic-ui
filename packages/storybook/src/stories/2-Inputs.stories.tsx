import React, { useState, useEffect } from "react";
import {
    Box,
    ThemeProvider,
    Flex,
    MotionButton as Button,
    SiteTheme,
    Heading,
    Checkbox,
    Message,
    TextField,
    Grid,
    Autocomplete,
    PseudoBox,
    AnimatedList
} from "prismatic-ui/dist";
import { animated } from "react-spring";
import cardData from "./card_data.json";
import { IconButton } from "prismatic-ui/dist/Button";
import {
    FiTrash,
    FiHome,
    FiCalendar,
    FiAlertCircle,
    FiSmile,
    FiMenu,
    FiPlus,
    FiTrash2,
    FiShare2,
    FiShare
} from "react-icons/fi";

export default {
    title: "Inputs",
    id: "2"
};

const buttons = [
    "primary",
    "secondary",
    "background",
    "text",
    "error",
    "danger",
    "warning",
    "success"
];

const ControlledCheckbox = ({ ...props }) => {
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

const AnimatedCard = ({ item, children, removeCard, ...props }) => (
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

export const checkbox = () => {
    const [checked, setChecked] = useState([true, true, true]);
    const indererminate = checked.some(Boolean) && checked.some(val => !val);
    return (
        <>
            <Heading>Checkbox</Heading>
            <Grid
                gridTemplateColumns={"repeat(auto-fill, minmax(200px, 1fr))"}
                gridGap={2}
            >
                {buttons.map(color => (
                    <ControlledCheckbox variantColor={color} />
                ))}
            </Grid>
            <Heading as="h5" my={2}>
                Indeterminate Checkbox
            </Heading>
            <Checkbox
                checked={checked.every(Boolean) || indererminate}
                indeterminate={indererminate}
                variantColor={indererminate ? "warning" : "primary"}
                onChange={() =>
                    setChecked([
                        ...checked.fill(
                            indererminate || checked.some(x => !x)
                                ? true
                                : false
                        )
                    ])
                }
            ></Checkbox>
            <br />
            <Checkbox
                variantColor="primary"
                checked={checked[0]}
                onChange={() => setChecked([!checked[0], ...checked.slice(1)])}
                mr={2}
            >
                Option 1
            </Checkbox>
            <Checkbox
                variantColor="secondary"
                checked={checked[1]}
                onChange={() =>
                    setChecked([checked[0], !checked[1], checked[2]])
                }
                mr={2}
            >
                Option 2
            </Checkbox>
            <Checkbox
                variantColor="danger"
                checked={checked[2]}
                onChange={() =>
                    setChecked([...checked.slice(0, 2), !checked[2]])
                }
            >
                Option 3
            </Checkbox>
        </>
    );
};

export const textField = () => {
    const [text, setText] = useState("");
    return (
        <>
            <TextField value={text} onChange={e => setText(e.target.value)} />
            {text}
        </>
    );
};

export const button = () => (
    <>
        <h3>Buttons</h3>
        <h4>Solid Buttons</h4>
        <Grid gridAutoColumns={"max-content"} gridAutoFlow="column" gridGap={2}>
            {buttons.map(color => (
                <Button
                    variantColor={color}
                    as="a"
                    css={color === "primary" ? { color: "black" } : {}}
                >
                    {color[0].toUpperCase() + color.slice(1)}
                </Button>
            ))}
            <Button variantColor="primary" leftIcon={FiPlus}>
                Add Item
            </Button>
            <Button variantColor="error" rightIcon={FiTrash2}>
                Delete Item
            </Button>
            <IconButton variantColor="error" icon={FiTrash2} />
            <IconButton
                variantColor="primary"
                variant="outline"
                icon={FiShare}
            />
        </Grid>
        <hr />
        <h4>Outline Buttons </h4>
        <Grid gridAutoColumns={"max-content"} gridAutoFlow="column" gridGap={2}>
            {buttons.map(color => (
                <Button variantColor={color} variant="outline">
                    {color[0].toUpperCase() + color.slice(1)}
                </Button>
            ))}
        </Grid>
        <hr />
        <h4>Icon Buttons</h4>
        <Grid gridGap={2} gridAutoColumns="max-content" gridAutoFlow="column">
            <IconButton icon={FiHome} variantColor="primary" />
            <IconButton icon={FiCalendar} variantColor="secondary" />
            <IconButton icon={FiSmile} variantColor="success" />
            <IconButton icon={FiAlertCircle} variantColor="warning" />
            <IconButton icon={FiTrash} variantColor="error" />
            <IconButton icon={FiPlus} variantColor="success" label="Add Card" />
        </Grid>
        <br />
        <IconButton icon={FiMenu} size="2rem" variantColor="primary" />
        <IconButton icon={FiMenu} size="4rem" variantColor="text" />
        <IconButton
            icon={FiMenu}
            size="3em"
            variantColor="background"
            position="fixed"
            bottom={0}
            right={0}
            m={2}
        />
    </>
);
