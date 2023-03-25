
import { useRef ,useState } from 'react';

import WorkoutForm from './WorkoutForm';


export default function CreateWorkoutForm(props) {

    const titleRef = useRef()
    const repsRef = useRef()
    const loadRef = useRef()
    const [loading ,setLoading] = useState(false)
    const [error ,setError] = useState()

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError(null)
        const response = await fetch(`/api/coach/add-workout/${props.userId}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titleRef.current.value,
                reps: repsRef.current.value,
                load: loadRef.current.value
            })
        })

        const json = await response.json()

        if(response.ok){
            setError(null)
            props.fetchTrainee()
        }
        else {
            setError('Failed to add new workout')
            console.log(json.error);
        }

        titleRef.current.value = ''
        repsRef.current.value = ''
        loadRef.current.value = ''

        setLoading(false)
    }

    return (
        <WorkoutForm
            titleRef={titleRef}
            repsRef={repsRef}
            loadRef={loadRef}
            onSubmitHandler={(event) => onSubmitHandler(event)}
            submitText='Add New Workout'
            error={error}
            pending={loading}
        />
    )
}
