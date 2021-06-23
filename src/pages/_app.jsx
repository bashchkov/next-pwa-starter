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
                <meta name="viewport" content="width=device-width, initial-scale=1" />]]
                <meta name="description" content="Description"/>
                <meta name="keywords" content="Keywords"/>
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json"/>
                <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png"/>
                <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#411c6b"/>
                <meta name="msapplication-TileColor" content="#6a00a7"/>
                <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default appWithTranslation(App);
