import style from './TraineeWorkout.module.css'

export default function TraineeWorkout({ title, reps, load }) {
    return (
        <div className={style.workout_item}>
            <h1>{title}</h1>
            <p> <strong> Reps: </strong> {reps} </p>
            <p> <strong> Load: </strong> {load} </p>
        </div>
    )
}