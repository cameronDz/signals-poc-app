import React from "react";
import ReactDOM from "react-dom/client";
import "./index.styles.css";
import AppComponent from "./app.component";
import {AppContextProvider} from "./app.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <AppContextProvider>
          <AppComponent />
      </AppContextProvider>
  </React.StrictMode>
);
