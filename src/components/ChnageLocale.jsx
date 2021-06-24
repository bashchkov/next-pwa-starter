import Link from 'next/link';
import {useRouter} from 'next/router';


export const ChangeLocale = () => {

    const {locales, pathname} = useRouter();

    return (
        <>
            {locales.map(locale => (
                <Link
                    key={locale}
                    href={pathname}
                    locale={locale}
                >
                    {locale}
                </Link>
            ))}
        </>
    )
}