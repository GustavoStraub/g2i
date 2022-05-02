import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ResultProvider } from "providers/ResultContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResultProvider>
      <div className="mainWrapper">
        <Component {...pageProps} />
      </div>
    </ResultProvider>
  );
}

export default MyApp;
