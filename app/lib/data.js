const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

// get all doctors
export async function getDoctors() {
    const res = await fetch(`${API_BASE_URL}/doctors`)
    const data = await res.json()
    return data
}


// get top-rated doctors
export async function getTopDoctors() {
    const res = await fetch(`${API_BASE_URL}/top-doctors`)
    const data = await res.json()
    return data
}


// get appoinment by id
export async function getAptById(id, authHeader) {
    const res = await fetch(`${API_BASE_URL}/all-appointments/${id}`, authHeader)
    const data = await res.json()
    return data
}

// get booking by user id
export async function getBookingByUserId(id, authHeader) {
    const res = await fetch(`${API_BASE_URL}/bookings/${id}`, authHeader)
    const data = await res.json()
    return data
}