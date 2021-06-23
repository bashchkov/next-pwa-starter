import {useTranslation} from 'next-i18next';
import {FloatingLabel, Form, Button} from 'react-bootstrap';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';


const AuthPage = () => {

    const {t} = useTranslation('auth')

    return (
        <main className='d-flex justify-content-center align-items-center vh-100 wh-100'>
            <Form className='w-100 p-3 text-center' style={{maxWidth: '330px'}}>
                {/*<img className='mb-4' src='../assets/brand/bootstrap-logo.svg' alt='' width='72' height='57'/>*/}
                <h1 className='h3 mb-4 fw-normal'>{t('sign_in')}</h1>
                <FloatingLabel label={t('email')} className='mb-3'>
                    <Form.Control type='email' placeholder={t('email')} />
                </FloatingLabel>
                <FloatingLabel label={t('password')} className='mb-4'>
                    <Form.Control type='password' placeholder={t('password')}/>
                </FloatingLabel>
                <Button variant='primary' size='lg' className='w-100' type='submit'>{t('sign_in')}</Button>

                <p className='mt-5 mb-3 text-muted'>&copy; 2017–2021</p>
            </Form>
        </main>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['auth']),
    },
})

export default AuthPage;