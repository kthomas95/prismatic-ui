import React from "react";
import {
    Grid,
    Box,
    Flex,
    IconButton,
    Tabs,
    TextField,
    Badge
} from "prismatic-ui/dist";
import { FiTrash, FiSave } from "react-icons/fi";

import cardData from "../../card_data.json";

const cards = cardData.map(edge => edge.node);

export default {
    title: "Data Display"
};

const TabItems = [
    {
        title: "Basic",
        children: (
            <>
                <TextField width={"100%"} mb={2} /> <br />
                {cards
                    .filter(card => card.subtype === "Basic")
                    .map(card => (
                        <Flex
                            key={card.id}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box>
                                <Box as="h4" m={0} color="text.main">
                                    {card.name}
                                </Box>
                                <Box as="span" fontSize="xs" mb={-2}>
                                    {card.subtype}
                                </Box>
                            </Box>
                            <Badge variantColor={card.types} minWidth={80}>
                                {card.types}
                            </Badge>
                        </Flex>
                    ))}
            </>
        )
    },
    {
        title: "Stage 1",
        children: (
            <>
                <TextField width={"100%"} mb={2} /> <br />
                {cards
                    .filter(card => card.subtype === "Stage 1")
                    .map(card => (
                        <Flex
                            key={card.id}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <h5>{card.name}</h5>
                            <Badge variantColor={card.types} minWidth={80}>
                                {card.types}
                            </Badge>
                        </Flex>
                    ))}
            </>
        )
    },
    {
        title: "GX",
        children: (
            <>
                <TextField width={"100%"} mb={2} /> <br />
                {cards
                    .filter(card => card.subtype === "GX")
                    .map(card => (
                        <Flex
                            key={card.id}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <h5>{card.name}</h5>
                            <Badge variantColor={card.types} minWidth={80}>
                                {card.types}
                            </Badge>
                        </Flex>
                    ))}
            </>
        )
    }
];

export const tabs = () => {
    return (
        <Box p={4} bg="background.verydark">
            <Flex
                boxShadow={4}
                maxWidth={400}
                borderRadius={8}
                overflow="hidden"
                flexDirection="column"
                height={400}
                bg="background.dark"
            >
                <Box as="h4" m={3}>
                    Supertypes
                </Box>
                <Tabs
                    items={TabItems}
                    ContentWrapper={props => (
                        <>
                            <Box
                                overflowY="auto"
                                overflowX="hidden"
                                flexGrow={1}
                                p={2}
                                color="text.verylight"
                                bg="background.light"
                                {...props}
                            >
                                {props.children}
                            </Box>
                            <Grid
                                px={2}
                                py={2}
                                bg="background.verylight"
                                gridAutoFlow="column"
                                gridAutoColumns="min-content"
                                gridGap={2}
                                justifyContent="flex-end"
                            >
                                <IconButton
                                    icon={FiTrash}
                                    variant="ghost"
                                    variantColor="error"
                                />
                                <IconButton
                                    icon={FiSave}
                                    variant="default"
                                    variantColor="success"
                                />
                            </Grid>
                        </>
                    )}
                />
            </Flex>
        </Box>
    );
};
