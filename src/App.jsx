import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
