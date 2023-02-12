
import { useRef } from 'react';

import WorkoutForm from './WorkoutForm';

import { addWorkout } from '../api/workout'

import './CreateWorkoutForm.css'

export default function CreateWorkoutForm(props) {

    const titleRef = useRef()
    const repsRef = useRef()
    const loadeRef = useRef()

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const data = {
            title: titleRef.current.value,
            reps: repsRef.current.value,
            load: loadeRef.current.value
        }

        //TODO : add error validation message to form
        if(!data.title || !data.reps || !data.load) return
        props.setWorkouts([await addWorkout(data), ...props.workouts])

        titleRef.current.value = ''
        repsRef.current.value = ''
        loadeRef.current.value = ''
    }

    return (
        <WorkoutForm
            titleRef={titleRef}
            repsRef={repsRef}
            loadeRef={loadeRef}
            onSubmitHandler={(event) => onSubmitHandler(event)}
            submitText='Add New Workout'
        />
    )
}
