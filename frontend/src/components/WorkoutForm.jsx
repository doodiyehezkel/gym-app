import './WorkoutForm.css'

export default function WorkoutForm({
    titleRef,
    repsRef,
    loadeRef,
    onSubmitHandler,
    titleDefaultValue,
    repsDefaultValue,
    loadDefaultValue,
    submitText
}) {

    return (

        <form className='workout-form' onSubmit={onSubmitHandler}>
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
                <input type="number" placeholder='Enter load' ref={loadeRef} defaultValue={loadDefaultValue} />
            </div>
            <div>
                <button type="submit">{submitText}</button>
            </div>
        </form>

    )
}
