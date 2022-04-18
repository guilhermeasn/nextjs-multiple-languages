import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import languages from '../languages/config.json';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    const router = useRouter();
    
    function changeLanguage(language) {
        const { pathname, asPath, query } = router;
        localStorage.setItem('language', language);
        router.push({ pathname, query }, asPath, { locale: language });
    }

    useEffect(() => {
        const languageStorage = localStorage.getItem('language');
        if(languageStorage && languageStorage != pageProps.locale) {
            changeLanguage(languageStorage);
        }
    }, []);

    return (
        <>

            <Head>
                <title>Next App Multi Languages</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Component {...pageProps} />
            </main>

            <footer>
                <select value={ pageProps.locale } onChange={ selected => changeLanguage(selected.target.value) }>
                    { Object.entries(languages).map(([ key, description ]) => (
                        <option key={ key } value={ key }>
                            🌐&nbsp;{ description }
                        </option>
                    )) }
                </select>
            </footer>

        </>
    
    );
}

export default MyApp
