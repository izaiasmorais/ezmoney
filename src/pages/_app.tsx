import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Head from "next/head";

import NextNProgress from "nextjs-progressbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>EZMoney</title>
      </Head>
      <NextNProgress color="#7F3DFF" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
