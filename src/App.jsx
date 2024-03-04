import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Transaction from "./pages/Transaction.jsx";
import Lead from "./pages/Lead.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="lead" element={<Lead />} />
          <Route path="transaction" element={<Transaction />} />
        
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>  
  );
};

export default App;
