import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Parent from './pages/Parent';


function App() {
  const userName = "taek";
  return (
    <Routes>
      <Route path="/" element={<Home name={userName} />} />
      <Route path="/parent" element={<Parent />} />
    </Routes>
  );
}

export default App;
