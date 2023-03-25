import { useState, useRef } from "react"

import WorkoutForm from "./WorkoutForm"

import style from './Workout.module.css'

export default function Workout(props) {

    const titleRef = useRef()
    const repsRef = useRef()
    const loadRef = useRef()

    const [title, setTitle] = useState(props.title)
    const [reps, setReps] = useState(props.reps)
    const [load, setLoad] = useState(props.load)
    const [isEditMode, setIsEditMode] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const onDeleteHandler = async (workoutId) => {
        setLoading(true)
        
        const response = await fetch(`/api/coach/delete-workout/${props.userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ workoutId })
        })

        setLoading(false)

        if (response.ok) props.fetchTrainee()
        // else 


    }

    const onUpdateHandler = async (event, workoutId) => {
        event.preventDefault()
        setLoading(true)
        setError(null)
        const data = {
            workoutId,
            title: titleRef.current.value,
            reps: repsRef.current.value,
            load: loadRef.current.value
        }

        const response = await fetch(`/api/coach/update-workout/${props.userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        if (response.ok) {
            setTitle(data.title)
            setReps(data.reps)
            setLoad(data.load)
            setIsEditMode(false)
            setError(null)
        }
        else {
            setError('Fail to update workout.')
            console.log(json.error);
        }
        setLoading(false)
    }


    return (
        isEditMode
            ?
            <div className={style.workout_item}>
                <div className={style.close_btn_container}>
                    <button className={style.close_window} onClick={() => setIsEditMode(prev => !prev)}>X</button>
                </div>
                <WorkoutForm
                    titleRef={titleRef}
                    repsRef={repsRef}
                    loadRef={loadRef}
                    onSubmitHandler={(event) => onUpdateHandler(event, props.workoutId)}
                    titleDefaultValue={title}
                    repsDefaultValue={reps}
                    loadDefaultValue={load}
                    submitText='Update Workout'
                    error={error}
                    pending={loading}
                />
            </div>
            :
            <div className={style.workout_item}>
                <h1>{title}</h1>
                <p> <strong> Reps: </strong> {reps} </p>
                <p> <strong> Load: </strong> {load} </p>
                <div className={style.workout_item_btn_container}>
                    <button onClick={() => setIsEditMode(prev => !prev)}>Edit</button>
                    <button className={`${loading && style.delete_btn_loading}`} disabled={loading} onClick={() => onDeleteHandler(props.workoutId)}>Delete</button>
                </div>
            </div>
    )
}