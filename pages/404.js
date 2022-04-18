export default function Custom404({ content }) {

    return (
        <h2 style={ {color: '#400'} }>
            404 | { content.http404 }
        </h2>
    );

}

export const getStaticProps = async ({ locale }) => {

    return {
        props: { content: require(`../languages/${locale}.json`)['error'], locale }
    }

}