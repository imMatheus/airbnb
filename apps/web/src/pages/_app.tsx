import '../styles/global.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: any) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />;
        </>
    )
}
