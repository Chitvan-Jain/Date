import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/secondpage" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
