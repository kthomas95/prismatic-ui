import React, { useState } from "react";
import { Heading, Checkbox, Grid } from "prismatic-ui/dist";
import { ControlledCheckbox } from "./2-Inputs.stories";
import { colorTypes } from "../../colorTypes";

export default {
    title: "Inputs",
    component: Checkbox
};

export const checkbox = () => {
    const [checked, setChecked] = useState([true, true, true]);
    const indererminate = checked.some(Boolean) && checked.some(val => !val);
    return (
        <>
            <Grid
                gridTemplateColumns={"repeat(auto-fill, minmax(200px, 1fr))"}
                gridGap={2}
            >
                {colorTypes.map(color => (
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
