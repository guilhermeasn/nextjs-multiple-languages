import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

    const router = useRouter();

    useEffect(() => {
        const language = localStorage.getItem('language') || 'pt';
        router.push(`/${language}`);
    });
    
    return <></>;

}
