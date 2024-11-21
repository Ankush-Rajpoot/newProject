import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
};

export default App;
