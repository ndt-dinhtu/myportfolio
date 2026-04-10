import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
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
      </div>
    </Router>
  );
};

export default App;
