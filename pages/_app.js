import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import useColorTheme from 'use-color-theme';
import 'antd/dist/antd.less';
import '../styles/themes.css';
import '../styles/app.scss';
import '../styles/reset.css';

const MyApp = ({ Component, pageProps }) => {
    const theme = useColorTheme('default', { classNames: ['default'] });

    useEffect(() => {
        theme.set('default');
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />

                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/images/favicon/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/images/favicon/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/images/favicon/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/images/favicon/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/images/favicon/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/images/favicon/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/images/favicon/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/images/favicon/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/favicon/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/images/favicon/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/images/favicon/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/images/favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/images/favicon/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Nunito+Sans:wght@400;600;700&family=Oswald&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div id="top" />
            <Component {...pageProps} theme={theme} />
        </>
    );
};

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any
};

export default MyApp;
