import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import "./App.css"; // Ensure global styles are imported

function App() {
  return (
    <div className="app-root">
      <Router>
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;