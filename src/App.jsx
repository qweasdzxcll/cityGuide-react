import Server from "./components/Server";
import Detail from "./components/Detail";
import Slider from "./pages/Slider";
import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Routes, Route } from "react-router-dom";

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
    <>
      <QueryClientProvider client={queryClient}>
        <Slider />
        {/* {content.map(item => <Server item={item} />)} */}
      </QueryClientProvider>
    </>
    // <Router>
    //   <Routes>
    //     <Route path='/' element={content.map(item => <Server item={item} />)} />
    //     {/* <Route path={`http://localhost:3000/:id`} element={<Detail />}/> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
