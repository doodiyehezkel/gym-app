import { useRef } from 'react';

import AuthenticationForm from '../components/AuthenticationForm'
import { useSignin } from '../hooks/useSignin';


export default function SigninPage() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [signin, loading, error] = useSignin()

    const onSubmitHandler = async (event) => {

        event.preventDefault()
        signin({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

    }

    return (
        <>
            <AuthenticationForm
                type='Sign-In'
                emailRef={emailRef}
                passwordRef={passwordRef}
                onSubmitHandler={onSubmitHandler}
                loading={loading}
                error={error}
            />
        </>
    )
}