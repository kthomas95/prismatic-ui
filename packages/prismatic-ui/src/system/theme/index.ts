import { Theme as TP, ObjectOrArray } from "styled-system";
import nord from "./nord";
import tailwind from "./tailwind";
import prismatic from "./prismatic";
export * from "./prismatic-app";

export type Color = {
    main: string;
    light: string;
    dark: string;
    verylight: string;
    text: string;
};

export interface Theme extends TP {
    colors: {
        [index: string]: Color;
    };
    shadows: Record<"sm", string>;
}

const theme: Theme = {
    colors: {},
    shadows: { smm: "none" },
};

export type SiteThemes = {
    [index: string]: {
        day: Theme;
        night: Theme;
    };
};

export const SiteTheme: SiteThemes = {
    nord,
    tailwind,
    prismatic,
};
