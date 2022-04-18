import Head from 'next/head';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import languages from '../languages/config.json';

import styles from '../styles/Home.module.css';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

    const router = useRouter();
    const [ language, setLanguage ] = useState();
    
    function changeLanguage(language) {
        setLanguage(language);
        const { pathname, query } = router;
        localStorage.setItem('language', language);
        router.push({ pathname, query: { ...query, language } });
    }

    useEffect(() => setLanguage(localStorage.getItem('language') || pageProps.language), []);

    useEffect(() => {
        const stored = localStorage.getItem('language');
        if(stored && stored !== language) changeLanguage(stored);
    }, [router]);

    return <>

        <Head>
            <title>Next App Multi Languages</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <Component {...pageProps} />
        </main>

        <footer className={styles.footer}>
            <select value={ language } onChange={ selected => changeLanguage(selected.target.value) } className={styles.select}>
                { Object.entries(languages).map(([ key, description ]) => (
                    <option key={ key } value={ key }>
                        🌐&nbsp;{ description }
                    </option>
                )) }
            </select>
        </footer>

    </>;

}

export default MyApp
