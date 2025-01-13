import axios from 'axios'

const BASE_URL = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'

export function getAllAttractions() {
    return axios
    .get(BASE_URL)
    .then(res => res.json())
}

export function getOneAttraction(id) {
    return axios
    .get(`${BASE_URL}/?id=${id}`)
    .then(res => res.json())
}

export function getCityAttractions() {
    return fetch(`${BASE_URL}/?city=Venice`)
    .then(res => res.json())
}