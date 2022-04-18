import Head from 'next/head';
import ChangeLanguage from '../components/ChangeLanguage';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
            <ChangeLanguage language={ pageProps.language } />        
        </footer>

    </>
  
  );
}

export default MyApp
