import Link from 'next/link';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import SignInForm from "@features/auth/SignInForm";
import {HOME_PAGE} from "../../constants/urls";


const AuthPage = () => {

    const {t} = useTranslation('auth')

    return (
        <main className=''>
            <div className='container col-xl-10 col-xxl-8 px-4 py-5'>
                <div className='row align-items-center g-lg-5 py-5'>
                    <div className='col-lg-7 text-center text-lg-start'>
                        <h1 className='display-4 fw-bold lh-1 mb-3'>Vertically centered hero sign-up form</h1>
                        <p className='col-lg-10 fs-4'>Below is an example form built entirely with Bootstrap’s form
                            controls. Each required form group has a validation state that can be triggered by
                            attempting to submit the form without completing it.</p>
                    </div>
                    <div className='col-md-10 mx-auto col-lg-5'>
                        <div className='p-4 p-md-5 rounded-3 bg-light shadow text-center'>
                            <Link href='/'>
                                <a className='d-block mb-4 '>
                                    <Image
                                        src='/logo/bashchkov-technology-360x140.png'
                                        layout='fixed'
                                        width={180}
                                        height={70}
                                    />
                                </a>
                            </Link>
                            <SignInForm
                                emailLabel={t('email')}
                                buttonLabel={t('sign_in')}
                                passwordLabel={t('password')}
                            />
                            <hr className='my-4'/>
                            <small className='d-block text-muted'>
                                &copy; 2021 <Link href='/'><a>Bashchkov Technology LLC</a></Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['auth']),
    },
})

export default AuthPage;