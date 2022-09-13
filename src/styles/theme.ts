import { extendTheme } from "@chakra-ui/react";
import { darkColors, lightColors } from "./colors";

export const lightTheme = extendTheme({
  colors: { ...lightColors },
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
});

export const darkTheme = extendTheme({
  colors: { ...darkColors },
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
});
