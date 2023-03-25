import { useRef } from 'react';
import AuthenticationForm from '../../components/authentication/AuthenticationForm'

import { useCoachSignup } from '../../hooks/useCoachSignup';

import style from './CoachSignupPage.module.css'

export default function CoachSignupPage() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [signup, loading, error] = useCoachSignup()

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        signup({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
    }


    return (
        <div className={style.container} >
            <div className={style.sub_container}>
            <AuthenticationForm
                type='Sign-Up'
                emailRef={emailRef}
                passwordRef={passwordRef}
                onSubmitHandler={onSubmitHandler}
                loading={loading}
                error={error}
            />
            </div>
        </div>
    )
}