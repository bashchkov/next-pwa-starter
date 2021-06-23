import {useEffect} from 'react';
import {useRouter} from 'next/router';
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import * as gtag from '../lib/gtag';

import '../styles/globals.scss';


const App = ({Component, pageProps}) => {

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <Provider store={store}>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Description"/>
                <meta name="keywords" content="Keywords"/>
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json"/>
                <link
                    href="/icons/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB"/>
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default appWithTranslation(App);
