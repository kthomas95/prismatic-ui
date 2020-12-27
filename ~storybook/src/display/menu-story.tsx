import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import {
    Box,
    Checkbox,
    Grid,
    Menu,
    MenuCollapse,
    MenuItem,
} from "prismatic-ui";
import React, { useState } from "react";
// import "./styles.css";

const MenuItems = [
    {
        name: "Pokemon",
        items: ["Basic", "Stage 1", "EX", "GX"],
        variantColor: "primary",
    },
    {
        name: "Trainers",
        items: ["Supporters", "Trainers", "Stadiums"],
        variantColor: "success",
    },
    { name: "Energy", items: [], variantColor: "danger" },
];

const MenuStory = () => (
    <>
        <Menu
            maxWidth={300}
            boxShadow="lg"
            bg="background.light"
            color="text.main"
            maxHeight="90vh"
            overflowY="auto"
            borderRadius={8}
        >
            {MenuItems.map((item) => (
                <MenuCollapse
                    heading={item.name}
                    key={item.name}
                    variantColor={item.variantColor}
                >
                    <Grid gridTemplateColumns="1fr 1fr">
                        {item.items.map((subitem) => (
                            <Checkbox
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // exit={{ opacity: 0 }}
                                // layout
                                p={2}
                                key={subitem}
                            >
                                {subitem}
                            </Checkbox>
                        ))}
                    </Grid>
                </MenuCollapse>
            ))}
        </Menu>
    </>
);

export { MenuStory as Menu };
// MenuStory.storyName = "Menu";
