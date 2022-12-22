import '../styles/global.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: any) {
    return <Component {...pageProps} />
}
