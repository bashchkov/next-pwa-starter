import Link from 'next/link';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {FloatingLabel, Form, Button, Card, Spinner} from 'react-bootstrap';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {ChangeLocale} from '../../components/ChnageLocale';
import LogoSvg from '../../components/LogoSvg';
import {useState} from 'react';
import {HOME_PAGE} from '../../constants/urls';


const AuthPage = () => {

    const [loading, setLoading] = useState(false);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            const data = new FormData(event.currentTarget);
            console.log(data)
            setLoading(true)
        }

        setValidated(true);
    }

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
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                            className='p-4 p-md-5 rounded-3 bg-light shadow'
                        >
                            <Link href={HOME_PAGE}>
                                <a className='d-block mb-4 text-center'>
                                    <Image
                                        src='/logo/bashchkov-technology-360x140.png'
                                        layout='fixed'
                                        width={180}
                                        height={70}
                                    />
                                </a>
                            </Link>
                            <FloatingLabel label={t('email')} className='mb-3'>
                                <Form.Control
                                    type='email'
                                    placeholder={t('email')}
                                    disabled={loading}
                                    required
                                />
                            </FloatingLabel>
                            <FloatingLabel label={t('password')} className='mb-4'>
                                <Form.Control
                                    type='password'
                                    placeholder={t('password')}
                                    disabled={loading}
                                    required
                                />
                            </FloatingLabel>
                            <Button variant='primary' size='lg' className='w-100' type='submit' disabled={loading}>
                                {loading ? (
                                    <Spinner as='span' animation='border' role='status' aria-hidden='true'/>
                                ) : t('sign_in')}
                            </Button>
                            <hr className='my-4'/>
                            <small className='d-block text-muted text-center'>
                                &copy; 2021 <Link href={HOME_PAGE}><a>Bashchkov Technology LLC</a></Link>
                            </small>
                        </Form>
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