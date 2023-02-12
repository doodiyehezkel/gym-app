import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignout = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const signout = async (data) => {
        setLoading(true)
        setError(null)
        await fetch(`/auth/signout`)
        localStorage.removeItem('user')
        dispatch({ type: 'SIGNOUT' })
        setLoading(false)
    }

    return [signout, loading, error]
}