import React, { useState, useEffect } from "react";
import plus_img from "../../../assets/images/Vector.svg";
import tick_img from "../../../assets/images/akar-icons_circle.svg";
import trash_img from "../../../assets/images/akar-icons_trash-can.svg";
import check_img from "../../../assets/images/check.png";
import List_box from "../list_box/List_box";
import Top_box from "../../__atoms/top_box/Top_box";
import Button from "../../__atoms/button/Button";
import Add_tasks from "../../__atoms/Add_tasks/Add_tasks";
function Container() {
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const createTask = () => {
    if (value.trim() !== "") {
      const newTask = {
        taskName: value,
        createdAt: new Date().toLocaleString(),
        isCompleted: false,
      };
      setTask((prevTasks) => [...prevTasks, newTask]);
      setValue("");
    }
  };

  const removeTask = (index) => {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTask((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const day = dateTime.toLocaleDateString("en-US", { weekday: "short" });
  const time = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className="container">
      <Top_box day={day} time={time} />
      <div className="input_main_box">
        <div>
          <img src={tick_img} alt="" />
          <Add_tasks />
        </div>
        <Button createTask={createTask} plus_img={plus_img} />
      </div>
      <div className="list_container">
        {task.map((task, index) => (
          <List_box
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            index={index}
            removeTask={removeTask}
            trash_img={trash_img}
            check_img={check_img}
          />
        ))}
      </div>
    </div>
  );
}

export default Container;
