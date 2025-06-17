import React from "react";
import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />}></Route>
          <Route path="/employees" element={<ListEmployee />}></Route>
          <Route path="/add-employee" element={<CreateEmployee />}></Route>
          <Route path="/edit-employee/:id" element={<CreateEmployee />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
