import { redirect } from "next/navigation";

export async function postApt(bookingData) {
    const res = await fetch(`http://localhost:5000/bookings`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })

    const data = await res.json()
    console.log(data);
    return data

}

export async function updateUserApt(id, updatedData) {
    const res = await fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })

    const data = await res.json()
    console.log(data);
    if (data.modifiedCount > 0) {
        redirect('/dashboard')
    }
    return data
}