// get all doctors
export async function getDoctors() {
    const res = await fetch(`http://localhost:5000/doctors`)
    const data = await res.json()
    return data
}


// get top-rated doctors
export async function getTopDoctors() {
    const res = await fetch(`http://localhost:5000/top-doctors`)
    const data = await res.json()
    return data
}


// get appoinment by id
export async function getAptById(id) {
    const res = await fetch(`http://localhost:5000/all-appointments/${id}`)
    const data = await res.json()
    return data
}