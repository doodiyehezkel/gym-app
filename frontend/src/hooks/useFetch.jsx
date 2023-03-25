import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(true)

    useEffect(() => {
        const abortController = new AbortController()
        setPending(true)
        setError(null)
        const fetchData = async () => {
            try {
                const response = await fetch(url,{ signal: abortController.signal})
                const json = await response.json()
                setData(json)
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
        setPending(false)
        return () => abortController.abort()
    }, [url])

    return [data, error, pending]

}