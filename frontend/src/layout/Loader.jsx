import style from './Loader.module.css'


export default function Loader() {
    return (
        <div className={style['container']}>
            <div className={style["lds-ring"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}