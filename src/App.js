import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../src/pages/login"; 
import Options from "../src/pages/options";
import Choice from "../src/pages/choice";





export default function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/options" element={<Options />} />
        <Route path="/choice" element={<Choice />} />
      </Routes>
    </Router>

  );
}

