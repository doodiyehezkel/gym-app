import TraineeCard from "./TraineeCard"
import style from './TraineeCardList.module.css'
export default function TraineeCardList({ traineeList }) {
    return (
        <div className={style.trainee_container}>
            {
                traineeList.map(item => {
                    return (
                        <TraineeCard
                            key={item._id}
                            _id={item._id}
                            workouts={item.workouts}
                            email={item.email}
                        />
                    )
                })
            }
        </div>
    )
}