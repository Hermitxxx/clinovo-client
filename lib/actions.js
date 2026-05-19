
export async function postApt(bookingData) {
    'use server'
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