import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {FloatingLabel, Form, Button, Card, Spinner} from 'react-bootstrap';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {ChangeLocale} from "../../components/ChnageLocale";
import LogoSvg from "../../components/LogoSvg";
import {useState} from "react";
import {HOME_PAGE} from "../../constants/urls";


const AuthPage = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        setLoading(true)
    }

    const {t} = useTranslation('auth')

    return (
        <main className='d-flex flex-column justify-content-center align-items-center vh-100 wh-100'>


            <Card style={{maxWidth: '420px'}} className='w-100 shadow'>
                <Card.Body className='p-5'>
                    <Link href={HOME_PAGE}>
                        <a className='d-block mb-5 text-center'>
                            <img src='/logo/bashchkov-technology-360x140.png' style={{width: 220}}/>
                        </a>
                    </Link>
                    {/*<LogoSvg width={80} className='mb-4'/>*/}
                    <Form onSubmit={handleSubmit}>
                        {/*<img className='mb-4' src='../assets/brand/bootstrap-logo.svg' alt='' width='72' height='57'/>*/}
                        <FloatingLabel label={t('email')} className='mb-4'>
                            <Form.Control type='email' placeholder={t('email')} disabled={loading}/>
                        </FloatingLabel>
                        <FloatingLabel label={t('password')} className='mb-4'>
                            <Form.Control type='password' placeholder={t('password')} disabled={loading}/>
                        </FloatingLabel>
                        <Button variant='primary' size='lg' className='w-100 mb-4 text-uppercase' type='submit' disabled={loading}>
                            {loading ? (
                                <Spinner as="span" animation="border" role="status" aria-hidden="true"/>
                            ) : t('sign_in')}
                        </Button>
                        <p className='mt-5 mb-3 text-muted'>&copy; 2017–2021</p>
                        <ChangeLocale/>
                    </Form>
                </Card.Body>
            </Card>
        </main>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['auth']),
    },
})

export default AuthPage;