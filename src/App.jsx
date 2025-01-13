import { Slider, Home, Attractions } from "./pages";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../src/api/query-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch("https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc")
      .then((response) => {
        if (!response.ok) {
          console.error("Ошибка запроса");
        }
        return response.json();
      })
      .then((response) => {
        setContent(response);
      });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Slider />} />
            <Route path='/home' element={<Home />} />
            <Route path='/attractions' element={<Attractions />} />
          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
