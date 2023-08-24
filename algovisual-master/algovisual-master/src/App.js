import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Searching from "./screens/Searching";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sorting from "./screens/Sorting";
import Footer from "./components/footer";
import PortfolioLink from "./components/MoreWorks";
import Paths from "./screens/Paths";
function App() {
  return (
    <div className="min-h-[100vh] bg-background">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Searching />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/more" element={<PortfolioLink />} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
