import type { AppProps } from 'next/app'

// 3rd part lib to handle route transition
import NextNProgress from 'nextjs-progressbar'

// Global CSS
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress />
			<Component {...pageProps} />
		</>
	)
}
