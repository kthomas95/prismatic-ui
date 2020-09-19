import ThemeDecorator from "./theme-decorator";
import { addDecorator } from "@storybook/react";

export const globalTypes = {
    theme: {
        name: "Theme",
        description: "Global theme for components",
        defaultValue: "prismatic-dark",
        toolbar: {
            items: [
                { title: "Prismatic-Light", value: "prismatic-light" },
                { title: "Prismatic - Dark", value: "prismatic-dark" },
                { title: "Nord - Light", value: "nord-light" },
                { title: "Nord - Dark", value: "nord-dark" },
            ],
        },
    },
};

addDecorator(ThemeDecorator);

export const parameters = {
    options: {
        storySort: {
            order: ["Primatives", "Inputs", "Display"],
        },
    },
};
