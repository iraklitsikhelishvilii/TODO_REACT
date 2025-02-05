import React from "react";

function input({ value, setValue }) {
  return (
    <>
      {" "}
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Note"
      />
    </>
  );
}

export default input;
