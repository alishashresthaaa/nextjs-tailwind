import "../styles/globals.css";
import type { AppProps } from "next/app";
import HomeLayout from "src/layouts/homeLayout/homeLayout.layout";
import { ThemeProvider } from "src/context/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </ThemeProvider>
  );
}

export default MyApp;
