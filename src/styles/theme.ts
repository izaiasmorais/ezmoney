import { extendTheme } from "@chakra-ui/react";

const colors = {
  yellow: {
    "100": "#FCEED4",
    "700": "#FCAC12",
  },
  dark: {
    "100": "#323238",
    "200": "#919eab",
    "300": "#464A4D",
    "500": "#293033",
    "700": "#0D0E0F",
  },
  red: {
    "100": "#FDD5D7",
    "700": "#FD3C4A",
  },
  purple: {
    "100": "#EEE5FF",
    "700": "#7F3DFF",
  },
  green: {
    "100": "#CFFAEA",
    "700": "#00A86B",
  },
  blue: {
    "100": "#BDDCFF",
    "700": "#0077FF",
  },
  white: {
    "50": "#FFFFFF",
    "100": "#FDFDFD",
    "200": "#F5F5F5",
    "300": "#F2F4F5",
    "500": "#E3E5E5",
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
  styles: {
    global: {
      background: "white.300",
    },
  },
});
