const signup = async (data) => {

    const response = await fetch(`/api/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return await response.json()

}


const signin = async (data) => {

    const response = await fetch(`/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return await response.json()

}

export {
    signin,
    signup
}

