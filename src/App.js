import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {

  const [showNav, setShowNav] = useState(true);

  return (
    <Router>
    { showNav &&
      <div className="App">
        <Navigationbar />
      </div>
    }
      <Routes>
        <Route path="/" element={<Login funcNav={setShowNav}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
