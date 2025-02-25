import "@/styles/globals.css";
import StyledEngineProvider from "../components/StyledEngineProvider";
import ThemeProvider from "../components/ThemeProvider";
import createEmotionCache from "../utils/createEmotionCache";
import type { AppProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppProps & {emotionCache: any}) {
  return (
    <ThemeProvider>
      <StyledEngineProvider emotionCache={emotionCache}>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
