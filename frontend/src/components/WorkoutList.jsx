import Workout from "./Workout"
import './WorkoutList.css'

export default function WorkoutList({ workouts, setWorkouts }) {

    return (
        workouts.length === 0
            ?
            <p>No workouts available</p>
            :
            <ul className="workout-list">
                {
                    workouts.map(workout => {
                        return (
                            <li key={workout._id}>
                                <Workout
                                    id={workout._id}
                                    title={workout.title}
                                    reps={workout.reps}
                                    load={workout.load}
                                    workouts={workouts}
                                    setWorkouts={setWorkouts}
                                />
                            </li>
                        )
                    })
                }
            </ul>
    )
}

