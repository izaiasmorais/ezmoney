import type { AppProps } from "next/app";
import { DrawerContextProvider } from "../contexts/DrawerContext";
import { ChakraProvider } from "@chakra-ui/react";
import { ToggleButton } from "../components/Globals/toggleButton";
import { lightTheme, darkTheme } from "../styles/theme";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import "../styles/globals.css";
import { ShadowContextProvider } from "../contexts/ShadowContext";
import { useState } from "react";
import { MoneyContextProvider } from "../contexts/MoneyContext";

export default function App({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(true);

  const theme = isLight ? lightTheme : darkTheme;

  return (
    <ChakraProvider theme={theme}>
      <MoneyContextProvider>
        <ShadowContextProvider>
          <DrawerContextProvider>
            <Head>
              <title>EZMoney</title>
            </Head>
            <NextNProgress color="#7F3DFF" />
            <Component {...pageProps} />
            <ToggleButton isLight={isLight} toggler={setIsLight} />
          </DrawerContextProvider>
        </ShadowContextProvider>
      </MoneyContextProvider>
    </ChakraProvider>
  );
}
