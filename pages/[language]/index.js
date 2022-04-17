import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

export default function Home({ content, languages, language }) {

    const router = useRouter();
    
    function changeLanguage(language) {
        const { pathname, query } = router;
        localStorage.setItem('language', language);
        router.push({ pathname, query: { ...query, language } });
    }
  
    return (

        <>

            <main className={styles.main}>
                <h1>{ content.title }</h1>
                <p>{ content.body }</p>
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

        </>

  );

}

export const getStaticPaths = async () => {

    return {
        paths:[
            { params: { language: 'en' } },
            { params: { language: 'es' } },
            { params: { language: 'pt' } },
        ],
        fallback: false
    }

}

export const getStaticProps = async ({ params: { language } }) => {

    return {
        props:{
            content: require(`../../languages/${language}.json`)['home'],
            languages: require('../../languages/locales.json'),
            language
        }
    }

}
