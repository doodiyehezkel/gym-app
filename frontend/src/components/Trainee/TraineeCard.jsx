import { Link } from 'react-router-dom'
import style from './TraineeCard.module.css'
export default function TraineeCard({ _id, email }) {
    return (
        <div className={style.card}>
            <Link className={style.link} to={_id}>
                <h3>{email}</h3>
            </Link>
        </div>
    )
}