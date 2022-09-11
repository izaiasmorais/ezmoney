import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Head from "next/head";

import NextNProgress from "nextjs-progressbar";

import "../styles/globals.css";
import { SidebarDrawerContextProvider } from "../contexts/SidebarContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerContextProvider>
        <Head>
          <title>EZMoney</title>
        </Head>
        <NextNProgress color="#7F3DFF" />
        <Component {...pageProps} />
      </SidebarDrawerContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
