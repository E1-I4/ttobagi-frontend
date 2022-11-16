import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Album from "./pages/Album";
import Map from "./pages/Map";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<div>해당 주소는 없는 페이지입니다.</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
