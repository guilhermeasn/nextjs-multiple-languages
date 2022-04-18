import languages from '../../languages/config.json';

export default function Home({ content }) {
  
    return <>
        <h1>{ content.title }</h1>
        <p>{ content.body }</p>
    </>;

}

export const getStaticPaths = async () => {

    return {
        paths: Object.keys(languages).map(language => ({
            params: { language }
        })),
        fallback: false
    }

}

export const getStaticProps = async ({ params: { language } }) => {

    return {
        props:{
            content: require(`../../languages/${language}.json`)['home'],
            language
        }
    }

}
