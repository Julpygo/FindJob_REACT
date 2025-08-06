const API_URL = "http://localhost:3005/api/offers/Create"

export async function offerCreate() {
    const  res = await fetch(`${API_URL}`)
    const data = await res.json()
    return data
}