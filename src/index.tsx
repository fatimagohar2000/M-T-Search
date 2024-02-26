import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// Font
import "@fontsource/roboto";

// Material-UI
import { CssBaseline } from "@material-ui/core";
import { SearchContext } from "./context/SearchContext";
import { ThemeContext } from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext>
      <SearchContext>
        <CssBaseline />
        <App />
      </SearchContext>
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById("root")
);
