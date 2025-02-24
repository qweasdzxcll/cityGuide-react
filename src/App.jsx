/* eslint-disable */
import { Slider, Home, Attractions, Reviews, AllAttractions, OneAttraction } from "./pages";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../src/api/query-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path='/cityGuide-react/' element={<Slider />} />
          <Route path='/cityGuide-react/home/:city' element={<Home />} />
          <Route path='/cityGuide-react/attractions/:city' element={<Attractions />} />
          <Route path='/cityGuide-react/reviews' element={<Reviews />} />
          <Route path='/cityGuide-react/all-attractions' element={<AllAttractions />} />
          <Route path='/cityGuide-react/one-attraction/:title' element={<OneAttraction />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
