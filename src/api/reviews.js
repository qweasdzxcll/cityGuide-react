/* eslint-disable */
const REVIEWS_URL = 'https://672c8d021600dda5a9f8e610.mockapi.io/reviews'

export function getReviews(title) {
    return fetch(`${REVIEWS_URL}/?title=${title}`)
    .then(res => {
        if (!res.ok) {
            throw new Error('ошибка запроса')
        }
        return res.json()
    })
}