import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
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

const Home = () => {
  let [status] = useState("");
  let [search, setSearch] = useState("");
  let [pageNumber, setPageNumber] = useState(1);
  let [gender] = useState("");
  let [species] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((ress) => ress.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default App;
