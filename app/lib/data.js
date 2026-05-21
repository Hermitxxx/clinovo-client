// get all doctors
export async function getDoctors() {
    const res = await fetch(`${process.env.NEXT_SERVER}/doctors`)
    const data = await res.json()
    return data
}


// get top-rated doctors
export async function getTopDoctors() {
    const res = await fetch(`${process.env.NEXT_SERVER}/top-doctors`)
    const data = await res.json()
    return data
}


// get appoinment by id
export async function getAptById(id, authHeader) {
    const res = await fetch(`${process.env.NEXT_SERVER}/all-appointments/${id}`, authHeader)
    const data = await res.json()
    return data
}

// get booking by user id
export async function getBookingByUserId(id, authHeader) {
    const res = await fetch(`${process.env.NEXT_SERVER}/bookings/${id}`, authHeader)
    const data = await res.json()
    return data
}