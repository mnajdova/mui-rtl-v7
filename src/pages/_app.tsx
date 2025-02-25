import "@/styles/globals.css";
import StyledEngineProvider from "../components/StyledEngineProvider";
import ThemeProvider from "../components/ThemeProvider";
import createEmotionCache from "../utils/createEmotionCache";
import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/cache";

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppProps & {emotionCache: EmotionCache}) {
  return (
    <ThemeProvider>
      <StyledEngineProvider emotionCache={emotionCache}>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
