import { useState } from "react"
export default function useTraineeSignup() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const signup = async (data) => {
        setLoading(true)
        setError(null)
        const response = await fetch(`/api/coach/trainee-signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        if (!response.ok) setError(json.error)

        setLoading(false)
    }
    return [signup, loading, error]
}