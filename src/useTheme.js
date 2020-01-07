import React, { useContext, useState } from "react";
import { SiteTheme } from "./site-theme";
import { ThemeProvider } from "emotion-theming";

export const ThemeContext = React.createContext();

const WithTheme = ({ children }) => {
    const { night } = useContext(ThemeContext);
    return (
        <ThemeProvider
            theme={{
                ...SiteTheme,
                colors: {
                    ...SiteTheme.colors,
                    neutral: night
                        ? invertTheme(SiteTheme.colors.gray)
                        : SiteTheme.colors.gray
                },
                shadows: night ? SiteTheme.nightShadows : SiteTheme.shadows
            }}
        >
            {children}
        </ThemeProvider>
    );
};

const invertTheme = colors => {
    return {
        ["100"]: colors["900"],
        ["200"]: colors["800"],
        ["300"]: colors["700"],
        ["400"]: colors["600"],
        ["500"]: colors["500"],
        ["600"]: colors["400"],
        ["700"]: colors["300"],
        ["800"]: colors["200"],
        ["900"]: colors["100"]
    };
};

export const ThemeModeWrapper = ({ children }) => {
    const [night, setNight] = useState(false);
    return (
        <ThemeContext.Provider
            value={{ night, toggleNight: () => setNight(!night) }}
        >
            <WithTheme>{children}</WithTheme>
        </ThemeContext.Provider>
    );
};
