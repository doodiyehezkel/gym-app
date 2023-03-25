import { useEffect, useState, useRef } from "react";

import TraineeCardList from "../components/Trainee/TraineeCardList";
import AuthenticationForm from "../components/authentication/AuthenticationForm";
import useGetAllTrainees from "../hooks/useGetAllTrainees";

import Loader from "../layout/Loader";

import style from './CoachDashboardPage.module.css'

export default function CoachDashboardPage() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const [getAllTrainees, allTrainees, allTraineesLoaded, allTraineesError] = useGetAllTrainees()

    useEffect(() => {
        getAllTrainees()
    }, [])

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError(null)
        const response = await fetch(`/api/coach/trainee-signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
        })
        const json = await response.json()
        if (!response.ok) setError(json.error)
        else getAllTrainees()
        setLoading(false)
    }

    return (
        <>
            <h1 className='page-header'>Coach Dashboard Page</h1>
            <div className={style.container}>
                <div className={style.container_item}>
                    {
                        allTraineesError ?
                            <p> {allTraineesError} </p>
                            :
                            (!allTraineesLoaded ?
                                (allTrainees.length === 0 ?
                                    <p> no trainee register yet </p>
                                    :
                                    <TraineeCardList traineeList={allTrainees} />)
                                :
                                <Loader />)
                    }
                </div>
                <div className={`${style.container_item} ${style.auth_container}`}>
                    <AuthenticationForm
                        type='Sign-up-trainee'
                        emailRef={emailRef}
                        passwordRef={passwordRef}
                        onSubmitHandler={onSubmitHandler}
                        loading={loading}
                        error={error}
                    />
                </div>
            </div>
        </>
    )


}