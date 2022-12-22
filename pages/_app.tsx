import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import WalletContextProvider from "../helpers/WalletContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </WalletContextProvider>
  );
}
