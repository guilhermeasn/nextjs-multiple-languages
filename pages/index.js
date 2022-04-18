export default function Home({ content }) {

    return (
        <>
            <h1>{ content.title }</h1>
            <p>{ content.body }</p>
        </>
    );

}

export const getStaticProps = async ({ locale }) => {

    return {
        props: { content: require(`../languages/${locale}.json`)['home'], locale }
    }

}
