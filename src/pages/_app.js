// import "@/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
