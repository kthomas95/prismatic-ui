import React, { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Theme, SiteThemes } from ".";
// export const ThemeContext = createContext({
//     theme: "dayy",
//     toggleTheme: () => {}
// });

export const ThemeContext = createContext({
    theme: "night",
    toggleTheme: () => {},
});

interface PrismaticApp {
    themes: SiteThemes;
    initial: string;
}

const WithTheme = ({ themes, children }) => {
    const { theme } = useContext(ThemeContext);
    return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export const PrismaticApp: React.FC<PrismaticApp> = ({
    children,
    themes,
    initial,
}) => {
    const storedTheme = localStorage.getItem("theme");

    if (!(storedTheme in themes)) {
        localStorage.setItem("theme", initial);
    }
    const [theme, setTheme] = useState(storedTheme ? storedTheme : initial);

    const toggleTheme = () => {
        const newTheme = theme === "day" ? "night" : "day";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };
    return (
        <ThemeContext.Provider
            value={{
                theme: initial,
                toggleTheme,
            }}
        >
            <WithTheme themes={themes}>{children}</WithTheme>
        </ThemeContext.Provider>
    );
};
