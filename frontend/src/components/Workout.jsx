import { useState, useRef } from "react"

import WorkoutForm from "./WorkoutForm"

import { deleteWorkout, updateWorkout } from '../api/workout'

import './Workout.css'

export default function Workout(props) {

    const titleRef = useRef()
    const repsRef = useRef()
    const loadeRef = useRef()

    const [title, setTitle] = useState(props.title)
    const [reps, setReps] = useState(props.reps)
    const [load, setLoad] = useState(props.load)
    const [isEditMode, setIsEditMode] = useState(false)
    const [loading ,setLoading] = useState(false)

    const onDeleteHandler = async (id) => {
        setLoading(true)
        const deletedWorkout = await deleteWorkout(id)
        setLoading(false)
        const updatedList = props.workouts.filter(workout => workout._id !== deletedWorkout._id)
        props.setWorkouts(updatedList)
    }

    const onUpdateHandler = async (event, id) => {
        event.preventDefault()
        const data = {
            title: titleRef.current.value,
            reps: repsRef.current.value,
            load: loadeRef.current.value
        }

        //TODO : add error validation message to form
        if (!data.title || !data.reps || !data.load) return

        const updatedWorkout = await updateWorkout(id, data)

        setTitle(updatedWorkout.title)
        setReps(updatedWorkout.reps)
        setLoad(updatedWorkout.load)

        setIsEditMode(false)
    }


    return (
        isEditMode
            ?
            <div className="workout-item">
                <div className="close-btn-container">
                    <button className="close-window" onClick={() => setIsEditMode(prev => !prev)}>X</button>
                </div>
                <WorkoutForm
                    titleRef={titleRef}
                    repsRef={repsRef}
                    loadeRef={loadeRef}
                    onSubmitHandler={(event) => onUpdateHandler(event, props.id)}
                    titleDefaultValue={title}
                    repsDefaultValue={reps}
                    loadDefaultValue={load}
                    submitText='Update Workout'
                />
            </div>
            :
            <div className="workout-item">
                <h1>{title}</h1>
                <p> <strong> Reps: </strong> {reps} </p>
                <p> <strong> Load: </strong> {load} </p>
                <div className="workout-item-btn-container">
                    <button onClick={() => setIsEditMode(prev => !prev)}>Edit</button>
                    <button className={`${loading && 'delete-btn-loading'}`} disabled={loading} onClick={() => onDeleteHandler(props.id)}>Delete</button>
                </div>
            </div>
    )
}