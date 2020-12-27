import React, { useState } from "react";
import {
    Button,
    Checkbox,
    MotionBox,
    Box,
    Hidden,
    TextField,
} from "prismatic-ui";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const useToggle = (initial: boolean = true) => {
    const [val, setVal] = useState(initial);
    return { val, toggle: () => setVal((prev) => !prev) };
};

const URL = "https://pkmn-cards.nyc3.digitaloceanspaces.com/swsh1/swsh1-30.jpg";

export const TestStory = () => {
    const { val, toggle } = useToggle();
    const [values, setValues] = useState(["Hello!"]);
    const [textVal, setTextVal] = useState("");

    return (
        <div>
            <Checkbox
                variantColor="primary"
                checked={val}
                onChange={() => toggle()}
            >
                Check
            </Checkbox>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setValues((vals) => [...vals, textVal]);
                    setTextVal("");
                }}
            >
                <TextField
                    value={textVal}
                    onChange={(e) => setTextVal(e.target.value)}
                />
            </form>
            <AnimateSharedLayout>
                <MotionBox
                    p={2}
                    mt={2}
                    borderRadius={4}
                    // boxShadow={2}
                    bg="primary.main"
                    transition={{ easings: "linear" }}
                    layout

                    // animate={{ height: val ? 200 : 100 }}
                >
                    {values.map((v, index) => (
                        <motion.h3
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() =>
                                setValues((old) => [
                                    ...old.slice(0, index),
                                    ...old.slice(index + 1),
                                ])
                            }
                            key={`${v}${index}`}
                        >
                            {v}
                        </motion.h3>
                    ))}
                </MotionBox>
            </AnimateSharedLayout>
            <Box
                p={2}
                display="none"
                // height={400}
                position="relative"
                mt={2}
                bg="secondary.main"
            >
                <Box
                    as="img"
                    src={URL}
                    height="100%"
                    maxHeight="200px"
                    m="auto"
                    _css={{ boxShadow: "md" }}
                    borderRadius="4%"
                    onClick={() => toggle()}
                />
            </Box>
        </div>
    );
};

export default { title: "Primatives/Motion Box" };
