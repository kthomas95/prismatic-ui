import { useTheme as GenericUseTheme } from "styled-components";
import { Theme } from "./theme";

const useTheme = GenericUseTheme as () => Theme;

export { useTheme };
