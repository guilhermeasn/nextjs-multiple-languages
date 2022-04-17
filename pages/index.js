import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home({ content, languages, locale }) {

    const router = useRouter();
    
    function changeLanguage(language) {
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: language });
    }
  
    return (

        <>

            <main className={styles.main}>
                <h1>{ content.title }</h1>
                <p>{ content.body }</p>
            </main>

            <footer className={styles.footer}>
                <select value={ locale } onChange={ selected => changeLanguage(selected.target.value) } className={styles.select}>
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

export const getStaticProps = async ({ locale }) => {


    return {
        props:{
            content: require(`../languages/${locale}.json`)['home'],
            languages: require('../languages/locales.json'),
            locale
        }
    }

}
