import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import Resources from "./views/Resources";
import RetirementCalculator from "./views/resources/RetirementCalculator";
import LoanCalculator from "./views/resources/LoanCalculator";
import Header from "./components/Header";
import Save from "./views/resources/Save";
import Earn from "./views/resources/Earn";
import Later from "./views/resources/Later";
import HowLong from "./views/resources/HowLong";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/retirement" element={<RetirementCalculator />} />
        <Route path="/resources/loans" element={<LoanCalculator />} />
        <Route path="/resources/save" element={<Save />} />
        <Route path="/resources/earn" element={<Earn />} />
        <Route path="/resources/later" element={<Later />} />
        <Route path="/resources/howlong" element={<HowLong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
