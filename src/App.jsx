import { Slider, Home  } from "./pages";
import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Venice, Warsaw } from './pages'

export const queryClient = new QueryClient();
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
    <BrowserRouter>
      {/* <QueryClientProvider client={queryClient}>
        {content.map(item => <Server item={item} />)}
      </QueryClientProvider> */}
      <Routes>
        <Route path='/' element={<Slider />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
