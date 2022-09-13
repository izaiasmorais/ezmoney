import { extendTheme } from "@chakra-ui/react";
import { darkColors, lightColors } from "./colors";

export const lightTheme = extendTheme({
  initialColorMode: "light",
  colors: { ...lightColors },
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
});

export const darkTheme = extendTheme({
  initialColorMode: "light",
  colors: { ...darkColors },
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
});
