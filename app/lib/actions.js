const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

export async function postApt(bookingData, token) {
    const res = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bookingData)
    })

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'Failed to book appointment');
    }

    const data = await res.json()
    console.log(data);
    return data

}

export async function updateUserApt(id, updatedData, token) {
    const res = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
    })

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'Failed to update appointment');
    }

    const data = await res.json()
    console.log(data);
    return data
}

export async function deleteAppointment(id, token) {
    const res = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'Failed to delete appointment');
    }

    const data = await res.json()
    console.log(data);
    return data
}