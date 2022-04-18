import { useRouter } from 'next/router';
import languages from '../languages/config.json';

export default function ChangeLanguage({ language }) {

    const router = useRouter();

    function changeLanguage(language) {
        const { pathname, query } = router;
        localStorage.setItem('language', language);
        router.push({ pathname, query: { ...query, language } });
    }

    return (
        <select value={ language } onChange={ selected => changeLanguage(selected.target.value) } className='select-language'>
            { Object.entries(languages).map(([ key, description ]) => (
                <option key={ key } value={ key }>
                    🌐&nbsp;{ description }
                </option>
            )) }
        </select>
    );

}
