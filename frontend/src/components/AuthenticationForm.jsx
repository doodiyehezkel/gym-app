import './AuthenticationForm.css'

export default function AuthenticationForm({ type, emailRef, passwordRef, onSubmitHandler, loading, error }) {
    return (
        <div className='auth-form-container' onSubmit={onSubmitHandler}>
            <form className='auth-form'>
                <h1>{type}</h1>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="text" ref={passwordRef} />
                </div>
                <div className='auth-form-submit'>
                    <button disabled={loading} type="submit">{type}</button>
                </div>
                {error && <p className='error-message'>{error}</p>}
            </form>
        </div>
    )
}