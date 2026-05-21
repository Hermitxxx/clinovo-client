

export async function postApt(bookingData, token) {
    const res = await fetch(`${process.env.NEXT_SERVER}/bookings`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bookingData)
    })

    const data = await res.json()
    console.log(data);
    return data

}

export async function updateUserApt(id, updatedData, token) {
    const res = await fetch(`${process.env.NEXT_SERVER}/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
    })

    const data = await res.json()
    console.log(data);
    return data
}

export async function deleteAppointment(id, token) {
    const res = await fetch(`${process.env.NEXT_SERVER}/bookings/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })

    const data = await res.json()
    console.log(data);
    return data
}