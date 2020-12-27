import { Color } from "./theme";

export const invertColor = (color: Color): Partial<Color> => ({
    "100": color[900],
    "300": color[700],
    "500": color[500],
    "700": color[300],
    "900": color[100],
    text: color.text,
});
