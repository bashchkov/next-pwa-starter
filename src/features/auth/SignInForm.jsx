import Link from 'next/link';
import Image from 'next/image';
import {FloatingLabel, Form, Button, Spinner} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {HOME_PAGE} from '../../constants/urls';
import {useDispatch, useSelector} from "react-redux";


const SignInForm = ({emailLabel, passwordLabel, buttonLabel}) => {

    const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         const data = new FormData(event.currentTarget);
    //         console.log(data)
    //         setLoading(true)
    //     }
    //
    //     setValidated(true);
    // }


    const loading = useSelector((state) => state.auth.loginLoading);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch(login({
            email: data.get('email'),
            password: data.get('password')
        }))
    };

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
            <FloatingLabel label={emailLabel} className='mb-3'>
                <Form.Control
                    type='email'
                    placeholder={emailLabel}
                    disabled={loading}
                    required
                />
            </FloatingLabel>
            <FloatingLabel label={passwordLabel} className='mb-4'>
                <Form.Control
                    type='password'
                    placeholder={passwordLabel}
                    disabled={loading}
                    required
                />
            </FloatingLabel>
            <Button variant='primary' size='lg' className='w-100' type='submit' disabled={loading}>
                {loading ? (
                    <Spinner as='span' animation='border' role='status' aria-hidden='true'/>
                ) : buttonLabel}
            </Button>
        </Form>
    )
}

SignInForm.propTypes = {
    emailLabel: PropTypes.string.isRequired,
    passwordLabel: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
};

export default SignInForm;