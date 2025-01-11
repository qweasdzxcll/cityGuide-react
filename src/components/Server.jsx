import React, { useEffect, useState } from 'react'
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom"
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function Server({ item }) {

  const history = useNavigate();

  const handleUser = (id) => {
    history.push(`/user/${id}`); // Изменение URL
  };

  const [ url, setUrl ] = useState('')
  const setNewUrl = async (i) => {
    setUrl(`https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc/?id=${i}`)
  }
  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка запроса')
        }
        return response.json()
      })
      .then(response => {
        console.log(response[0])
      }
    )
  }, [url])

  return (
    <>
      <div onClick={() => handleUser(item.id)}>
          <div className="main__subtitle">
              <p>{item.title}</p>
          </div>
          <div className="main__img">
              <img src={item.img3} alt="img" />
          </div>
      </div>
    </>
  )
}