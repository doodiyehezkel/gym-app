import style from './AuthenticationForm.module.css'

export default function AuthenticationForm({ type, emailRef, passwordRef, onSubmitHandler, loading, error }) {
    return (
        <form className={style.container} onSubmit={onSubmitHandler}>
            <h1 className={style.h1}>{type}</h1>
            <div className={style.div}>
                <label className={style.label} htmlFor="">Email:</label>
                <input className={style.input} type="text" ref={emailRef} />
            </div>
            <div className={style.div}>
                <label className={style.label} htmlFor="">Password:</label>
                <input className={style.input} type="text" ref={passwordRef} />
            </div>
            <div className={style.submit}>
                <button className={style.submit_button} disabled={loading} type="submit">{type}</button>
            </div>
            {error && <div className={style.div}> <p className={style.error_message}>{error}</p> </div>}
        </form>
    )
}