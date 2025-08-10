const API_URL = "http://localhost:3005/api"

export async function offerCreate(data) {
    const  res = await fetch(`${API_URL}/offers/create`,{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
    const result = await res.json()
    return result
}

export async function getOffers() {
    const res = await fetch(`${API_URL}/offers/consultas`)
    const data = await res.json()
    return data
}