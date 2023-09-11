import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import AppContextProvider from "./AppContextProvider.tsx";
// import RootStore from "./stores/RootStore.ts";

// const rootStore = new RootStore()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
