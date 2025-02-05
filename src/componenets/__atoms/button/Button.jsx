import React from "react";

function Button({ createTask, plus_img }) {
  return (
    <button onClick={createTask}>
      <img src={plus_img} alt="" />
    </button>
  );
}

export default Button;
