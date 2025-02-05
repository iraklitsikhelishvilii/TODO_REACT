import React from "react";

function Top_box({ day, time }) {
  return (
    <div className="top_box">
      <div>
        <p>{day}</p>
        <h2>{time}</h2>
      </div>
    </div>
  );
}

export default Top_box;
