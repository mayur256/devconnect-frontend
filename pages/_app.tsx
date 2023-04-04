import type { AppProps } from 'next/app'

// React-Redux
import { Provider } from 'react-redux'
import { wrapper } from 'store'

// 3rd part lib to handle route transition
import NextNProgress from 'nextjs-progressbar'

// Global CSS
import '@/styles/globals.css'

export default function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest)
	const { pageProps } = props

	return (
		<Provider store={store}>
			<NextNProgress />
			<Component {...pageProps} />
		</Provider>
	)
}
