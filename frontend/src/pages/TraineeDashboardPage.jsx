import style from './TraineeDashboardPage.module.css'

import useFetch from '../hooks/useFetch'
import TraineeWorkoutList from '../components/workouts/TraineeWorkoutList'
import Loader from '../layout/Loader'

export default function TraineeDashboardPage() {

    const [data, error, pending] = useFetch('/api/trainee/all-workouts')

    return (
        <>
            <h1 className={style.page_header}>Trainee Dashboard Page</h1>
            {pending ? <Loader /> : (error ? <p>{error.message}</p> : <TraineeWorkoutList workoutList={data?.workouts} />)}
        </>
    )

}