import React, { useState } from "react";
import {
    Card,
    Message,
    Badge,
    Grid,
    Heading,
    Stat,
    Box,
    Flex,
    PseudoBox,
    MotionButton as Button,
    List,
    AnimatedList,
    Drawer
} from "prismatic-ui/dist";
import { colorTypes } from "./0-Welcome.stories";
import cardData from "./card_data.json";

export default {
    title: "Data Display"
};

export const heading = () => (
    <>
        {[1, 2, 3, 4, 5, 6].map(level => (
            <Heading as={`h${level}`}>H{level}</Heading>
        ))}
    </>
);

const CardData = [
    { value: 34, label: "Games", color: "primary" },
    { value: 17, label: "Goals", color: "secondary" },
    { value: 12, label: "Assists", color: "danger" }
];

export const card = () => (
    <>
        <Card maxWidth={450} minHeight={300} boxShadow={4} borderRadius={8}>
            <h3>Harry Kane</h3>
            <Flex justifyContent="space-between" mt={3} mx={-1}>
                {CardData.map(({ color, ...stat }) => (
                    <PseudoBox
                        as={Stat}
                        _hover={{ bg: `${color}.light` }}
                        py={2}
                        fontSize="xl"
                        borderRadius={4}
                        boxShadow={3}
                        flexGrow={1}
                        mx={1}
                        color={`${color}.text`}
                        bg={`${color}.main`}
                        {...stat}
                    />
                ))}
            </Flex>
            <br />
            <Badge variantColor="error">England</Badge>
        </Card>
        <Card maxWidth={275} mt={3} color="error.text" bg="error.light">
            <h3>Error Card</h3>
        </Card>
    </>
);

export const message = () => (
    <>
        {colorTypes.map(color => (
            <Message variantColor={color} key={color} mb={3}>
                <h4>{color[0].toUpperCase() + color.slice(1)}</h4>
                This is an example of a message.
            </Message>
        ))}
    </>
);

export const badge = () => (
    <>
        <h3>Badge</h3>
        <br />
        <Grid
            gridAutoFlow="column"
            gridAutoColumns="max-content"
            alignItems="center"
            gridGap={2}
        >
            <Badge variantColor="primary">
                Primary <br /> Multiline
            </Badge>
            <Badge variantColor="secondary">Secondary</Badge>
            <Badge variantColor="error">Error</Badge>
            <Badge variantColor="warning">Warning</Badge>
            <Badge variantColor="danger">Danger</Badge>
            <Badge variantColor="success" bg="success.verylight">
                Success
            </Badge>
            <Badge variantColor="success" bg="success.dark">
                Dark Success
            </Badge>
        </Grid>
    </>
);

export const stat = () => (
    <>
        <h3>Stat</h3>
        <br />
        <Flex alignItems="center">
            <Stat
                label="xG"
                value={0.78}
                bg="warning.main"
                color="warning.text"
                mr={2}
                p={1}
                boxShadow={2}
                borderRadius={2}
            />
            <Stat
                label="Goals"
                value={0.68}
                mr={2}
                p={1}
                borderRadius={2}
                bg="error.main"
                color="error.text"
            />
            <Stat
                label="Assists"
                value={0.42}
                bg="secondary.main"
                color="secondary.text"
                borderRadius={8}
                p={2}
                lineHeight={1.5}
                boxShadow={2}
                fontSize="xl"
            />
        </Flex>
    </>
);

const ListItem = props => (
    <Box p={2} borderLeft="solid 2px" my={1}>
        {props.name}
    </Box>
);

const SubtypeColors = {
    Basic: "primary",
    "Stage 1": "success",
    GX: "error",
    "TAG TEAM": "danger"
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

export const list = () => {
    const [items, setItems] = useState([...cardData.map(edge => edge.node)]);
    const [open, setOpen] = useState(true);
    const toggleItems = (toggle: string) => {
        setItems([
            ...items.filter(item => item.id !== toggle),
            items.find(card => card.id === toggle)
        ]);
    };
    return (
        <Grid gridTemplateColumns="1fr 300px">
            <Box>
                <h3>List</h3>
                {/* <List items={items} ListItem={ListItem} /> */}
            </Box>
            <Box>
                <h3 onClick={() => setItems([...shuffle(items)])}>
                    Animated List
                </h3>
                <Button onClick={() => setOpen(!open)}>
                    Open Animated List
                </Button>
                <Drawer {...{ open }} direction="left" bg="background.dark">
                    <Box
                        // boxShadow={3}
                        // borderRadius={6}
                        // my={2}
                        p={2}
                        gridGap={2}
                    >
                        <Button
                            onClick={() => setOpen(!open)}
                            display="flex"
                            ml={"auto"}
                            variantColor="error"
                            // variant="outline"
                            width={32}
                            height={32}
                        >
                            X
                        </Button>
                        <Button
                            mb={2}
                            onClick={() => setItems([...shuffle(items)])}
                        >
                            Shuffle
                        </Button>
                        <AnimatedList
                            items={items}
                            display={"grid"}
                            gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                            gridAutoRows="100px"
                            gridGap={3}
                            element={card => ({
                                children: <h4>{card.name}</h4>,
                                key: card.id,
                                bg: `${card.types}.main`,
                                color: `${card.types}.text`,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 4,
                                positionTransition: {
                                    type: "spring",
                                    damping: 50,
                                    stiffness: 200
                                }
                            })}
                            _css={{ whiteSpace: "nowrap" }}
                        />
                    </Box>
                </Drawer>
            </Box>
        </Grid>
    );
};
