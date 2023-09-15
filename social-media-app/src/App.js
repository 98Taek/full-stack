import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Parent from './pages/Parent';
import Counter from './pages/Counter';


function App() {
  const userName = "taek";
  return (
    <Routes>
      <Route path="/" element={<Home name={userName} />} />
      <Route path="/parent" element={<Parent />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
}

export default App;
