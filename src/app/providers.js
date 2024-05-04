import React from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return React.createElement(
    ThemeProvider,
    { attribute: "class", defaultTheme: "system", enableSystem: true },
    children
  );
}
