import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { DrawerContextProvider } from "../hooks/useDrawer";
import { MoneyContextProvider } from "../contexts/MoneyContext";
import { Toaster } from "react-hot-toast";
import { theme } from "../styles/theme";
import { PaginationContextProvider } from "../hooks/usePagination";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ChakraProvider theme={theme}>
        <MoneyContextProvider>
          <DrawerContextProvider>
            <PaginationContextProvider>
              <Head>
                <title>EZMoney</title>
              </Head>
              <NextNProgress color="#7F3DFF" />
              <Component {...pageProps} />
              <Toaster position="top-center" reverseOrder={false} />
            </PaginationContextProvider>
          </DrawerContextProvider>
        </MoneyContextProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
}
