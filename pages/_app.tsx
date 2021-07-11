import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import React from "react";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
