import React from "react";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import DetailScreen from "./components/DetailScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/detail" element={<DetailScreen />} />
    </Routes>
  );
}

export default App;
