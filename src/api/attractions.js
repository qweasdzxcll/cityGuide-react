const BASE_URL = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'

export function getAllAttractions() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

export function getAttractionsPag(page, limit) {
    return fetch(`${BASE_URL}/?page=${page}&limit=${limit}`)
    .then(res => res.json())
}

export function getOneAttraction(id) {
    return fetch(`${BASE_URL}/?id=${id}`)
    .then(res => res.json())
}

export function getCityAttractions(city) {
    return fetch(`${BASE_URL}/?city=${city}`)
    .then(res => res.json())
}