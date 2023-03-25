
import { useEffect } from "react"
import { useState } from "react"

export const useIsAuth = () => {

    const [isAuth, setIsAuth] = useState(false)
    const [loading, setLoading] = useState(false)

    const auth = async () => {
        setLoading(true)
        const response = await fetch('/api/auth/ping')
        if (response.ok) setIsAuth(true)
        setLoading(false)
    }

    useEffect(() => {
        auth()
    }, [])



    return [isAuth, loading]
}