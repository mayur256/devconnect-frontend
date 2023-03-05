import type { AppProps } from 'next/app';

// Global CSS
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
