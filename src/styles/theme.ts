import { extendTheme } from "@chakra-ui/react";

const colors = {
  yellow: {
    "100": "#FCEED4",
    "700": "#FCAC12",
  },
  dark: {
    "100": "#323238",
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
    "100": "#FFFFFF",
    "200": "#F2F4F5",
    "300": "#E3E5E5",
  },
};

export const theme = extendTheme({
  useSystemColorMode: true,
  colors,
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
  styles: {
    global: {
      background: "gray.700",
    },
  },
});
