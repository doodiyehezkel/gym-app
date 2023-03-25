import { useParams } from 'react-router-dom';
import useGetTrainee from '../hooks/useGetTrainee';

import CreateWorkoutForm from '../components/workouts/CreateWorkoutForm'
import WorkoutList from '../components/workouts/WorkoutList'
import Loader from '../layout/Loader'

import style from './TraineeWorkoutPage.module.css'

export default function TraineeWorkoutPage() {

    let { userId } = useParams();
    const [loading, error, trainee, fetchTrainee] = useGetTrainee(`/api/coach/trainee/${userId}`)

    return (
        <div className={style.container}>
            <div className={style.sub_container}>
                {loading ? <Loader /> : !error ?
                    <WorkoutList
                        userId={userId}
                        workouts={trainee.workouts}
                        fetchTrainee={fetchTrainee}
                    /> : <p>{error}</p>}
            </div>
            <div className={`${style.sub_container}`}>
                <CreateWorkoutForm
                    userId={userId}
                    fetchTrainee={fetchTrainee} />
            </div>
        </div>
    )
}