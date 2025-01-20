/* eslint-disable */
const BASE_URL = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'
const REVIEWS_URL = 'https://672c8d021600dda5a9f8e610.mockapi.io/reviews/'

export function getAllAttractions() {
    return fetch(BASE_URL)
    .then(res => {
        return res.json()
    })
}

export function getAttractionsPag(page, limit) {
    return fetch(`${BASE_URL}/?page=${page}&limit=${limit}`)
    .then(res => {
        return res.json()
    })
}

export function getOneAttraction(title) {
    return fetch(`${BASE_URL}/?title=${title}`)
    .then(res => {
        return res.json()
    })
}

export function getCityAttractions(city) {
    return fetch(`${BASE_URL}/?city=${city}`)
    .then(res => {
        return res.json()
    })
}

export function getAttractionsFilter(f) {
    return fetch(`${BASE_URL}/?filter=${f}`)
    .then(res => {
        return res.json()
    })
}

export function getAttractionsSort() {
    return fetch(`${BASE_URL}?sortBy=rating&order=desc`)
    .then(res => {
        return res.json()
    })
}
