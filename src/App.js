import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Menu from "./components/menu";
import HelpContent from "./components/Help";
import GamePage from "./components/GamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gamePage" element={<GamePage />} />
        <Route path="/help" element={<HelpContent />} />
        {/* Render HelpContent when navigating to /help */}
        <Route path="/" element={<Menu />} />
        {/* Render Menu on the main page */}
      </Routes>
    </Router>
  );
}

export default App;
