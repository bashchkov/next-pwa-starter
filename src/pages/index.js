import Link from 'next/link';
import {useRouter} from 'next/router';

import {useTranslation} from 'next-i18next';
import {ChangeLocale} from "../components/ChnageLocale";


const Homepage = () => {

    const router = useRouter()
    const {t} = useTranslation('common')

    return (
        <>
            <main>
                <div>
                    <Link
                        href='/'
                        locale={router.locale === 'en' ? 'ru' : 'en'}
                    >
                        <button>
                            {t('change-locale')}
                        </button>
                    </Link>
                    <Link href='/second-page'>
                        <button
                            type='button'
                        >
                            {t('to-second-page')}
                        </button>
                    </Link>
                    <br/>
                    <ChangeLocale/>
                    <br/>
                    <Link href='/auth'>Sign In</Link>
                </div>
            </main>
        </>
    )
}

// export const getStaticProps = async ({locale}) => ({
//     props: {
//         ...await serverSideTranslations(locale, ['common', 'footer']),
//     },
// })

export default Homepage