import style from './WorkoutForm.module.css'

export default function WorkoutForm({
    titleRef,
    repsRef,
    loadRef,
    onSubmitHandler,
    titleDefaultValue,
    repsDefaultValue,
    loadDefaultValue,
    submitText,
    error,
    pending
}) {

    return (

        <form className={style.workout_form} onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor=""> Title </label>
                <input type="text" placeholder='Enter title' ref={titleRef} defaultValue={titleDefaultValue} />
            </div>
            <div>
                <label htmlFor=""> Reps </label>
                <input type="number" placeholder='Enter reps' ref={repsRef} defaultValue={repsDefaultValue} />
            </div>
            <div>
                <label htmlFor=""> Load </label>
                <input type="number" placeholder='Enter load' ref={loadRef} defaultValue={loadDefaultValue} />
            </div>
            <div>
                <button disabled={pending} type="submit">{submitText}</button>
            </div>
            {error && <div> <p className={style.error_message}> {error} </p> </div>}
        </form>

    )
}
