import { useRef } from 'react';
import { useCoachSignin } from '../../hooks/useCoachSignin';
import AuthenticationForm from '../../components/authentication/AuthenticationForm'


export default function CoachSigninPage() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [signin, loading, error] = useCoachSignin()

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
                type='Coach-Sign-In'
                emailRef={emailRef}
                passwordRef={passwordRef}
                onSubmitHandler={onSubmitHandler}
                loading={loading}
                error={error}
            />
        </>
    )
}