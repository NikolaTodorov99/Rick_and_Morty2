import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber((x) => x + 1);
  };

  let prev = () => {
    if(pageNumber === 1) return
    setPageNumber((x) => x - 1);
  };
  return (
    <div className="container d-flex justify-content-center my-5 gap-5">
      <button onClick={prev} className="btn btn-primary">
        Prev
      </button>
      <button onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
