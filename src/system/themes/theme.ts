import { CSSObject } from "styled-components";
import { Theme as StyledSystemTheme, ObjectOrArray } from "styled-system";

export const COLOR_TYPES = [
    "primary",
    "secondary",
    "error",
    "success",
    "danger",
    "warning",
    "text",
    "background",
] as const;

export type ColorVariant = typeof COLOR_TYPES[number];
export type ColorScale = 100 | 300 | 500 | 700 | 900 | "text" | "a50" | "a100";
export type ColorValue = `${ColorVariant}.${ColorScale}`;
export type Color = Record<ColorScale, string>;


export interface WithVariantColor { variantColor?: ColorVariant }

export type StyleVariant = (props: WithVariantColor) => CSSObject;

export interface Theme extends StyledSystemTheme {
    colors: Record<ColorVariant, Record<ColorScale, string>>;
    shadows: Record<"inset" | "sm" | "md" | "lg" | "xl" | "2xl", string>;
}
export interface ThemeSet {
    day: Theme;
    night: Theme;
}

export type SiteThemes = {
    [index: string]: {
        day: Theme;
        night: Theme;
    };
};
