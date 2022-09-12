import { darkColors, lightColors } from "../../theme/colors";
import { ArborToggleTheme } from "./types";

export const light: ArborToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: ArborToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
