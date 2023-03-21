import type { AppProps } from 'next/app'

// React-Redux
import { Provider } from 'react-redux'
import { store } from 'store'

// 3rd part lib to handle route transition
import NextNProgress from 'nextjs-progressbar'

// Global CSS
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<NextNProgress />
			<Component {...pageProps} />
		</Provider>
	)
}
