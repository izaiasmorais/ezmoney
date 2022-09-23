import { extendTheme } from "@chakra-ui/react";
import { darkColors, lightColors } from "./colors";

export const lightTheme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: { ...lightColors },
  fonts: {
    heading: "Manrope, sans-serif",
    body: "Manrope, sans-serif",
  },
});

export const darkTheme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: { ...darkColors },
  fonts: {
    heading: "Manrope, sans-serif",
    body: "Manrope, sans-serif",
  },
});
