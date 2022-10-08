import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Group from "../components/Group";

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container ">
      <div className="row mb-4">
        <h1 className="text">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
        <div className="col-3">
          <h4 className="text-center mb-4">Chose Episodes</h4>
          <Group setID={setID} name="Episodes" total={51}/>
        </div>
      </div>
    </div>
  );
};

export default Episodes;