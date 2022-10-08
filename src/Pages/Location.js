import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Group from "../components/Group";

const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let { name, type, dimension,} = info;
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text">
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h5 className="text">
          Type: {type === "" ? "Unknown" : type}
        </h5>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
        <div className="col-3">
          <h4 className="text-center mb-4">Chose Location</h4>
          <Group setID={setID} name="Location" total={126}/>
        </div>
      </div>
    </div>
  );
};

export default Location;
