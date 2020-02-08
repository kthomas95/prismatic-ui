import React, { createContext, useState, useContext } from "react";
import { ThemeProvider } from "emotion-theming";
import { Theme, SiteThemes } from ".";
// export const ThemeContext = createContext({
//     theme: "dayy",
//     toggleTheme: () => {}
// });

export const ThemeContext = createContext({
    theme: "day",
    toggleTheme: () => {}
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
    initial
}) => {
    const [theme, setTheme] = useState(initial);
    const toggleTheme = () => {
        setTheme(theme === "day" ? "night" : "day");
    };
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            <WithTheme themes={themes}>{children}</WithTheme>
        </ThemeContext.Provider>
    );
};
