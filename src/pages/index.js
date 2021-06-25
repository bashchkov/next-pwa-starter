import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {ChangeLocale} from '@components/ChnageLocale';
import {Counter} from "../features/counter/Counter";


const Homepage = () => {

    const {t} = useTranslation('common')

    return (
        <>
            <main>
                <div>
                    <Counter/>
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