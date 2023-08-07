import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./themes/theme.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <App />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </ChakraProvider>
  </React.StrictMode>
);
