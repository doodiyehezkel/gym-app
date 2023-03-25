import { useRef } from 'react';
import { useTraineeSignin } from '../../hooks/useTraineeSignin';
import AuthenticationForm from '../../components/authentication/AuthenticationForm'


export default function TraineeSigninPage() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [signin, loading, error] = useTraineeSignin()

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
                type='Trainee-Sign-In'
                emailRef={emailRef}
                passwordRef={passwordRef}
                onSubmitHandler={onSubmitHandler}
                loading={loading}
                error={error}
            />
        </>
    )
}