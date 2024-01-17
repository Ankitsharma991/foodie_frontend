import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import Footer from "./component/Footer/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Catalog from "./component/Catalog/Catalog.js";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-red-50">
        <div className="mb-10">
          <Navbar />
        </div>
        <div className="min-h-[95vh]">
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/catalog" Component={Catalog} />
          </Routes>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
