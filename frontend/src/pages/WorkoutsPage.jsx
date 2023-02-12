
import { useEffect, useState } from 'react'

import WorkoutList from '../components/WorkoutList'
import CreateWorkoutForm from '../components/CreateWorkoutForm'

import { getAllWorkouts } from '../api/workout'

import Loader from '../layout/Loader'

import './WorkoutsPage.css'
export default function WorkoutsPage() {

    const [workouts, setWorkouts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchWorkouts = async () => {
            const data = await getAllWorkouts()
            if (!data.error) setWorkouts(data)
            setLoading(false)
        }
        fetchWorkouts()
    }, [])

    return (
        <>
            <h1 className='page-header'>Workouts Page</h1>
            <div className="workout-container">
                <div className="workout-list-container">
                    {loading
                        ?
                        <Loader />
                        :
                        <WorkoutList
                            workouts={workouts}
                            setWorkouts={setWorkouts}
                        />
                    }

                </div>
                <div className="workout-form-container">
                    <CreateWorkoutForm
                        workouts={workouts}
                        setWorkouts={setWorkouts}
                    />
                </div>
            </div>
        </>
    )
}
