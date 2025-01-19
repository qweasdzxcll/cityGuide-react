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
          <Route path='/' element={<Slider />} />
          <Route path='/home/:city' element={<Home />} />
          <Route path='/attractions/:city' element={<Attractions />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/all-attractions' element={<AllAttractions />} />
          <Route path='/one-attraction/:id' element={<OneAttraction />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
