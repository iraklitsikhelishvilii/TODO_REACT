import React from "react";

function List_box({
  task,
  toggleTaskCompletion,
  index,
  removeTask,
  trash_img,
  check_img,
}) {
  return (
    <div key={index} className="list_box ">
      <div className="task_date_box">
        <p className="task_p">{task.taskName}</p>
        <p className="date_p">{task.createdAt}</p>
      </div>
      <div className="trash_div">
        <div
          onClick={() => toggleTaskCompletion(index)}
          className={`tick_box ${task.isCompleted ? "clicked" : ""}`}
        >
          <img src={check_img} alt="" />
        </div>
        <img
          onClick={() => removeTask(index)}
          className="trash_img"
          src={trash_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default List_box;
