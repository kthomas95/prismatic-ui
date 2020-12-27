import { Theme } from "./theme";

export const BaseTheme: Pick<Theme, "shadows" | "fontSizes"> = {
    shadows: {
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25);",
    },
    fontSizes: {
        xs: ".75em",
        sm: ".875em",
        base: "1em",
        lg: "1.125em",
        xl: "1.25em",
        "2xl": "1.5em",
        "3xl": "1.875em",
        "4xl": "2.25em",
        "5xl": "3em",
        "6xl": "4em",
    },
};
