import React from "react";

function Add_tasks({ value, setValue }) {
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

export default Add_tasks;
