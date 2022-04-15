import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@material-ui/core/styles";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { StyleSheetManager } from "styled-components";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";

const cacheRtl = createCache({
  key: "muirtl",
  // prefixer is the only stylis plugin by default, so when
  // overriding the plugins you need to include it explicitly
  // if you want to retain the auto-prefixing behavior.
  stylisPlugins: [prefixer, rtlPlugin],
});
const ltrTheme = createTheme({ direction: "ltr" });
const rtlTheme = createTheme({ direction: "rtl" });
// const theme = createTheme();
ReactDOM.render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <App />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
