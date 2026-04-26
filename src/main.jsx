import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";

// Configuramos el tema con tus fuentes de Google
const theme = createTheme({
  typography: {
    fontFamily: '"EB Garamond"',
    h1: {
      fontFamily: '"Mea Culpa", cursive',
    },
    h2: {
      fontFamily: '"Mea Culpa", cursive',
    },
  },
  palette: {
    primary: {
      main: "#D4AF37",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
