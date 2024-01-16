import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import Footer from "./component/Footer/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <div className="mb-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" Component={Homepage} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
