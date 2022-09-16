import type { AppProps } from "next/app";
import { DrawerContextProvider } from "../contexts/DrawerContext";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ToggleButton } from "../components/Globals/toggleButton";
import { lightTheme, darkTheme } from "../styles/theme";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import "../styles/globals.css";
import { ShadowContextProvider } from "../contexts/ShadowContext";

export default function App({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const mode = localStorage.getItem("chakra-ui-color-mode");

    if (mode === "dark") {
      setIsLight(false);
    } else {
      setIsLight(true);
    }
  }, []);

  const themeMode = isLight === true ? lightTheme : darkTheme;

  return (
    <ChakraProvider theme={themeMode}>
      <ShadowContextProvider>
        <DrawerContextProvider>
          <Head>
            <title>EZMoney</title>
          </Head>
          <NextNProgress color="#7F3DFF" />
          <Component {...pageProps} />
          <ToggleButton
            isLight={isLight}
            toggleFunction={() => setIsLight(!isLight)}
          />
        </DrawerContextProvider>
      </ShadowContextProvider>
    </ChakraProvider>
  );
}
