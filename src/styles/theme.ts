import { extendTheme } from "@chakra-ui/react";
import { defaultColors } from "./colors";

export const theme = extendTheme({
  fonts: {
    heading: "Manrope, sans-serif",
    body: "Manrope, sans-serif",
  },
  colors: { ...defaultColors },
});
