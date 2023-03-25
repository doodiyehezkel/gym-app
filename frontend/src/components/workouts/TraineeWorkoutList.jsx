import TraineeWorkout from './TraineeWorkout'
export default function TraineeWorkoutList({ workoutList }) {
    return (
        <div>
            {
                workoutList?.map(item => {
                    return (
                        <TraineeWorkout
                            key={item._id}
                            title={item.title}
                            reps={item.reps}
                            load={item.load}
                        />
                    )
                })
            }
        </div>
    )
}