import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignout = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const signout = async () => {
        setLoading(true)
        setError(null)
        await fetch(`/api/auth/common/signout`)
        localStorage.removeItem('user')
        dispatch({ type: 'SIGNOUT' })
        setLoading(false)
    }

    return [signout, loading, error]
}