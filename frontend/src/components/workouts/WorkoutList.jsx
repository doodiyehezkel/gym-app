import Workout from "./Workout"
import style from './WorkoutList.module.css'

export default function WorkoutList({ userId, workouts, fetchTrainee }) {

    return (
        !workouts || workouts.length === 0
            ?
            <p>No workouts available</p>
            :
            <ul className={style.workout_list}>
                {
                    workouts.map(workout => {
                        return (
                            <li key={workout._id}>
                                <Workout
                                    userId={userId}
                                    workoutId={workout._id}
                                    title={workout.title}
                                    reps={workout.reps}
                                    load={workout.load}
                                    workouts={workouts}
                                    fetchTrainee={fetchTrainee}
                                />
                            </li>
                        )
                    })
                }
            </ul>
    )
}

