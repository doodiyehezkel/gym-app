import { useState } from "react"

export default function useGetAllTrainees() {

    const [allTrainees, setAllTrainees] = useState([])
    const [allTraineesLoaded, setAllTraineesLoaded] = useState(false)
    const [allTraineesError, setAllTraineesError] = useState(null)

    const getAllTrainees = async () => {

        setAllTraineesLoaded(true)
        const response = await fetch(`/api/coach/all-trainees`)
        if (response.ok) {
            const json = await response.json()
            setAllTrainees(json)
        } else {
            setAllTraineesError(response.statusText)
        }
        setAllTraineesLoaded(false)

    }

    return [getAllTrainees, allTrainees, allTraineesLoaded, allTraineesError]
}