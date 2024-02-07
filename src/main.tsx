import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { Nav } from "./partials/Nav.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Nav />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
