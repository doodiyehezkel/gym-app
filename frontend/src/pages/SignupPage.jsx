import { useRef } from 'react';
import AuthenticationForm from '../components/AuthenticationForm'

import { useSignup } from '../hooks/useSignup';

export default function SignupPage() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [signup, loading, error] = useSignup()

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        signup({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
    }


    return (
        <>
            <AuthenticationForm
                type='Sign-Up'
                emailRef={emailRef}
                passwordRef={passwordRef}
                onSubmitHandler={onSubmitHandler}
                loading={loading}
                error={error}
            />
        </>
    )
}