import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header, Footer } from '../components/common';

import grid from '../styles/grid.scss';

const Index = ({ domain, theme }) => {
    const router = useRouter();
    useEffect(() => {
        if (router.query.goTo) {
            scrollTo(router.query.goTo);
        }
    }, [router.query, theme]);

    return (
        <div>
            <Head>
                <title>Donato Solar System</title>
                <meta name="description" content="Pushka" />
                <meta property="og:title" content="Pushka" key="ogtitle" />
                <meta property="og:description" content="Pushka" key="ogdesc" />
                <meta property="og:url" content={`${domain}${router.pathname}`} key="ogurl" />
                <meta
                    property="og:image"
                    content={`${domain}/images/meta/index.png`}
                    key="ogimage"
                />
                <meta property="og:site_name" content="Pushka" key="ogsitename" />
            </Head>

            <Header theme={theme} />
            <div className={grid.container}>main</div>
            <Footer theme={theme} />
        </div>
    );
};

Index.propTypes = {
    theme: PropTypes.any,
    domain: PropTypes.any
};

export const getStaticProps = async () => {
    return {
        props: {
            domain: process.env.DOMAIN
        }
    };
};

export default Index;
