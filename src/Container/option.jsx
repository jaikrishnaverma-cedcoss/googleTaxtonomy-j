import React from "react";

function Optioner(props) {
  return (
    <>
      {props.arr.map((x, i) => (
        <option key={x + i} value={x}>
          {x}
        </option>
      ))}
    </>
  );
}

export default Optioner;
