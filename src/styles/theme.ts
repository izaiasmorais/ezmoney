import { extendTheme } from "@chakra-ui/react";
import { defaultColors } from "./colors";

export const theme = extendTheme({
  fonts: {
    heading: "Manrope, sans-serif",
    body: "Manrope, sans-serif",
  },
  colors: { ...defaultColors },
  styles: {
    global: {
      html: {
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#000000",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#293033",
          borderRadius: "5px",
        },
      },
    },
  },
});
