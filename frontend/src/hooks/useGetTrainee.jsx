import { useCallback, useEffect, useState } from "react"

export default function useGetTrainee(url) {

    const [trainee, setTrainee] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchTrainee = useCallback(async () => {
        setLoading(true)
        setError(null)
        const response = await fetch(url)

        if (response.ok) {
            setLoading(false)
            setTrainee(await response.json())
        } else {
            setError('failed to fetch trainee data')
            setLoading(false)
        }
    } ,[url])

    useEffect(() => {
        fetchTrainee()
    }, [fetchTrainee])

    return [loading, error, trainee ,fetchTrainee]
}