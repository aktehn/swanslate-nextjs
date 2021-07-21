import "../styles/globals.scss";
import type { AppProps } from "next/app";
// import { store } from "../redux/store";
import React from "react";
// import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "../lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    // </Provider>
  );
}
export default MyApp;
