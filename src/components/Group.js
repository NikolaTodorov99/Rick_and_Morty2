import React from "react";

const Group = ({ total, name, setID }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1" selected>Chose</option>

        {[...Array(total).keys()].map((x) => {
          return (
            <option value={x + 1}>
              {name} {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Group;
