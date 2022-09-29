import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { DrawerContextProvider } from "../contexts/DrawerContext";
import { ChakraProvider } from "@chakra-ui/react";
import { ToggleButton } from "../components/Globals/toggleButton";
import { ThemeProvider } from "next-themes";
import { MoneyContextProvider } from "../contexts/MoneyContext";
import { Toaster } from "react-hot-toast";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ChakraProvider theme={theme}>
        <MoneyContextProvider>
          <DrawerContextProvider>
            <Head>
              <title>EZMoney</title>
            </Head>
            <NextNProgress color="#7F3DFF" />
            <Component {...pageProps} />
            <Toaster position="top-center" reverseOrder={false} />
            <ToggleButton />
          </DrawerContextProvider>
        </MoneyContextProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
}
