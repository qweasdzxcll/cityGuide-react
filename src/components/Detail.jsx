import React, { useState, useEffect } from "react"

export default function Detail() {
      const [ content, setContent ] = useState([])
      useEffect(() => {
        fetch('https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc')
        .then(response => {
            if (!response.ok) {
                console.error('Ошибка запроса')
            }
            return response.json()
        })
        .then(response => {
            setContent(response)
        })
    }, [])
  return (
    <div>
      <h1>qwertiop</h1>
    </div>
  )
}
