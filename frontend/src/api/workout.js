
export async function updateWorkout(id, data) {
    const workouts = await fetch(`/api/workouts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await workouts.json()
}


export async function deleteWorkout(id) {
    const workouts = await fetch(`/api/workouts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await workouts.json()
}