import { useEffect, createContext, useReducer } from "react"

export const AuthContext = createContext()

const initialAuthReducer = {
    user: null,
    loading: true
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return { ...state, user: action.payload }
        case 'SIGNOUT':
            return { ...state, user: null }
        case 'LOADING_ON':
            return { ...state, loading: true }
        case 'LOADING_OFF':
            return { ...state, loading: false }
        default:
            throw Error(`auth reducer action type is not supported : ${action.type}`)
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialAuthReducer)
    useEffect(() => {
        fetch('/api/auth/common/ping')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                dispatch({ type: 'LOADING_OFF' })
            })
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) dispatch({ type: 'SIGNIN', payload: user })
    }, [])


    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )

}

