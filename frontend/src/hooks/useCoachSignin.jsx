import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from './useAuthContext';

export const useCoachSignin = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const signin = async (data) => {
        setLoading(true)
        setError(null)
        const response = await fetch(`/api/auth/coach/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setLoading(false)
        }
        else {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'SIGNIN', payload: json })
            setLoading(false)
            navigate('/')
        }
    }

    return [signin, loading, error]
}