import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const useCoachSignup = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const signup = async (data) => {

        setLoading(true)
        setError(null)

        const response = await fetch(`/api/auth/coach/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        if (response.ok) {
            setLoading(false)
            navigate('/signin')
        }
        else {
            setError(json.error)
            setLoading(false)
        }
    }
    return [signup, loading, error]
}