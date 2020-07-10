import { Box, MotionBox } from "./Box";
import { Flex } from "./Flex";
import { Grid } from "./Grid";
import { Button, MotionButton, IconButton } from "./Button";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Message } from "./Message";
import { SiteTheme } from "./Theme";
import { PrismaticApp, ThemeContext } from "./Theme/useTheme";
import { Heading } from "./Heading";
import AnimatedValue from "./AnimatedValue";
import { Checkbox } from "./Checkbox";
import { Loader } from "./Loader";
import { Stat } from "./Stat";
import { AnimatedList } from "./AnimatedList";
import { List } from "./List";
import { Hidden } from "./Hidden";
import { PseudoBox } from "./PseudoBox";
import { TextField } from "./TextField";
import { Autocomplete } from "./Autocomplete";
import { Drawer } from "./Drawer";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "emotion-theming";
import { Tabs } from "./Tabs";
import {useState} from "react";

export const kyle = "kyle";
export const useKyle = () => {
    const [name, setName] = useState("kylee");
    return [name, setName];
};

export {
    AnimatedValue,
    Autocomplete,
    Tabs,
    Box,
    IconButton,
    MotionBox,
    MotionButton,
    Button,
    Drawer,
    Loader,
    Hidden,
    ThemeProvider,
    Flex,
    SiteTheme,
    Grid,
    Heading,
    TextField,
    Checkbox,
    GlobalStyle,
    Card,
    Badge,
    Stat,
    List,
    AnimatedList,
    PseudoBox,
    PrismaticApp,
    ThemeContext,
    Message
};
