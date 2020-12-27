import React, { createContext, useState, useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Theme } from "../themes";

interface ThemeContext {
    theme: ThemeVariant;
    toggleTheme: (theme?: ThemeVariant) => void;
}

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

interface PrismaticApp {
    initial: ThemeVariant;
    themes: Record<string, Record<"day" | "night", Theme>>;
}

export interface ThemeVariant {
    variant: string;
    mode: "day" | "night";
}

const WithTheme = ({ children, themes }) => {
    const { theme } = useContext(ThemeContext);
    const themeValue = themes[theme.variant]?.[theme.mode];
    if (!themeValue) console.error(`Theme ${theme.variant}(${theme.mode}) is not found. Using an empty theme as a fallback.`)
    return (
        <ThemeProvider theme={themeValue ?? {}}>
            {children}
        </ThemeProvider>
    );
};

export const PrismaticApp: React.FC<PrismaticApp> = ({
    children,
    themes,
    initial,
}) => {
    const [theme, setTheme] = useState(initial);


    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () => null,
            }}
        >
            <WithTheme themes={themes}>{children}</WithTheme>
        </ThemeContext.Provider>
    );
};
