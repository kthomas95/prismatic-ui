import React from "react";
import { MotionButton as Button, Grid } from "prismatic-ui/dist";
import { IconButton } from "prismatic-ui/dist/Button";
import {
    FiTrash,
    FiHome,
    FiCalendar,
    FiAlertCircle,
    FiSmile,
    FiMenu,
    FiPlus,
    FiTrash2
} from "react-icons/fi";
import { colorTypes } from "../../colorTypes";

export default { title: "Inputs/Buttons", component: Button };

export const solid = () => (
    <>
        <h4>Solid Buttons</h4>
        <Grid
            gridAutoColumns={"max-content"}
            gridAutoFlow="column"
            alignItems="center"
            gridGap={2}
        >
            {colorTypes.map(color => (
                <Button
                    variantColor={color}
                    // as="a"
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
        </Grid>
    </>
);

export const outline = () => (
    <>
        <h4>Outline Buttons </h4>
        <Grid gridAutoColumns={"max-content"} gridAutoFlow="column" gridGap={2}>
            {colorTypes.map(color => (
                <Button variantColor={color} variant="outline">
                    {color[0].toUpperCase() + color.slice(1)}
                </Button>
            ))}
        </Grid>
    </>
);

export const ghost = () => (
    <>
        <h4>Ghost Buttons</h4>
        <Grid gridAutoColumns={"max-content"} gridAutoFlow="column" gridGap={2}>
            {colorTypes.map(color => (
                <Button variantColor={color} variant="ghost">
                    {color[0].toUpperCase() + color.slice(1)}
                </Button>
            ))}
        </Grid>
    </>
);

export const icon = () => (
    <>
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
