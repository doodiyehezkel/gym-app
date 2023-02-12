export async function getAllWorkouts() {
    const workouts = await fetch(`/workouts`)
    return await workouts.json()
}

export async function addWorkout(data) {
    const workouts = await fetch(`/workouts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await workouts.json()
}

export async function updateWorkout(id, data) {
    const workouts = await fetch(`/workouts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await workouts.json()
}


export async function deleteWorkout(id) {
    const workouts = await fetch(`/workouts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await workouts.json()
}