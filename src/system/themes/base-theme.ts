import { Theme } from "./theme";

export const BaseTheme: Pick<Theme, "shadows" | "fontSizes" | "textStyles"> = {
    shadows: {
        inset: "0 1px 2px 0 rgba(0, 0, 0, 0.06) inset",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.045), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md:
            "0 1px 3px -0 rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25);",
    },
    fontSizes: {
        "4xs": ".5rem",
        "3xs": ".6rem",
        "2xs": ".675rem",
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
    },
    textStyles: {
        label: {
            fontWeight: 500,
            letterSpacing: "-.025em",
            fontSize: ".875rem",
        },

        large: {
            fontSize: "2em",
            letterSpacing: ".1em",
        },
        caption: {
            fontSize: ".75em",
            letterSpacing: ".010em",
            fontWeight: 500,
            fontStyle: "italic",
        },
    },
};
