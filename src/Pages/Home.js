import React, { useState, useEffect, useMemo } from "react";
import Cards from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";

const gender = "";
const species = "";
const status ="";

const Home = (props) => {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  

  const api = useMemo(
    () =>
     `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`,
    [pageNumber, search]
  );


  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((ress) => ress.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const {results} = fetchedData;

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

export default Home;
