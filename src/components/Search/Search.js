import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchTerm)    
    }, 1000)

    return () => clearTimeout(timer)
  }, [searchTerm])
//test
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-primary fs-5"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
