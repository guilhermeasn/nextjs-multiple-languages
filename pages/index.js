import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Main, { getStaticProps as getStaticPropsMain } from './[language]';

export default function Home(props) {

    const router = useRouter();

    useEffect(() => {
        const language = localStorage.getItem('language');
        if(language && language !== props.language) router.push(`/${language}`);
    }, [router]);
    
    return <Main { ...props } />;

}

export const getStaticProps = async () => {

    return await getStaticPropsMain({
        params: {
            language: process.env.APP_LANGUAGE_DEFAULT
        }
    });

}
